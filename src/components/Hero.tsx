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
    <section className="mx-auto w-[min(1240px,92vw)] pb-14 pt-16">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-7 flex items-center gap-3.5">
            <span className="h-0.5 w-11 bg-yellow" />
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
              {t("kicker")}
            </span>
          </div>
          <Reveal>
            <h1 className="text-[clamp(3rem,7.4vw,6.4rem)]">
              {t("titleA")} <span className="text-magenta">{t("titleEm")}</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-[44ch] text-[1.18rem] text-ink/80">{t("lead")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap gap-4">
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
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[10px] bg-ink">
            <div className="grid rotate-[-8deg] grid-cols-3 gap-4">
              {heroHands.map((c, i) => (
                <Hand key={i} color={c} size={46} />
              ))}
            </div>
            <span className="absolute bottom-4 left-5 text-[0.76rem] uppercase tracking-[0.12em] text-paper/75">
              {t("art")}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-8 border-y border-paper-2 py-6">
        <span className="flex items-center gap-2.5 text-[0.98rem] font-medium">
          <Hand color="#1B72B8" size={20} /> {t("v1")}
        </span>
        <span className="flex items-center gap-2.5 text-[0.98rem] font-medium">
          <Hand color="#E23B8A" size={20} /> {t("v2")}
        </span>
        <span className="flex items-center gap-2.5 text-[0.98rem] font-medium">
          <Hand color="#7DB52E" size={20} /> {t("v3")}
        </span>
      </div>
    </section>
  );
}
