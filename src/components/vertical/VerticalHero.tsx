"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { Hand } from "../Hand";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const hands = ["#7FB2DD", "#E23B8A", "#F4B72A", "#7DB52E", "#9B84C4", "#7FB2DD"];

export function VerticalHero({ ns }: { ns: string }) {
  const t = useTranslations(ns);

  return (
    <section className="mx-auto w-[min(1240px,92vw)] pb-12 pt-10 md:pb-14 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div>
          <div className="mb-6 flex items-center gap-3.5 md:mb-7">
            <span className="h-0.5 w-8 bg-yellow md:w-11" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary md:text-[0.8rem] md:tracking-[0.14em]">
              {t("hero.kicker")}
            </span>
          </div>
          <Reveal>
            <h1 className="text-[clamp(2.5rem,9vw,5.6rem)]">
              {t("hero.title")} <span className="text-magenta">{t("hero.titleEm")}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-[46ch] text-[1.05rem] text-ink/80 md:mt-6 md:text-[1.18rem]">
              {t("hero.lead")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-9 md:gap-4">
              <MagneticButton onClick={() => scrollTo("cta")}>
                {t("hero.cta1")}{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </MagneticButton>
              <MagneticButton variant="ghost" onClick={() => scrollTo("metodo")}>
                {t("hero.cta2")}
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[10px] bg-ink md:aspect-[4/5]">
            <div className="grid rotate-[-8deg] grid-cols-3 gap-3 md:gap-4">
              {hands.map((c, i) => (
                <Hand key={i} color={c} size={44} className="h-9 w-9 md:h-[46px] md:w-[46px]" />
              ))}
            </div>
            <span className="absolute bottom-4 left-5 text-[0.72rem] uppercase tracking-[0.12em] text-paper/75 md:text-[0.76rem]">
              {t("hero.art")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
