import Link from "next/link";
import type { Metadata } from "next";
import { SlidersHorizontal, MonitorPlay, Video } from "lucide-react";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { DomainCell } from "@/components/hub/domain-cell";

export const metadata: Metadata = {
  title: "Worship & A/V",
};

const REFERENCE_LINKS = [
  { title: "SOPs & Checklists", description: "Every procedure, printable.", href: "/av/sops" },
  { title: "SQ-6 guide", description: "The console, section by section.", href: "/av/audio/sq6/welcome" },
  { title: "Glossary", description: "Every term used across the hub.", href: "/glossary" },
  { title: "Who to call", description: "Sunday-morning contacts.", href: "/av" },
];

export default function AvHubPage() {
  return (
    <main>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="pt-14 pb-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Worship & A/V" }]} />
          <h1 className="text-[42px] sm:text-[60px] leading-none tracking-[-0.03em] mb-5">
            Worship &amp; A/V
          </h1>
          <p className="text-lg max-w-[60ch] text-neutral-800 m-0">
            Three domains, one shelf each. Start with your domain if you are learning; use the
            reference row if you are mid-service and need one answer fast.
          </p>
        </div>
      </div>

      <div className="border-t-2 border-divider">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <DomainCell
              className="md:pr-8 md:border-r-2 md:border-divider"
              icon={<SlidersHorizontal size={26} />}
              kicker="Domain"
              title="Audio"
              description="Console, stage boxes, wireless, monitors. Home of the SQ-6 reference."
              cta={{ label: "Open Audio →", href: "/av/audio", variant: "primary" }}
            />
            <DomainCell
              className="md:px-8 md:border-r-2 md:border-divider"
              icon={<MonitorPlay size={26} />}
              kicker="Domain"
              title="Slides & Presentation"
              description="ProPresenter, the booth machine, displays, and the countdown timer."
              cta={{ label: "Open Slides →", href: "/av/slides", variant: "secondary" }}
            />
            <DomainCell
              className="md:pl-8"
              icon={<Video size={26} />}
              kicker="Domain"
              title="Livestream Video"
              description="Cameras, switcher, Boxcast encoder, and stream monitoring."
              cta={{ label: "Open Livestream →", href: "/av/livestream", variant: "secondary" }}
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-divider bg-surface">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {REFERENCE_LINKS.map((ref, i) => (
              <div
                key={ref.title}
                className={
                  "py-7 " +
                  (i < REFERENCE_LINKS.length - 1 ? "lg:pr-6 lg:border-r lg:border-divider" : "") +
                  (i > 0 ? " lg:pl-6" : "")
                }
              >
                <h5 className="mb-2 text-[15px]">{ref.title}</h5>
                <p className="text-[13px] text-neutral-700 mb-3">{ref.description}</p>
                <Link href={ref.href} className="text-[13px]">
                  Open →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
