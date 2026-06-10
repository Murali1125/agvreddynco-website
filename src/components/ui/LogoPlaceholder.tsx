import Image from "next/image";
import Logo from "@/assets/logo.jpg";

interface LogoPlaceholderProps {
  compact?: boolean;
}

export function LogoPlaceholder({ compact = false }: LogoPlaceholderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary-300 from-primary-100 via-primary-200 to-secondary-100 text-xs font-bold tracking-widest text-primary-700 shadow-soft" style={{ padding: 2 }}>
         <Image 
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
          />
      </div>
      {!compact ? (
        <div>
          <p className="text-sm font-semibold text-midnight">AGV Reddy & Co.</p>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">Chartered Accountants </p>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">08554 274969 </p>

        </div>
      ) : null}
    </div>
  );
}
