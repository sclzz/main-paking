import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const HeroSection = () => {
const handleWhatsAppClick = () => {
    window.open("https://wa.me/628121333654", "_blank");
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#141414]">
      {/* Subtle gold accent decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container-narrow text-center px-4">
        {/* Logo Text */}
        <div className="mb-6 animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream tracking-tight">PA KING</h1>
        </div>

        {/* Tagline */}
        <div className="mb-8 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <p className="text-gold font-medium text-lg md:text-xl tracking-widest uppercase">
            Premium Duck Food & Catering Supply
          </p>
        </div>

        {/* Description */}
        <div className="mb-10 max-w-2xl mx-auto animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
            Menyajikan hidangan bebek berkualitas istimewa dengan standar kebersihan dan konsistensi tertinggi. Mitra terpercaya Anda untuk bisnis katering dan pasokan makanan B2B.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{
        animationDelay: "0.7s"
      }}>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-deep-red-dark text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Contact us via WhatsApp
          </Button>
        </div>

        {/* Gold decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4 animate-fade-in" style={{
        animationDelay: "0.9s"
      }}>
          <div className="w-16 h-px bg-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/50" />
          <div className="w-16 h-px bg-gold/30" />
        </div>
      </div>
    </section>;
};
export default HeroSection;