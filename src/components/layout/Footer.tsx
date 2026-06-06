import Link from "next/link";
import { homepageData } from "@/data/homepageData";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";

export function Footer() {
  return (
    <footer className="bg-premium-gradient bg-soft-mesh text-slate">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_1.4fr_1fr] lg:px-8">
        <div className="space-y-4">
          <LogoPlaceholder compact />
          <p className="max-w-sm text-sm leading-relaxed text-slate/90">
            Established in 1984, AGV Reddy & Co. delivers partner-led audit, taxation, compliance and advisory
            services with offices in Anantapur, Tirupati and Bengaluru.
          </p>
          <p className="text-sm font-medium text-ink">Peer Reviewed | C&AG Empanelled | RBI Registered | NABARD Empanelled</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {homepageData.footer.quickLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{group.title}</p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate transition hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-2xl p-5 text-midnight shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate/90">
            <li className="text-slate">{homepageData.footer.contact.email}</li>
            
            {homepageData.footer.contact.phone ? <li className="text-slate">{homepageData.footer.contact.phone}</li> : null}
            <li className="text-slate">Anantapur | Tirupati | Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-200/80 py-5 text-center text-xs text-slate/80">
        {homepageData.footer.copyright}
      </div>
    </footer>
  );
}
