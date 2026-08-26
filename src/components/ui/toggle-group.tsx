"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ToggleGroupOption<T extends string> {
  value: T;
  label: ReactNode;
}

interface ToggleGroupProps<T extends string> {
  name: string;
  options: ToggleGroupOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  "aria-label"?: string;
}

export function ToggleGroup<T extends string>({
  name,
  options,
  value,
  onChange,
  className,
  ...aria
}: ToggleGroupProps<T>) {
  return (
    <div className={cn("inline-flex border border-divider", className)} {...aria}>
      {options.map((opt, i) => (
        <label
          key={opt.value}
          className={cn(
            "flex items-center px-3 py-1.5 text-[13px] cursor-pointer transition-colors",
            i > 0 && "border-l border-divider",
            value === opt.value
              ? "bg-accent text-bg font-heading font-extrabold"
              : "text-text hover:bg-text/[0.07]",
          )}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
