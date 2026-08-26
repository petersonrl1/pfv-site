import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DomainCellLink {
  label: string;
  href?: string;
}

export interface DomainCellProps {
  kicker: string;
  title: string;
  description: string;
  icon?: ReactNode;
  links?: DomainCellLink[];
  cta?: { label: string; href: string; variant?: "primary" | "secondary" };
  muted?: boolean;
  className?: string;
}

export function DomainCell({
  kicker,
  title,
  description,
  icon,
  links,
  cta,
  muted,
  className,
}: DomainCellProps) {
  return (
    <div className={cn("py-9", className)}>
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <p
        className={cn(
          "text-[11px] tracking-[0.12em] uppercase mb-3.5",
          muted ? "text-neutral-600" : "text-accent-700",
        )}
      >
        {kicker}
      </p>
      <h3 className={cn("text-[26px] mb-2.5", muted && "text-neutral-600")}>{title}</h3>
      <p className="text-sm text-neutral-800 mb-5">{description}</p>
      {links && links.length > 0 && (
        <div className="flex flex-col mb-5">
          {links.map((link, i) => {
            const rowClass = cn(
              "py-2.5 text-sm border-t border-divider no-underline",
              i === links.length - 1 && "border-b",
              muted ? "text-neutral-500" : "text-text",
            );
            return link.href ? (
              <Link key={link.label} href={link.href} className={rowClass}>
                {link.label}
              </Link>
            ) : (
              <span key={link.label} className={rowClass}>
                {link.label}
              </span>
            );
          })}
        </div>
      )}
      {cta &&
        (muted ? (
          <span className={cn(buttonVariants({ variant: "secondary" }), "opacity-45 cursor-not-allowed")}>
            {cta.label}
          </span>
        ) : (
          <Link href={cta.href} className={buttonVariants({ variant: cta.variant ?? "primary" })}>
            {cta.label}
          </Link>
        ))}
    </div>
  );
}
