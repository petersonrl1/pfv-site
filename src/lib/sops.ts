import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const DIRS = {
  sop: join(process.cwd(), "src/content/sops"),
  checklist: join(process.cwd(), "src/content/checklists"),
} as const;

export type DocKind = keyof typeof DIRS;
export type Domain = "audio" | "slides" | "livestream";

export interface SopFrontmatter {
  title: string;
  role?: string;
  updatedAt?: string | Date;
  kind?: DocKind;
  domain?: Domain;
}

export interface SopSummary extends SopFrontmatter {
  slug: string;
}

export interface SopDoc extends SopSummary {
  content: string;
}

function listSlugsIn(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function findDir(slug: string): string | null {
  for (const dir of Object.values(DIRS)) {
    if (existsSync(join(dir, `${slug}.md`))) return dir;
  }
  return null;
}

export function getAllSlugs(): string[] {
  return Object.values(DIRS).flatMap(listSlugsIn);
}

export function getAllSops(): SopSummary[] {
  return Object.entries(DIRS)
    .flatMap(([kind, dir]) =>
      listSlugsIn(dir).map((slug) => {
        const { data } = matter(readFileSync(join(dir, `${slug}.md`), "utf8"));
        return { slug, kind, ...(data as SopFrontmatter) } as SopSummary;
      }),
    )
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getSop(slug: string): SopDoc {
  const dir = findDir(slug);
  if (!dir) throw new Error(`Unknown doc slug: ${slug}`);
  const { data, content } = matter(readFileSync(join(dir, `${slug}.md`), "utf8"));
  return { slug, content, ...(data as SopFrontmatter) };
}
