"use client";

interface FilterPanelProps {
  categories: string[];
  tags: string[];
  category: string;
  tag: string;
  featuredOnly: boolean;
  latestOnly: boolean;
  onCategoryChange: (value: string) => void;
  onTagChange: (value: string) => void;
  onFeaturedOnlyChange: (value: boolean) => void;
  onLatestOnlyChange: (value: boolean) => void;
}

export function FilterPanel({
  categories,
  tags,
  category,
  tag,
  featuredOnly,
  latestOnly,
  onCategoryChange,
  onTagChange,
  onFeaturedOnlyChange,
  onLatestOnlyChange
}: FilterPanelProps) {
  return (
    <div className="grid gap-3 rounded-2xl border border-ink/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-xl border border-ink/15 bg-white px-3 py-2 text-sm"
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={tag}
        onChange={(event) => onTagChange(event.target.value)}
        className="rounded-xl border border-ink/15 bg-white px-3 py-2 text-sm"
        aria-label="Filter by tag"
      >
        <option value="">All tags</option>
        {tags.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <label className="inline-flex items-center gap-2 text-sm text-slate">
        <input type="checkbox" checked={featuredOnly} onChange={(event) => onFeaturedOnlyChange(event.target.checked)} />
        Featured only
      </label>

      <label className="inline-flex items-center gap-2 text-sm text-slate">
        <input type="checkbox" checked={latestOnly} onChange={(event) => onLatestOnlyChange(event.target.checked)} />
        Latest first
      </label>
    </div>
  );
}
