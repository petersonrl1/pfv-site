import type { ProcessingContent } from "../../types";

interface ProcessingSectionProps {
  content: ProcessingContent;
}

export function ProcessingSection({ content }: ProcessingSectionProps) {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {content.chain.map((item) => (
          <article key={item.name} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
            <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-3 text-text-secondary">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
