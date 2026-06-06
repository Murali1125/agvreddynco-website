import Image from "next/image";

interface ArticleHeaderProps {
  title: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  featuredImage: string;
}

export function ArticleHeader({ title, category, author, publishDate, readTime, featuredImage }: ArticleHeaderProps) {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <header className="border-b border-ink/10 bg-hero-gradient">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{category}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-slate">
          By {author} • {formattedDate} • {readTime}
        </p>
        <div className="relative mt-8 h-[280px] overflow-hidden rounded-2xl sm:h-[420px]">
          <Image src={featuredImage} alt={title} fill className="object-cover" priority sizes="100vw" />
        </div>
      </div>
    </header>
  );
}
