import Link from "next/link";
import { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function ActionButton({
  href,
  children,
  variant = "primary",
  className = ""
}: ActionButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-soft hover:-translate-y-0.5 hover:from-primary-600 hover:to-primary-700 hover:shadow-premium"
      : variant === "secondary"
        ? "bg-gradient-to-r from-secondary-400 to-secondary-500 text-white shadow-soft hover:-translate-y-0.5 hover:from-secondary-500 hover:to-secondary-600 hover:shadow-glow"
        : "border border-primary-300 bg-white text-primary-700 shadow-sm hover:-translate-y-0.5 hover:border-primary-500 hover:bg-primary-50";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variantClass} ${className}`}
    >
      {children}
    </Link>
  );
}
