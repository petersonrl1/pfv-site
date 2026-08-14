import type { GlossaryContent } from "../../types";

interface GlossarySectionProps {
  content: GlossaryContent;
}

export function GlossarySection({ content }: GlossarySectionProps) {
  return (
    <section className="space-y-4">
      {content.terms.map((term) => (
        <div key={term.term} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
          <p className="text-lg font-semibold text-white">{term.term}</p>
          <p className="mt-2 text-text-secondary">{term.definition}</p>
        </div>
      ))}
    </section>
  );
}
