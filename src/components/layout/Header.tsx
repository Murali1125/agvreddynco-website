"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { homepageData } from "@/data/homepageData";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMobileMenu, toggleMobileMenu } from "@/store/slices/uiSlice";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isSticky ? "border-primary-200/80 bg-white/95 shadow-soft backdrop-blur" : "border-transparent bg-white/80"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => dispatch(closeMobileMenu())}>
          <LogoPlaceholder />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {homepageData.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActiveLink(item.href)
                  ? "bg-gradient-to-r from-primary-100 via-primary-50 to-secondary-100 text-midnight"
                  : "text-slate hover:bg-primary-50 hover:text-midnight"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary-200 text-midnight md:hidden"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-primary-200/80 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1">
            {homepageData.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActiveLink(item.href)
                    ? "bg-gradient-to-r from-primary-100 via-primary-50 to-secondary-100 text-midnight"
                    : "text-slate hover:bg-cloud hover:text-midnight"
                }`}
                onClick={() => dispatch(closeMobileMenu())}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
