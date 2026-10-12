import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { PartnershipHero } from "@/components/partnership/PartnershipHero";
import { PartnershipProcess } from "@/components/partnership/PartnershipProcess";
import { PartnershipBenefits } from "@/components/partnership/PartnershipBenefits";
import { PartnershipShowcase } from "@/components/partnership/PartnershipShowcase";
import { PartnershipFinalCTA } from "@/components/partnership/PartnershipFinalCTA";

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE7] pt-[50px] text-[#2A211D]">
      <Header />
      <main className="overflow-x-clip">
        <PartnershipHero />
        <PartnershipProcess />
        <PartnershipBenefits />
        <PartnershipShowcase />
        <PartnershipFinalCTA />
      </main>
      <Footer />
    </div>
  );
}