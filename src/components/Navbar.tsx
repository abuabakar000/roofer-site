"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LeadData, getLeadData } from "@/data/leads";

export default function Navbar({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 1. Force close on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // 2. Simple but effective scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  // 3. Header background trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#06070a]/95 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href={leadData.slug === "default" ? "/" : `/${leadData.slug}`} className="flex items-center relative z-[110]" onClick={() => setIsMobileMenuOpen(false)}>
            {leadData.logo ? (
              <div 
                style={{
                  "--logo-w-mobile": `${leadData.logoWidthMobile || leadData.logoWidth || 160}px`,
                  "--logo-h-mobile": `${leadData.logoHeightMobile || leadData.logoHeight || 40}px`,
                  "--logo-w-desktop": `${leadData.logoWidth || 192}px`,
                  "--logo-h-desktop": `${leadData.logoHeight || 48}px`,
                } as React.CSSProperties}
                className="relative w-[var(--logo-w-mobile)] h-[var(--logo-h-mobile)] md:w-[var(--logo-w-desktop)] md:h-[var(--logo-h-desktop)]"
              >
                <Image 
                  src={leadData.logo} 
                  alt={leadData.title} 
                  fill 
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            ) : (
              <span className="text-white text-2xl font-bold tracking-wider">
                {leadData.slug === "default" ? (
                  <>PRO<span className="text-amber-500">SERVICE</span></>
                ) : (
                  <span style={{ color: leadData.primaryColor }}>{leadData.title.toUpperCase()}</span>
                )}
              </span>
            )}
          </Link>

          {/* Mobile Header Actions */}
          <div className="md:hidden flex items-center gap-4 relative z-[110]">
            {/* Mobile Call Button */}
            <Link
              href={`tel:${leadData.phone}`}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
              aria-label="Call Now"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </Link>

            <button
              className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span 
                style={{ backgroundColor: isMobileMenuOpen && leadData.slug !== "default" ? leadData.primaryColor : "" }}
                className={`h-[2px] w-8 bg-white transition-all duration-300 transform ${isMobileMenuOpen ? `rotate-45 translate-y-[8px] ${leadData.slug === "default" ? "bg-amber-500" : ""}` : ""}`} 
              />
              <span className={`h-[2px] w-8 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span 
                style={{ backgroundColor: isMobileMenuOpen && leadData.slug !== "default" ? leadData.primaryColor : "" }}
                className={`h-[2px] w-8 bg-white transition-all duration-300 transform ${isMobileMenuOpen ? `-rotate-45 -translate-y-[8px] ${leadData.slug === "default" ? "bg-amber-500" : ""}` : ""}`} 
              />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex gap-10 text-[12px] font-bold tracking-[0.25em] uppercase text-white">
              <Link 
                href={leadData.slug === "default" ? "/services" : `/${leadData.slug}/services`} 
                style={{ "--hover-color": leadData.slug === "default" ? "#84cc16" : leadData.primaryColor } as any}
                className="relative group hover:text-[var(--hover-color)] transition-colors"
              >
                Services
                <span 
                  style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] ${leadData.slug === "default" ? "bg-amber-500" : ""} transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
              <Link 
                href={leadData.slug === "default" ? "/locations" : `/${leadData.slug}/locations`} 
                style={{ "--hover-color": leadData.slug === "default" ? "#84cc16" : leadData.primaryColor } as any}
                className="relative group hover:text-[var(--hover-color)] transition-colors"
              >
                Locations
                <span 
                  style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] ${leadData.slug === "default" ? "bg-amber-500" : ""} transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
              <Link 
                href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`} 
                style={{ "--hover-color": leadData.slug === "default" ? "#84cc16" : leadData.primaryColor } as any}
                className="relative group hover:text-[var(--hover-color)] transition-colors"
              >
                Schedule
                <span 
                  style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] ${leadData.slug === "default" ? "bg-amber-500" : ""} transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
            </div>
            <Link
              href={`tel:${leadData.phone}`}
              style={{ 
                backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor,
                boxShadow: leadData.slug === "default" ? "" : `0 0 15px ${leadData.primaryColor}66`
              }}
              className={`${leadData.slug === "default" ? "bg-amber-500 hover:bg-amber-400 shadow-[0_0_15px_rgba(132,204,22,0.4)]" : "hover:brightness-110"} text-zinc-950 px-6 py-3 rounded-sm text-sm font-bold tracking-[0.15em] uppercase transition-all flex items-center gap-3`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              {leadData.phone}
            </Link>
          </nav>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 bg-[#06070a] z-[90] md:hidden transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Aesthetic Background Elements */}
        <div 
          style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
          className={`absolute top-[-10%] right-[-10%] w-[500px] h-[500px] ${leadData.slug === "default" ? "bg-amber-500/10" : "opacity-[0.1]"} rounded-full blur-[120px] pointer-events-none opacity-60`} 
        />
        <div 
          style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
          className={`absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] ${leadData.slug === "default" ? "bg-amber-500/5" : "opacity-[0.05]"} rounded-full blur-[100px] pointer-events-none opacity-40`} 
        />

        <div className="flex flex-col justify-center items-center h-full relative z-10 px-8">
          {/* Main Navigation */}
          <nav className="flex flex-col items-center gap-12 w-full mb-20">
            {[
              { name: "Services", href: leadData.slug === "default" ? "/services" : `/${leadData.slug}/services`, num: "01" },
              { name: "Locations", href: leadData.slug === "default" ? "/locations" : `/${leadData.slug}/locations`, num: "02" },
              { name: "Schedule", href: leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`, num: "03" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center justify-center transition-all duration-700 delay-[${100 + index * 50}ms] ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative flex items-center justify-center">
                  <span 
                    style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor, "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                    className={`absolute right-full mr-4 ${leadData.slug === "default" ? "text-amber-500/40 group-hover:text-amber-500" : "opacity-40 group-hover:opacity-100 group-hover:text-[var(--hover-color)]"} text-xs font-mono font-bold tracking-widest transition-colors whitespace-nowrap`}
                  >
                    [{item.num}]
                  </span>
                  <span 
                    style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                    className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase text-white ${leadData.slug === "default" ? "group-hover:text-amber-500" : "group-hover:text-[var(--hover-color)]"} transition-colors duration-300`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Contact Details */}
          <div className={`flex flex-col items-center gap-6 w-full transition-all duration-700 delay-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/40" : "opacity-40"}`} 
            />
            
            <div className="flex flex-col items-center gap-2">
              <Link 
                href={`tel:${leadData.phone}`} 
                style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`text-2xl font-light ${leadData.slug === "default" ? "text-amber-500" : ""} tracking-widest hover:text-white transition-colors`}
              >
                {leadData.phone}
              </Link>
              <Link 
                href={`mailto:${leadData.email}`} 
                style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                className={`text-sm font-medium text-white/50 tracking-[0.2em] uppercase ${leadData.slug === "default" ? "hover:text-amber-500" : "hover:text-[var(--hover-color)]"} transition-colors text-center max-w-full px-4`}
              >
                {leadData.email.includes("@") ? (
                  <span className="block">
                    <span className="block whitespace-nowrap">{leadData.email.split("@")[0]}</span>
                    <span className="block whitespace-nowrap">@{leadData.email.split("@")[1]}</span>
                  </span>
                ) : (
                  leadData.email
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
