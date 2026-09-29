import { Suspense } from "react";
import { Footer } from "@/components/home/Footer";
import ServicesPageComponent from "@/components/services/ServicesPage";

export const metadata = { title: "Services | Lumora Agency", description: "Explore Lumora's digital design, development, branding, and growth services." };

export default function ServicesPageWrapper() {
  return (
    <>
      <Suspense fallback={null}>
        <ServicesPageComponent />
      </Suspense>
      <Footer />
    </>
  );
}
