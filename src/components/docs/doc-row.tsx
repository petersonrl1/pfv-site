import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export interface DocRowProps {
  href: string;
  title: string;
  domain?: string;
  meta?: string;
  updated?: string;
}

export function DocRow({ href, title, domain, meta, updated }: DocRowProps) {
  return (
    <Link
      href={href}
      className="flex items-baseline justify-between gap-6 py-4 border-t border-divider text-text no-underline hover:bg-text/[0.04]"
    >
      <span>
        <span className="block font-heading font-extrabold text-lg mb-1.5">{title}</span>
        {domain && <Badge>{domain}</Badge>}
        {meta && <span className="text-xs text-neutral-600 ml-2">{meta}</span>}
      </span>
      {updated && <span className="text-[11px] text-neutral-600 whitespace-nowrap pt-1.5">{updated}</span>}
    </Link>
  );
}
