"use client";

import type {
  IssuePriority,
  IssueStatus,
  ProjectPriority,
  ProjectStatus,
} from "@multica/core/types";
import { useT } from "./context";

export function useStatusLabel(): (status: IssueStatus) => string {
  const t = useT();
  return (status) => {
    switch (status) {
      case "backlog": return t.status.backlog;
      case "todo": return t.status.todo;
      case "in_progress": return t.status.inProgress;
      case "in_review": return t.status.inReview;
      case "done": return t.status.done;
      case "blocked": return t.status.blocked;
      case "cancelled": return t.status.cancelled;
    }
  };
}

export function usePriorityLabel(): (priority: IssuePriority) => string {
  const t = useT();
  return (priority) => {
    switch (priority) {
      case "urgent": return t.priority.urgent;
      case "high": return t.priority.high;
      case "medium": return t.priority.medium;
      case "low": return t.priority.low;
      case "none": return t.priority.noPriority;
    }
  };
}

export function useProjectStatusLabel(): (status: ProjectStatus) => string {
  const t = useT();
  return (status) => {
    switch (status) {
      case "planned": return t.projectStatus.planned;
      case "in_progress": return t.projectStatus.inProgress;
      case "paused": return t.projectStatus.paused;
      case "completed": return t.projectStatus.completed;
      case "cancelled": return t.projectStatus.cancelled;
    }
  };
}

export function useProjectPriorityLabel(): (priority: ProjectPriority) => string {
  const t = useT();
  return (priority) => {
    switch (priority) {
      case "urgent": return t.priority.urgent;
      case "high": return t.priority.high;
      case "medium": return t.priority.medium;
      case "low": return t.priority.low;
      case "none": return t.priority.noPriority;
    }
  };
}
