import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/vertical/JsonLd";
import { VerticalHero } from "@/components/vertical/VerticalHero";
import { PainPoints } from "@/components/vertical/PainPoints";
import { ServiceDetail } from "@/components/vertical/ServiceDetail";
import { MethodSteps } from "@/components/vertical/MethodSteps";
import { Benefits } from "@/components/vertical/Benefits";
import { FAQ } from "@/components/vertical/FAQ";
import { VerticalCTA } from "@/components/vertical/VerticalCTA";

const NS = "colegiosPage";
const PATH = "/colegios";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: NS });
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

export default async function ColegiosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations(NS);

  const faqItems = t.raw("faq.items") as { q: string; a: string }[];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Consultoría educativa",
    provider: {
      "@type": "Organization",
      name: "Be Community",
      url: "https://becommunitymx.com",
    },
    areaServed: {
      "@type": "City",
      name: "Zona Metropolitana de la Ciudad de México",
    },
    description: t("meta.description"),
  };

  return (
    <>
      <Header />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <main>
        <VerticalHero ns={NS} />
        <PainPoints ns={NS} />
        <ServiceDetail ns={NS} />
        <MethodSteps ns={NS} />
        <Benefits ns={NS} />
        <FAQ ns={NS} />
        <VerticalCTA ns={NS} />
      </main>
      <Footer />
    </>
  );
}
