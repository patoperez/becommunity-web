import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { DualPath } from "@/components/DualPath";
import { Manifesto } from "@/components/Manifesto";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";

export const runtime = 'edge';

export default async function Home({
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
        <Hero />
        <DualPath />
        <Manifesto />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
