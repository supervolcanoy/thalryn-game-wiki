import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MiniSearch from "minisearch";
import slugify from "slugify";

const root = process.cwd();
const contentDir = path.join(root, "content", "wiki");
const outputPath = path.join(root, "public", "search-index.json");

function normalizeSlug(input) {
  return slugify(input, { lower: true, strict: true, trim: true });
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, "$1")
    .replace(/[#>*_~\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

if (!fs.existsSync(contentDir)) {
  console.error("Missing content/wiki directory.");
  process.exit(1);
}

if (!fs.existsSync(path.join(root, "public"))) {
  fs.mkdirSync(path.join(root, "public"), { recursive: true });
}

const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
const docs = files.map((file) => {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const { data, content } = matter(raw);
  const slug = normalizeSlug(file.replace(/\.mdx$/, ""));
  return {
    id: slug,
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    tags: data.tags ?? [],
    body: stripMarkdown(content)
  };
});

const miniSearch = new MiniSearch({
  fields: ["title", "excerpt", "body"],
  storeFields: ["slug", "title", "excerpt", "category", "tags"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2
  }
});

miniSearch.addAll(docs);

const payload = {
  index: miniSearch.toJSON(),
  docs: docs.map(({ body, ...rest }) => rest)
};

fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
console.log(`Generated search index with ${docs.length} docs.`);
