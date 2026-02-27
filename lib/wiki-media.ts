import type { WikiDoc } from "@/lib/wiki";

const PLACEHOLDER_IMAGE = "/images/avatars/placeholder-avatar.svg";
const DOC_PLACEHOLDER_IMAGE = "/images/placeholders/wiki-doc-placeholder.svg";
const ABSTRACT_DOC_CATEGORIES = new Set([
  "Design Notes",
  "Technical",
  "Presentation",
  "Reference",
  "Business",
  "Systems",
  "Overview",
  "UI",
  "Gameplay"
]);

const slugAvatarMap: Record<string, string> = {
  "animal-control-officer": "/images/avatars/main-character-avatar.png",
  "the-hazard": "/images/avatars/obsidian-city-horrors-avatar.png",
  "soul-sirens": "/images/avatars/soul-siren-avatar.png",
  "obsidian-city": "/images/avatars/obsidian-city-horrors-avatar.png",
  "deep-undergrounds": "/images/avatars/deep-stalker-avatar.png",
  "the-cursed-forest": "/images/avatars/shadow-eagle-avatar.png",
  "creatures-surface": "/images/avatars/corrupted-bear-avatar.png",
  "creatures-underground": "/images/avatars/cave-crawler-swarm-avatar.png"
};

export function getPlaceholderImage(): string {
  return PLACEHOLDER_IMAGE;
}

export function getAvatarForSlug(slug: string): string {
  return slugAvatarMap[slug] ?? PLACEHOLDER_IMAGE;
}

export function getDisplayImageForDoc(doc: WikiDoc): string | null {
  if (doc.image) {
    return doc.image;
  }

  if (slugAvatarMap[doc.slug] && !ABSTRACT_DOC_CATEGORIES.has(doc.category)) {
    return slugAvatarMap[doc.slug];
  }

  return null;
}

export function getCardImageForDoc(doc: WikiDoc): string | null {
  if (slugAvatarMap[doc.slug]) {
    return slugAvatarMap[doc.slug];
  }

  if (doc.image) {
    return doc.image;
  }

  if (ABSTRACT_DOC_CATEGORIES.has(doc.category)) {
    return null;
  }

  if (doc.category === "Items / Equipment") {
    return DOC_PLACEHOLDER_IMAGE;
  }

  return null;
}
