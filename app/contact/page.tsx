import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";

export const metadata = { title: "Contact | Lumora Agency", description: "Start a project conversation with Lumora." };

export default function ContactPage() {
  return <div className="min-h-screen bg-[#F4EFE7] pt-[20px] text-[#2A211D]"><Header /><main><ContactSection /></main><Footer /></div>;
}
