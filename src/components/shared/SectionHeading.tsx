interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">{title}</h2>
      <span className="mt-4 block h-1 w-24 rounded-full bg-gradient-to-r from-royal via-plum to-teal" />
      {description ? <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">{description}</p> : null}
    </div>
  );
}
