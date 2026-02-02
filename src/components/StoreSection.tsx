import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Store = {
  name: string;
  image: string;
  desc: string;
  location: string;
  hours: string;
  waLink: string;
};

const STORES: Store[] = [
  {
    name: "Store Condet",
    image: "/store-condet.jpg",
    desc: "Layanan pemesanan bebek premium & supply untuk mitra katering di area Jakarta Timur dan sekitarnya.",
    location: "Condet, Jakarta Timur",
    hours: "Mon–Sat, 09:00–18:00",
    waLink: "https://wa.me/62XXXXXXXXXXX",
  },
  {
    name: "Store Bekasi",
    image: "/store-bekasi.jpg",
    desc: "Pusat pemesanan & pasokan untuk kebutuhan B2B, bulk order, dan event catering di Bekasi.",
    location: "Jatiwarna, Pondok Melati, Bekasi City, West Java 17415",
    hours: "Mon–Sat, 09:00–18:00",
    waLink: "https://wa.me/62XXXXXXXXXXX",
  },
  {
    name: "Store Jakarta",
    image: "/store-jakarta.jpg",
    desc: "Distribusi dan kolaborasi katering untuk area Jakarta dan sekitarnya, dengan pasokan yang konsisten.",
    location: "Jakarta (Area Coverage)",
    hours: "Mon–Sat, 09:00–18:00",
    waLink: "https://wa.me/62XXXXXXXXXXX",
  },
];

const AUTOPLAY_MS = 4500; // durasi per slide

const StoreSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // progress 0..100 (ngisi bar)
  const [progress, setProgress] = useState(0);

  // timer refs
  const timerRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  const stopAutoplay = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetProgress = () => setProgress(0);

  const startAutoplay = () => {
    if (!emblaApi) return;

    stopAutoplay();
    resetProgress();
    isPausedRef.current = false;

    const startTime = Date.now();

    timerRef.current = window.setInterval(() => {
      if (!emblaApi) return;
      if (isPausedRef.current) return;

      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / AUTOPLAY_MS) * 100);
      setProgress(pct);

      if (pct >= 100) {
        // pindah slide
        resetProgress();
        emblaApi.scrollNext();
        // restart timer biar halus
        stopAutoplay();
        startAutoplay();
      }
    }, 50);
  };

  const pauseAutoplay = () => {
    isPausedRef.current = true;
  };

  const resumeAutoplay = () => {
    isPausedRef.current = false;
  };

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    startAutoplay();
  };

  const scrollPrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    startAutoplay();
  };

  const scrollNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    startAutoplay();
  };

  // Setup embla events
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      resetProgress();
    };

    const onPointerDown = () => {
      // user mulai drag -> pause
      pauseAutoplay();
    };

    const onPointerUp = () => {
      // user selesai drag -> resume dan restart timer
      resumeAutoplay();
      startAutoplay();
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    onSelect();
    startAutoplay();

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi]);

  return (
    <section id="store" className="py-16 md:py-20 bg-background">
      <div className="container-narrow">
        {/* Title */}
        <div className="text-center">
          <div className="text-gold text-xs tracking-[0.25em] uppercase">
            Our Locations
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-foreground">
            Our Store
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Pilih lokasi terdekat untuk pemesanan, bulk order, dan kerja sama B2B.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="mt-12 relative">
          {/* Embla viewport */}
          <div
            className="overflow-hidden"
            ref={emblaRef}
            onMouseEnter={pauseAutoplay}
            onMouseLeave={() => {
              resumeAutoplay();
              startAutoplay();
            }}
          >
            {/* Embla container */}
            <div className="flex">
              {STORES.map((s) => (
                <div key={s.name} className="min-w-full px-4 md:px-1">
                  <div className="grid items-center gap-4 md:gap-6 md:grid-cols-2">
                    {/* Image */}
                    <div className="w-full overflow-hidden rounded-2xl border border-border/50 bg-muted/10 ml-0 md:ml-4 max-w-[560px] md:justify-self-end">
                      <div className="relative w-full h-[280px] md:h-[340px]">
                        <img
                          src={s.image}
                          alt={s.name}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl">
                        {s.name}
                      </h3>

                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="mt-6 space-y-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Location: </span>
                          <span className="font-medium">{s.location}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Hours: </span>
                          <span className="font-medium">{s.hours}</span>
                        </div>
                      </div>

                      <a
                        href={s.waLink}
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-red-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-800"
                      >
                        Contact us via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev Button */}
          <button
         type="button"
         aria-label="Previous"
         onClick={scrollPrev}
          className="hidden md:block absolute left-0 md:-left-6 top-1/2 -translate-y-1/2
             text-black/60 hover:text-black transition"
          >
          <svg
          xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          strokeWidth={2}
          >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          </button>

          {/* Next Button */}
          <button
          type="button"
          aria-label="Next"
          onClick={scrollNext}
          className="hidden md:block absolute right-0 md:-right-6 top-1/2 -translate-y-1/2
          text-black/60 hover:text-black transition"
          >
          <svg
          xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          strokeWidth={2}
          >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </button>

          {/* Indicator: dots + progress bar */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {STORES.map((_, i) => {
              const active = i === selectedIndex;

              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className="h-2 rounded-full transition-all bg-muted overflow-hidden"
                  style={{ width: active ? 56 : 10 }}
                >
                  {active && (
                    <div
                      className="h-full bg-gold"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;