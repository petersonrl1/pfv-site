import type { TroubleshootContent } from "../../types";

interface TroubleshootSectionProps {
  content: TroubleshootContent;
}

export function TroubleshootSection({ content }: TroubleshootSectionProps) {
  return (
    <section className="space-y-4">
      {content.problems.map((problem) => (
        <div key={problem.question} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
          <h3 className="text-xl font-semibold text-white">{problem.question}</h3>
          <p className="mt-3 text-text-secondary">{problem.answer}</p>
        </div>
      ))}
    </section>
  );
}
