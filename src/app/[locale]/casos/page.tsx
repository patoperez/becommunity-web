import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CasosGrid } from "@/components/casos/CasosGrid";

const PATH = "/casos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "casos" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: locale === "es" ? PATH : `/en${PATH}`,
      languages: { es: PATH, en: `/en${PATH}` },
    },
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      locale,
      siteName: "Be Community",
    },
  };
}

export default async function CasosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("casos");

  return (
    <>
      <Header />
      <main className="mx-auto w-[min(1240px,92vw)] pb-24 pt-14 md:pt-20">
        <div className="max-w-[48ch]">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-magenta">
            {t("kicker")}
          </span>
          <h1 className="mt-3 text-[clamp(2.4rem,6vw,4.2rem)]">{t("title")}</h1>
          <p className="mt-6 text-[1.15rem] leading-relaxed text-ink/80">{t("lead")}</p>
        </div>
        <div className="mt-12 md:mt-14">
          <CasosGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
