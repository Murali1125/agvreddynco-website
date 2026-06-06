import Link from "next/link";
import { Article, ArticleContentBlock } from "@/types/article";

interface ArticleContentProps {
  article: Article;
  prevLink?: {
    label: string;
    href: string;
  };
  nextLink?: {
    label: string;
    href: string;
  };
}

function renderBlock(block: ArticleContentBlock, index: number) {
  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h2 key={`${block.id}-${index}`} id={block.id} className="mt-10 text-2xl font-semibold text-ink">
          {block.text}
        </h2>
      );
    }

    return (
      <h3 key={`${block.id}-${index}`} id={block.id} className="mt-8 text-xl font-semibold text-ink">
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={`p-${index}`} className="mt-4 text-base leading-relaxed text-slate">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    if (block.ordered) {
      return (
        <ol key={`l-${index}`} className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    }

    return (
      <ul key={`l-${index}`} className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <div key={`t-${index}`} className="mt-5 overflow-x-auto">
        <table className="min-w-full border border-ink/10 text-sm">
          <thead className="bg-cream">
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="border border-ink/10 px-3 py-2 text-left font-semibold text-ink">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={row.join("-") + rowIndex}>
                {row.map((cell) => (
                  <td key={cell} className="border border-ink/10 px-3 py-2 text-slate">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote key={`q-${index}`} className="mt-6 rounded-2xl border-l-4 border-bronze bg-cream px-5 py-4">
        <p className="text-base italic text-slate">{block.text}</p>
        {block.cite ? <cite className="mt-2 block text-sm text-ink">{block.cite}</cite> : null}
      </blockquote>
    );
  }

  return (
    <aside key={`c-${index}`} className="mt-6 rounded-2xl border border-bronze/25 bg-amber-50 px-5 py-4">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze">{block.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate">{block.text}</p>
    </aside>
  );
}

export function ArticleContent({ article, prevLink, nextLink }: ArticleContentProps) {
  const headings = article.content.filter((block): block is Extract<ArticleContentBlock, { type: "heading" }> => block.type === "heading");

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Table Of Contents</p>
          <nav className="mt-3">
            <ul className="space-y-2 text-sm">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`} className="text-slate hover:text-ink">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 border-t border-ink/10 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Share</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" className="rounded-full border border-ink/15 px-3 py-1 text-xs text-slate">
                LinkedIn
              </button>
              <button type="button" className="rounded-full border border-ink/15 px-3 py-1 text-xs text-slate">
                X
              </button>
              <button type="button" className="rounded-full border border-ink/15 px-3 py-1 text-xs text-slate">
                Email
              </button>
            </div>
          </div>
        </div>
      </aside>

      <article>
        {article.content.map((block, index) => renderBlock(block, index))}

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {prevLink ? (
            <Link href={prevLink.href} className="rounded-2xl border border-ink/10 bg-white p-4 text-sm text-slate hover:text-ink">
              <p className="text-xs uppercase tracking-[0.14em] text-bronze">Previous Article</p>
              <p className="mt-2 font-medium">{prevLink.label}</p>
            </Link>
          ) : null}
          {nextLink ? (
            <Link href={nextLink.href} className="rounded-2xl border border-ink/10 bg-white p-4 text-sm text-slate hover:text-ink">
              <p className="text-xs uppercase tracking-[0.14em] text-bronze">Next Article</p>
              <p className="mt-2 font-medium">{nextLink.label}</p>
            </Link>
          ) : null}
        </div>
      </article>
    </section>
  );
}
