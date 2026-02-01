const partners = [
  { id: 1, name: "Hotel Majapahit" },
  { id: 2, name: "Catering Nusantara" },
  { id: 3, name: "Event Organizer Prima" },
  { id: 4, name: "Restaurant Tugu" },
  { id: 5, name: "Wedding Planner Elite" },
  { id: 6, name: "Corporate Dining Co." },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Trusted Collaborations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
           Kami memasok produk makanan berbahan dasar bebek premium untuk bisnis katering di seluruh wilayah. Mitra kami menangani layanan katering sementara kami memastikan pasokan yang konsisten dan berkualitas tinggi untuk kolaborasi jangka panjang.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center p-6 bg-secondary/50 rounded-xl border border-border/50 hover:border-gold/40 hover:bg-secondary transition-all duration-300"
            >
              <span className="font-medium text-muted-foreground group-hover:text-foreground text-center text-sm transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Interested in becoming a catering partner?{" "}
            <a 
              href="#contact" 
              className="text-primary hover:text-deep-red-dark font-medium underline underline-offset-4 transition-colors"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
