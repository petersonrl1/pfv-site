"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FileText, ListChecks } from "lucide-react";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { DocRow } from "@/components/docs/doc-row";
import type { SopSummary, Domain } from "@/lib/sops";

type Filter = "All" | Domain;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "All", label: "All" },
  { value: "audio", label: "Audio" },
  { value: "slides", label: "Slides" },
  { value: "livestream", label: "Livestream" },
];

function formatDate(value?: string | Date) {
  if (!value) return undefined;
  return new Date(value).toLocaleDateString(undefined, { year: "numeric", month: "short", timeZone: "UTC" });
}

function pluralize(count: number, singular: string) {
  return `${count} ${singular}${count === 1 ? "" : "s"}`;
}

export function SopsLibrary({ sops, checklists }: { sops: SopSummary[]; checklists: SopSummary[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredSops = useMemo(
    () => sops.filter((s) => filter === "All" || s.domain === filter),
    [sops, filter],
  );
  const filteredChecklists = useMemo(
    () => checklists.filter((c) => filter === "All" || c.domain === filter),
    [checklists, filter],
  );

  return (
    <main>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-8 items-end pt-14 pb-8">
          <div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "A/V", href: "/av" }, { label: "SOPs & Checklists" }]} />
            <h1 className="text-[42px] sm:text-[60px] leading-none tracking-[-0.03em] mb-4">
              SOPs &amp; Checklists
            </h1>
            <p className="text-lg text-neutral-800 max-w-[56ch] m-0">
              Procedures describe how a role works start to finish. Checklists are what you
              actually tick through on a Sunday. Both print clean.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-600 mb-2.5">
              Filter by domain
            </p>
            <ToggleGroup name="domain-filter" options={FILTERS} value={filter} onChange={setFilter} />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-divider">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-8 md:pr-10 md:border-r-2 md:border-divider">
              <div className="flex items-baseline justify-between mb-4.5">
                <h6 className="m-0 text-neutral-700 flex items-center gap-2">
                  <FileText size={15} className="text-accent" />
                  Standard Operating Procedures
                </h6>
                <span className="text-[11px] text-neutral-600">
                  {pluralize(filteredSops.length, "SOP")}
                </span>
              </div>
              <div className="flex flex-col">
                {filteredSops.map((sop) => (
                  <DocRow
                    key={sop.slug}
                    href={`/av/sops/${sop.slug}`}
                    title={sop.title}
                    domain={sop.domain}
                    meta={sop.role}
                    updated={formatDate(sop.updatedAt)}
                  />
                ))}
                <div className="border-t border-divider" />
              </div>
            </div>

            <div className="py-8 md:pl-10">
              <div className="flex items-baseline justify-between mb-4.5">
                <h6 className="m-0 text-neutral-700 flex items-center gap-2">
                  <ListChecks size={15} className="text-accent" />
                  Checklists
                </h6>
                <span className="text-[11px] text-neutral-600">
                  {pluralize(filteredChecklists.length, "checklist")}
                </span>
              </div>
              {filteredChecklists.length === 0 ? (
                <p className="text-sm text-neutral-700 border-t border-divider pt-4">
                  No checklists published yet — the SQ-6 pre-service checklist lives in the{" "}
                  <Link href="/av/audio/sq6/pre-service-checklist">Audio guide</Link>.
                </p>
              ) : (
                <div className="flex flex-col">
                  {filteredChecklists.map((c) => (
                    <DocRow
                      key={c.slug}
                      href={`/av/sops/${c.slug}`}
                      title={c.title}
                      domain={c.domain}
                      meta={c.role}
                      updated={formatDate(c.updatedAt)}
                    />
                  ))}
                  <div className="border-t border-divider" />
                </div>
              )}
              <p className="text-xs text-neutral-600 mt-4.5">
                Titles and dates come straight from the markdown files in{" "}
                <code>src/content/sops</code> and <code>src/content/checklists</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
