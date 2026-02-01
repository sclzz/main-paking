import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import StoreSection from "@/components/StoreSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <StoreSection />
        <PartnersSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
