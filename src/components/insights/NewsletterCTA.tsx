"use client";

import { FormEvent, useState } from "react";

interface NewsletterCTAProps {
  headline: string;
  buttonLabel: string;
}

export function NewsletterCTA({ headline, buttonLabel }: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-white shadow-panel sm:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{headline}</h2>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email Address"
            className="w-full rounded-full border border-white/20 bg-white/95 px-4 py-3 text-sm text-ink outline-none"
            required
          />
          <button type="submit" className="rounded-full bg-bronze px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f5726]">
            {buttonLabel}
          </button>
        </form>
        {subscribed ? (
          <p className="mt-3 rounded-xl border border-emerald-300/50 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100" role="status">
            Subscription successful. You will receive upcoming professional insight updates.
          </p>
        ) : null}
      </div>
    </section>
  );
}
