import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyContent } from "@/components/PrivacyContent";

const PATH = "/aviso-de-privacidad";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: locale === "es" ? PATH : `/en${PATH}`,
      languages: { es: PATH, en: `/en${PATH}` },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}
