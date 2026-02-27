import Link from "next/link";
import { getAllWikiDocs, getCategoryMap } from "@/lib/wiki";

export default function CategoriesPage() {
  const categories = getCategoryMap(getAllWikiDocs());
  const pairs = Array.from(categories.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">Categories</h1>
        <div className="wiki-page-subtitle">
          Browse all content categories in the Thalryn archive.
        </div>
      </div>
      <div className="wiki-grid wiki-card-grid">
        {pairs.map(([slug, docs]) => (
          <Link
            key={slug}
            className="wiki-card wiki-card-link"
            href={`/categories/${slug}`}
          >
            <div className="wiki-card-body">
              <div className="wiki-card-tag">Category</div>
              <h2 className="wiki-card-title">{docs[0].category}</h2>
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
