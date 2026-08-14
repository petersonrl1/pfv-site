import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span className={cn("inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary", className)}>
      {children}
    </span>
  );
}
