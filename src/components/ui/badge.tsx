import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center text-[11px] tracking-wide px-2.5 py-0.5", {
  variants: {
    variant: {
      neutral: "bg-neutral-100 text-neutral-800",
      accent: "bg-accent-100 text-accent-800",
      outline: "border border-accent text-accent",
    },
  },
  defaultVariants: { variant: "neutral" },
});

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, variant, children }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}
