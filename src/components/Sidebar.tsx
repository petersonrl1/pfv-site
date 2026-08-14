import type { Section } from "../types";
import { cn } from "../lib/utils";

interface SidebarProps {
  sections: Section[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function Sidebar({ sections, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="hidden w-72 shrink-0 flex-col gap-6 border-r border-border-default bg-bg-base p-6 lg:flex">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-text-muted">Sections</p>
        <h2 className="text-2xl font-semibold">SQ-6 Reference</h2>
      </div>

      <nav className="space-y-3">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left transition",
                isActive
                  ? "bg-white/10 text-white shadow-soft"
                  : "text-text-secondary hover:bg-white/5 hover:text-white",
              )}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-lg">
                {section.icon}
              </span>
              <div>
                <p className="font-semibold">{section.title}</p>
                <p className="text-sm text-text-muted">{section.id}</p>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
