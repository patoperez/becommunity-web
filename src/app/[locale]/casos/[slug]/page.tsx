import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hand } from "@/components/Hand";
import { CaseCard } from "@/components/casos/CaseCard";
import { Link } from "@/i18n/navigation";
import { caseColor, CASE_SLUGS, type CaseItem } from "@/components/casos/types";

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "casos" });
  const item = (t.raw("items") as CaseItem[]).find((c) => c.slug === slug);
  if (!item) return {};
  const path = `/casos/${slug}`;
  return {
    title: `${item.client} — ${t("kicker")} | Be Community`,
    description: item.summary,
    alternates: {
      canonical: locale === "es" ? path : `/en${path}`,
      languages: { es: path, en: `/en${path}` },
    },
    openGraph: { title: item.client, description: item.summary, type: "article", locale },
  };
}

export default async function CaseDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("casos");
  const items = t.raw("items") as CaseItem[];
  const item = items.find((c) => c.slug === slug);
  if (!item) notFound();

  const color = caseColor(item.slug);
  const tag = item.vertical === "colegios" ? t("colegioTag") : t("empresaTag");
  const tagOf = (v: string) => (v === "colegios" ? t("colegioTag") : t("empresaTag"));
  const related = items.filter((c) => c.slug !== slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.tagline,
    about: item.client,
    description: item.summary,
    publisher: { "@type": "Organization", name: "Be Community", url: "https://becommunitymx.com" },
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="mx-auto w-[min(1000px,92vw)] pb-24 pt-14 md:pt-16">
        <Link href="/casos" className="text-[0.9rem] font-semibold text-ink/55 transition-colors hover:text-ink">
          ← {t("backToCases")}
        </Link>

        <div className="mt-8">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-white"
            style={{ backgroundColor: color }}
          >
            {tag}
          </span>
          <h1 className="mt-5 max-w-[20ch] text-[clamp(2.2rem,5.5vw,3.6rem)]">{item.tagline}</h1>
          <p className="mt-3 text-[1.1rem] font-medium text-ink/55">{item.client}</p>
          <p className="mt-6 max-w-[62ch] text-[1.12rem] leading-relaxed text-ink/80">{item.summary}</p>
        </div>

        <div className="mt-12">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink/40">
            {t("metricsTitle")}
          </span>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {item.metrics.map((m, i) => (
              <div key={i} className="rounded-[14px] border border-paper-2 bg-paper-2/40 p-6">
                <div className="font-display text-[clamp(2.2rem,5vw,3rem)] font-semibold" style={{ color }}>
                  {m.value}
                </div>
                <div className="mt-1 text-[0.95rem] text-ink/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="font-display text-[1.5rem]">{t("challengeTitle")}</h2>
            <p className="mt-3 leading-relaxed text-ink/80">{item.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-[1.5rem]">{t("solutionTitle")}</h2>
            <p className="mt-3 leading-relaxed text-ink/80">{item.solutionIntro}</p>
            <ul className="mt-4 space-y-3">
              {item.solution.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-ink/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-[1.5rem]">{t("resultsTitle")}</h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed text-ink/80">{item.results}</p>
        </div>

        <figure className="mt-14 overflow-hidden rounded-[16px] bg-ink p-8 text-paper md:p-10">
          <div className="mb-5 flex gap-1.5">
            <Hand color="#7FB2DD" size={24} />
            <Hand color="#F4B72A" size={24} />
            <Hand color="#7DB52E" size={24} />
          </div>
          <blockquote className="font-display text-[clamp(1.4rem,3vw,2rem)] leading-snug text-paper">
            &ldquo;{item.quote.text}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-[0.95rem] text-paper/70">
            {item.quote.author} · {item.quote.role}
          </figcaption>
        </figure>

        <section className="mt-12 rounded-[16px] bg-magenta px-[8%] py-14 text-center text-white">
          <h2 className="mx-auto max-w-[22ch] font-display text-[clamp(1.8rem,4vw,2.8rem)] text-white">
            {t("ctaTitle")}
          </h2>
          <a
            href="mailto:info@becommunitymx.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            {t("ctaButton")} →
          </a>
        </section>

        <div className="mt-16">
          <h2 className="font-display text-[1.5rem]">{t("relatedTitle")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <CaseCard key={r.slug} item={r} viewCase={t("viewCase")} tag={tagOf(r.vertical)} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
