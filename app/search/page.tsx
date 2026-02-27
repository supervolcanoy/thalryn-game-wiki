import SearchClient from "@/components/search-client";

export default function SearchPage() {
  return (
    <>
      <div className="wiki-page-header">
        <h1 className="wiki-page-title">Search</h1>
        <div className="wiki-page-subtitle">
          Full-text search across article titles, summaries, and content.
        </div>
      </div>
      <SearchClient />
    </>
  );
}
