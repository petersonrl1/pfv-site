import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getAllSlugs, getSop } from "@/lib/sops";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllSlugs().includes(slug)) return {};
  return { title: getSop(slug).title };
}

export default async function SopPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getAllSlugs().includes(slug)) notFound();
  const sop = getSop(slug);

  return (
    <main className="min-h-screen bg-bg-base text-text-primary px-6 py-16">
      <div className="max-w-2xl w-full mx-auto">
        <Link
          href="/sops"
          className="text-sm text-text-muted hover:text-accent-amber transition-colors"
        >
          ← SOPs
        </Link>

        <h1 className="font-display font-bold text-4xl text-gradient-amber mt-6 mb-2">
          {sop.title}
        </h1>
        {sop.updatedAt && (
          <p className="text-sm text-text-muted mb-10">
            Updated {new Date(sop.updatedAt).toLocaleDateString(undefined, { timeZone: "UTC" })}
          </p>
        )}

        <div className="text-text-secondary [&_a]:text-accent-amber [&_a]:underline [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-border-default [&_blockquote]:pl-4 [&_code]:text-accent-amber-light [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-text-primary [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-text-primary [&_h1_a.anchor]:no-underline [&_h1_a.anchor]:text-text-faint [&_h1_a.anchor]:ml-2 [&_h2_a.anchor]:no-underline [&_h2_a.anchor]:text-text-faint [&_h2_a.anchor]:ml-2 [&_h3_a.anchor]:no-underline [&_h3_a.anchor]:text-text-faint [&_h3_a.anchor]:ml-2 [&_input]:mr-2 [&_li]:ml-5 [&_li:has(input)]:list-none [&_li:has(input)]:-ml-5 [&_ol]:mt-2 [&_ol]:list-decimal [&_p]:mt-3 [&_p:first-child]:mt-0 [&_strong]:text-text-primary [&_table]:mt-3 [&_td]:border [&_td]:border-border-subtle [&_td]:p-2 [&_th]:border [&_th]:border-border-subtle [&_th]:p-2 [&_ul]:mt-2 [&_ul]:list-disc">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "append", properties: { className: "anchor" }, content: { type: "text", value: " #" } }],
            ]}
          >
            {sop.content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
