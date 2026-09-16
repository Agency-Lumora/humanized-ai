"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { countryNameFromCode } from "@/lib/countries";
import { getSupabase } from "@/lib/supabase";
import { useGeo } from "@/hooks/useGeo";

const inputClassName = "mt-2 w-full rounded-[9px] border border-[#806C5D]/16 bg-[#F4EFE7]/45 px-4 py-3.5 text-[13px] text-[#2A211D] outline-none transition duration-300 placeholder:text-[#806C5D]/45 focus:border-[#88C5E8] focus:bg-white focus:ring-4 focus:ring-[#88C5E8]/12";

const contactItems = [
  { label: "Our office", value: "Surat, India", detail: "We work with clients globally", Icon: MapPin },
  { label: "Email us", value: "hello@lumora.agency", detail: "", Icon: Mail, href: "mailto: hello@lumora.agency" },

];

export function ContactSection() {
  const { country: detectedCountry } = useGeo();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ full_name: "", business_name: "", phone: "", email: "", business_type: "", message: "" });
  const updateField = (field: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const payload = { ...formData, website: "", country: countryNameFromCode(detectedCountry) || "India", budget: "To be discussed", selected_plan: formData.business_type };
    try {
      const { error } = await getSupabase().from("leads").insert([payload]);
      if (error) throw error;
      const response = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) { toast.error("Your request was saved, but the email notification failed."); return; }
      toast.success("Message received. We’ll be in touch within 24 hours.");
      setFormData({ full_name: "", business_name: "", phone: "", email: "", business_type: "", message: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally { setLoading(false); }
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-[#F4EFE7] py-[clamp(3.5rem,7vw,6.5rem)]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:px-12 xl:grid-cols-[minmax(300px,.78fr)_minmax(470px,1fr)_230px] xl:gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 max-w-[390px]">
          <p className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#6EA9C7]"><span className="h-px w-10 bg-[#6EA9C7]/60" />Get in touch</p>
          <h1 className="mt-6 font-serif text-[clamp(3rem,5.2vw,4.6rem)] leading-[0.93] tracking-[-0.05em] text-[#2A211D]">Let&apos;s build<br />something great.<br /><span className="text-[#6EA9C7]">together.</span></h1>
          <p className="mt-7 max-w-[350px] text-[13px] leading-6 text-[#2A211D]/60">Have a project in mind, a question, or just want to say hello? We&apos;d love to hear from you. Fill out the form or reach us directly below.</p>
          <div className="mt-8 space-y-5">
            {contactItems.map(({ label, value, detail, Icon, href }) => {
              const content = <><p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">{label}</p><p className="mt-1 text-[12px] text-[#2A211D]/72">{value}</p>{detail && <p className="mt-0.5 text-[10px] text-[#2A211D]/48">{detail}</p>}</>;
              return <div key={label} className="flex items-start gap-4"><Icon className="mt-1 h-[18px] w-[18px] shrink-0 text-[#2A211D]/75" strokeWidth={1.6} />{href ? <a href={href} className="transition-colors hover:text-[#6EA9C7]">{content}</a> : <div>{content}</div>}</div>;
            })}
            <div className="flex items-start gap-4"><Camera className="mt-1 h-[18px] w-[18px] shrink-0 text-[#2A211D]/75" strokeWidth={1.6} /><div><p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#806C5D]">Follow us</p><div className="mt-1 flex gap-3 text-[12px] text-[#2A211D]/72"><a className="hover:text-[#6EA9C7]" href="https://www.instagram.com/curatewithlumora/?__pwa=1">Instagram</a><span>/</span><a className="hover:text-[#6EA9C7]" href="https://www.linkedin.com/in/namratachawla05/">LinkedIn</a><span>/</span><a className="hover:text-[#6EA9C7]" href="https://www.behance.net/">Behance</a></div></div></div>
          </div>
          <div className="mt-10 w-fit -rotate-[12deg] text-[#6EA9C7]">
            <p className="font-serif text-[13px] italic leading-[0.92]">Let&apos;s create<br />something amazing</p>
            <svg className="ml-14 mt-0.5 h-5 w-16" viewBox="0 0 64 20" fill="none"><path d="M2 4c14 10 33 12 49 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><path d="m47 7 5 4-6 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 rounded-[15px] border border-white/90 bg-white/70 p-5 shadow-[0_22px_55px_rgba(42,33,29,0.08)] backdrop-blur-sm sm:p-8">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6EA9C7]">Send us a message</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-[11px] text-[#2A211D]/70">Name <span className="text-[#6EA9C7]">*</span><input className={inputClassName} required value={formData.full_name} onChange={(event) => updateField("full_name", event.target.value)} placeholder="Your name" /></label>
            <label className="text-[11px] text-[#2A211D]/70">Company Name <span className="text-[#6EA9C7]">*</span><input className={inputClassName} required value={formData.business_name} onChange={(event) => updateField("business_name", event.target.value)} placeholder="Your company" /></label>
            <label className="text-[11px] text-[#2A211D]/70">Phone No. <span className="text-[#6EA9C7]">*</span><input className={inputClassName} required type="tel" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+91 00000 00000" /></label>
            <label className="text-[11px] text-[#2A211D]/70">Email Address <span className="text-[#6EA9C7]">*</span><input className={inputClassName} required type="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@company.com" /></label>
          </div>
          <label className="mt-5 block text-[11px] text-[#2A211D]/70">What are you looking for? <span className="text-[#6EA9C7]">*</span><select className={inputClassName} required value={formData.business_type} onChange={(event) => updateField("business_type", event.target.value)}><option value="" disabled>Select an option</option><option>Website design & development</option><option>Branding & identity</option><option>AI automation or CRM</option><option>Digital strategy</option><option>Something else</option></select></label>
          <label className="mt-5 block text-[11px] text-[#2A211D]/70">Tell us more about your project <span className="text-[#6EA9C7]">*</span><textarea className={`${inputClassName} min-h-[126px] resize-y`} required value={formData.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Share your ideas, goals, or just say hello..." /></label>
          <button disabled={loading} type="submit" className="group mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#B7DDF0] px-6 py-4 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2A211D] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9FD0E8] disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Sending..." : "Send message"}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} /></button>
        </motion.form>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto hidden h-[470px] w-full max-w-[260px] xl:block" aria-hidden="true">
          <div className="absolute right-[-48px] top-8 h-[355px] w-[310px] rounded-full bg-[#DCEBF0]" /><div className="absolute -right-12 top-1 h-[315px] w-[300px] rotate-[-13deg] rounded-[50%] border border-[#8EBED5]/70" /><span className="absolute right-0 top-2 text-[28px] text-[#6EA9C7]">✦</span>
          <div className="absolute bottom-6 right-[-24px] h-[318px] w-[285px] overflow-hidden rounded-[48%] bg-[linear-gradient(135deg,#f8f4ed_0%,#eef2f1_48%,#d4e5e9_100%)] shadow-[0_18px_40px_rgba(42,33,29,0.11)]"><div className="absolute inset-x-0 bottom-0 h-[102px] bg-[#e7ddd0]" /><div className="absolute left-7 top-3 h-[210px] w-[2px] rotate-[-18deg] bg-[#637d53]" /><div className="absolute left-1 top-15 h-11 w-7 rotate-[25deg] rounded-[100%_0_100%_0] bg-[#6b855a]" /><div className="absolute left-9 top-[82px] h-12 w-7 rotate-[-28deg] rounded-[100%_0_100%_0] bg-[#799268]" /><div className="absolute left-0 top-[133px] h-11 w-7 rotate-[26deg] rounded-[100%_0_100%_0] bg-[#58734c]" /><div className="absolute left-13 top-[158px] h-10 w-6 rotate-[-30deg] rounded-[100%_0_100%_0] bg-[#6e8a5d]" /><div className="absolute bottom-8 left-[-20px] h-[148px] w-[250px] -rotate-[8deg] rounded-[13px] bg-[linear-gradient(135deg,#dedbd5_0%,#aaa49f_58%,#6f6a67_100%)] shadow-[0_19px_23px_rgba(42,33,29,0.22)]"><div className="absolute inset-x-5 top-3 h-[112px] rounded-[6px] bg-[linear-gradient(135deg,#faf7f1,#ddd9d3)]" /><span className="absolute left-[113px] top-[48px] text-[18px] text-[#696461]/70">●</span><div className="absolute bottom-3 left-[66px] h-2 w-24 rounded-full bg-[#5d5957]" /></div><div className="absolute bottom-[35px] right-3 h-[61px] w-[51px] rounded-b-[13px] rounded-t-[7px] bg-[#f8f4ea] shadow-[0_8px_15px_rgba(42,33,29,0.13)]"><div className="absolute -right-4 top-3 h-7 w-6 rounded-r-full border-[3px] border-[#f8f4ea]" /><p className="pt-6 text-center font-mono text-[5px] tracking-[0.13em] text-[#806C5D]">LUMORA</p></div></div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
