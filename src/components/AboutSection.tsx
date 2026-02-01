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
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">PA KING adalah perusahaan makanan yang berfokus pada produk olahan bebek premium untuk kebutuhan katering dan pembeli B2B. Kami menerapkan pengawasan kualitas yang ketat, standar kebersihan yang tinggi, serta proses produksi yang konsisten untuk memastikan setiap produk memenuhi standar mutu yang kami tetapkan. Dengan sistem pasokan yang terjaga dan komitmen terhadap keandalan layanan, PA KING hadir sebagai mitra tepercaya bagi bisnis katering dan pelaku usaha kuliner di berbagai wilayah</p>

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