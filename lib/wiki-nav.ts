export type WikiTabKey =
  | "Characters / NPCs"
  | "Lore / World"
  | "Items / Equipment";

export const WIKI_TABS: Array<{ key: WikiTabKey; href: string }> = [
  { key: "Characters / NPCs", href: "/characters" },
  { key: "Lore / World", href: "/lore" },
  { key: "Items / Equipment", href: "/items" }
];

export type WikiDocMeta = {
  slug: string;
  title: string;
  category: string;
};

const CHARACTER_CATEGORIES = new Set(["Characters / NPCs", "Bestiary"]);
const ITEM_CATEGORIES = new Set(["Items / Equipment"]);

export function getTabForCategory(category: string): WikiTabKey {
  if (CHARACTER_CATEGORIES.has(category)) {
    return "Characters / NPCs";
  }

  if (ITEM_CATEGORIES.has(category)) {
    return "Items / Equipment";
  }

  return "Lore / World";
}

export function docsForTab(docs: WikiDocMeta[], tab: WikiTabKey): WikiDocMeta[] {
  return docs
    .filter((doc) => getTabForCategory(doc.category) === tab)
    .sort((a, b) => a.title.localeCompare(b.title));
}
