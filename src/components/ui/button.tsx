import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center gap-1.5 font-heading font-extrabold text-sm leading-tight rounded-btn border border-transparent px-4 py-2 transition-colors disabled:opacity-45 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-accent-700 text-white hover:bg-accent-800 active:bg-accent-900",
        secondary: "border-divider text-text hover:bg-text/[0.07] active:bg-text/[0.14]",
        ghost: "text-accent px-1 hover:bg-accent/[0.10] active:bg-accent/[0.18]",
      },
      block: {
        true: "w-full justify-start text-left",
        false: "",
      },
    },
    defaultVariants: { variant: "primary", block: false },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, block, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, block }), className)} {...props} />
  ),
);
Button.displayName = "Button";
