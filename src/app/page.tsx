import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Providence Fairview AV Hub",
};

const resources = [
  {
    href: "/sq6",
    title: "SQ-6 Mixer",
    description:
      "Training guide for the Allen & Heath SQ-6 digital mixing console.",
    icon: "🎚️",
    status: "available",
  },
  {
    href: "/slides",
    title: "Slides Operator",
    description:
      "ProPresenter setup, countdown timer, and shutdown procedures.",
    icon: "🖥️",
    status: "coming-soon",
  },
  {
    href: "/livestream",
    title: "Livestream Operator",
    description: "Boxcast encoder, stream monitoring, and troubleshooting.",
    icon: "📡",
    status: "coming-soon",
  },
  {
    href: "/sops",
    title: "SOPs",
    description: "Printable standard operating procedures for all AV roles.",
    icon: "📋",
    status: "coming-soon",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">
          Providence Fairview Church
        </p>
        <h1 className="font-display font-bold text-4xl text-gradient-amber mb-3">
          AV Resource Hub
        </h1>
        <p className="text-text-secondary leading-relaxed mb-12">
          Training guides and reference materials for volunteer AV operators.
          Everything you need to run Sunday morning with confidence.
        </p>

        <div className="grid gap-3">
          {resources.map((r) =>
            r.status === "available" ? (
              <Link
                key={r.href}
                href={r.href}
                className="flex items-start gap-4 rounded-xl border border-border-default bg-bg-surface p-5 hover:border-accent-amber/40 hover:bg-bg-elevated transition-colors group"
              >
                <span className="text-2xl">{r.icon}</span>
                <div>
                  <p className="font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                    {r.title}
                  </p>
                  <p className="text-sm text-text-muted mt-0.5">
                    {r.description}
                  </p>
                </div>
              </Link>
            ) : (
              <div
                key={r.href}
                className="flex items-start gap-4 rounded-xl border border-border-subtle bg-bg-surface/50 p-5 opacity-50 cursor-not-allowed"
              >
                <span className="text-2xl">{r.icon}</span>
                <div>
                  <p className="font-semibold text-text-muted flex items-center gap-2">
                    {r.title}
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-border-default rounded-full px-2 py-0.5">
                      Coming soon
                    </span>
                  </p>
                  <p className="text-sm text-text-muted mt-0.5">
                    {r.description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  );
}
