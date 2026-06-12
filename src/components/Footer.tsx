import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LeadData, getLeadData } from "@/data/leads";

export default function Footer({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();

  const defaultServicesList = [
    "Drain Cleaning",
    "Leak Repair",
    "Water Heater Services",
    "Pipe Repair & Replacement",
    "Fixture Installation",
    "Sump Pump Services"
  ];

  const footerServices = leadData.services && leadData.services.length > 0
    ? leadData.services.map(s => s.title).filter((t): t is string => !!t)
    : defaultServicesList;

  return (
    <footer className="bg-[#050608] border-t border-zinc-800/60 pt-20 pb-8 mt-auto z-20 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 mb-10 md:mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="col-span-2 lg:col-span-4 flex flex-col">
            {/* Logo Space - Placed according to user request */}
            <div className="mb-6 flex items-center h-10">
              {leadData.logo ? (
                <div 
                  style={{
                    "--logo-w-mobile": `${leadData.logoWidthMobile || leadData.logoWidth || 160}px`,
                    "--logo-h-mobile": `${leadData.logoHeightMobile || leadData.logoHeight || 40}px`,
                    "--logo-w-desktop": `${leadData.logoWidth || 160}px`,
                    "--logo-h-desktop": `${leadData.logoHeight || 40}px`,
                  } as React.CSSProperties}
                  className="relative w-[var(--logo-w-mobile)] h-[var(--logo-h-mobile)] md:w-[var(--logo-w-desktop)] md:h-[var(--logo-h-desktop)]"
                >
                  <Image 
                    src={leadData.logo} 
                    alt={leadData.title} 
                    fill 
                    sizes="300px"
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                leadData.slug === "default" ? (
                  <span className="text-white text-2xl font-bold tracking-wider">LOGO <span className="text-amber-500">HERE</span></span>
                ) : (
                  <span style={{ color: leadData.primaryColor }} className="text-2xl font-bold tracking-wider uppercase">{leadData.title}</span>
                )
              )}
            </div>
            
            {/* Ambient/brand text dynamically tailored */}
            <p className="text-zinc-400 font-light leading-relaxed mb-8 max-w-sm">
              Reliable mechanical solutions, whenever you need them. We&apos;re here 24/7.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`w-5 h-5 ${leadData.slug === "default" ? "text-amber-500" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-light text-[14px]">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`w-5 h-5 ${leadData.slug === "default" ? "text-amber-500" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <span className="font-light text-[14px]">
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services - HIDDEN ON MOBILE/TABLET */}
          <div className="hidden md:flex col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="text-white font-bold tracking-widest text-[13px] uppercase mb-6 relative inline-block">
              Services
              <span style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`absolute -bottom-2 left-0 w-6 h-[2px] ${leadData.slug === "default" ? "bg-amber-500" : ""}`}></span>
            </h4>
            <div className="flex flex-col gap-3 mt-2">
              {footerServices.map((serviceName, idx) => (
                <span key={idx} className="text-zinc-400 text-[14px] font-light">
                  {serviceName}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation - HIDDEN ON MOBILE/TABLET */}
          <div className="hidden md:flex col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="text-white font-bold tracking-widest text-[13px] uppercase mb-6 relative inline-block">
              Navigation
              <span style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`absolute -bottom-2 left-0 w-6 h-[2px] ${leadData.slug === "default" ? "bg-amber-500" : ""}`}></span>
            </h4>
            <div className="flex flex-col gap-4 mt-2">
              <Link href={leadData.slug === "default" ? "/" : `/${leadData.slug}`} className={`text-zinc-400 text-[14px] font-light ${leadData.slug === "default" ? "hover:text-amber-500" : ""} transition-colors`} style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}>Home</Link>
              <Link href={leadData.slug === "default" ? "/services" : `/${leadData.slug}/services`} className={`text-zinc-400 text-[14px] font-light ${leadData.slug === "default" ? "hover:text-amber-500" : ""} transition-colors`} style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}>Services</Link>
              <Link href={leadData.slug === "default" ? "/locations" : `/${leadData.slug}/locations`} className={`text-zinc-400 text-[14px] font-light ${leadData.slug === "default" ? "hover:text-amber-500" : ""} transition-colors`} style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}>Locations</Link>
              <Link href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`} className={`text-zinc-400 text-[14px] font-light ${leadData.slug === "default" ? "hover:text-amber-500" : ""} transition-colors`} style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}>Schedule</Link>
            </div>
          </div>

          {/* Column 4: Actions */}
          <div className="col-span-2 lg:col-span-4 flex flex-col">
            <h4 className="text-white font-bold tracking-widest text-[13px] uppercase mb-6 relative inline-block">
              Get Started
              <span style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`absolute -bottom-2 left-0 w-6 h-[2px] ${leadData.slug === "default" ? "bg-amber-500" : ""}`}></span>
            </h4>
            <p className="text-zinc-400 text-[14px] font-light leading-relaxed mb-6 mt-2 max-w-sm">
              Ready for professional service or need emergency assistance? We are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[380px]">
              <Link 
                href={`tel:${leadData.phone}`} 
                style={{ borderColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`flex-1 bg-transparent border border-zinc-700 ${leadData.slug === "default" ? "hover:border-amber-500 hover:text-amber-500" : "hover:text-white group"} text-white px-6 py-3 rounded text-[11px] font-bold tracking-[0.1em] uppercase transition-colors text-center flex items-center justify-center gap-2 whitespace-nowrap`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }} className={`w-3.5 h-3.5 ${leadData.slug === "default" ? "" : "group-hover:text-white"}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {leadData.phone}
              </Link>
              <Link 
                href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`} 
                style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`flex-1 ${leadData.slug === "default" ? "bg-amber-500 hover:bg-amber-400" : "hover:brightness-110"} text-zinc-950 px-6 py-3 rounded text-[11px] font-bold tracking-[0.1em] uppercase transition-colors text-center flex items-center justify-center whitespace-nowrap`}
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Bar: Contact / Location / Social */}
        <div className="py-6 md:py-8 border-t border-zinc-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-0">
          
          {/* Phone */}
          <div className="hidden md:flex items-center gap-4">
            <div 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center ${leadData.slug === "default" ? "text-amber-500" : ""}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-500 text-[11px] uppercase tracking-wider mb-1">Call Us Anytime</span>
              <span className="text-white font-medium text-base tracking-wide">{leadData.phone}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 lg:-ml-12">
            <div 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center ${leadData.slug === "default" ? "text-amber-500" : ""}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-500 text-[11px] uppercase tracking-wider mb-1">Address</span>
              <span className="text-white font-medium text-[15px]">{leadData.address}</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-white text-[13px] font-medium mr-2">Follow Us</span>
            <div className="flex items-center gap-2">
              <a 
                href={leadData.socials?.facebook || "#"} 
                style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}
                className={`w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white ${leadData.slug === "default" ? "hover:border-amber-500" : "hover:border-[var(--hover-color)]"} transition-colors`}
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href={leadData.socials?.instagram || "#"} 
                style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}
                className={`w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white ${leadData.slug === "default" ? "hover:border-amber-500" : "hover:border-[var(--hover-color)]"} transition-colors`}
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a 
                href={leadData.socials?.google || "#"} 
                style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as React.CSSProperties}
                className={`w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white ${leadData.slug === "default" ? "hover:border-amber-500" : "hover:border-[var(--hover-color)]"} transition-colors`}
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-800/60 text-center flex flex-col items-center justify-center">
          <p className="text-zinc-500 text-[12px] font-light tracking-wide">
            © {new Date().getFullYear()} {leadData.title}. All rights reserved.
          </p>
        </div>

      </div>

      {/* ── AGENCY ATTRIBUTION BAR ── */}
      <div className="bg-[#030303] py-16 relative overflow-hidden">
        {/* Animated Top Border Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-white/[0.03]"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent animate-line-shimmer"></div>
        </div>
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10">
          
          <div className="flex items-center gap-8 group">
            <div className="flex flex-col items-end">
              <span className="text-white text-[10px] uppercase tracking-[0.6em] font-black leading-none mb-1">Designed</span>
              <span className="text-zinc-600 text-[8px] uppercase tracking-[0.4em] font-medium leading-none">with excellence</span>
            </div>
            
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            
            <img 
              src="/inex.png" 
              alt="Inex Labs" 
              className="h-9 w-auto brightness-125"
            />
          </div>

          <div className="premium-border-wrap animate-levitate animate-pulse-glow">
            <div className="premium-border-inner">
              <Link 
                href="https://www.inexlabs.com/contact" 
                className="group relative px-12 py-5 bg-black rounded-sm flex items-center gap-6"
              >
                <div className="relative z-10 flex items-center gap-6">
                  <span className="text-[12px] font-black tracking-[0.4em] uppercase text-white group-hover:text-red-500 transition-colors duration-500">
                    Claim This Website
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-500"></div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
