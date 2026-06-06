"use client";

import { useMemo, useState } from "react";
import { Article } from "@/types/article";
import { SearchBar } from "@/components/insights/SearchBar";
import { FilterPanel } from "@/components/insights/FilterPanel";
import { ArticlesGrid } from "@/components/insights/ArticlesGrid";

interface ArticlesExplorerProps {
  articles: Article[];
  categories: string[];
  tags: string[];
}

export function ArticlesExplorer({ articles, categories, tags }: ArticlesExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [latestOnly, setLatestOnly] = useState(true);

  const filtered = useMemo(() => {
    let dataset = [...articles];

    if (category) {
      dataset = dataset.filter((article) => article.category === category);
    }

    if (tag) {
      dataset = dataset.filter((article) => article.tags.includes(tag));
    }

    if (featuredOnly) {
      dataset = dataset.filter((article) => article.featured);
    }

    if (search.trim()) {
      const term = search.toLowerCase();
      dataset = dataset.filter(
        (article) =>
          article.title.toLowerCase().includes(term) ||
          article.category.toLowerCase().includes(term) ||
          article.tags.some((item) => item.toLowerCase().includes(term))
      );
    }

    if (latestOnly) {
      dataset.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    }

    return dataset;
  }, [articles, category, featuredOnly, latestOnly, search, tag]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <SearchBar value={search} onChange={setSearch} />
        <FilterPanel
          categories={categories}
          tags={tags}
          category={category}
          tag={tag}
          featuredOnly={featuredOnly}
          latestOnly={latestOnly}
          onCategoryChange={setCategory}
          onTagChange={setTag}
          onFeaturedOnlyChange={setFeaturedOnly}
          onLatestOnlyChange={setLatestOnly}
        />
      </div>
      <div className="mt-6">
        <ArticlesGrid id="latest-articles" articles={filtered} />
      </div>
    </section>
  );
}
