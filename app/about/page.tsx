import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { WhyChooseLumoraSection } from "@/components/home/WhyChooseLumoraSection";

export const metadata = { title: "About | Lumora", description: "Learn about Lumora and how we partner with ambitious businesses." };

export default function AboutPage() {
  return <div className="min-h-screen bg-[#F4EFE7] pt-[84px] text-[#2A211D]"><Header /><main><AboutSection /><WhyChooseLumoraSection /></main><Footer /></div>;
}
