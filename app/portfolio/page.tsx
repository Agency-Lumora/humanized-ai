import EditorialPortfolio from "@/components/portfolio/EditorialPortfolio";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/HeroSection";

export const metadata = {
  title: "Portfolio | Lumora",
  description: "Selected Lumora case studies in branding, digital experience, and identity.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE7] pt-[84px]">
      <Header />
      <EditorialPortfolio />
      <Footer />
    </div>
  );
}
