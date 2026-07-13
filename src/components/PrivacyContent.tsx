"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Hand } from "./Hand";

const SECTIONS = [
  "responsable",
  "datos",
  "finalidades",
  "transferencias",
  "arco",
  "limitacion",
  "cambios",
  "contacto",
] as const;

const dot = ["#1B72B8", "#E23B8A", "#7DB52E", "#F4B72A", "#9B84C4", "#1B72B8", "#E23B8A", "#7DB52E"];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-paper-2 py-10 first:border-t-0 first:pt-0">
      <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.7rem)]">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-ink/80">{children}</div>
    </section>
  );
}

export function PrivacyContent() {
  const t = useTranslations("privacy");
  const [active, setActive] = useState<string>(SECTIONS[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-25% 0px -70% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const datos = t.raw("datos.items") as { title: string; desc: string }[];
  const finalidades = t.raw("finalidades.items") as string[];
  const transferencias = t.raw("transferencias.items") as string[];

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-1">
        <div
          className="h-full bg-magenta transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto w-[min(1240px,92vw)] pb-24 pt-14 md:pt-20">
        <div className="max-w-[54ch]">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-magenta">
            {t("kicker")}
          </span>
          <h1 className="mt-3 text-[clamp(2.4rem,6.5vw,4.4rem)]">{t("title")}</h1>
          <p className="mt-6 text-[1.1rem] leading-relaxed text-ink/80">{t("lead")}</p>
          <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-paper-2 bg-paper-2/50 px-4 py-2 text-[0.85rem] font-medium text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            {t("updatedLabel")}: {t("updatedDate")}
          </span>
        </div>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-[220px_1fr] md:gap-16">
          <aside className="hidden md:block">
            <nav className="sticky top-28">
              <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink/40">
                {t("tocLabel")}
              </p>
              <ul className="space-y-1">
                {SECTIONS.map((id, i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.92rem] transition-colors ${
                        active === id ? "bg-paper-2 font-semibold text-ink" : "text-ink/55 hover:text-ink"
                      }`}
                    >
                      <span
                        className="h-2 w-2 flex-none rounded-full border-2 transition-colors"
                        style={{
                          borderColor: dot[i],
                          backgroundColor: active === id ? dot[i] : "transparent",
                        }}
                      />
                      {t(`toc.${id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-[70ch]">
            <Section id="responsable" title={t("responsable.title")}>
              <p>{t("responsable.body")}</p>
            </Section>

            <Section id="datos" title={t("datos.title")}>
              <p>{t("datos.intro")}</p>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                {datos.map((d, i) => (
                  <div key={i} className="rounded-[12px] border border-paper-2 bg-paper-2/40 p-5">
                    <Hand color={dot[i]} size={26} />
                    <h3 className="mt-3 text-[1.1rem] font-semibold text-ink">{d.title}</h3>
                    <p className="mt-1 text-[0.95rem] text-ink/65">{d.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="finalidades" title={t("finalidades.title")}>
              <p>{t("finalidades.intro")}</p>
              <ul className="space-y-3 pt-1">
                {finalidades.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="transferencias" title={t("transferencias.title")}>
              <p>{t("transferencias.intro")}</p>
              <ul className="space-y-3 pt-1">
                {transferencias.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-magenta" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <section id="arco" className="scroll-mt-28 py-10">
              <div className="overflow-hidden rounded-[16px] bg-ink p-8 text-paper md:p-10">
                <h2 className="font-display text-[clamp(1.5rem,3vw,1.9rem)] text-paper">{t("arco.title")}</h2>
                <p className="mt-4 max-w-[62ch] text-[1.02rem] leading-relaxed text-paper/85">
                  {t("arco.body")}
                </p>
                <a
                  href="mailto:info@becommunitymx.com"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white hover:text-ink"
                >
                  info@becommunitymx.com <span>→</span>
                </a>
              </div>
            </section>

            <Section id="limitacion" title={t("limitacion.title")}>
              <p>{t("limitacion.body")}</p>
            </Section>

            <Section id="cambios" title={t("cambios.title")}>
              <p>{t("cambios.body")}</p>
            </Section>

            <section id="contacto" className="scroll-mt-28 border-t border-paper-2 py-10">
              <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.7rem)]">{t("contacto.title")}</h2>
              <p className="mt-4 text-[1.02rem] text-ink/80">{t("contacto.body")}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@becommunitymx.com"
                  className="flex items-center gap-3 rounded-[12px] border border-paper-2 bg-paper-2/40 px-5 py-4 transition-colors hover:bg-paper-2"
                >
                  <Hand color="#1B72B8" size={24} />
                  <span>
                    <span className="block text-[0.72rem] uppercase tracking-wide text-ink/45">
                      {t("contacto.emailLabel")}
                    </span>
                    <span className="font-medium text-ink">info@becommunitymx.com</span>
                  </span>
                </a>
                <a
                  href="tel:+525553516276"
                  className="flex items-center gap-3 rounded-[12px] border border-paper-2 bg-paper-2/40 px-5 py-4 transition-colors hover:bg-paper-2"
                >
                  <Hand color="#E23B8A" size={24} />
                  <span>
                    <span className="block text-[0.72rem] uppercase tracking-wide text-ink/45">
                      {t("contacto.phoneLabel")}
                    </span>
                    <span className="font-medium text-ink">{t("contacto.phone")}</span>
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
