import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link className="transition hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-ink">{item.label}</span>
              )}
              {!isLast ? <span className="text-slate/60">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
