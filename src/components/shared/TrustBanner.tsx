import { CheckCircle2 } from "lucide-react";
import { TrustBannerContent } from "@/types/trust";

interface TrustBannerProps {
  content: TrustBannerContent;
}

export function TrustBanner({ content }: TrustBannerProps) {
  return (
    <section className="border-y border-primary-200 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">{content.eyebrow}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {content.items.map((item) => (
            <div key={item.label} className="inline-flex items-center gap-2 rounded-xl border border-primary-200 bg-white px-4 py-3 shadow-sm">
              <CheckCircle2 size={16} className="text-bronze" />
              <p className="text-sm font-medium text-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
