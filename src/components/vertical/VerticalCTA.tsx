"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";
import { Hand } from "../Hand";

export function VerticalCTA({ ns }: { ns: string }) {
  const t = useTranslations(ns);

  return (
    <section id="cta" className="mx-auto w-[min(1240px,92vw)] py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[14px] bg-magenta px-[8%] py-[76px] text-center text-white">
          <div className="mb-6 flex justify-center gap-1.5">
            <Hand color="#7FB2DD" size={30} />
            <Hand color="#F4B72A" size={30} />
            <Hand color="#7DB52E" size={30} />
          </div>
          <h2 className="mx-auto mb-6 max-w-[22ch] text-[clamp(2rem,4.6vw,3.4rem)] text-white">
            {t("cta.title")} <span className="text-yellow">{t("cta.titleEm")}</span>
          </h2>
          <a
            href="mailto:info@becommunitymx.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {t("cta.button")} →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
