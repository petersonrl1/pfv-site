import type { ZonesContent } from "../../types";

interface ZonesSectionProps {
  content: ZonesContent;
}

export function ZonesSection({ content }: ZonesSectionProps) {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {content.zones.map((zone) => (
          <article key={zone.name} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
            <h3 className="text-xl font-semibold text-white">{zone.name}</h3>
            <p className="mt-3 text-text-secondary">{zone.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
