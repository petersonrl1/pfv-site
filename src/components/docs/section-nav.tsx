"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  slug: string;
  title: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
  activeSlug: string;
  basePath: string;
}

function SectionLinks({
  items,
  activeSlug,
  basePath,
  onNavigate,
}: SectionNavProps & { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col">
      {items.map((item, i) => {
        const active = item.slug === activeSlug;
        return (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            onClick={onNavigate}
            className={cn(
              "flex items-baseline gap-2.5 py-2.5 border-t border-divider text-sm no-underline",
              active ? "text-accent font-heading font-extrabold" : "text-text",
            )}
          >
            <span className="tabular-nums text-[11px] text-neutral-600 w-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarHeader({ compact }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "mb-6"}>
      <Link
        href="/av/audio"
        className="block text-xs tracking-[0.14em] uppercase text-neutral-600 mb-1.5 no-underline hover:text-accent"
      >
        Audio
      </Link>
      <h4 className="text-lg mb-0.5">Allen &amp; Heath SQ-6</h4>
      {!compact && <p className="text-xs text-neutral-600 m-0">Console reference</p>}
    </div>
  );
}

export function SectionNav(props: SectionNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block w-[300px] shrink-0 border-r-2 border-divider px-6 py-8">
        <SidebarHeader />
        <SectionLinks {...props} />
      </div>

      <div className="md:hidden border-b-2 border-divider px-5 py-3 flex items-center justify-between">
        <SidebarHeader compact />
        <button onClick={() => setOpen(true)} className="p-1.5 text-text" aria-label="Open section list">
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-text/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-bg px-6 py-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <SidebarHeader compact />
              <button onClick={() => setOpen(false)} className="p-1.5 text-text" aria-label="Close section list">
                <X size={20} />
              </button>
            </div>
            <SectionLinks {...props} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
