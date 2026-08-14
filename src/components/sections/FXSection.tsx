import type { FXContent } from "../../types";

interface FXSectionProps {
  content: FXContent;
}

export function FXSection({ content }: FXSectionProps) {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {content.fxTypes.map((fx) => (
          <div key={fx.name} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
            <h3 className="text-xl font-semibold text-white">{fx.name}</h3>
            <p className="mt-3 text-text-secondary">{fx.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
