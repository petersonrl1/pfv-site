import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition",
          variant === "default"
            ? "bg-accent-amber text-black hover:bg-amber-400"
            : "border border-border-default bg-bg-base text-text-secondary hover:border-white/20 hover:text-white",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
