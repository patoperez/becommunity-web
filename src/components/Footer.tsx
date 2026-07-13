"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-10 bg-ink px-0 pb-10 pt-20 text-paper">
      <div className="mx-auto w-[min(1240px,92vw)]">
        <div className="mb-14 grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-1 font-display text-2xl font-bold text-white">
              be<span className="mb-3 inline-block h-2 w-2 rounded-full bg-yellow" />community
            </div>
            <p className="max-w-[34ch] text-[0.95rem] opacity-70">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="mb-5 text-[0.76rem] font-semibold uppercase tracking-[0.14em] opacity-50">
              {t("footer.explore")}
            </h4>
            <Link href="/colegios" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              {t("nav.colegios")}
            </Link>
            <Link href="/empresas" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              {t("nav.empresas")}
            </Link>
            <a href="/#servicios" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              {t("nav.metodologia")}
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-[0.76rem] font-semibold uppercase tracking-[0.14em] opacity-50">
              {t("footer.contact")}
            </h4>
            <a href="mailto:info@becommunitymx.com" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              info@becommunitymx.com
            </a>
            <a href="tel:+525553516276" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              55 5351 6276
            </a>
            <a href="https://www.linkedin.com/company/be-community-mexico/" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              LinkedIn
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-[0.76rem] font-semibold uppercase tracking-[0.14em] opacity-50">
              {t("footer.legal")}
            </h4>
            <Link href="/aviso-de-privacidad" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              {t("footer.privacy")}
            </Link>
            <a href="#" className="mb-2.5 block text-[0.95rem] opacity-85 transition-colors hover:text-yellow">
              {t("footer.terms")}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-paper/15 pt-6 text-[0.85rem] opacity-60">
          <span>© 2026 Be Community. {t("footer.rights")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
