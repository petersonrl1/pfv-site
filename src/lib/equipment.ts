import { readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { Domain } from "@/lib/sops";

export interface EquipmentItem {
  name: string;
  location: string;
  notes: string;
}

const EQUIPMENT_DIR = join(process.cwd(), "src/content/equipment");

export function getEquipment(domain: Domain): EquipmentItem[] {
  const { data } = matter(readFileSync(join(EQUIPMENT_DIR, `${domain}.md`), "utf8"));
  return (data.items as EquipmentItem[]) ?? [];
}
