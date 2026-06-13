import React from "react";
import Image from "next/image";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLeadData, leads } from "@/data/leads";

export async function generateStaticParams() {
  return Object.keys(leads).map((slug) => ({
    slug,
  }));
}
import ContactFormSection from "@/components/ContactFormSection";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  return {
    title: `Contact Us | ${leadData.title}`,
    description: `Get in touch with ${leadData.title} for professional roofing services.`,
    icons: {
      icon: leadData.logo || "/logo.png",
    }
  };
}

export default async function ContactPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
        
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src="/contact-hero.webp"
              fill
              alt="Schedule Roofing Service"
              className="object-cover object-center opacity-20 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div 
                style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
              />
              <span 
                style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`text-[11px] uppercase tracking-[0.4em] ${leadData.slug === "default" ? "text-amber-500" : ""} font-bold`}
              >
                Get In Touch
              </span>
              <div 
                style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
              Schedule <br className="hidden md:block" />
              <span 
                style={{ 
                  color: leadData.slug === "default" ? "" : "transparent",
                  backgroundImage: leadData.slug === "default" ? "" : `linear-gradient(to right, white, ${leadData.primaryColor})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: leadData.slug === "default" ? "" : "transparent"
                }}
                className={`${leadData.slug === "default" ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500" : ""} font-medium`}
              >
                Professional Service.
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Ready to experience the {leadData.title} difference? Contact us today to secure your priority appointment with our master technicians.
            </p>
          </div>
        </section>

        {/* ── MAIN CONTACT SECTION WITH INTEGRATED SCHEDULER ── */}
        <ContactFormSection leadData={leadData} />

        {/* ── MAP SECTION ── */}
        <MapSection leadData={leadData} />

      </main>
      <Footer leadData={leadData} />
    </>
  );
}
