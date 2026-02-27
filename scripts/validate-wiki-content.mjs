import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const contentDir = path.join(root, "content", "wiki");
const avatarDir = path.join(root, "public", "images", "avatars");
const entitiesPath = path.join(root, "lib", "wiki-entities.ts");
const REQUIRED_CORE_SLUGS = [
  "animal-control-officer",
  "soul-sirens",
  "the-hazard",
  "ultra-bomb",
  "creatures-surface",
  "creatures-underground"
];

function fail(message) {
  console.error(`\n[validate:wiki] ${message}`);
  process.exit(1);
}

if (!fs.existsSync(contentDir)) {
  fail("Missing content/wiki directory.");
}

if (!fs.existsSync(avatarDir)) {
  fail("Missing public/images/avatars directory.");
}

const files = fs.readdirSync(contentDir).filter((name) => name.endsWith(".mdx"));
const docs = new Map();
const categoryCounts = new Map();

for (const file of files) {
  const fullPath = path.join(contentDir, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  const slug = file.replace(/\.mdx$/, "");

  const { title, excerpt, category, tags } = parsed.data;
  if (!title || !excerpt || !category || !Array.isArray(tags)) {
    fail(`Frontmatter incomplete for ${file}. Required: title/excerpt/category/tags.`);
  }

  docs.set(slug, raw);
  categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
}

for (const slug of REQUIRED_CORE_SLUGS) {
  if (!docs.has(slug)) {
    fail(`Missing required core wiki page: ${slug}.mdx`);
  }
}

const avatarFiles = new Set(
  fs.readdirSync(avatarDir).filter((name) => name.endsWith(".png") || name.endsWith(".svg"))
);

if (!avatarFiles.has("placeholder-avatar.svg")) {
  fail("Missing placeholder avatar: public/images/avatars/placeholder-avatar.svg");
}

const entitiesSource = fs.readFileSync(entitiesPath, "utf8");
const entityMatches = [...entitiesSource.matchAll(/image:\s*"([^"]+)"/g)];
for (const match of entityMatches) {
  const imagePath = match[1];
  const basename = path.basename(imagePath);
  if (!avatarFiles.has(basename)) {
    fail(`Entity mapping references missing avatar file: ${imagePath}`);
  }
}

const sourceSlugMatches = [...entitiesSource.matchAll(/sourceSlug:\s*"([^"]+)"/g)];
for (const match of sourceSlugMatches) {
  const sourceSlug = match[1];
  if (!docs.has(sourceSlug)) {
    fail(`Entity mapping references unknown source slug: ${sourceSlug}`);
  }
}

const collectionSlugMatches = [...entitiesSource.matchAll(/collectionSlug:\s*"([^"]+)"/g)];
for (const match of collectionSlugMatches) {
  const collectionSlug = match[1];
  if (!docs.has(collectionSlug)) {
    fail(`Entity mapping references unknown collection slug: ${collectionSlug}`);
  }
}

const entitiesArrayMatch = entitiesSource.match(
  /export const WIKI_ENTITIES:[\s\S]*?=\s*\[([\s\S]*?)\];/
);

if (!entitiesArrayMatch) {
  fail("Could not parse WIKI_ENTITIES array.");
}

const entityBlocks = [...entitiesArrayMatch[1].matchAll(/\{([\s\S]*?)\}/g)].map(
  (match) => match[1]
);

const surfaceEntities = collectionSlugMatches.filter(
  (m) => m[1] === "creatures-surface"
).length;
const undergroundEntities = collectionSlugMatches.filter(
  (m) => m[1] === "creatures-underground"
).length;

if (surfaceEntities < 3) {
  fail("Expected at least 3 entity mappings for creatures-surface.");
}

if (undergroundEntities < 2) {
  fail("Expected at least 2 entity mappings for creatures-underground.");
}

const characterCount =
  (categoryCounts.get("Characters / NPCs") ?? 0) +
  (categoryCounts.get("Bestiary") ?? 0);
const loreCount = [...categoryCounts.entries()]
  .filter(([category]) => !["Characters / NPCs", "Bestiary", "Items / Equipment"].includes(category))
  .reduce((sum, [, count]) => sum + count, 0);
const itemsCount = categoryCounts.get("Items / Equipment") ?? 0;

if (characterCount === 0 || loreCount === 0 || itemsCount === 0) {
  fail(
    "Navigation domain mismatch: expected non-empty content for Characters, Lore, and Items tabs."
  );
}

console.log("[validate:wiki] Content consistency checks passed.");
