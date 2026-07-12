"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";
import { Hand } from "../Hand";

type Item = { title: string; text: string };
const colors = ["#1B72B8", "#E23B8A", "#7DB52E", "#F4B72A"];

export function Benefits({ ns }: { ns: string }) {
  const t = useTranslations(ns);
  const items = t.raw("benefits.items") as Item[];

  return (
    <section id="resultados" className="mx-auto w-[min(1240px,92vw)] py-24">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("benefits.kicker")}
      </span>
      <Reveal>
        <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)]">{t("benefits.title")}</h2>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((b, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div>
              <Hand color={colors[i % colors.length]} size={34} />
              <h3 className="mt-4 text-[1.3rem]">{b.title}</h3>
              <p className="mt-2 text-[0.98rem] text-ink/70">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
