"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { Hand } from "./Hand";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const heroHands = ["#7FB2DD", "#E23B8A", "#F4B72A", "#7DB52E", "#9B84C4", "#7FB2DD"];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="mx-auto w-[min(1240px,92vw)] pb-10 pt-10 md:pb-14 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
        <div>
          <div className="mb-6 flex items-center gap-3.5 md:mb-7">
            <span className="h-0.5 w-8 bg-yellow md:w-11" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary md:text-[0.8rem] md:tracking-[0.14em]">
              {t("kicker")}
            </span>
          </div>
          <Reveal>
            <h1 className="text-[clamp(2.7rem,10vw,6.4rem)]">
              {t("titleA")} <span className="text-magenta">{t("titleEm")}</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-[44ch] text-[1.05rem] text-ink/80 md:mt-6 md:text-[1.18rem]">
              {t("lead")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-9 md:gap-4">
              <MagneticButton onClick={() => scrollTo("paths")}>
                {t("cta1")}{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </MagneticButton>
              <MagneticButton variant="ghost" onClick={() => scrollTo("servicios")}>
                {t("cta2")}
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[10px] bg-ink md:aspect-[4/5]">
            <div className="grid rotate-[-8deg] grid-cols-3 gap-3 md:gap-4">
              {heroHands.map((c, i) => (
                <Hand key={i} color={c} size={44} className="h-9 w-9 md:h-[46px] md:w-[46px]" />
              ))}
            </div>
            <span className="absolute bottom-4 left-5 text-[0.72rem] uppercase tracking-[0.12em] text-paper/75 md:text-[0.76rem]">
              {t("art")}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-y border-paper-2 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 md:mt-5 md:py-6">
        <span className="flex items-center gap-2.5 text-[0.95rem] font-medium md:text-[0.98rem]">
          <Hand color="#1B72B8" size={20} /> {t("v1")}
        </span>
        <span className="flex items-center gap-2.5 text-[0.95rem] font-medium md:text-[0.98rem]">
          <Hand color="#E23B8A" size={20} /> {t("v2")}
        </span>
        <span className="flex items-center gap-2.5 text-[0.95rem] font-medium md:text-[0.98rem]">
          <Hand color="#7DB52E" size={20} /> {t("v3")}
        </span>
      </div>
    </section>
  );
}
