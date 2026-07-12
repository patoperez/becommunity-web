"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Manifesto() {
  const t = useTranslations("manifesto");
  const words = [
    { text: t("l1") },
    { text: t("l2"), cls: "text-primary" },
    { text: t("l3") },
    { text: t("l4"), cls: "text-magenta" },
    { text: t("l5") },
  ];

  return (
    <section className="mx-auto w-[min(1240px,92vw)] py-32">
      <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {t("kicker")}
      </span>
      <motion.p
        className="mt-6 max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-medium leading-[1.16]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.08 }}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            className={`inline-block ${w.cls ?? ""}`}
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {w.text}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}
