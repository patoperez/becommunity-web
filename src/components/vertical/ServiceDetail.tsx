"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";
import { Hand } from "../Hand";

type Item = { title: string; promise: string; points: string[]; result: string };
const colors = ["#1B72B8", "#E23B8A", "#7DB52E", "#9B84C4"];

export function ServiceDetail({ ns }: { ns: string }) {
  const t = useTranslations(ns);
  const items = t.raw("services.items") as Item[];

  return (
    <section id="servicios" className="mx-auto w-[min(1240px,92vw)] py-20">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("services.kicker")}
      </span>
      <Reveal>
        <h2 className="mt-3 max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)]">{t("services.title")}</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((s, i) => (
          <Reveal key={i} delay={(i % 2) * 0.06}>
            <div className="flex h-full flex-col rounded-[12px] border border-paper-2 bg-paper-2/40 p-8 transition-colors duration-300 hover:bg-paper-2">
              <Hand color={colors[i % colors.length]} size={38} />
              <h3 className="mt-5 text-[1.6rem]">{s.title}</h3>
              <p className="mt-2 text-[1.05rem] font-medium text-ink/80">{s.promise}</p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[0.98rem] text-ink/70">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
                      style={{ backgroundColor: colors[i % colors.length] }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-paper-2 pt-4 text-[0.98rem] font-semibold text-ink">
                {s.result}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
