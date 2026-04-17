"use client";

import { useActorName } from "@multica/core/workspace/hooks";
import { StatusIcon, PriorityIcon } from "../../issues/components";
import { useStatusLabel, usePriorityLabel, useT } from "../../i18n";
import type { InboxItem, InboxItemType, IssueStatus, IssuePriority } from "@multica/core/types";

/**
 * Returns a localised label for an `InboxItemType`.
 * Falls back to the raw type string for unknown/new values so the UI never
 * shows an empty label if the backend ships a new type ahead of the client.
 */
export function useInboxTypeLabel() {
  const t = useT();
  const map: Record<InboxItemType, string> = {
    issue_assigned: t.inboxItems.issueAssigned,
    unassigned: t.inboxItems.unassigned,
    assignee_changed: t.inboxItems.assigneeChanged,
    status_changed: t.inboxItems.statusChanged,
    priority_changed: t.inboxItems.priorityChanged,
    due_date_changed: t.inboxItems.dueDateChanged,
    new_comment: t.inboxItems.newComment,
    mentioned: t.inboxItems.mentioned,
    review_requested: t.inboxItems.reviewRequested,
    task_completed: t.inboxItems.taskCompleted,
    task_failed: t.inboxItems.taskFailed,
    agent_blocked: t.inboxItems.agentBlocked,
    agent_completed: t.inboxItems.agentCompleted,
    reaction_added: t.inboxItems.reactionAdded,
  };
  return (type: InboxItemType): string => map[type] ?? String(type);
}

function shortDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function InboxDetailLabel({ item }: { item: InboxItem }) {
  const { getActorName } = useActorName();
  const statusLabel = useStatusLabel();
  const priorityLabel = usePriorityLabel();
  const typeLabel = useInboxTypeLabel();
  const t = useT();
  const details = item.details ?? {};

  switch (item.type) {
    case "status_changed": {
      if (!details.to) return <span>{typeLabel(item.type)}</span>;
      const label = statusLabel(details.to as IssueStatus) ?? details.to;
      return (
        <span className="inline-flex items-center gap-1">
          {t.inboxItems.setStatusTo}
          <StatusIcon status={details.to as IssueStatus} className="h-3 w-3" />
          {label}
        </span>
      );
    }
    case "priority_changed": {
      if (!details.to) return <span>{typeLabel(item.type)}</span>;
      const label = priorityLabel(details.to as IssuePriority) ?? details.to;
      return (
        <span className="inline-flex items-center gap-1">
          {t.inboxItems.setPriorityTo}
          <PriorityIcon priority={details.to as IssuePriority} className="h-3 w-3" />
          {label}
        </span>
      );
    }
    case "issue_assigned": {
      if (details.new_assignee_id) {
        return <span>{t.inboxItems.assignedTo.replace("{name}", getActorName(details.new_assignee_type ?? "member", details.new_assignee_id))}</span>;
      }
      return <span>{typeLabel(item.type)}</span>;
    }
    case "unassigned":
      return <span>{t.inboxItems.removedAssignee}</span>;
    case "assignee_changed": {
      if (details.new_assignee_id) {
        return <span>{t.inboxItems.assignedTo.replace("{name}", getActorName(details.new_assignee_type ?? "member", details.new_assignee_id))}</span>;
      }
      return <span>{typeLabel(item.type)}</span>;
    }
    case "due_date_changed": {
      if (details.to) return <span>{t.inboxItems.setDueDateTo.replace("{date}", shortDate(details.to))}</span>;
      return <span>{t.inboxItems.removedDueDate}</span>;
    }
    case "new_comment": {
      if (item.body) return <span>{item.body}</span>;
      return <span>{typeLabel(item.type)}</span>;
    }
    case "reaction_added": {
      const emoji = details.emoji;
      if (emoji) return <span>{t.inboxItems.reactedToComment.replace("{emoji}", emoji)}</span>;
      return <span>{typeLabel(item.type)}</span>;
    }
    default:
      return <span>{typeLabel(item.type)}</span>;
  }
}
