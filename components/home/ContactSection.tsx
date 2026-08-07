"use client";

import { motion } from "framer-motion";
import { Button, GlassPanel, Section } from "@/components/ui";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { getSupabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useGeo } from "@/hooks/useGeo";
import { countries, countryNameFromCode } from "@/lib/countries";

const BUDGET_OPTIONS: Record<"INR" | "USD", string[]> = {
  INR: [
    "Basic Static ₹15k - ₹20k",
    "Basic Dynamic ₹20k - ₹25k",
    "E-Commerce ₹30k - ₹50k",
    "Custom ₹50k+",
  ],
  USD: [
    "Basic Static $500 - $900",
    "Basic Dynamic $900 - $1,800",
    "E-Commerce $2,000 - $4,500",
    "Custom $5,000+",
  ],
};

export function ContactSection() {
  const { country: detectedCountry, currency } = useGeo();

  const [formData, setFormData] = useState({
    full_name: "",
    business_name: "",
    email: "",
    phone: "",
    website: "",
    business_type: "",
    country: "",
    budget: "",
    message: "",
  });

  // Pre-fill the Country field with the geo-detected country once it resolves,
  // but only if the user hasn't already chosen one. The field stays editable and
  // required, so the submitted value is the client's verified location.
  useEffect(() => {
    const detectedName = countryNameFromCode(detectedCountry);
    if (detectedName) {
      setFormData((prev) =>
        prev.country ? prev : { ...prev, country: detectedName },
      );
    }
  }, [detectedCountry]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await getSupabase().from("leads").insert([
      {
        full_name: formData.full_name,
        business_name: formData.business_name,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        business_type: formData.business_type,
        country: formData.country,
        budget: formData.budget,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      toast.error("Your request was saved, but the email notification failed.");
      return;
    }

    toast.success(
      "Proposal received successfully! We'll contact you within 24 hours.",
    );

    setFormData({
      full_name: "",
      business_name: "",
      email: "",
      phone: "",
      website: "",
      business_type: "",
      country: "",
      budget: "",
      message: "",
    });
  };

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
            Get Started
          </p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Your Business Deserves A Website That Works.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Tell us about your business and we'll recommend the perfect website
            package. Book a free consultation and let's create something
            extraordinary together.
          </p>
        </div>

        <GlassPanel className="p-8 lg:p-10">
          {/*<h3 className="text-3xl font-semibold text-slate-950">
            We Can Build Something Extraordinary
          </h3>*/}

          <p className="mt-2 mb-8 font-semibold text-slate-600">
            You'll receive a personalized response within 24 hours. Feel free to
            let us know in the description below if you'd like to get our
            response via WhatsApp.
          </p>

          <form id="contact-form" className="space-y-7" onSubmit={handleSubmit}>
            <div className="grid gap-7 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
                required
              />
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <input
                type="text"
                placeholder="Business Name"
                value={formData.business_name}
                onChange={(e) =>
                  setFormData({ ...formData, business_name: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
              />
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <input
                type="text"
                placeholder="Website (Optional)"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
              />
              <select
                value={formData.business_type}
                onChange={(e) =>
                  setFormData({ ...formData, business_type: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
              >
                <option value="" disabled>
                  Business Type
                </option>

                <option>Personal Brand</option>
                <option>Startup</option>
                <option>Agency</option>
                <option>E-commerce</option>
                <option>Restaurant</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Real Estate</option>
                <option>Beauty</option>
                <option>Other</option>
              </select>

              {/*<select
                value={formData.selected_plan}
                onChange={(e) =>
                  setFormData({ ...formData, selected_plan: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
              >
              <option value="" disabled>
                Select Package
              </option>

              <option>Standard - ₹7,999</option>

              <option>Pro - ₹14,999</option>

              <option>Ultra - ₹24,999</option>

              <option>Custom</option>
              </select> */}

              <select
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
                required
              >
                <option value="" disabled>
                  Country
                </option>

                {countries.map((c) => (
                  <option key={c.code} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all duration-300 focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
              >
                <option value="" disabled>
                  Estimated Budget
                </option>

                {BUDGET_OPTIONS[currency].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <textarea
              rows={6}
              placeholder="Tell us about your business and project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-2xl border border-slate-200 bg-white/60 p-4 outline-none transition-all focus:border-[#7C5CFF] focus:ring-4 focus:ring-[#7C5CFF]/10"
            />

            <Button
              type="submit"
              //variant="primary"
              className="w-full rounded-2xl bg-gradient-to-r from-[#6D5EF9] to-[#8B7BFF] px-8 py-4 text-lg font-semibold text-white shadow-[0_15px_35px_rgba(109,94,249,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(109,94,249,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Request Proposal"}
            </Button>
          </form>
        </GlassPanel>
      </motion.div>
    </Section>
  );
}

export default ContactSection;
