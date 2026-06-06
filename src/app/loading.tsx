export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[40vh] w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm text-slate shadow-sm">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-bronze" />
        Loading content...
      </div>
    </main>
  );
}
