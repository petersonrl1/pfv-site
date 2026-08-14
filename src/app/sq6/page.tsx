"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { sections } from "@/data/sections";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { SectionView } from "@/components/SectionView";

export default function SQ6Page() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const activeSection = sections[activeIndex];

  const goTo = (id: string) => setActiveId(id);
  const goPrev = () => {
    if (activeIndex > 0) goTo(sections[activeIndex - 1].id);
  };
  const goNext = () => {
    if (activeIndex < sections.length - 1) goTo(sections[activeIndex + 1].id);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg-base text-text-primary">
      <header className="shrink-0 flex items-center justify-between px-5 py-3 border-b border-border-subtle bg-bg-surface glass z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileNavOpen(true)}
            className="md:hidden rounded-md p-1.5 text-text-muted hover:bg-bg-elevated hover:text-text-primary transition-colors"
          >
            <Menu size={20} />
          </button>
          <div>
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none">
              Volunteer Training Guide
            </p>
            <p className="font-display font-bold text-lg leading-tight text-gradient-amber">
              Allen & Heath SQ-6
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          {sections.map((s) => (
            <div
              key={s.id}
              className="h-1.5 w-1.5 rounded-full transition-all cursor-pointer"
              style={{
                background:
                  s.id === activeId ? s.color : "rgba(255,255,255,0.12)",
                transform: s.id === activeId ? "scale(1.4)" : "scale(1)",
              }}
              onClick={() => goTo(s.id)}
            />
          ))}
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        <Sidebar sections={sections} activeId={activeId} onSelect={goTo} />
        <main className="flex flex-1 min-h-0 min-w-0">
          <SectionView
            key={activeId}
            section={activeSection}
            index={activeIndex}
            total={sections.length}
            onPrev={goPrev}
            onNext={goNext}
          />
        </main>
      </div>

      <MobileNav
        sections={sections}
        activeId={activeId}
        open={mobileNavOpen}
        onSelect={goTo}
        onClose={() => setMobileNavOpen(false)}
      />
    </div>
  );
}
