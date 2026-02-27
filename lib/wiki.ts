import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import slugify from "slugify";

export type WikiFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  image?: string;
};

export type WikiDoc = WikiFrontmatter & {
  slug: string;
  body: string;
};

const contentDir = path.join(process.cwd(), "content", "wiki");

export function normalizeSlug(input: string): string {
  return slugify(input, { lower: true, strict: true, trim: true });
}

export function getAllWikiDocs(): WikiDoc[] {
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as WikiFrontmatter;
    const slug = normalizeSlug(file.replace(/\.mdx$/, ""));

    return {
      ...frontmatter,
      slug,
      body: content
    };
  });
}

export function getWikiDocBySlug(slug: string): WikiDoc | null {
  const docs = getAllWikiDocs();
  return docs.find((doc) => doc.slug === slug) ?? null;
}

export function getCategoryMap(docs: WikiDoc[]) {
  const categories = new Map<string, WikiDoc[]>();
  for (const doc of docs) {
    const key = normalizeSlug(doc.category);
    const list = categories.get(key) ?? [];
    list.push(doc);
    categories.set(key, list);
  }
  return categories;
}

export function getTagMap(docs: WikiDoc[]) {
  const tags = new Map<string, WikiDoc[]>();
  for (const doc of docs) {
    for (const tag of doc.tags) {
      const key = normalizeSlug(tag);
      const list = tags.get(key) ?? [];
      list.push(doc);
      tags.set(key, list);
    }
  }
  return tags;
}

export function deslug(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
