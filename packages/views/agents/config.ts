import type { AgentStatus } from "@multica/core/types";
import {
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  Play,
} from "lucide-react";

export const statusConfig: Record<AgentStatus, { color: string; dot: string }> = {
  idle: { color: "text-muted-foreground", dot: "bg-muted-foreground" },
  working: { color: "text-success", dot: "bg-success" },
  blocked: { color: "text-warning", dot: "bg-warning" },
  error: { color: "text-destructive", dot: "bg-destructive" },
  offline: { color: "text-muted-foreground/50", dot: "bg-muted-foreground/40" },
};

export const taskStatusConfig: Record<string, { icon: typeof CheckCircle2; color: string }> = {
  queued: { icon: Clock, color: "text-muted-foreground" },
  dispatched: { icon: Play, color: "text-info" },
  running: { icon: Loader2, color: "text-success" },
  completed: { icon: CheckCircle2, color: "text-success" },
  failed: { icon: XCircle, color: "text-destructive" },
  cancelled: { icon: XCircle, color: "text-muted-foreground" },
};
