"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Hand } from "./Hand";
import { Link } from "@/i18n/navigation";

export function DualPath() {
  const t = useTranslations("paths");

  return (
    <section id="paths" className="mx-auto w-[min(1240px,92vw)] pb-5 pt-[88px]">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("kicker")}
      </span>
      <Reveal>
        <h2 className="mt-3 max-w-[20ch] text-[clamp(1.9rem,3.8vw,3rem)]">{t("title")}</h2>
      </Reveal>

      <div className="mt-11 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Link
            href="/colegios"
            className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[12px] bg-paper-2 p-9 transition-transform duration-500 hover:-translate-y-1.5"
          >
            <span className="absolute right-6 top-7">
              <Hand color="#1B72B8" size={40} />
            </span>
            <div>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-primary">
                {t("colegiosTag")}
              </span>
              <h3 className="mb-3 mt-3.5 text-[2.1rem]">{t("colegiosTitle")}</h3>
              <p className="max-w-[34ch] text-[1.02rem] text-ink/90">{t("colegiosText")}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-magenta">
              {t("explore")}{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <Link
            href="/empresas"
            className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[12px] bg-ink p-9 text-paper transition-transform duration-500 hover:-translate-y-1.5"
          >
            <span className="absolute right-6 top-7">
              <Hand color="#F4B72A" size={40} />
            </span>
            <div>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-yellow">
                {t("empresasTag")}
              </span>
              <h3 className="mb-3 mt-3.5 text-[2.1rem]">{t("empresasTitle")}</h3>
              <p className="max-w-[34ch] text-[1.02rem] opacity-90">{t("empresasText")}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow">
              {t("explore")}{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
