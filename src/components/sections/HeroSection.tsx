import { homepageData } from "@/data/homepageData";

export function HeroSection() {

  return (
    <section id="home" className="section-separator pattern-grid relative overflow-hidden bg-hero-gradient pb-15 pt-20 sm:pb-15 sm:pt-28">
      <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-royal/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-plum/15 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-teal/15 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">Chartered Accountants Since 1984</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-midnight sm:text-5xl lg:text-6xl">
            {homepageData.hero.headline}
          </h1>
          <p className="mt-6  text-base leading-relaxed text-slate sm:text-lg" style={{ textAlign: "justify" }}>
            {homepageData.hero.subheadline}
          </p>
          {/* <p className="mt-5 text-sm font-medium text-royal">
            Serving Manufacturing, Construction, Healthcare, Education, Agriculture, Financial Services, Banking,
            NGOs, Government Organizations and Startups.
          </p> */}

          {/* <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ActionButton href={homepageData.hero.primaryCta.href}>{homepageData.hero.primaryCta.label}</ActionButton>
            <ActionButton href={homepageData.hero.secondaryCta.href} variant="secondary">
              {homepageData.hero.secondaryCta.label}
            </ActionButton>
          </div> */}
        </div>

        {/* <div className="glass-panel grid animate-fade-up gap-4 rounded-3xl p-6 shadow-premium">
          <div className="flex items-center gap-3 rounded-2xl bg-white/75 p-4">
            <Landmark className="h-5 w-5 text-royal" />
            <p className="text-sm font-medium text-midnight">Independent Audit Excellence</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/75 p-4">
            <Scale className="h-5 w-5 text-teal" />
            <p className="text-sm font-medium text-midnight">Regulatory and Compliance Strength</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/75 p-4">
            <FileBadge className="h-5 w-5 text-plum" />
            <p className="text-sm font-medium text-midnight">Advisory for Sustainable Growth</p>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2 text-center">
            <div className="rounded-xl bg-white/70 p-3">
              <p className="text-xl font-semibold text-midnight">40+</p>
              <p className="text-xs text-slate">Years</p>
            </div>
            <div className="rounded-xl bg-white/70 p-3">
              <p className="text-xl font-semibold text-midnight">3</p>
              <p className="text-xs text-slate">Offices</p>
            </div>
            <div className="rounded-xl bg-white/70 p-3">
              <p className="text-xl font-semibold text-midnight">10+</p>
              <p className="text-xs text-slate">Industries</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
