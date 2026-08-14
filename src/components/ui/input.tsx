import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return <input className={cn("rounded-2xl border border-border-default bg-bg-base px-4 py-3 text-sm text-text-primary outline-none transition focus:border-white/40", className)} {...props} />;
}
