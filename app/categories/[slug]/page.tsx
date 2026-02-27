import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllWikiDocs, getCategoryMap } from "@/lib/wiki";

type Params = { slug: string };

export function generateStaticParams() {
  const categories = getCategoryMap(getAllWikiDocs());
  return Array.from(categories.keys()).map((slug) => ({ slug }));
}

export default async function CategoryPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const categories = getCategoryMap(getAllWikiDocs());
  const docs = categories.get(slug);

  if (!docs || docs.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="wiki-breadcrumb">
        <Link href="/">ThalrynWiki</Link> {" > "}{" "}
        <Link href="/categories">Categories</Link>
      </div>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">{docs[0].category}</h1>
        <div className="wiki-page-subtitle">
          Articles indexed under this category.
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
