import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DomainCell } from "@/components/hub/domain-cell";

const START_HERE = [
  { label: "SOPs & checklists", href: "/av/sops" },
  { label: "Audio equipment", href: "/av/audio" },
  { label: "Glossary of terms", href: "/glossary" },
];

export default function HomePage() {
  return (
    <main>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 lg:gap-16 py-14 lg:py-[88px] lg:pb-[72px] items-end">
          <div>
            <p className="text-xs tracking-[0.16em] uppercase text-accent-700 mb-5">
              Volunteer Documentation
            </p>
            <h1 className="text-[46px] sm:text-[58px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] mb-6 max-w-[16ch] text-balance">
              Everything the teams need to run a Sunday.
            </h1>
            <p className="text-lg leading-[1.5] max-w-[52ch] text-neutral-800">
              Guides, equipment references, and standard operating procedures — written by the
              people who serve, kept in one place so nobody has to guess at the booth.
            </p>
          </div>
          <div className="border-l-2 border-divider pl-8">
            <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-600 mb-4">
              Start here
            </p>
            <div className="flex flex-col">
              {START_HERE.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between gap-4 py-3.5 border-t border-divider text-text text-[15px] no-underline"
                  style={i === START_HERE.length - 1 ? { borderBottom: "1px solid var(--color-divider)" } : undefined}
                >
                  {item.label}
                  <ArrowRight size={16} className="text-accent shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-divider">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <DomainCell
              className="md:pr-8 md:border-r-2 md:border-divider"
              kicker="Team 01"
              title="Worship & A/V"
              description="Audio, slides, and livestream. Equipment, role guides, SOPs, and the SQ-6 console reference."
              links={[
                { label: "Audio", href: "/av/audio" },
                { label: "Slides & Presentation", href: "/av/slides" },
                { label: "Livestream Video", href: "/av/livestream" },
              ]}
              cta={{ label: "Open A/V hub →", href: "/av" }}
            />
            <DomainCell
              className="md:px-8 md:border-r-2 md:border-divider"
              kicker="Team 02"
              title="Hospitality"
              description="Space reserved for a future team — the hub is built so another ministry drops in as a sibling section."
              links={[{ label: "Greeters" }, { label: "Coffee & welcome desk" }, { label: "Facilities" }]}
              cta={{ label: "No content yet", href: "#" }}
              muted
            />
            <DomainCell
              className="md:pl-8"
              kicker="Team 03"
              title="Kids Ministry"
              description="Same shape: equipment, processes, glossary. Add when someone is ready to own the content."
              links={[{ label: "Check-in" }, { label: "Classroom setup" }, { label: "Safety policy" }]}
              cta={{ label: "No content yet", href: "#" }}
              muted
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-divider bg-surface">
        <div className="max-w-[1180px] mx-auto px-8 py-8">
          <p className="m-0 text-sm text-neutral-700">
            Something out of date or missing? Tell the team lead and it gets fixed the same week.
          </p>
        </div>
      </div>
    </main>
  );
}
