import type { Metadata } from "next";
import { GlossarySearch } from "@/components/glossary/glossary-search";
import { getGlossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossary",
};

export default function GlossaryPage() {
  return <GlossarySearch terms={getGlossaryTerms()} />;
}
