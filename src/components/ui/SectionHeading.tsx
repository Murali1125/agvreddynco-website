interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-midnight sm:text-4xl">{title}</h2>
      <span className="mt-4 block h-1 w-24 rounded-full bg-gradient-to-r from-royal via-plum to-teal" />
      {description ? <p className="mt-5 text-base text-slate">{description}</p> : null}
    </div>
  );
}
