import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SectionNav } from "@/components/docs/section-nav";
import { Checklist } from "@/components/docs/checklist-item";
import { buttonVariants } from "@/components/ui/button";
import { getAllSq6Sections, getAllSq6Slugs } from "@/lib/sq6";

interface PageProps {
  params: Promise<{ section: string }>;
}

const BASE_PATH = "/av/audio/sq6";

export function generateStaticParams() {
  return getAllSq6Slugs().map((section) => ({ section }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section } = await params;
  const all = getAllSq6Sections();
  const current = all.find((s) => s.slug === section);
  if (!current) return {};
  return { title: `${current.title} | SQ-6 Guide` };
}

export default async function Sq6SectionPage({ params }: PageProps) {
  const { section } = await params;
  const all = getAllSq6Sections();
  const index = all.findIndex((s) => s.slug === section);
  if (index === -1) notFound();

  const current = all[index];
  const prev = all[(index - 1 + all.length) % all.length];
  const next = all[(index + 1) % all.length];

  return (
    <div className="border-t-2 border-divider flex flex-col md:flex-row min-h-[calc(100vh-62px)]">
      <SectionNav
        items={all.map((s) => ({ slug: s.slug, title: s.title }))}
        activeSlug={current.slug}
        basePath={BASE_PATH}
      />

      <div className="px-6 sm:px-10 py-9 pb-16 max-w-[820px]">
        <p className="text-xs tracking-[0.14em] uppercase text-neutral-600 mb-4">
          Section {String(index + 1).padStart(2, "0")} of {String(all.length).padStart(2, "0")}
        </p>
        <h1 className="text-[32px] sm:text-[48px] leading-[1.02] tracking-[-0.02em] mb-4">{current.title}</h1>
        <div className="h-0.5 bg-divider mb-8" />

        {current.items ? (
          <Checklist
            storageKey={`sq6-checklist-${current.slug}`}
            items={current.items.map((title, i) => ({ id: `${current.slug}-${i}`, title }))}
            note={current.note}
          />
        ) : (
          <div className="text-neutral-800 text-[16px] leading-[1.55] [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-text [&_p]:mt-3 [&_p:first-child]:mt-0 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:mt-2 [&_ol]:list-decimal [&_ol]:ml-5 [&_strong]:text-text">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{current.content}</ReactMarkdown>
          </div>
        )}

        <div className="flex justify-between gap-4 mt-12 pt-5 border-t-2 border-divider">
          <Link href={`${BASE_PATH}/${prev.slug}`} className={buttonVariants({ variant: "secondary" })}>
            ← {prev.title}
          </Link>
          <Link href={`${BASE_PATH}/${next.slug}`} className={buttonVariants({ variant: "secondary" })}>
            {next.title} →
          </Link>
        </div>
      </div>
    </div>
  );
}
