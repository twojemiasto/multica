"use client";

import { useState } from "react";
import { Plus, Zap, Play, Pause, AlertCircle, Newspaper, GitPullRequest, Bug, BarChart3, Shield, FileSearch } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { autopilotListOptions } from "@multica/core/autopilots/queries";
import { useCreateAutopilot, useCreateAutopilotTrigger } from "@multica/core/autopilots/mutations";
import { agentListOptions } from "@multica/core/workspace/queries";
import { useWorkspaceId } from "@multica/core/hooks";
import { useWorkspacePaths } from "@multica/core/paths";
import { useActorName } from "@multica/core/workspace/hooks";
import { AppLink } from "../../navigation";
import { ActorAvatar } from "../../common/actor-avatar";
import { PageHeader } from "../../layout/page-header";
import { useT } from "../../i18n";
import { Skeleton } from "@multica/ui/components/ui/skeleton";
import { Button } from "@multica/ui/components/ui/button";
import { cn } from "@multica/ui/lib/utils";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@multica/ui/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@multica/ui/components/ui/select";
import {
  TriggerConfigSection,
  getDefaultTriggerConfig,
  toCronExpression,
} from "./trigger-config";
import type { TriggerConfig } from "./trigger-config";
import type { Autopilot } from "@multica/core/types";
import type { TriggerFrequency } from "./trigger-config";

interface AutopilotTemplate {
  title: string;
  prompt: string;
  summary: string;
  icon: typeof Zap;
  frequency: TriggerFrequency;
  time: string;
}

function useTemplates(): AutopilotTemplate[] {
  const t = useT();
  return [
    {
      title: t.autopilot.templateDailyNewsTitle,
      summary: t.autopilot.templateDailyNewsSummary,
      prompt: t.autopilot.templateDailyNewsPrompt,
      icon: Newspaper,
      frequency: "daily",
      time: "09:00",
    },
    {
      title: t.autopilot.templatePrReviewTitle,
      summary: t.autopilot.templatePrReviewSummary,
      prompt: t.autopilot.templatePrReviewPrompt,
      icon: GitPullRequest,
      frequency: "weekdays",
      time: "10:00",
    },
    {
      title: t.autopilot.templateBugTriageTitle,
      summary: t.autopilot.templateBugTriageSummary,
      prompt: t.autopilot.templateBugTriagePrompt,
      icon: Bug,
      frequency: "weekdays",
      time: "09:00",
    },
    {
      title: t.autopilot.templateWeeklyReportTitle,
      summary: t.autopilot.templateWeeklyReportSummary,
      prompt: t.autopilot.templateWeeklyReportPrompt,
      icon: BarChart3,
      frequency: "weekly",
      time: "17:00",
    },
    {
      title: t.autopilot.templateDependencyTitle,
      summary: t.autopilot.templateDependencySummary,
      prompt: t.autopilot.templateDependencyPrompt,
      icon: Shield,
      frequency: "weekly",
      time: "08:00",
    },
    {
      title: t.autopilot.templateDocsTitle,
      summary: t.autopilot.templateDocsSummary,
      prompt: t.autopilot.templateDocsPrompt,
      icon: FileSearch,
      frequency: "weekly",
      time: "14:00",
    },
  ];
}

function useFormatRelativeDate(): (date: string) => string {
  const t = useT();
  return (date: string) => {
    const diff = Date.now() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 1) return t.autopilot.dateToday;
    if (days === 1) return t.autopilot.dateDayAgo;
    if (days < 30) return `${days}${t.autopilot.dateDaysAgo}`;
    const months = Math.floor(days / 30);
    return `${months}${t.autopilot.dateMonthsAgo}`;
  };
}

const STATUS_CONFIG: Record<string, { color: string; icon: typeof Zap }> = {
  active: { color: "text-emerald-500", icon: Play },
  paused: { color: "text-amber-500", icon: Pause },
  archived: { color: "text-muted-foreground", icon: AlertCircle },
};

function useStatusLabels(): Record<string, string> {
  const t = useT();
  return {
    active: t.autopilot.statusActive,
    paused: t.autopilot.statusPaused,
    archived: t.autopilot.statusArchived,
  };
}

function useExecutionModeLabels(): Record<string, string> {
  const t = useT();
  return {
    create_issue: t.autopilot.executionModeCreateIssue,
    run_only: t.autopilot.executionModeRunOnly,
  };
}

function AutopilotRow({ autopilot }: { autopilot: Autopilot }) {
  const { getActorName } = useActorName();
  const wsPaths = useWorkspacePaths();
  const statusCfg = (STATUS_CONFIG[autopilot.status] ?? STATUS_CONFIG["active"])!;
  const StatusIcon = statusCfg.icon;
  const statusLabels = useStatusLabels();
  const executionLabels = useExecutionModeLabels();
  const formatRelativeDate = useFormatRelativeDate();

  return (
    <div className="group/row flex h-11 items-center gap-2 px-5 text-sm transition-colors hover:bg-accent/40">
      <AppLink
        href={wsPaths.autopilotDetail(autopilot.id)}
        className="flex min-w-0 flex-1 items-center gap-2"
      >
        <Zap className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="min-w-0 flex-1 truncate font-medium">{autopilot.title}</span>
      </AppLink>

      {/* Agent */}
      <span className="flex w-32 items-center gap-1.5 shrink-0">
        <ActorAvatar actorType="agent" actorId={autopilot.assignee_id} size={18} />
        <span className="truncate text-xs text-muted-foreground">
          {getActorName("agent", autopilot.assignee_id)}
        </span>
      </span>

      {/* Mode */}
      <span className="w-24 shrink-0 text-center text-xs text-muted-foreground">
        {executionLabels[autopilot.execution_mode] ?? autopilot.execution_mode}
      </span>

      {/* Status */}
      <span className={cn("flex w-20 items-center justify-center gap-1 shrink-0 text-xs", statusCfg.color)}>
        <StatusIcon className="h-3 w-3" />
        {statusLabels[autopilot.status] ?? autopilot.status}
      </span>

      {/* Last run */}
      <span className="w-20 shrink-0 text-right text-xs text-muted-foreground tabular-nums">
        {autopilot.last_run_at ? formatRelativeDate(autopilot.last_run_at) : "--"}
      </span>
    </div>
  );
}

function CreateAutopilotDialog({
  open,
  onOpenChange,
  template,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  template?: AutopilotTemplate | null;
}) {
  const t = useT();
  const wsId = useWorkspaceId();
  const { data: agents = [] } = useQuery(agentListOptions(wsId));
  const createAutopilot = useCreateAutopilot();
  const createTrigger = useCreateAutopilotTrigger();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [triggerConfig, setTriggerConfig] = useState<TriggerConfig>(getDefaultTriggerConfig);
  const [submitting, setSubmitting] = useState(false);

  // Apply template when it changes
  const [appliedTemplate, setAppliedTemplate] = useState<AutopilotTemplate | null | undefined>(null);
  if (template !== appliedTemplate && open) {
    setAppliedTemplate(template);
    if (template) {
      setTitle(template.title);
      setDescription(template.prompt);
      setTriggerConfig({
        ...getDefaultTriggerConfig(),
        frequency: template.frequency,
        time: template.time,
      });
    }
  }

  const activeAgents = agents.filter((a) => !a.archived_at);

  const handleSubmit = async () => {
    if (!title.trim() || !assigneeId || submitting) return;
    setSubmitting(true);
    try {
      const autopilot = await createAutopilot.mutateAsync({
        title: title.trim(),
        description: description.trim() || undefined,
        assignee_id: assigneeId,
        execution_mode: "create_issue",
      });

      // Attach schedule trigger
      try {
        await createTrigger.mutateAsync({
          autopilotId: autopilot.id,
          kind: "schedule",
          cron_expression: toCronExpression(triggerConfig),
          timezone: triggerConfig.timezone,
        });
      } catch {
        toast.error(t.autopilot.autopilotCreatedButTriggerFailed);
      }

      onOpenChange(false);
      setTitle("");
      setDescription("");
      setAssigneeId("");
      setTriggerConfig(getDefaultTriggerConfig());
      toast.success(t.autopilot.created);
    } catch {
      toast.error(t.autopilot.createFailed);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogTitle>{t.autopilot.createDialogTitle}</DialogTitle>
        <div className="space-y-5 pt-2">
          {/* Name */}
          <div>
            <label className="text-xs font-medium text-muted-foreground">{t.autopilot.name}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.autopilot.nameExamplePlaceholder}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
              autoFocus
            />
          </div>

          {/* Prompt */}
          <div>
            <label className="text-xs font-medium text-muted-foreground">{t.autopilot.prompt}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.autopilot.promptPlaceholderDetailed}
              rows={6}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring resize-y"
            />
          </div>

          {/* Agent */}
          <div>
            <label className="text-xs font-medium text-muted-foreground">{t.autopilot.agentLabel}</label>
            <Select value={assigneeId} onValueChange={(v) => v && setAssigneeId(v)}>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue>
                  {(value: string | null) => {
                    if (!value) return t.autopilot.selectAgentPlaceholder;
                    const agent = activeAgents.find((a) => a.id === value);
                    return agent?.name ?? t.autopilot.unknownAgent;
                  }}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {activeAgents.map((a) => (
                  <SelectItem key={a.id} value={a.id}>
                    {a.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Schedule */}
          <div>
            <label className="text-xs font-medium text-muted-foreground">{t.autopilot.scheduleLabel}</label>
            <div className="mt-2">
              <TriggerConfigSection config={triggerConfig} onChange={setTriggerConfig} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-1">
            <Button size="sm" variant="outline" onClick={() => onOpenChange(false)}>
              {t.common.cancel}
            </Button>
            <Button size="sm" onClick={handleSubmit} disabled={!title.trim() || !assigneeId || submitting}>
              {submitting ? t.autopilot.creating : t.common.create}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AutopilotsPage() {
  const t = useT();
  const templates = useTemplates();
  const wsId = useWorkspaceId();
  const { data: autopilots = [], isLoading } = useQuery(autopilotListOptions(wsId));
  const [createOpen, setCreateOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<AutopilotTemplate | null>(null);

  const openCreate = (template?: AutopilotTemplate) => {
    setSelectedTemplate(template ?? null);
    setCreateOpen(true);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <PageHeader className="justify-between px-5">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-muted-foreground" />
          <h1 className="text-sm font-medium">{t.autopilot.title}</h1>
          {!isLoading && autopilots.length > 0 && (
            <span className="text-xs text-muted-foreground tabular-nums">{autopilots.length}</span>
          )}
        </div>
        <Button size="sm" variant="outline" onClick={() => openCreate()}>
          <Plus className="h-3.5 w-3.5 mr-1" />
          {t.autopilot.newAutopilotBtn}
        </Button>
      </PageHeader>

      {/* Table */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <>
            <div className="sticky top-0 z-[1] flex h-8 items-center gap-2 border-b bg-muted/30 px-5">
              <span className="shrink-0 w-4" />
              <Skeleton className="h-3 w-12 flex-1 max-w-[48px]" />
              <Skeleton className="h-3 w-12 shrink-0" />
              <Skeleton className="h-3 w-10 shrink-0" />
              <Skeleton className="h-3 w-10 shrink-0" />
              <Skeleton className="h-3 w-12 shrink-0" />
            </div>
            <div className="p-5 pt-1 space-y-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-11 w-full" />
              ))}
            </div>
          </>
        ) : autopilots.length === 0 ? (
          <div className="flex flex-col items-center py-16 px-5">
            <Zap className="h-10 w-10 mb-3 text-muted-foreground opacity-30" />
            <p className="text-sm text-muted-foreground">{t.autopilot.noAutopilots}</p>
            <p className="text-xs text-muted-foreground mt-1 mb-6">
              {t.autopilot.noAutopilotsHelp}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-3xl">
              {templates.map((tmpl) => {
                const Icon = tmpl.icon;
                return (
                  <button
                    key={tmpl.title}
                    type="button"
                    className="flex items-start gap-3 rounded-lg border p-3 text-left transition-colors hover:bg-accent/40"
                    onClick={() => openCreate(tmpl)}
                  >
                    <Icon className="h-5 w-5 shrink-0 text-muted-foreground mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{tmpl.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{tmpl.summary}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <Button size="sm" variant="outline" className="mt-4" onClick={() => openCreate()}>
              <Plus className="h-3.5 w-3.5 mr-1" />
              {t.autopilot.startFromScratch}
            </Button>
          </div>
        ) : (
          <>
            {/* Column headers */}
            <div className="sticky top-0 z-[1] flex h-8 items-center gap-2 border-b bg-muted/30 px-5 text-xs font-medium text-muted-foreground">
              <span className="shrink-0 w-4" />
              <span className="min-w-0 flex-1">{t.autopilot.columnName}</span>
              <span className="w-32 shrink-0">{t.autopilot.columnAgent}</span>
              <span className="w-24 text-center shrink-0">{t.autopilot.columnMode}</span>
              <span className="w-20 text-center shrink-0">{t.autopilot.columnStatus}</span>
              <span className="w-20 text-right shrink-0">{t.autopilot.columnLastRun}</span>
            </div>
            {autopilots.map((autopilot) => (
              <AutopilotRow key={autopilot.id} autopilot={autopilot} />
            ))}
          </>
        )}
      </div>

      <CreateAutopilotDialog open={createOpen} onOpenChange={setCreateOpen} template={selectedTemplate} />
    </div>
  );
}
