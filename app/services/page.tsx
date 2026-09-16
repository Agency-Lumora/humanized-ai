import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";

export const metadata = { title: "Services | Lumora", description: "Explore Lumora's digital design, development, branding, and growth services." };

export default function ServicesPage() {
  return <div className="min-h-screen bg-[#F4EFE7] pt-[84px] text-[#2A211D]"><Header /><main><ServicesSection /></main><Footer /></div>;
}
