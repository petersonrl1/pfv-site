import type { Section } from "../types";
import { cn } from "../lib/utils";

interface MobileNavProps {
  sections: Section[];
  activeId: string;
  open: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function MobileNav({ sections, activeId, open, onClose, onSelect }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 overflow-hidden bg-black/40 backdrop-blur-sm transition-opacity duration-300 sm:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="absolute left-0 top-0 h-full w-80 bg-bg-surface p-5 shadow-soft">
        <div className="flex items-center justify-between gap-4 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-text-muted">Navigation</p>
            <h2 className="text-xl font-semibold">SQ-6 Guide</h2>
          </div>
          <button
            type="button"
            className="rounded-2xl border border-border-default px-4 py-2 text-sm text-text-secondary hover:border-white/20 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className="space-y-2">
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
                    ? "bg-white/10 text-white"
                    : "text-text-secondary hover:bg-white/5 hover:text-white",
                )}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-lg">
                  {section.icon}
                </span>
                <span>{section.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
