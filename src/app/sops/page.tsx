import Link from "next/link";
import type { Metadata } from "next";
import { getAllSops } from "@/lib/sops";

export const metadata: Metadata = {
  title: "SOPs",
};

export default function SopsPage() {
  const sops = getAllSops();

  return (
    <main className="min-h-screen bg-bg-base text-text-primary px-6 py-16">
      <div className="max-w-2xl w-full mx-auto">
        <Link
          href="/"
          className="text-sm text-text-muted hover:text-accent-amber transition-colors"
        >
          ← AV Resource Hub
        </Link>

        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mt-6 mb-2">
          Providence Fairview Church
        </p>
        <h1 className="font-display font-bold text-4xl text-gradient-amber mb-3">
          Standard Operating Procedures
        </h1>
        <p className="text-text-secondary leading-relaxed mb-10">
          Printable SOPs for all AV roles.
        </p>

        {sops.length === 0 ? (
          <div className="rounded-xl border border-border-default bg-bg-surface p-6 text-text-secondary">
            No SOPs yet. Drop a <code className="text-text-primary">.md</code> file into{" "}
            <code className="text-text-primary">src/content/sops/</code>.
          </div>
        ) : (
          <div className="grid gap-3">
            {sops.map((sop) => (
              <Link
                key={sop.slug}
                href={`/sops/${sop.slug}`}
                className="flex items-start justify-between gap-4 rounded-xl border border-border-default bg-bg-surface p-5 hover:border-accent-amber/40 hover:bg-bg-elevated transition-colors group"
              >
                <div>
                  <p className="font-semibold text-text-primary group-hover:text-accent-amber transition-colors">
                    {sop.title}
                  </p>
                  {sop.role && <p className="text-sm text-text-muted mt-0.5">{sop.role}</p>}
                </div>
                {sop.updatedAt && (
                  <p className="text-xs text-text-muted shrink-0">
                    {new Date(sop.updatedAt).toLocaleDateString(undefined, { timeZone: "UTC" })}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
