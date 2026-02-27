import Link from "next/link";
import { getAllWikiDocs, getTagMap, normalizeSlug } from "@/lib/wiki";

export default function TagsPage() {
  const tags = getTagMap(getAllWikiDocs());
  const pairs = Array.from(tags.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">Tags</h1>
        <div className="wiki-page-subtitle">
          Cross-category descriptors used throughout the wiki.
        </div>
      </div>
      <div className="wiki-grid wiki-card-grid">
        {pairs.map(([slug, docs]) => (
          <Link
            key={slug}
            className="wiki-card wiki-card-link"
            href={`/tags/${slug}`}
          >
            <div className="wiki-card-body">
              <div className="wiki-card-tag">Tag</div>
              <h2 className="wiki-card-title">
                {docs[0].tags.find((tag) => normalizeSlug(tag) === slug) ?? slug}
              </h2>
              <p className="wiki-card-desc">
                {docs.length} article{docs.length === 1 ? "" : "s"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
