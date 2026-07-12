"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { Hand } from "./Hand";

export function Services() {
  const t = useTranslations("services");
  const rows = [
    { c: "#1B72B8", title: t("s1Title"), text: t("s1Text"), tag: t("s1Tag") },
    { c: "#E23B8A", title: t("s2Title"), text: t("s2Text"), tag: t("s2Tag") },
    { c: "#7DB52E", title: t("s3Title"), text: t("s3Text"), tag: t("s3Tag") },
    { c: "#9B84C4", title: t("s4Title"), text: t("s4Text"), tag: t("s4Tag") },
  ];

  return (
    <section id="servicios" className="mx-auto w-[min(1240px,92vw)] pb-24 pt-10">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("kicker")}
      </span>
      <Reveal>
        <h2 className="mt-3 max-w-[18ch] text-[clamp(2rem,4vw,3.2rem)]">{t("title")}</h2>
      </Reveal>

      <div className="mt-11 border-b border-paper-2">
        {rows.map((r, i) => (
          <Reveal key={i}>
            <div className="group grid grid-cols-[40px_1fr] items-center gap-4 border-t border-paper-2 py-7 transition-all duration-300 hover:bg-paper-2 hover:pl-3.5 md:grid-cols-[52px_1fr_auto] md:gap-6">
              <span className="flex">
                <Hand color={r.c} size={34} />
              </span>
              <div>
                <h3 className="mb-1.5 text-[1.55rem]">{r.title}</h3>
                <p className="max-w-[62ch] text-[0.98rem] text-ink/70">{r.text}</p>
              </div>
              <span className="hidden whitespace-nowrap text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-ink/40 md:block">
                {r.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
