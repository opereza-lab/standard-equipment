import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IndustriasSection from "@/components/IndustriasSection";
import ProductosDestacados from "@/components/ProductosDestacados";
import PorQueNosotros from "@/components/PorQueNosotros";
import PortfolioSection from "@/components/PortfolioSection";
import CTABanner from "@/components/CTABanner";
import ClientesSection from "@/components/ClientesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <HeroSection />
        <IndustriasSection />
        <ProductosDestacados />
        <PorQueNosotros />
        <PortfolioSection />
        <CTABanner />
        <ClientesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
