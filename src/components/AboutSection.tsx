const AboutSection = () => {
  return <section id="about" className="section-padding bg-charcoal text-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-8 text-white">About PA KING</h2>

          {/* About Text */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">PA KING adalah perusahaan makanan yang berfokus pada produk olahan bebek premium sejak 2006, melayani kebutuhan bulk order dan berbagai acara  mulai dari katering, pertemuan perusahaan, hingga acara keluarga. Setiap bebek kami bumbui selama satu hari penuh dengan resep istimewa turun-temurun, didukung pengawasan kualitas ketat, standar kebersihan tinggi, dan sistem pasokan yang terjaga di setiap tahap produksi. Dengan pengalaman puluhan tahun dan dedikasi menjaga cita rasa autentik di setiap hidangan, PA KING hadir untuk menemani momen spesial anda dari acara keluarga hingga kebutuhan acara dalam skala besar.</p>

          {/* More About Us Button */}
          <div className="mt-8">
            <a
              href="/about"
              className="inline-block px-8 py-3 border border-gold text-gold font-medium rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              More About PA KING
            </a>
          </div>

          {/* Decorative gold line */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;