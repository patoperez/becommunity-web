"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";

type Item = { title: string; text: string };

export function PainPoints({ ns }: { ns: string }) {
  const t = useTranslations(ns);
  const items = t.raw("pains.items") as Item[];

  return (
    <section id="reto" className="mx-auto w-[min(1240px,92vw)] py-20">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("pains.kicker")}
      </span>
      <Reveal>
        <h2 className="mt-3 max-w-[24ch] text-[clamp(1.8rem,3.6vw,2.9rem)]">{t("pains.title")}</h2>
      </Reveal>
      <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={i} delay={(i % 2) * 0.05}>
            <div className="border-t border-paper-2 pt-5">
              <h3 className="text-[1.3rem]">{it.title}</h3>
              <p className="mt-2 max-w-[46ch] text-[1rem] text-ink/70">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
