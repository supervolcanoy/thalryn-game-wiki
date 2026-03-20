import Link from "next/link";
import { getAllWikiDocs, normalizeSlug } from "@/lib/wiki";

export default function HomePage() {
  const docs = getAllWikiDocs().sort((a, b) => a.title.localeCompare(b.title));
  const featuredDocs = docs.slice(0, 6);
  const didYouKnow = docs.slice(0, 6);
  const recentChanges = docs.slice(0, 6);

  return (
    <>
      <section className="wiki-banner">
        <h1 className="wiki-banner-title">Welcome to ThalrynWiki</h1>
        <p className="wiki-banner-sub">
          The community encyclopedia for Thalryn - the infinite cursed forest
          survival horror game. Built from MDX at build time and searchable
          across all known entries.
        </p>
      </section>

      <section>
        <h2 className="wiki-section-title">Featured Articles</h2>
        <div className="wiki-grid wiki-card-grid">
          {featuredDocs.map((doc) => (
            <Link
              className="wiki-card wiki-card-link"
              data-testid="featured-card-link"
              href={`/wiki/${doc.slug}`}
              key={doc.slug}
            >
              {doc.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="wiki-card-thumb" src={doc.image} alt={doc.title} />
              ) : (
                <div className="wiki-card-thumb" style={{ padding: "24px 12px" }}>
                  <span style={{ fontSize: 42, color: "var(--text-placeholder-letter)" }}>
                    {doc.title.charAt(0)}
                  </span>
                </div>
              )}
              <div className="wiki-card-body">
                <div className="wiki-card-tag">{doc.category}</div>
                <h3 className="wiki-card-title">{doc.title}</h3>
                <p className="wiki-card-desc">{doc.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wiki-split-grid">
        <article className="wiki-panel">
          <div className="wiki-panel-title">Did You Know...</div>
          <div className="wiki-panel-content">
            {didYouKnow.map((doc) => (
              <div className="wiki-list-item" key={doc.slug}>
                <span style={{ color: "var(--text-label)", marginRight: 8 }}>▸</span>
                {doc.excerpt}
              </div>
            ))}
          </div>
        </article>

        <article className="wiki-panel">
          <div className="wiki-panel-title">Recent Changes</div>
          <div className="wiki-panel-content">
            {recentChanges.map((doc) => (
              <div className="wiki-list-item" key={doc.slug}>
                <Link href={`/wiki/${doc.slug}`}>{doc.title}</Link>
                <div className="wiki-change-note">
                  Category:{" "}
                  <Link href={`/categories/${normalizeSlug(doc.category)}`}>
                    {doc.category}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2 className="wiki-section-title">Browse All Articles</h2>
        <div className="wiki-grid wiki-card-grid">
          {docs.map((doc) => (
            <article className="wiki-card" key={doc.slug}>
              <div className="wiki-card-body">
                <div className="wiki-card-tag">{doc.category}</div>
                <h3 className="wiki-card-title">
                  <Link href={`/wiki/${doc.slug}`}>{doc.title}</Link>
                </h3>
                <p className="wiki-card-desc">{doc.excerpt}</p>
                <div style={{ marginTop: 8 }}>
                  {doc.tags.slice(0, 3).map((tag) => (
                    <Link
                      className="wiki-chip"
                      href={`/tags/${normalizeSlug(tag)}`}
                      key={tag}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
