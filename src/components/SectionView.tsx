import type { Section } from "../types";
import { WelcomeSection } from "./sections/WelcomeSection";
import { ZonesSection } from "./sections/ZonesSection";
import { ChecklistSection } from "./sections/ChecklistSection";
import { GlossarySection } from "./sections/GlossarySection";
import { LayersSection } from "./sections/LayersSection";
import { StepsSection } from "./sections/StepsSection";
import { ProcessingSection } from "./sections/ProcessingSection";
import { FXSection } from "./sections/FXSection";
import { TroubleshootSection } from "./sections/TroubleshootSection";
import { TipsSection } from "./sections/TipsSection";

interface SectionViewProps {
  section: Section;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function SectionView({ section, index, total, onPrev, onNext }: SectionViewProps) {
  const hasPrevious = index > 0;
  const hasNext = index < total - 1;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div
        className="bg-gradient-to-r from-white/5 to-transparent px-6 py-8 sm:px-8"
        style={{ borderColor: section.color }}
      >
        <p className="text-sm text-text-muted">{section.icon} {section.title}</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">{section.title}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 sm:p-8">
        {section.content.type === "intro" && <WelcomeSection content={section.content} />}
        {section.content.type === "zones" && <ZonesSection content={section.content} />}
        {section.content.type === "layers" && <LayersSection content={section.content} />}
        {section.content.type === "checklist" && <ChecklistSection content={section.content} />}
        {section.content.type === "steps" && <StepsSection content={section.content} />}
        {section.content.type === "processing" && <ProcessingSection content={section.content} />}
        {section.content.type === "fx" && <FXSection content={section.content} />}
        {section.content.type === "troubleshoot" && <TroubleshootSection content={section.content} />}
        {section.content.type === "tips" && <TipsSection content={section.content} />}
        {section.content.type === "glossary" && <GlossarySection content={section.content} />}
      </div>

      <footer className="border-t border-border-default bg-bg-elevated px-6 py-4 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {hasPrevious && (
              <button
                type="button"
                onClick={onPrev}
                className="rounded-2xl border border-border-default bg-bg-base px-4 py-2 text-sm text-text-secondary hover:border-white/20 hover:text-white"
              >
                ← Previous
              </button>
            )}
          </div>
          <div className="flex gap-2">
            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                className="rounded-2xl border border-border-default bg-bg-base px-4 py-2 text-sm text-text-secondary hover:border-white/20 hover:text-white"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
