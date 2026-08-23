import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const SOPS_DIR = join(process.cwd(), "src/content/sops");

export interface SopFrontmatter {
  title: string;
  role?: string;
  updatedAt?: string | Date;
}

export interface SopSummary extends SopFrontmatter {
  slug: string;
}

export interface SopDoc extends SopSummary {
  content: string;
}

function listSlugs(): string[] {
  if (!existsSync(SOPS_DIR)) return [];
  return readdirSync(SOPS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllSlugs(): string[] {
  return listSlugs();
}

export function getAllSops(): SopSummary[] {
  return listSlugs()
    .map((slug) => {
      const { data } = matter(readFileSync(join(SOPS_DIR, `${slug}.md`), "utf8"));
      return { slug, ...(data as SopFrontmatter) };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getSop(slug: string): SopDoc {
  const { data, content } = matter(readFileSync(join(SOPS_DIR, `${slug}.md`), "utf8"));
  return { slug, content, ...(data as SopFrontmatter) };
}
