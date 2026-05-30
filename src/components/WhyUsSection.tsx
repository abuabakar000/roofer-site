import React from "react";
import Link from "next/link";
import { LeadData, getLeadData } from "@/data/leads";

const features = [
  {
    title: "24/7 Emergency Service",
    desc: "Service emergencies don't wait. We're available 24/7 to handle your emergencies fast.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" className="stroke-[var(--primary-color)]" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    desc: "We are fully licensed and insured professionals, so you can have peace of mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" className="stroke-[var(--primary-color)]" />
      </svg>
    ),
  },
  {
    title: "Upfront Pricing",
    desc: "No hidden fees. No surprises. We provide clear, upfront pricing before any work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10m-2.5-7.5h3.5a1.5 1.5 0 010 3H9.5a1.5 1.5 0 000 3h5" className="stroke-[var(--primary-color)]" />
      </svg>
    ),
  },
  {
    title: "Quality Workmanship",
    desc: "We take pride in our work and use high-quality parts and proven techniques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8zm-8 9c0-3.314 3.582-6 8-6 1.436 0 2.784.321 3.938.88" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13l1 3 3 .5-2.5 2 .5 3-2.5-1.5-2.5 1.5.5-3-2.5-2 3-.5z" className="stroke-[var(--primary-color)]" />
      </svg>
    ),
  },
  {
    title: "Fast Response Time",
    desc: "We value your time. Our team arrives quickly and gets the job done right the first time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zm-4-4H8m-2 0H3m14 0h1v-4h-4m0 0V7H6v8m11-4h3l1.5 3H17" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h3m-4 4h3" className="stroke-[var(--primary-color)] stroke-2" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guarantee",
    desc: "Your satisfaction is our priority. If you're not happy, we'll make it right—guaranteed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-zinc-200">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 22H4a2 2 0 01-2-2v-8a2 2 0 012-2h3" className="stroke-[var(--primary-color)]" />
      </svg>
    ),
  },
];

export default function WhyUsSection({ leadData: passedLeadData }: { leadData?: LeadData }) {
  const leadData = passedLeadData || getLeadData();
  const primaryColor = leadData.primaryColor || "#84cc16";

  return (
    <section
      style={{ "--primary-color": leadData.slug === "default" ? "#84cc16" : leadData.primaryColor } as any}
      className="bg-[#0b0c10] relative overflow-hidden"
    >
      {/* ── Main two-column row ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-28 flex flex-col lg:flex-row items-stretch gap-16 lg:gap-20">

        {/* LEFT COLUMN - Vertically Centered */}
        <div className="lg:w-[35%] flex flex-col justify-center text-left">
          {/* eyebrow */}
          <div className="flex items-center justify-start gap-3 mb-6">
            <span
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`text-[11px] font-bold tracking-[0.2em] ${leadData.slug === "default" ? "text-amber-500" : ""} uppercase`}
            >
              Why Choose Us
            </span>
            <div
              style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`w-10 h-px ${leadData.slug === "default" ? "bg-amber-500/40" : "opacity-40"}`}
            />
          </div>

          {/* heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-8">
            Real Experts.<br />
            Real Solutions.<br />
            <span
              style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
              className={`${leadData.slug === "default" ? "text-amber-500" : ""} font-medium`}
            >
              Real Results.
            </span>
          </h2>

          {/* body */}
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-sm">
            We combine decades of experience, master craftsmanship, and unwavering reliability to deliver essential services you can count on—every single time.
          </p>
        </div>

        {/* RIGHT COLUMN — feature grid */}
        <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 self-center">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col group border-l border-zinc-800/50 pl-4 sm:pl-6 hover:border-[var(--primary-color)] transition-all duration-500"
            >
              <div className="mb-4">
                <div className="mb-4 transition-transform duration-500 group-hover:translate-x-1">
                  <div
                    style={{
                      borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}33`,
                      backgroundColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}0d`
                    }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center mb-3 shadow-lg ${leadData.slug === "default" ? "group-hover:border-amber-500/30 group-hover:bg-amber-500/5" : ""} transition-all duration-300`}
                  >
                    <div className="scale-[0.6] sm:scale-75 origin-center">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3
                  style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
                  className={`text-white font-bold tracking-[0.05em] text-[11px] sm:text-[13px] uppercase mb-2 leading-snug ${leadData.slug === "default" ? "group-hover:text-amber-500" : "group-hover:text-[var(--hover-color)]"} transition-colors duration-300`}
                >
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-[11px] sm:text-[13px] font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500 line-clamp-3 sm:line-clamp-none">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Banner ── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 relative z-20">
        <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-2xl px-6 md:px-12 py-6 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div
            style={{ backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor }}
            className={`absolute top-0 right-0 w-64 h-64 ${leadData.slug === "default" ? "bg-amber-500/5" : "opacity-[0.05]"} rounded-full blur-[80px] pointer-events-none`}
          />

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left relative z-10">
            {/* phone icon circle */}
            <div
              style={{
                borderColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}33`,
                backgroundColor: leadData.slug === "default" ? "" : `${leadData.primaryColor}0d`,
                boxShadow: leadData.slug === "default" ? "" : `0 0 20px ${leadData.primaryColor}26`
              }}
              className={`shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full border ${leadData.slug === "default" ? "border-amber-500/20 bg-amber-500/5 shadow-[0_0_20px_rgba(132,204,22,0.15)]" : ""} flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                style={{ color: leadData.slug === "default" ? "" : leadData.primaryColor }}
                className={`w-7 h-7 md:w-10 md:h-10 ${leadData.slug === "default" ? "text-amber-500" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-xl md:text-3xl font-light tracking-tight mb-1 md:mb-2">
                Need an expert you can trust?
              </h3>
              <p className="text-zinc-500 text-[13px] md:text-lg font-light max-w-md">
                Experience reliable service and total peace of mind with our dedicated team of local master experts.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto relative z-10">
            <Link
              href={`tel:${leadData.phone}`}
              style={{
                backgroundColor: leadData.slug === "default" ? "" : leadData.primaryColor,
                boxShadow: leadData.slug === "default" ? "" : `0 0 25px ${leadData.primaryColor}4d`
              }}
              className={`w-full sm:w-auto whitespace-nowrap px-6 py-3.5 lg:px-10 lg:py-5 ${leadData.slug === "default" ? "bg-amber-500 hover:bg-amber-400 shadow-[0_0_25px_rgba(132,204,22,0.3)]" : "hover:brightness-110"} text-zinc-950 rounded-md text-[11px] lg:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {leadData.phone}
            </Link>

            <Link
              href={leadData.slug === "default" ? "/contact" : `/${leadData.slug}/contact`}
              style={{ "--hover-color": leadData.slug === "default" ? "" : leadData.primaryColor } as any}
              className={`w-full sm:w-auto whitespace-nowrap px-6 py-3.5 lg:px-10 lg:py-5 bg-transparent border border-zinc-700 ${leadData.slug === "default" ? "hover:border-amber-500 hover:text-amber-500" : "hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]"} text-white rounded-md text-[11px] lg:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3`}
            >
              Schedule Service
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
