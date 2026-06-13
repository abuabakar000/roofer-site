import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import MapSection from "@/components/MapSection";
import WhyUsSection from "@/components/WhyUsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import { getLeadData, leads } from "@/data/leads";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return Object.keys(leads).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  return {
    title: `${leadData.title} | Professional Home Services`,
    description: leadData.heroSubtext,
    icons: {
      icon: leadData.logo || "/logo.png",
    }
  };
}

export default async function LeadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950">
        <Hero leadData={leadData} />
        <TrustSection leadData={leadData} />
        <ServicesSection leadData={leadData} />
        <MapSection leadData={leadData} />
        <WhyUsSection leadData={leadData} />
        <FaqSection leadData={leadData} />
        <CtaSection leadData={leadData} />
      </main>
      <Footer leadData={leadData} />
    </>
  );
}
