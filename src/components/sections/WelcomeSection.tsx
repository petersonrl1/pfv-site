import Link from "next/link";
import type { IntroContent } from "../../types";

interface WelcomeSectionProps {
  content: IntroContent;
}

export function WelcomeSection({ content }: WelcomeSectionProps) {
  return (
    <section className="space-y-6">
      <p className="text-lg text-text-secondary">
        This app follows the SQ-6 training architecture described in Allen &
        Heath&apos;s documentation found{" "}
        <Link
          className="font-bold"
          href={"https://www.allen-heath.com/hardware/sq/sq-6/resources/"}
        >
          here
        </Link>
        .
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {content.highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-3xl border border-border-default bg-bg-elevated p-6"
          >
            <p className="font-semibold text-white">{highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
