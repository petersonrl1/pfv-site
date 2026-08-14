import type { LayersContent } from "../../types";

interface LayersSectionProps {
  content: LayersContent;
}

export function LayersSection({ content }: LayersSectionProps) {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {content.layers.map((layer) => (
          <article key={layer.name} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
            <h3 className="text-xl font-semibold text-white">{layer.name}</h3>
            <p className="mt-3 text-text-secondary">{layer.summary}</p>
          </article>
        ))}
      </div>
      <div className="rounded-3xl border border-border-default bg-bg-elevated p-6">
        <h3 className="text-xl font-semibold text-white">Tips</h3>
        <ul className="mt-4 space-y-3 text-text-secondary">
          {content.tips.map((tip) => (
            <li key={tip}>• {tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
