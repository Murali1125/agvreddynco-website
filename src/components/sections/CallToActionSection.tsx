import { homepageData } from "@/data/homepageData";
import { ActionButton } from "@/components/ui/ActionButton";

export function CallToActionSection() {
  return (
    <section className="bg-premium-gradient bg-soft-mesh py-20 text-midnight sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary-200/80 bg-white/65 p-8 shadow-premium backdrop-blur-sm sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">Get In Touch</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            {homepageData.callToAction.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">
            Speak with our senior team for audit readiness, tax planning, compliance strategy and transaction support.
          </p>
          <div className="mt-8">
            <ActionButton href={homepageData.callToAction.href} variant="secondary">
              {homepageData.callToAction.buttonLabel}
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
