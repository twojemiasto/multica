"use client";

import { useState, useEffect } from "react";
import { ListTodo } from "lucide-react";
import type { Agent, AgentTask } from "@multica/core/types";
import { Skeleton } from "@multica/ui/components/ui/skeleton";
import { api } from "@multica/core/api";
import { useWorkspaceId } from "@multica/core/hooks";
import { useWorkspacePaths } from "@multica/core/paths";
import { issueListOptions } from "@multica/core/issues/queries";
import { useQuery } from "@tanstack/react-query";
import { AppLink } from "../../../navigation";
import { useT } from "../../../i18n";
import { taskStatusConfig } from "../../config";

export function TasksTab({ agent }: { agent: Agent }) {
  const t = useT();
  const statusLabels: Record<string, string> = {
    queued: t.agent.taskStatusQueued,
    dispatched: t.agent.taskStatusDispatched,
    running: t.agent.taskStatusRunning,
    completed: t.agent.taskStatusCompleted,
    failed: t.agent.taskStatusFailed,
    cancelled: t.agent.taskStatusCancelled,
  };
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [loading, setLoading] = useState(true);
  const wsId = useWorkspaceId();
  const paths = useWorkspacePaths();
  const { data: issues = [] } = useQuery(issueListOptions(wsId));

  useEffect(() => {
    setLoading(true);
    api
      .listAgentTasks(agent.id)
      .then(setTasks)
      .catch(() => setTasks([]))
      .finally(() => setLoading(false));
  }, [agent.id]);

  if (loading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border px-4 py-3">
            <Skeleton className="h-4 w-4 rounded shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-3 w-1/3" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    );
  }

  // Sort: active tasks (running > dispatched > queued) first, then completed/failed by date
  const activeStatuses = ["running", "dispatched", "queued"];
  const sortedTasks = [...tasks].sort((a, b) => {
    const aActive = activeStatuses.indexOf(a.status);
    const bActive = activeStatuses.indexOf(b.status);
    const aIsActive = aActive !== -1;
    const bIsActive = bActive !== -1;
    if (aIsActive && !bIsActive) return -1;
    if (!aIsActive && bIsActive) return 1;
    if (aIsActive && bIsActive) return aActive - bActive;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const issueMap = new Map(issues.map((i) => [i.id, i]));

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold">{t.agent.tasksTitle}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {t.agent.tasksHelp}
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
          <ListTodo className="h-8 w-8 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">{t.agent.noTasksInQueue}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t.agent.noTasksHelp}
          </p>
        </div>
      ) : (
        <div className="space-y-1.5">
          {sortedTasks.map((task) => {
            const config = taskStatusConfig[task.status] ?? taskStatusConfig.queued!;
            const Icon = config.icon;
            const issue = issueMap.get(task.issue_id);
            const isActive = task.status === "running" || task.status === "dispatched";
            const isRunning = task.status === "running";
            const rowClassName = `flex items-center gap-3 rounded-lg border px-4 py-3 transition-shadow hover:shadow-sm ${
              isRunning
                ? "border-success/40 bg-success/5"
                : task.status === "dispatched"
                  ? "border-info/40 bg-info/5"
                  : ""
            }`;

            const content = (
              <>
                <Icon
                  className={`h-4 w-4 shrink-0 ${config.color} ${
                    isRunning ? "animate-spin" : ""
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {issue && (
                      <span className="shrink-0 text-xs font-mono text-muted-foreground">
                        {issue.identifier}
                      </span>
                    )}
                    <span className={`text-sm truncate ${isActive ? "font-medium" : ""}`}>
                      {issue?.title ?? `Issue ${task.issue_id.slice(0, 8)}...`}
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {isRunning && task.started_at
                      ? `${t.agent.taskStarted} ${new Date(task.started_at).toLocaleString()}`
                      : task.status === "dispatched" && task.dispatched_at
                        ? `${t.agent.taskDispatched} ${new Date(task.dispatched_at).toLocaleString()}`
                        : task.status === "completed" && task.completed_at
                          ? `${t.agent.taskCompleted} ${new Date(task.completed_at).toLocaleString()}`
                          : task.status === "failed" && task.completed_at
                            ? `${t.agent.taskFailed} ${new Date(task.completed_at).toLocaleString()}`
                            : `${t.agent.taskQueued} ${new Date(task.created_at).toLocaleString()}`}
                  </div>
                </div>
                <span className={`shrink-0 text-xs font-medium ${config.color}`}>
                  {statusLabels[task.status] ?? task.status}
                </span>
              </>
            );

            return (
              <AppLink
                key={task.id}
                href={paths.issueDetail(task.issue_id)}
                className={`${rowClassName} text-foreground no-underline hover:no-underline`}
              >
                {content}
              </AppLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
