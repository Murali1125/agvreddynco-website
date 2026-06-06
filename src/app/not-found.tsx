import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Page Not Found</h1>
        <p className="mt-3 text-base text-slate">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-slate">
          Return Home
        </Link>
      </section>
    </main>
  );
}
