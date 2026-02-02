import { useEffect, useRef } from "react";

const partners = [
  { id: 1, name: "Hotel Majapahit", logo: "/partners%201.jpg" },
  { id: 2, name: "Catering Nusantara", logo: "/partners%202.jpg" },
  { id: 3, name: "Event Organizer Prima", logo: "/partners%203.jpg" },
  { id: 4, name: "Restaurant Tugu", logo: "/partners%204.jpg" },
  { id: 5, name: "Wedding Planner Elite", logo: "/partners%205.jpg" },
  { id: 6, name: "Corporate Dining Co.", logo: "/partners%206.jpg" },
];

const PartnersSection = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const setEl = setRef.current;
    if (!track || !setEl) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const speed = isMobile ? 70 : 45; // px per second

    let lastTime = performance.now();
    let x = 0;

    const getSetWidth = () => setEl.getBoundingClientRect().width;

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const setWidth = getSetWidth();
      x += speed * dt;

      // loop seamlessly based on exactly one-set width (incl. end padding)
      if (setWidth > 0 && x >= setWidth) {
        x -= setWidth;
      }

      track.style.transform = `translate3d(${-x}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      // keep x in range after layout changes
      const setWidth = getSetWidth();
      if (setWidth > 0) x = x % setWidth;
    };

    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

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

        {/* Partners Marquee */}
        <div className="relative overflow-hidden mt-10">
          <div
            ref={trackRef}
            className="flex flex-nowrap w-max whitespace-nowrap will-change-transform"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            {/* Set 1 */}
            <div ref={setRef} className="flex flex-nowrap gap-6 pr-6">
              {partners.map((partner) => (
                <div
                  key={`s1-${partner.id}`}
                  className="flex-shrink-0 w-[220px] h-[120px] md:w-[240px] md:h-[140px] overflow-hidden bg-secondary/50 rounded-xl border border-border/50"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Set 2 (duplicate) */}
            <div className="flex flex-nowrap gap-6 pr-6">
              {partners.map((partner) => (
                <div
                  key={`s2-${partner.id}`}
                  className="flex-shrink-0 w-[220px] h-[120px] md:w-[240px] md:h-[140px] overflow-hidden bg-secondary/50 rounded-xl border border-border/50"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
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

// NOTE: Requires marquee animation in global CSS

export default PartnersSection;
