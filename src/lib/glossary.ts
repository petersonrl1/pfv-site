import terms from "@/content/glossary/terms.json";

export interface GlossaryTerm {
  term: string;
  domain: string;
  definition: string;
}

export function getGlossaryTerms(): GlossaryTerm[] {
  return terms as GlossaryTerm[];
}
