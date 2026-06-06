"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger/logger";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    logger.error("Unhandled route error", { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">500</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Something Went Wrong</h1>
        <p className="mt-3 text-base text-slate">An unexpected error occurred. Please try again.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-slate"
        >
          Retry
        </button>
      </section>
    </main>
  );
}
