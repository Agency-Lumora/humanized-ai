import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";
import { ProcessHero } from "@/components/process/ProcessHero";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { OwnershipSection } from "@/components/process/OwnershipSection";
import { CollaborationSection } from "@/components/process/CollaborationSection";
import { ExpectationsSection } from "@/components/process/ExpectationsSection";
import { ProcessCTA } from "@/components/process/ProcessCTA";

export const metadata = { title: "Process | Lumora Agency", description: "See Lumora's thoughtful process from discovery through launch and growth." };

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE7] text-[#2A211D]">
      <Header />
      <main className="overflow-x-clip">
        <ProcessHero />
        <ProcessSteps />
        <OwnershipSection />
        <CollaborationSection />
        <ExpectationsSection />
        <ProcessCTA />
      </main>
      <Footer />
    </div>
  );
}
