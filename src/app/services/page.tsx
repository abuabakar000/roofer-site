import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import ProcessSection from "@/components/ProcessSection";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Waves,
  Droplets,
  Flame,
  Wrench,
  Bath,
  ArrowDownToLine,
  CheckCircle2,
  Trash2,
  Activity,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Premium Roofing Services | Elite Roofing",
  description: "Explore our comprehensive range of high-end roofing services, from emergency repairs to full luxury roof replacements.",
};

const detailedServices = [
  {
    id: "roof-inspection",
    title: "Roof Inspections & Assessments",
    icon: <Waves strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Spot issues before they become expensive problems. We provide thorough assessments of shingle condition, flashing integrity, and potential leak points.",
    features: [
      "Drone roof surveys",
      "Acoustic water detection",
      "Storm damage reports",
      "Structural integrity checks"
    ]
  },
  {
    id: "leak-repair",
    title: "Precision Roof Leak Repair",
    icon: <Droplets strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Water intrusion can cause rapid, catastrophic damage to structural timber and ceilings. We identify and seal roof leaks instantly.",
    features: [
      "Acoustic moisture mapping",
      "Emergency flashing seals",
      "Drip tracing & sealing",
      "Weather-resilient materials"
    ]
  },
  {
    id: "roof-replacement",
    title: "Complete Roof Replacement",
    icon: <Flame strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Protect your investment with a premium, long-lasting roofing system. We install high-grade shingles, metal roofs, and flat systems built to last.",
    features: [
      "Architectural shingles",
      "Metal & flat roof options",
      "Underlayment upgrades",
      "LIFETIME craftsmanship warranty"
    ]
  },
  {
    id: "storm-damage",
    title: "Storm Damage & Emergency Tarping",
    icon: <Wrench strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "After severe weather, immediate protection is critical. Our 24/7 team responds rapidly to secure your roof and prevent further water intrusion.",
    features: [
      "24/7 emergency response",
      "Heavy-duty shrink wrapping",
      "Hole patching & sealing",
      "Insurance claim documentation"
    ]
  },
  {
    id: "gutter-installation",
    title: "Premium Gutter Systems",
    icon: <Bath strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Improper drainage destroys foundations. We engineer and install custom seamless gutter systems designed to divert water safely.",
    features: [
      "Seamless aluminum gutters",
      "Heavy-duty leaf guards",
      "Custom downspout routing",
      "Debris clearing & cleaning"
    ]
  },
  {
    id: "roof-maintenance",
    title: "Proactive Roof Maintenance",
    icon: <ArrowDownToLine strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Extend the lifespan of your roof by decades. We clear damaging moss, clean out gutters, and secure loose components before they fail.",
    features: [
      "Moss & algae treatments",
      "Debris & leaf clearing",
      "Flashing re-securing",
      "Annual maintenance reports"
    ]
  },
  {
    id: "attic-ventilation",
    title: "Attic Ventilation & Insulation",
    icon: <Trash2 strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Poor airflow cooks shingles and causes dangerous ice dams. We calibrate and install balanced intake and exhaust ventilation systems.",
    features: [
      "Ridge vent installation",
      "Soffit ventilation tuning",
      "Attic fan diagnostics",
      "Ice dam prevention setup"
    ]
  },
  {
    id: "skylight-services",
    title: "Skylight Maintenance & Care",
    icon: <Activity strokeWidth={1.5} className="w-8 h-8 text-amber-500" />,
    desc: "Bring natural light into your home without worrying about leaks. We install, seal, and repair premium energy-efficient skylights.",
    features: [
      "Leak-proof flashing kits",
      "Energy-star glass upgrades",
      "Condensation diagnostics",
      "Custom roof window installs"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">

        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/service-page-hero.webp"
              fill
              alt="Premium Home Services"
              className="object-cover object-center opacity-30 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-amber-500/50"></div>
              <span className="text-[11px] uppercase tracking-[0.4em] text-amber-500 font-bold">Our Services</span>
              <div className="w-12 h-[1px] bg-amber-500/50"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
              Superior Solutions for <br className="hidden md:block" />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Every System.</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              From emergency storm response to full architectural roof replacements, we deliver unparalleled craftsmanship and reliability across every facet of roofing.
            </p>
          </div>
        </section>

        {/* ── DETAILED SERVICES GRID ── */}
        <section className="py-24 relative z-10 bg-zinc-950">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
              {detailedServices.slice(0, 6).map((service, idx) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="group relative bg-[#0c0e12] border border-zinc-800/60 rounded-2xl p-6 md:p-10 hover:bg-[#0f1116] hover:-translate-y-2 hover:border-amber-500/30 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] transition-all duration-500 ease-out flex flex-col h-full overflow-hidden"
                >
                  {/* Ambient Hover Glow */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                  <div className="relative z-10 flex flex-col h-full">

                    {/* Header Row */}
                    <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700/50 flex items-center justify-center bg-zinc-900/50 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-colors duration-500 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                        <div className="scale-75 md:scale-100">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-white text-lg md:text-2xl font-light tracking-wide mb-1 group-hover:text-amber-500 transition-colors duration-300">
                          {service.title}
                        </h2>
                        <div className="w-8 h-[2px] bg-amber-500 group-hover:w-16 transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm md:text-[15px] font-light leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="mt-auto pt-6 border-t border-zinc-800/50 mb-8">
                      <h4 className="text-white text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-4 opacity-70">
                        Service Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-[2px]" strokeWidth={2.5} />
                            <span className="text-zinc-300 text-xs md:text-sm font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile Action Button */}
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em] rounded-md group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500 transition-all duration-300"
                    >
                      Request this service
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── HOW WE WORK (Process) ── */}
        <ProcessSection />

        {/* ── SERVICE AREA (Map) ── */}
        <MapSection />

        {/* ── CTA SECTION ── */}
        <CtaSection />

      </main>
      <Footer />
    </>
  );
}
