"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Reveal } from "../Reveal";

type Item = { q: string; a: string };

export function FAQ({ ns }: { ns: string }) {
  const t = useTranslations(ns);
  const items = t.raw("faq.items") as Item[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto w-[min(900px,92vw)] py-24">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("faq.kicker")}
      </span>
      <Reveal>
        <h2 className="mt-3 text-[clamp(1.9rem,3.8vw,3rem)]">{t("faq.title")}</h2>
      </Reveal>
      <div className="mt-10 border-t border-paper-2">
        {items.map((f, i) => (
          <div key={i} className="border-b border-paper-2">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={open === i}
            >
              <span className="text-[1.15rem] font-medium">{f.q}</span>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink/20 text-lg transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-[1.02rem] text-ink/70">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
