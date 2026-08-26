import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Breadcrumb } from "@/components/nav/breadcrumb";
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

export default async function SopDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getAllSlugs().includes(slug)) notFound();
  const sop = getSop(slug);

  return (
    <main>
      <div className="max-w-[760px] mx-auto px-8 py-14">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "A/V", href: "/av" },
            { label: "SOPs & Checklists", href: "/av/sops" },
            { label: sop.title },
          ]}
        />
        <h1 className="text-[36px] sm:text-[48px] leading-[1.02] tracking-[-0.02em] mb-2">{sop.title}</h1>
        {sop.updatedAt && (
          <p className="text-sm text-neutral-600 mb-8">
            Updated {new Date(sop.updatedAt).toLocaleDateString(undefined, { timeZone: "UTC" })}
          </p>
        )}

        <div className="text-neutral-800 text-[15px] leading-[1.55] [&_a]:text-accent [&_a]:underline [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-divider [&_blockquote]:pl-4 [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:text-text [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:text-text [&_h3]:mt-6 [&_h3]:text-text [&_h1_a.anchor]:no-underline [&_h1_a.anchor]:text-neutral-500 [&_h1_a.anchor]:ml-2 [&_h2_a.anchor]:no-underline [&_h2_a.anchor]:text-neutral-500 [&_h2_a.anchor]:ml-2 [&_h3_a.anchor]:no-underline [&_h3_a.anchor]:text-neutral-500 [&_h3_a.anchor]:ml-2 [&_input]:mr-2 [&_li]:ml-5 [&_li:has(input)]:list-none [&_li:has(input)]:-ml-5 [&_ol]:mt-2 [&_ol]:list-decimal [&_p]:mt-3 [&_p:first-child]:mt-0 [&_strong]:text-text [&_table]:mt-3 [&_td]:border [&_td]:border-divider [&_td]:p-2 [&_th]:border [&_th]:border-divider [&_th]:p-2 [&_ul]:mt-2 [&_ul]:list-disc print-avoid-break">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                { behavior: "append", properties: { className: "anchor" }, content: { type: "text", value: " #" } },
              ],
            ]}
          >
            {sop.content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
