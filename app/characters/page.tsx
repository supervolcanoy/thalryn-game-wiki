import Link from "next/link";
import { WIKI_ENTITIES, getEntityHref } from "@/lib/wiki-entities";

export default function CharactersPage() {
  return (
    <>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">Characters / NPCs</h1>
        <div className="wiki-page-subtitle">
          Playable character entries, entities, and creature profiles.
        </div>
      </div>

      <div className="wiki-grid wiki-card-grid">
        {WIKI_ENTITIES.map((entity) => (
          <Link
            key={`${entity.sourceSlug}-${entity.name}`}
            className="wiki-card wiki-card-link"
            href={getEntityHref(entity)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="wiki-card-thumb"
              src={entity.image}
              alt={entity.name}
            />
            <div className="wiki-card-body">
              <div className="wiki-card-tag">{entity.kind}</div>
              <h2 className="wiki-card-title">{entity.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
