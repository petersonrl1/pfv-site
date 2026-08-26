import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full min-h-9 px-2.5 py-1.5 text-sm text-text bg-surface border border-divider outline-none transition-colors",
        "hover:border-text/45 focus-visible:border-accent",
        className,
      )}
      {...props}
    />
  );
}
