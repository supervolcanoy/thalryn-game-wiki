import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllWikiDocs, getWikiDocBySlug, normalizeSlug } from "@/lib/wiki";
import { getEntitiesForCollectionSlug, getEntityHref } from "@/lib/wiki-entities";
import { getDisplayImageForDoc } from "@/lib/wiki-media";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllWikiDocs().map((doc) => ({ slug: doc.slug }));
}

export default async function WikiArticlePage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const doc = getWikiDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: doc.body,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug]
      }
    }
  });
  const articleImage = getDisplayImageForDoc(doc);
  const relatedEntities = getEntitiesForCollectionSlug(doc.slug);

  return (
    <>
      <div className="wiki-breadcrumb">
        <Link href="/">ThalrynWiki</Link> {" > "}{" "}
        <Link href={`/categories/${normalizeSlug(doc.category)}`}>
          {doc.category}
        </Link>
      </div>

      <header className="wiki-page-header">
        <h1 className="wiki-page-title">{doc.title}</h1>
        <div className="wiki-page-subtitle">{doc.excerpt}</div>
      </header>

      <section className="wiki-article-layout">
        <article className="wiki-article-body">
          <div className="wiki-toc">
            <div className="wiki-toc-title">Contents</div>
            <ol className="wiki-toc-list">
              <li>Overview</li>
              <li>Details</li>
              <li>Related Links</li>
            </ol>
          </div>

          {articleImage ? (
            <div style={{ marginBottom: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={articleImage}
                alt={doc.title}
                style={{
                  width: "min(100%, 760px)",
                  height: "auto",
                  border: "1px solid var(--border)",
                  borderRadius: 2
                }}
              />
            </div>
          ) : null}

          <div className="wiki-prose">{content}</div>

          {relatedEntities.length > 0 ? (
            <section style={{ marginTop: "1.5rem" }}>
              <h2 className="wiki-section-title">Known Entities</h2>
              <div className="wiki-grid wiki-card-grid">
                {relatedEntities.map((entity) => (
                  <Link
                    key={`${entity.sourceSlug}-${entity.name}`}
                    href={getEntityHref(entity)}
                    className="wiki-card wiki-card-link"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="wiki-card-thumb"
                      src={entity.image}
                      alt={entity.name}
                    />
                    <div className="wiki-card-body">
                      <div className="wiki-card-tag">{entity.kind}</div>
                      <h3 className="wiki-card-title">{entity.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="wiki-infobox">
          <div className="wiki-infobox-title">{doc.title}</div>
          {articleImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={articleImage} alt={doc.title} />
          ) : null}
          <table>
            <tbody>
              <tr>
                <td>Category</td>
                <td>{doc.category}</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>{doc.tags.join(", ")}</td>
              </tr>
              <tr>
                <td>Slug</td>
                <td>{doc.slug}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </section>

      <div style={{ marginTop: 18, borderTop: "1px solid var(--border-soft)", paddingTop: 10 }}>
        <span style={{ color: "var(--text-dim)", marginRight: 8 }}>Categories:</span>
        <Link className="wiki-chip" href={`/categories/${normalizeSlug(doc.category)}`}>
          {doc.category}
        </Link>
        {doc.tags.map((tag) => (
          <Link className="wiki-chip" href={`/tags/${normalizeSlug(tag)}`} key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </>
  );
}
