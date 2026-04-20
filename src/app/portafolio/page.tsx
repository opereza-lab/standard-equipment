import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioSection from "@/components/PortfolioSection";

export default function PortafolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16">
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-4">Nuestro Trabajo</p>
          <h1 className="text-4xl font-black mb-4" style={{ color: "#0d1528" }}>Portafolio de Proyectos</h1>
          <p className="text-gray-500 text-sm max-w-xl">
            Más de 20 años fabricando equipamiento industrial a medida para construcción, minería y materiales a granel en Chile y Latinoamérica.
          </p>
        </div>
        <PortfolioSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
