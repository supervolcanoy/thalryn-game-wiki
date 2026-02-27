import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllWikiDocs, getTagMap, normalizeSlug } from "@/lib/wiki";

type Params = { slug: string };

export function generateStaticParams() {
  const tags = getTagMap(getAllWikiDocs());
  return Array.from(tags.keys()).map((slug) => ({ slug }));
}

export default async function TagPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const tags = getTagMap(getAllWikiDocs());
  const docs = tags.get(slug);

  if (!docs || docs.length === 0) {
    notFound();
  }

  const tagName =
    docs[0].tags.find((tag) => normalizeSlug(tag) === slug) ?? slug;

  return (
    <>
      <div className="wiki-breadcrumb">
        <Link href="/">ThalrynWiki</Link> {" > "} <Link href="/tags">Tags</Link>
      </div>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">Tag: {tagName}</h1>
        <div className="wiki-page-subtitle">
          Articles associated with this tag.
        </div>
      </div>
      <div className="wiki-grid wiki-card-grid">
        {docs.map((doc) => (
          <Link
            className="wiki-card wiki-card-link"
            href={`/wiki/${doc.slug}`}
            key={doc.slug}
          >
            <div className="wiki-card-body">
              <div className="wiki-card-tag">{doc.category}</div>
              <h2 className="wiki-card-title">{doc.title}</h2>
              <p className="wiki-card-desc">{doc.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
