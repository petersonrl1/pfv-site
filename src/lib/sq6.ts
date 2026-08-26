import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const SQ6_DIR = join(process.cwd(), "src/content/sq6");

export interface Sq6Frontmatter {
  title: string;
  order: number;
  note?: string;
  items?: string[];
}

export interface Sq6Section extends Sq6Frontmatter {
  slug: string;
  content: string;
}

function listSlugs(): string[] {
  if (!existsSync(SQ6_DIR)) return [];
  return readdirSync(SQ6_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllSq6Slugs(): string[] {
  return listSlugs();
}

export function getAllSq6Sections(): Sq6Section[] {
  return listSlugs()
    .map((slug) => {
      const { data, content } = matter(readFileSync(join(SQ6_DIR, `${slug}.md`), "utf8"));
      return { slug, content, ...(data as Sq6Frontmatter) };
    })
    .sort((a, b) => a.order - b.order);
}

export function getSq6Section(slug: string): Sq6Section | undefined {
  return getAllSq6Sections().find((s) => s.slug === slug);
}
