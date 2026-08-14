import type { ChecklistContent } from "../../types";

interface ChecklistSectionProps {
  content: ChecklistContent;
}

export function ChecklistSection({ content }: ChecklistSectionProps) {
  return (
    <section className="space-y-4">
      {content.checklists.map((item) => (
        <div key={item.title} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
          <p className="text-lg font-semibold text-white">{item.title}</p>
          <p className="mt-2 text-text-secondary">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
