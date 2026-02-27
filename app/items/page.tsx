import Link from "next/link";
import { getAllWikiDocs } from "@/lib/wiki";
import { docsForTab } from "@/lib/wiki-nav";
import { getCardImageForDoc } from "@/lib/wiki-media";

export default function ItemsPage() {
  const rawDocs = getAllWikiDocs();
  const docs = docsForTab(
    rawDocs.map((doc) => ({
      slug: doc.slug,
      title: doc.title,
      category: doc.category
    })),
    "Items / Equipment"
  );
  const docsBySlug = new Map(rawDocs.map((doc) => [doc.slug, doc]));

  return (
    <>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">Items / Equipment</h1>
        <div className="wiki-page-subtitle">
          Crafting and equipment-focused entries.
        </div>
      </div>

      <div className="wiki-grid wiki-card-grid">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            className="wiki-card wiki-card-link"
            href={`/wiki/${doc.slug}`}
          >
            {getCardImageForDoc(docsBySlug.get(doc.slug)!) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="wiki-card-thumb"
                src={getCardImageForDoc(docsBySlug.get(doc.slug)!) ?? undefined}
                alt={doc.title}
                data-testid={`item-avatar-${doc.slug}`}
              />
            ) : (
              <div className="wiki-card-thumb wiki-card-thumb-muted">
                <span className="wiki-card-doc-label">Item Entry</span>
              </div>
            )}
            <div className="wiki-card-body">
              <div className="wiki-card-tag">{doc.category}</div>
              <h2 className="wiki-card-title">{doc.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
