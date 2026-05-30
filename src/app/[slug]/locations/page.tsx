import React from "react";
import Image from "next/image";
import MapSection from "@/components/MapSection";
import CtaSection from "@/components/CtaSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLeadData } from "@/data/leads";
import { MapPin, Navigation, Building2, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);
  return {
    title: `Locations | ${leadData.title}`,
    description: `View the service areas and locations covered by ${leadData.title}.`,
    icons: {
      icon: leadData.logo || "/logo.png",
    }
  };
}

const locations = [
  {
    name: "Metropolis Downtown",
    desc: "24/7 rapid response for high-rise commercial and luxury residential roofing in the downtown core.",
    icon: <Building2 strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Commercial Roofing", "High-Rise Specialists", "Emergency Response"]
  },
  {
    name: "North Hills Estates",
    desc: "Complete roofing installations, architectural shingle routing, and premium gutter upgrades.",
    icon: <Home strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Premium Shingles", "Custom Roofs", "Gutter Integration"]
  },
  {
    name: "Westside Valley",
    desc: "Expert leak detection, skylight integrations, and comprehensive roof diagnostics.",
    icon: <Navigation strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Leak Detection", "Skylight Installs", "Routine Maintenance"]
  },
  {
    name: "Southpoint County",
    desc: "Advanced attic ventilation diagnostics, flashing repair, and reliable local roofing solutions.",
    icon: <MapPin strokeWidth={1.5} className="w-6 h-6 text-amber-500" />,
    features: ["Ventilation Care", "Flashing Repair", "Emergency Tarping"]
  }
];

export default async function LocationsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leadData = getLeadData(slug);

  // Use lead color for icons in the locations list
  const dynamicLocations = locations.map(loc => ({
    ...loc,
    icon: React.cloneElement(loc.icon as React.ReactElement<any>, { 
      style: { color: leadData.slug === "default" ? "" : leadData.primaryColor },
      className: `w-6 h-6 ${leadData.slug === "default" ? "text-amber-500" : ""}`
    })
  }));

  return (
    <>
      <Navbar leadData={leadData} />
      <main className="flex min-h-screen flex-col bg-zinc-950 pt-24">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/60">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/locations-hero.png"
            fill
            alt="Cityscape Service Areas"
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
              Our Locations
            </span>
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05] mb-8">
            Expert Service. <br className="hidden md:block" />
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
              Local Presence.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            We bring our high-end, master roofing services directly to your doorstep across the entire metropolitan region and surrounding counties.
          </p>
        </div>
      </section>

      {/* ── HIGH-END WORKSHOP SECTION ── */}
      <section className="py-20 md:py-40 relative z-10 bg-zinc-950 overflow-hidden">
        {/* Cinematic Spotlight Glow */}
        <div 
          style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
          className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] ${leadData.slug === "default" ? "bg-amber-500/10" : "opacity-[0.05]"} rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0`} 
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-20">
            
            {/* Left: The "Soul" of the Shop */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span 
                  style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase ${leadData.slug === "default" ? "text-amber-500" : ""}`}
                >
                  Est. Local Service
                </span>
                <div className="w-10 md:w-12 h-[1px] bg-zinc-800" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tighter leading-[1] md:leading-[0.95] mb-8 md:mb-10">
                Where <br/>
                <span className="font-medium">Craftsmanship</span> <br/>
                Meets Community.
              </h2>

              <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                Our local workshop is the heart of our operation. It's where our master roofers prep for every mission to ensure your home gets the elite care it deserves.
              </p>
            </div>

            {/* Right: The "Elite Address" Card */}
            <div className="w-full lg:max-w-md">
              <div className="relative group">
                {/* Border Shimmer */}
                <div 
                  style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`absolute -inset-[1px] ${leadData.slug === "default" ? "bg-amber-500/20" : "opacity-[0.2]"} rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} 
                />
                
                <div className="relative bg-[#0c0e12] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                  <div className="relative z-10">
                    <div 
                      style={{ 
                        borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}40`,
                        backgroundColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}10`
                      }}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-zinc-700/50 flex items-center justify-center mb-8 md:mb-10`}
                    >
                      <MapPin 
                        style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                        className={`w-6 h-6 md:w-7 md:h-7 ${leadData.slug === "default" ? "text-amber-500" : ""}`} 
                      />
                    </div>

                    <p className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">The Workshop</p>
                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-tight mb-8 md:mb-10">
                      {leadData.address}
                    </h3>

                    <div className="flex flex-col gap-4">
                      {["Local Dispatch", "Master Roofers Only"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div 
                            style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                            className={`w-1 h-1 rounded-full ${leadData.slug === "default" ? "bg-amber-500" : ""}`} 
                          />
                          <span className="text-zinc-500 text-[10px] md:text-[11px] font-bold tracking-widest uppercase">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <MapSection leadData={leadData} />

      {/* ── CTA SECTION ── */}
      <CtaSection leadData={leadData} />

    </main>
      <Footer leadData={leadData} />
    </>
  );
}
