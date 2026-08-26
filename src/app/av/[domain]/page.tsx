import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { DocRow } from "@/components/docs/doc-row";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { buttonVariants } from "@/components/ui/button";
import { getEquipment } from "@/lib/equipment";
import { getAllSops } from "@/lib/sops";
import { DOMAINS, DOMAIN_SLUGS, type DomainSlug } from "@/lib/domains";
import { cn } from "@/lib/utils";

interface ProcessDoc {
  href: string;
  title: string;
}

interface PageProps {
  params: Promise<{ domain: string }>;
}

function isDomainSlug(value: string): value is DomainSlug {
  return (DOMAIN_SLUGS as string[]).includes(value);
}

export function generateStaticParams() {
  return DOMAIN_SLUGS.map((domain) => ({ domain }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { domain } = await params;
  if (!isDomainSlug(domain)) return {};
  return { title: DOMAINS[domain].title };
}

export default async function DomainPage({ params }: PageProps) {
  const { domain } = await params;
  if (!isDomainSlug(domain)) notFound();

  const meta = DOMAINS[domain];
  const gear = getEquipment(domain);
  const docs: ProcessDoc[] = getAllSops()
    .filter((sop) => sop.domain === domain)
    .map((sop) => ({ href: `/av/sops/${sop.slug}`, title: sop.title }));
  if (domain === "audio") {
    docs.push({ href: "/av/audio/sq6/pre-service-checklist", title: "Pre-Service Checklist" });
  }

  return (
    <main>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="pt-14 pb-9">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "A/V", href: "/av" }, { label: meta.title }]}
          />
          <h1 className="text-[42px] sm:text-[60px] leading-none tracking-[-0.03em] mb-5">{meta.title}</h1>
          <p className="text-lg max-w-[62ch] text-neutral-800 m-0">{meta.blurb}</p>
        </div>
      </div>

      <div className="border-t-2 border-divider">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
            <div className="py-9 lg:pr-10 lg:border-r-2 lg:border-divider">
              <h6 className="mb-4 text-neutral-700">Equipment</h6>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ width: "34%" }}>Item</TableHead>
                    <TableHead style={{ width: "24%" }}>Location</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gear.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell className="font-semibold text-text">{item.name}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>{item.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-xs text-neutral-600 mt-3.5">
                Placeholder rows — swap in your real inventory.
              </p>

              <h6 className="mt-11 mb-4 text-neutral-700">Processes</h6>
              {docs.length === 0 ? (
                <p className="text-sm text-neutral-700 border-t border-divider pt-4">
                  No processes documented for this domain yet.
                </p>
              ) : (
                <div className="flex flex-col">
                  {docs.map((doc) => (
                    <DocRow key={doc.href} href={doc.href} title={doc.title} />
                  ))}
                  <div className="border-t border-divider" />
                </div>
              )}
            </div>

            <div className="py-9 lg:pl-8">
              <h6 className="mb-4 text-neutral-700">New to this role?</h6>
              <p className="text-sm text-neutral-800 mb-5">{meta.newbie}</p>
              <Link href={meta.primaryHref} className={cn(buttonVariants({ variant: "primary", block: true }))}>
                {meta.primaryLabel}
              </Link>
              <div className="h-0.5 my-6 bg-divider" />
              <h6 className="mb-3 text-neutral-700">Sunday contact</h6>
              <p className="text-sm mb-1 font-semibold">{meta.contact}</p>
              <p className="text-[13px] text-neutral-700 m-0">
                Booth lead — text before 8:30am if you cannot make it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
