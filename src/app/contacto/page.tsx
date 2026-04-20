import Navbar from "@/components/Navbar";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
