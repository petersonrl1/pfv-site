"use client";

import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { Input } from "@/components/ui/input";
import { TermRow } from "@/components/glossary/term-row";
import type { GlossaryTerm } from "@/lib/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.domain.toLowerCase().includes(q),
    );
  }, [terms, query]);

  return (
    <main>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-end pt-14 pb-8">
          <div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Glossary" }]} />
            <h1 className="text-[42px] sm:text-[60px] leading-none tracking-[-0.03em] mb-4">Glossary</h1>
            <p className="text-lg text-neutral-800 max-w-[52ch] m-0">
              Every term the guides use, in plain language. One list for all three domains.
            </p>
          </div>
          <div>
            <label htmlFor="glossary-search" className="block text-xs mb-1.5 text-text/70">
              Filter terms
            </label>
            <Input
              id="glossary-search"
              placeholder="Type a term, e.g. gain"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <p className="text-xs text-neutral-600 mt-2.5">
              {filtered.length} of {terms.length} terms
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-divider">
        <div className="max-w-[1180px] mx-auto px-8 pb-16">
          {filtered.map((term) => (
            <TermRow key={term.term} term={term.term} domain={term.domain} definition={term.definition} />
          ))}
        </div>
      </div>
    </main>
  );
}
