import type { StepsContent } from "../../types";

interface StepsSectionProps {
  content: StepsContent;
}

export function StepsSection({ content }: StepsSectionProps) {
  return (
    <section className="space-y-4">
      <ol className="space-y-4">
        {content.steps.map((step, index) => (
          <li key={step.title} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
            <div className="flex items-center gap-3 text-amber-200">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-semibold">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            </div>
            <p className="mt-3 text-text-secondary">{step.content}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
