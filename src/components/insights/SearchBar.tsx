"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <label htmlFor="insights-search" className="sr-only">
        Search insights by title, category, or tags
      </label>
      <input
        id="insights-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title, category, or tags"
        className="w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-bronze"
      />
    </div>
  );
}
