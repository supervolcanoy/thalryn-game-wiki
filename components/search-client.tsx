"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import MiniSearch from "minisearch";

type SearchDoc = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
};

type SearchPayload = {
  index: unknown;
  docs: SearchDoc[];
};

type SearchHit = SearchDoc & {
  score: number;
  terms: string[];
};

const miniSearchOptions = {
  fields: ["title", "excerpt", "body"],
  storeFields: ["slug", "title", "excerpt", "category", "tags"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2
  }
};

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const [payload, setPayload] = useState<SearchPayload | null>(null);

  useEffect(() => {
    async function load() {
      const response = await fetch("/search-index.json");
      const data = (await response.json()) as SearchPayload;
      setPayload(data);
    }

    void load();
  }, []);

  const engine = useMemo(() => {
    if (!payload) {
      return null;
    }

    if (typeof payload.index === "string") {
      return MiniSearch.loadJSON(payload.index, miniSearchOptions);
    }

    return MiniSearch.loadJS(payload.index as Record<string, unknown>, miniSearchOptions);
  }, [payload]);

  const results = useMemo(() => {
    if (!engine || !query.trim()) {
      return [];
    }

    const found = engine.search(query);
    return found as unknown as SearchHit[];
  }, [engine, query]);

  return (
    <section>
      <input
        className="search-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search The Hazard, Soul Sirens, crafting, deep undergrounds..."
      />

      <div style={{ marginTop: "1rem" }} className="wiki-grid wiki-card-grid">
        {query.trim() && results.length === 0 ? (
          <p className="muted">No results found.</p>
        ) : null}

        {results.map((item) => (
          <Link
            className="wiki-card wiki-card-link"
            href={`/wiki/${item.slug}`}
            key={item.id}
          >
            <div className="wiki-card-body">
              <div className="wiki-card-tag">{item.category}</div>
              <h2 className="wiki-card-title">{item.title}</h2>
              <p className="wiki-card-desc">{item.excerpt}</p>
              <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
                <span className="wiki-chip">{item.category}</span>
                {item.tags.map((tag) => (
                  <span key={tag} className="wiki-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
