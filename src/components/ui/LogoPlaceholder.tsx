interface LogoPlaceholderProps {
  compact?: boolean;
}

export function LogoPlaceholder({ compact = false }: LogoPlaceholderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary-300 bg-gradient-to-br from-primary-100 via-primary-200 to-secondary-100 text-xs font-bold tracking-widest text-primary-700 shadow-soft">
        AGV
      </div>
      {!compact ? (
        <div>
          <p className="text-sm font-semibold text-midnight">AGV Reddy & Co.</p>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">Chartered Accountants</p>
        </div>
      ) : null}
    </div>
  );
}
