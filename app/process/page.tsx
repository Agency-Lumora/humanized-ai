import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata = { title: "Process | Lumora Agency", description: "See Lumora's thoughtful process from discovery through launch and growth." };

export default function ProcessPage() {
  return <div className="min-h-screen bg-[#F4EFE7] pt-[20px] text-[#2A211D]"><Header /><main><ProcessSection /></main><Footer /></div>;
}
