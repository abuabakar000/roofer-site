import React from "react";
import Link from "next/link";
import { LeadData, getLeadData } from "@/data/leads";

const steps = [
  {
    num: "01",
    title: "Book",
    desc: "Call us or book online in seconds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Schedule",
    desc: "We'll arrange a convenient time that suits you.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    )
  },
  {
    num: "03",
    title: "We Arrive",
    desc: "Our team arrives on time and inspects the issue.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Fixed Quote",
    desc: "You'll receive a clear, fixed-price quote before any work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    )
  },
  {
    num: "05",
    title: "We Get to Work",
    desc: "Expert technicians complete the job to the highest standard.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    num: "06",
    title: "Clean & Care",
    desc: "We clean up after the job and share useful tips.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    )
  },
  {
    num: "07",
    title: "We're Always Here",
    desc: "24/7 support for urgent roofing needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  }
];

export default function ProcessSection({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  return (
    <section className="bg-[#111318] py-16 relative overflow-hidden border-y border-white/5 shadow-2xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-left mb-16">
          <div className="flex items-center justify-start gap-3 mb-6">
            <span 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`text-[11px] font-bold tracking-[0.15em] ${leadData.slug === "default" ? "text-amber-500" : ""} uppercase`}
            >
              Our Process
            </span>
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-8 h-[1px] ${leadData.slug === "default" ? "bg-amber-500/50" : "opacity-50"}`} 
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.15] tracking-tight mb-6">
            How We Approach<br />
            <span 
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`${leadData.slug === "default" ? "text-amber-500" : ""} font-medium`}
            >
              Every Task.
            </span>
          </h2>
          <p className="text-zinc-400 text-[15px] font-light leading-relaxed max-w-lg">
            A simple, transparent process to deliver reliable roofing solutions from start to finish.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-y-12 gap-x-4 md:gap-x-6 xl:gap-0 mt-12 relative">
          {/* Dashed line (desktop only) */}
          <div className="hidden xl:block absolute top-[36px] left-[5%] right-[5%] h-[1px] border-t border-dashed border-zinc-700/80 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col items-center relative z-10 text-center group ${index === 6 ? 'hidden xl:flex' : ''}`}>
              
              <div 
                style={{ 
                  color: leadData.slug === "default" ? "" : leadData.primaryColor,
                  borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}80`,
                  boxShadow: leadData.slug === "default" ? "" : `0 0 20px ${leadData.primaryColor}26`
                }}
                className={`w-[64px] h-[64px] md:w-[72px] md:h-[72px] shrink-0 rounded-full border border-zinc-700/60 bg-[#111318] flex items-center justify-center ${leadData.slug === "default" ? "text-amber-500 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]" : ""} transition-all duration-300`}
              >
                <div className="scale-90 md:scale-100">
                  {step.icon}
                </div>
              </div>
              
              <div className="flex flex-col items-center px-2 mt-4">
                <span 
                  style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                  className={`${leadData.slug === "default" ? "text-amber-500" : ""} text-[10px] font-bold tracking-widest mb-2`}
                >
                  {step.num}
                </span>
                <h4 className="text-white text-[13px] font-semibold mb-1">{step.title}</h4>
                <p className="text-zinc-500 text-[12px] leading-relaxed max-w-[150px]">{step.desc}</p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Bottom Contact Box */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto w-full">
          
          {/* Left: Phone */}
          <div className="flex items-center gap-5">
            <div 
              style={{ backgroundColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}1a`, color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-14 h-14 shrink-0 rounded-xl border border-zinc-800 flex items-center justify-center ${leadData.slug === "default" ? "text-amber-500 bg-zinc-900/30" : ""}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-zinc-400 text-xs mb-1">Need help now?</span>
              <a 
                href={`tel:${leadData.phone}`} 
                style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                className={`text-white text-2xl font-semibold tracking-wide ${leadData.slug === "default" ? "hover:text-amber-500" : "hover:text-[var(--hover-color)]"} transition-colors`}
              >
                {leadData.phone}
              </a>
              <span className="text-zinc-500 text-[11px] mt-1">We're available 24/7</span>
            </div>
          </div>
          
          {/* Right: Button */}
          <Link 
            href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`}
            style={{ 
              borderColor: leadData.slug === "default" ? "" : leadData.primaryColor,
              color: leadData.slug === "default" ? "" : leadData.primaryColor,
              "--hover-bg": leadData.slug === "default" ? "" : leadData.primaryColor
            } as any}
            className={`px-8 py-4 border whitespace-nowrap ${leadData.slug === "default" ? "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-[#0b0c10]" : "hover:bg-[var(--hover-bg)] hover:text-[#0b0c10]"} transition-colors duration-300 rounded-sm text-[11px] font-bold tracking-[0.15em] uppercase flex items-center gap-3 shrink-0`}
          >
            Schedule Service
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>

      </div>
    </section>
  );
}
