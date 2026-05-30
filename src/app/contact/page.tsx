import React from "react";
import Image from "next/image";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { defaultLead } from "@/data/leads";

export const metadata = {
  title: "Schedule Service | Elite Roofing",
  description: "Contact us today to schedule your premium roofing service. We offer 24/7 emergency response and expert solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
      
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src="/contact-hero.png"
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
              <div className="w-12 h-[1px] bg-amber-500/50"></div>
              <span className="text-[11px] uppercase tracking-[0.4em] text-amber-500 font-bold">Get In Touch</span>
              <div className="w-12 h-[1px] bg-amber-500/50"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
              Schedule <br className="hidden md:block" />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Professional Service.</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Ready to experience the Elite Roofing difference? Contact us today to secure your priority appointment with our master technicians.
            </p>
          </div>
        </section>

        {/* ── MAIN CONTACT SECTION WITH INTEGRATED SCHEDULER ── */}
        <ContactFormSection leadData={defaultLead} />

        {/* ── MAP SECTION ── */}
        <MapSection />

      </main>
      <Footer />
    </>
  );
}

