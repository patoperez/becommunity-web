"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Hand } from "./Hand";

const navLink =
  "relative py-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-magenta after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const setLocale = (l: "es" | "en") => {
    router.replace(pathname, { locale: l });
    setOpen(false);
  };

  const links: { href: string; label: string }[] = [
    { href: "/colegios", label: t("colegios") },
    { href: "/empresas", label: t("empresas") },
    { href: "/#servicios", label: t("metodologia") },
    { href: "/#servicios", label: t("casos") },
    { href: "/#servicios", label: t("recursos") },
  ];

  const handColors = ["#1B72B8", "#E23B8A", "#7DB52E", "#F4B72A", "#9B84C4"];

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          scrolled || open ? "border-b border-paper-2 bg-paper/90" : "border-b border-transparent bg-paper/70"
        }`}
      >
        <div className="mx-auto flex h-16 w-[min(1240px,92vw)] items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative z-10 flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-primary"
          >
            be<span className="mb-3 inline-block h-2 w-2 rounded-full bg-yellow" />community
          </Link>

          <nav className="hidden items-center gap-8 text-[0.94rem] font-medium md:flex">
            {links.map((l, i) => (
              <Link key={i} href={l.href} className={navLink}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
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
              className="hidden rounded-full bg-magenta px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-ink md:inline-block"
            >
              {t("cta")}
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-[2px] w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil: hermano del header (fuera del backdrop-blur) para que el fixed sea relativo a la pantalla */}
      <div
        className={`fixed inset-0 z-40 bg-paper md:hidden transition-[opacity,transform] duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-[min(1240px,92vw)] flex-col pt-24">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 border-b border-paper-2 py-5 font-display text-[1.8rem] transition-colors hover:text-primary"
            >
              <Hand color={handColors[i % handColors.length]} size={26} />
              {l.label}
            </Link>
          ))}
          <a
            href="/#cta"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-6 py-4 text-[1.05rem] font-semibold text-white transition-colors hover:bg-ink"
          >
            {t("cta")} <span>→</span>
          </a>
        </nav>
      </div>
    </>
  );
}
