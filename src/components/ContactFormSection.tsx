"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Calendar, MessageSquare } from "lucide-react";
import { LeadData } from "@/data/leads";
import SchedulerCalendar from "./SchedulerCalendar";

interface ContactFormSectionProps {
  leadData: LeadData;
}

export default function ContactFormSection({ leadData }: ContactFormSectionProps) {
  // Input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Scheduler state
  const [scheduledTime, setScheduledTime] = useState<string | null>(null);

  // Form submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDateTimeSelect = (dateTime: string | null) => {
    setScheduledTime(dateTime);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate elite network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const isDefault = leadData.slug === "default";
  const primaryThemeColor = isDefault ? "#84cc16" : leadData.primaryColor;

  return (
    <section className="py-12 relative z-10 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ── 1. HORIZONTAL CONTACT DETAILS DIVIDER BAR ── */}
        <div className="bg-[#06070a]/40 backdrop-blur-sm py-5 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10 rounded-2xl">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div 
              style={{ backgroundColor: `${primaryThemeColor}10` }}
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            >
              <Phone style={{ color: primaryThemeColor }} className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-0.5">24/7 Hotline</span>
              <a 
                href={`tel:${leadData.phone}`}
                className="text-white hover:text-white/80 transition-colors text-sm font-medium tracking-wide"
              >
                {leadData.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 sm:pl-4 lg:pl-6">
            <div 
              style={{ backgroundColor: `${primaryThemeColor}10` }}
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            >
              <Mail style={{ color: primaryThemeColor }} className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-0.5">Email Support</span>
              <a 
                href={`mailto:${leadData.email}`}
                className="text-white hover:text-white/80 transition-colors text-sm font-medium tracking-wide break-all"
              >
                {leadData.email}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 lg:pl-6">
            <div 
              style={{ backgroundColor: `${primaryThemeColor}10` }}
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            >
              <MapPin style={{ color: primaryThemeColor }} className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-0.5">Service Area</span>
              <span className="text-white text-sm font-medium tracking-wide leading-relaxed">
                {leadData.address}
              </span>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4 sm:pl-4 lg:pl-6">
            <div 
              style={{ backgroundColor: `${primaryThemeColor}10` }}
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            >
              <Clock style={{ color: primaryThemeColor }} className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-0.5">Emergency Services</span>
              <span style={{ color: primaryThemeColor }} className="text-sm font-semibold tracking-wide">
                {leadData.hours?.emergency || "Available 24/7"}
              </span>
            </div>
          </div>
        </div>

        {/* ── 2. TWO-COLUMN SCHEDULING WORKSPACE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          
          {/* Column 1: Scheduler Calendar (lg:col-span-5) */}
          <div className="lg:col-span-5 h-full">
            <SchedulerCalendar primaryColor={primaryThemeColor} onChange={handleDateTimeSelect} />
          </div>

          {/* Column 2: Send Message Form (lg:col-span-7) */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
              
              {/* Form Ambient Glow */}
              <div 
                style={{ backgroundColor: primaryThemeColor }}
                className="absolute -top-24 -right-24 w-80 h-80 opacity-[0.06] rounded-full blur-[100px] pointer-events-none" 
              />
              <div 
                style={{ backgroundColor: primaryThemeColor }}
                className="absolute -bottom-24 -left-24 w-80 h-80 opacity-[0.03] rounded-full blur-[100px] pointer-events-none" 
              />

              {isSubmitted ? (
                /* ── SUCCESS FEEDBACK STATE ── */
                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-12 px-4 animate-in zoom-in-95 duration-300">
                  <div className="mb-6 relative flex items-center justify-center">
                    {/* Glowing ring animation */}
                    <div 
                      style={{ borderColor: primaryThemeColor }}
                      className="absolute w-20 h-20 rounded-full border-2 opacity-20 animate-ping"
                    />
                    <CheckCircle style={{ color: primaryThemeColor }} className="w-16 h-16 relative z-10 fill-zinc-950 stroke-[1.5px]" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4">
                    Booking Request Sent!
                  </h3>
                  
                  <p className="text-zinc-400 text-sm md:text-[15px] font-light leading-relaxed max-w-md mb-8">
                    Thank you, <span className="text-white font-medium">{name}</span>! We have received your request and details. A coordinator will call you back at <span className="text-white font-medium">{phone}</span> within <span style={{ color: primaryThemeColor }} className="font-semibold">15 minutes</span>.
                  </p>

                  {scheduledTime && (
                    <div 
                      style={{ borderColor: `${primaryThemeColor}40`, backgroundColor: `${primaryThemeColor}05` }}
                      className="border rounded-2xl p-5 mb-8 w-full max-w-sm text-left flex items-start gap-4"
                    >
                      <Calendar style={{ color: primaryThemeColor }} className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Selected Date & Time</p>
                        <p className="text-white text-sm font-medium tracking-wide">{scheduledTime}</p>
                        <p className="text-xs text-zinc-500 font-light mt-1">Pending dispatcher confirmation</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                      setScheduledTime(null);
                    }}
                    style={{ borderColor: `${primaryThemeColor}40` }}
                    className="px-6 py-2.5 bg-transparent border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* ── STANDARD FORM STATE ── */
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4 sm:gap-6 h-full justify-between">
                  
                  {/* Header Title */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        style={{ borderColor: `${primaryThemeColor}30`, backgroundColor: `${primaryThemeColor}10` }}
                        className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
                      >
                        <MessageSquare style={{ color: primaryThemeColor }} className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-light tracking-tight">Send a Message</h3>
                        <p className="text-zinc-500 text-xs font-light">Tell us how we can help you today</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-zinc-900/60 w-full mt-4" />
                  </div>

                  {/* Input Fields Container */}
                  <div className="flex flex-col gap-5 my-6">
                    {errorMessage && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-3 text-xs font-medium text-center">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-2 group">
                        <label 
                          htmlFor="name" 
                          style={{ "--focus-color": primaryThemeColor } as any}
                          className={`text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-focus-within:text-[var(--focus-color)] transition-colors`}
                        >
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          style={{ "--focus-border": primaryThemeColor } as any}
                          className="bg-zinc-950/50 border border-zinc-850 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--focus-border)] focus:ring-1 focus:ring-[var(--focus-border)]/50 transition-all font-light text-sm placeholder:text-zinc-700"
                        />
                      </div>
                      {/* Phone */}
                      <div className="flex flex-col gap-2 group">
                        <label 
                          htmlFor="phone" 
                          style={{ "--focus-color": primaryThemeColor } as any}
                          className={`text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-focus-within:text-[var(--focus-color)] transition-colors`}
                        >
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          id="phone"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          style={{ "--focus-border": primaryThemeColor } as any}
                          className="bg-zinc-950/50 border border-zinc-850 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--focus-border)] focus:ring-1 focus:ring-[var(--focus-border)]/50 transition-all font-light text-sm placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 group">
                      <label 
                        htmlFor="email" 
                        style={{ "--focus-color": primaryThemeColor } as any}
                        className={`text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-focus-within:text-[var(--focus-color)] transition-colors`}
                      >
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        style={{ "--focus-border": primaryThemeColor } as any}
                        className="bg-zinc-950/50 border border-zinc-850 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--focus-border)] focus:ring-1 focus:ring-[var(--focus-border)]/50 transition-all font-light text-sm placeholder:text-zinc-700"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 group">
                      <label 
                        htmlFor="message" 
                        style={{ "--focus-color": primaryThemeColor } as any}
                        className={`text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-focus-within:text-[var(--focus-color)] transition-colors`}
                      >
                        What's the issue?
                      </label>
                      <textarea 
                        id="message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe what support you need..."
                        style={{ "--focus-border": primaryThemeColor } as any}
                        className="bg-zinc-950/50 border border-zinc-850 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--focus-border)] focus:ring-1 focus:ring-[var(--focus-border)]/50 transition-all font-light text-sm resize-none placeholder:text-zinc-700"
                      ></textarea>
                    </div>
                  </div>

                  {/* Scheduled Summary & Button */}
                  <div className="mt-auto">
                    {/* Visual Schedule Badge inside form */}
                    {scheduledTime && (
                      <div 
                        style={{ borderColor: `${primaryThemeColor}30`, backgroundColor: `${primaryThemeColor}05` }}
                        className="border rounded-xl p-3 flex items-center justify-between gap-3 mb-4 animate-in slide-in-from-bottom-2 duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle style={{ color: primaryThemeColor }} className="w-4 h-4 shrink-0" />
                          <span className="text-[11px] font-medium text-white tracking-wide">
                            Booking Scheduled: <span style={{ color: primaryThemeColor }}>{scheduledTime}</span>
                          </span>
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      style={{ 
                        backgroundColor: primaryThemeColor,
                        boxShadow: `0 8px 25px -8px ${primaryThemeColor}60`
                      }}
                      className="flex items-center justify-center gap-3 w-full py-4 bg-amber-500 hover:brightness-110 text-zinc-950 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-zinc-500 text-center text-[10px] font-light mt-4 leading-relaxed">
                      Typically responds within <span style={{ color: primaryThemeColor }} className="font-semibold">15 minutes</span> during operational hours.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
