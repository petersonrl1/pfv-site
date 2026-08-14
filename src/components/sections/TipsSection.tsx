import type { TipsContent } from "../../types";

interface TipsSectionProps {
  content: TipsContent;
}

export function TipsSection({ content }: TipsSectionProps) {
  return (
    <section className="space-y-6">
      {content.categories.map((category) => (
        <div key={category.title} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          <ul className="mt-4 space-y-2 text-text-secondary">
            {category.notes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
