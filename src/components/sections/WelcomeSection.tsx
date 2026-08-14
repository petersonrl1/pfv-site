import type { IntroContent } from "../../types";

interface WelcomeSectionProps {
  content: IntroContent;
}

export function WelcomeSection({ content }: WelcomeSectionProps) {
  return (
    <section className="space-y-6">
      <p className="text-lg text-text-secondary">
        This app follows the SQ-6 training architecture described in CLAUDE.md: a typed content model, section-based rendering, and Tailwind-driven styling.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {content.highlights.map((highlight) => (
          <div key={highlight} className="rounded-3xl border border-border-default bg-bg-elevated p-6">
            <p className="font-semibold text-white">{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
