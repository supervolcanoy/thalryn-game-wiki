export type WikiEntity = {
  name: string;
  kind: "Characters / NPCs" | "Bestiary";
  image: string;
  sourceSlug: string;
  collectionSlug?: string;
};

export const WIKI_ENTITIES: WikiEntity[] = [
  {
    name: "Animal Control Officer",
    kind: "Characters / NPCs",
    image: "/images/avatars/main-character-avatar.png",
    sourceSlug: "animal-control-officer"
  },
  {
    name: "The Hazard",
    kind: "Characters / NPCs",
    image: "/images/avatars/obsidian-city-horrors-avatar.png",
    sourceSlug: "the-hazard"
  },
  {
    name: "Soul Sirens",
    kind: "Characters / NPCs",
    image: "/images/avatars/soul-siren-avatar.png",
    sourceSlug: "soul-sirens"
  },
  {
    name: "Mutated Fox",
    kind: "Bestiary",
    image: "/images/avatars/blind-fox-pair-avatar.png",
    sourceSlug: "mutated-fox",
    collectionSlug: "creatures-surface"
  },
  {
    name: "Blind Bloodhound",
    kind: "Bestiary",
    image: "/images/avatars/blind-bloodhound-avatar.png",
    sourceSlug: "blind-bloodhound",
    collectionSlug: "creatures-surface"
  },
  {
    name: "Shadow Eagle",
    kind: "Bestiary",
    image: "/images/avatars/shadow-eagle-avatar.png",
    sourceSlug: "shadow-eagle",
    collectionSlug: "creatures-surface"
  },
  {
    name: "Aberrant Deer",
    kind: "Bestiary",
    image: "/images/avatars/aberrent-deer-avatar.png",
    sourceSlug: "aberrant-deer",
    collectionSlug: "creatures-surface"
  },
  {
    name: "Corrupted Bear",
    kind: "Bestiary",
    image: "/images/avatars/corrupted-bear-avatar.png",
    sourceSlug: "corrupted-bear",
    collectionSlug: "creatures-surface"
  },
  {
    name: "Cave Crawler",
    kind: "Bestiary",
    image: "/images/avatars/cave-crawler-swarm-avatar.png",
    sourceSlug: "cave-crawler",
    collectionSlug: "creatures-underground"
  },
  {
    name: "Soul Leech",
    kind: "Bestiary",
    image: "/images/avatars/soul-leech-avatar.png",
    sourceSlug: "soul-leech",
    collectionSlug: "creatures-underground"
  },
  {
    name: "Deep Stalker",
    kind: "Bestiary",
    image: "/images/avatars/deep-stalker-avatar.png",
    sourceSlug: "deep-stalker",
    collectionSlug: "creatures-underground"
  }
];

export function getEntitiesForSourceSlug(slug: string): WikiEntity[] {
  return WIKI_ENTITIES.filter(
    (entity) => entity.sourceSlug === slug || entity.collectionSlug === slug
  );
}

export function getEntitiesForCollectionSlug(slug: string): WikiEntity[] {
  return WIKI_ENTITIES.filter((entity) => entity.collectionSlug === slug);
}

export function getEntityHref(entity: WikiEntity): string {
  return `/wiki/${entity.sourceSlug}`;
}
