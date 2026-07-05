import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const HeroSection = () => {
const handleWhatsAppClick = () => {
    window.open("https://wa.me/628121333654", "_blank");
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#141414] pt-24 pb-12">
      {/* Subtle gold accent decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container-narrow text-center px-4 -mt-12">
        {/* Logo Text */}
        <div className="mb-6 animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold text-cream tracking-tight">PA KING</h1>
        </div>

        {/* Tagline */}
        <div className="mb-8 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <p className="text-gold font-medium text-xl md:text-2xl tracking-[0.25em] uppercase">
            PREMIUM DUCK TASTE, EVERYDAY PRICE
          </p>
        </div>

        {/* Description */}
        <div className="mb-10 max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          <p className="text-cream/75 text-xl md:text-2xl leading-10">
            Bebek dan Chinese food dengan rasa autentik, diracik dari resep istimewa dengan bahan pilihan dan diproses secara higienis, menghadirkan kelezatan yang menggugah selera di setiap suapan.
          </p>
        </div>

        {/* Statistics */}
        <div
          className="mt-8 grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-display font-semibold text-gold">100%</h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-cream/70">
              Fresh Daily
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-display font-semibold text-gold">100%</h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-cream/70">
              Halal
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-display font-semibold text-gold">100%</h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-cream/70">
              Authentic Taste
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="mt-10 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-deep-red-dark text-primary-foreground px-10 py-7 text-xl font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Contact us via WhatsApp
          </Button>
        </div>

        {/* Gold decorative line */}
        <div className="mt-10 flex items-center justify-center gap-4 animate-fade-in" style={{
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