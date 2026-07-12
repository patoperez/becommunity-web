"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const navLink =
  "relative py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-magenta after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLocale = (l: "es" | "en") => router.replace(pathname, { locale: l });

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-paper-2 bg-paper/85" : "border-b border-transparent bg-paper/70"
      }`}
    >
      <div className="mx-auto flex w-[min(1240px,92vw)] items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-primary"
        >
          be<span className="mb-3 inline-block h-2 w-2 rounded-full bg-yellow" />community
        </Link>

        <nav className="hidden items-center gap-8 text-[0.94rem] font-medium md:flex">
          <Link href="/colegios" className={navLink}>
            {t("colegios")}
          </Link>
          <Link href="/empresas" className={navLink}>
            {t("empresas")}
          </Link>
          <a href="/#servicios" className={navLink}>
            {t("metodologia")}
          </a>
          <a href="/#servicios" className={navLink}>
            {t("casos")}
          </a>
          <a href="/#servicios" className={navLink}>
            {t("recursos")}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex overflow-hidden rounded-full border border-paper-2 text-[0.78rem] font-semibold">
            <button
              onClick={() => setLocale("es")}
              className={`px-3 py-1.5 transition-colors ${locale === "es" ? "bg-primary text-white" : "text-ink"}`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 transition-colors ${locale === "en" ? "bg-primary text-white" : "text-ink"}`}
            >
              EN
            </button>
          </div>
          <a
            href="/#cta"
            className="hidden rounded-full bg-magenta px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-ink sm:inline-block"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
