"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";

type Step = { title: string; text: string };

export function MethodSteps({ ns }: { ns: string }) {
  const t = useTranslations(ns);
  const steps = t.raw("method.steps") as Step[];

  return (
    <section id="metodo" className="bg-ink py-24 text-paper">
      <div className="mx-auto w-[min(1240px,92vw)]">
        <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-yellow">
          {t("method.kicker")}
        </span>
        <Reveal>
          <h2 className="mt-3 max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)] text-paper">
            {t("method.title")}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 font-display text-xl">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-[1.35rem] text-paper">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] opacity-75">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
