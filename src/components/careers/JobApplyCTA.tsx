import { ActionButton } from "@/components/ui/ActionButton";

interface JobApplyCTAProps {
  href: string;
}

export function JobApplyCTA({ href }: JobApplyCTAProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-white shadow-panel sm:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">Interested In This Role?</h2>
        <ActionButton href={href} className="mt-7 bg-white text-ink hover:bg-mist">
          Apply Now
        </ActionButton>
      </div>
    </section>
  );
}
