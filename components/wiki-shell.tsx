"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { docsForTab, getTabForCategory, WIKI_TABS, type WikiDocMeta, type WikiTabKey } from "@/lib/wiki-nav";
import { WIKI_ENTITIES } from "@/lib/wiki-entities";

function getActiveTab(pathname: string, docs: WikiDocMeta[]): WikiTabKey | null {
  if (pathname.startsWith("/characters")) {
    return "Characters / NPCs";
  }

  if (pathname.startsWith("/lore")) {
    return "Lore / World";
  }

  if (pathname.startsWith("/items")) {
    return "Items / Equipment";
  }

  if (pathname.startsWith("/wiki/")) {
    const slug = pathname.replace("/wiki/", "").split("/")[0] ?? "";
    const entity = WIKI_ENTITIES.find((item) => item.sourceSlug === slug);
    if (entity) {
      return entity.kind === "Bestiary" ? "Characters / NPCs" : entity.kind;
    }
    const doc = docs.find((item) => item.slug === slug);
    if (doc) {
      return getTabForCategory(doc.category);
    }
  }

  return null;
}

export default function WikiShell({
  children,
  docs
}: {
  children: React.ReactNode;
  docs: WikiDocMeta[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") {
      setTheme(current);
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  const activeTab = getActiveTab(pathname, docs);
  const contextualDocs = activeTab ? docsForTab(docs, activeTab) : [];
  const inlineResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [];
    }
    return docs
      .filter(
        (doc) =>
          doc.title.toLowerCase().includes(q) ||
          doc.slug.toLowerCase().includes(q) ||
          doc.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [docs, query]);

  return (
    <div className="wiki-root">
      <header className="wiki-header">
        <Link className="wiki-logo" href="/">
          THALRYN<span className="wiki-logo-emphasis">WIKI</span>
        </Link>

        <div className="wiki-header-search">
          <span className="wiki-header-search-icon">⌕</span>
          <input
            placeholder="Search Thalryn Wiki..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 120)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                const first = inlineResults[0];
                if (first) {
                  router.push(`/wiki/${first.slug}`);
                } else {
                  router.push("/search");
                }
              }
            }}
            aria-label="Search Thalryn Wiki"
          />
          {searchFocused && query.trim() ? (
            <div className="wiki-search-dropdown">
              {inlineResults.length > 0 ? (
                inlineResults.map((result) => (
                  <Link
                    key={result.slug}
                    className="wiki-search-result"
                    href={`/wiki/${result.slug}`}
                    onMouseDown={(event) => event.preventDefault()}
                  >
                    <span className="wiki-search-result-title">{result.title}</span>
                    <span className="wiki-search-result-meta">{result.category}</span>
                  </Link>
                ))
              ) : (
                <Link
                  className="wiki-search-result"
                  href="/search"
                  onMouseDown={(event) => event.preventDefault()}
                >
                  <span className="wiki-search-result-title">No instant matches</span>
                  <span className="wiki-search-result-meta">Open full search page</span>
                </Link>
              )}
            </div>
          ) : null}
        </div>

        <nav className="wiki-header-nav">
          {[
            { label: "Main Page", href: "/" },
            { label: "Search", href: "/search" },
            { label: "Categories", href: "/categories" },
            { label: "Tags", href: "/tags" }
          ].map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                className={`wiki-header-nav-link${active ? " wiki-header-nav-link-active" : ""}`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            className="wiki-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {theme === "dark" ? "\u2600" : "\u263D"}
          </button>
        </nav>
      </header>

      <div className="wiki-tabbar">
        {WIKI_TABS.map((tab) => (
          <Link
            key={tab.key}
            className={`wiki-tab${activeTab === tab.key ? " wiki-tab-active" : ""}`}
            href={tab.href}
          >
            {tab.key}
          </Link>
        ))}
      </div>

      <div className="wiki-shell">
        <aside className="wiki-sidebar">
          <section className="wiki-side-box">
            <div className="wiki-side-title">Navigation</div>
            <div className="wiki-side-links">
              <Link className="wiki-slink" href="/">
                Main Page
              </Link>
              <Link className="wiki-slink" href="/search">
                Search
              </Link>
              <Link className="wiki-slink" href="/categories">
                All Categories
              </Link>
              <Link className="wiki-slink" href="/tags">
                All Tags
              </Link>
            </div>
          </section>

          <section className="wiki-side-box">
            <div className="wiki-side-title">{activeTab ?? "Current Section"}</div>
            <div className="wiki-side-links">
              {contextualDocs.length > 0 ? (
                contextualDocs.map((doc) => (
                  <Link className="wiki-slink" href={`/wiki/${doc.slug}`} key={doc.slug}>
                    {doc.title}
                  </Link>
                ))
              ) : (
                <>
                  <Link className="wiki-slink" href="/characters">
                    Characters / NPCs
                  </Link>
                  <Link className="wiki-slink" href="/lore">
                    Lore / World
                  </Link>
                  <Link className="wiki-slink" href="/items">
                    Items / Equipment
                  </Link>
                </>
              )}
            </div>
          </section>

          <section className="wiki-side-box">
            <div className="wiki-side-title">Tools</div>
            <div className="wiki-side-links">
              <Link className="wiki-slink" href="/search">
                Search Articles
              </Link>
              <Link className="wiki-slink" href="/categories">
                Browse Categories
              </Link>
              <Link className="wiki-slink" href="/tags">
                Browse Tags
              </Link>
            </div>
          </section>
        </aside>

        <main className="wiki-main">{children}</main>
      </div>

      <footer className="wiki-footer">
        <span className="wiki-footer-brand">ThalrynWiki</span> - Fan-maintained
        encyclopedia for Thalryn. Not affiliated with the development team.
      </footer>
    </div>
  );
}
