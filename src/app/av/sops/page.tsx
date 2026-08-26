import type { Metadata } from "next";
import { SopsLibrary } from "@/components/docs/sops-library";
import { getAllSops } from "@/lib/sops";

export const metadata: Metadata = {
  title: "SOPs & Checklists",
};

export default function SopsPage() {
  const all = getAllSops();
  const sops = all.filter((doc) => doc.kind !== "checklist");
  const checklists = all.filter((doc) => doc.kind === "checklist");

  return <SopsLibrary sops={sops} checklists={checklists} />;
}
