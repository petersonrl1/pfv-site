import { Badge } from "@/components/ui/badge";

export interface TermRowProps {
  term: string;
  domain: string;
  definition: string;
}

export function TermRow({ term, domain, definition }: TermRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-2 sm:gap-10 py-5 border-b border-divider">
      <div>
        <h4 className="text-xl mb-1.5">{term}</h4>
        <Badge>{domain}</Badge>
      </div>
      <p className="text-base text-neutral-800 max-w-[64ch] m-0">{definition}</p>
    </div>
  );
}
