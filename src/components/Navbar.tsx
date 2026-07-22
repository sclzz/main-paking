import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed, Store, Users, Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/#menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/#store", label: "Our Store", icon: Store },
  { href: "/#about", label: "About Us", icon: Users },
  { href: "/#contact", label: "Contact Us", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open (nambahan: biar ga bisa scroll background pas overlay kebuka)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHome = window.location.pathname === "/";
    if (!isHome) {
      window.location.href = href;
      return;
    }
    e.preventDefault();
    const id = href.replace("/#", "").replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    setIsOpen(false);

    requestAnimationFrame(() => {
      const navHeight = document.querySelector("nav")?.clientHeight ?? 80;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const extraOffset = isMobile
        ? id === "about"
          ? -20
          : id === "store"
            ? -45
            : 12
        : id === "store"
            ? -30
            : 12;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;
      const top = Math.max(0, y);
      const startY = window.scrollY;
      const diff = top - startY;
      const duration = isMobile ? 1600 : 900;
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      let startTime: number | null = null;

      const step = (now: number) => {
        if (startTime === null) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + diff * eased);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      history.pushState(null, "", href);
    });
  };

  const forceSolidNavbar = location.pathname === "/bulk-order";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || forceSolidNavbar
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-charcoal/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 md:gap-1.5">
            <img src="/Logo.jpg" alt="PA KING Logo" className="h-16 w-19 object-contain" />
            <span className="font-display text-xl md:text-2xl font-semibold text-gold leading-none">
              PA KING
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || forceSolidNavbar ? "text-muted-foreground hover:text-primary" : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors active:scale-95 ${
              isOpen
                ? isScrolled || forceSolidNavbar
                  ? "text-[#B23A2F] hover:text-[#B23A2F]/80"
                  : "text-cream hover:text-gold"
                : isScrolled || forceSolidNavbar
                ? "text-foreground hover:text-primary"
                : "text-cream hover:text-gold"
            }`}
            aria-label="Toggle menu"
          >
            <span className="relative block h-6 w-6">
              <span
                className={
                  "absolute inset-0 transition-all duration-300 ease-out " +
                  (isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100")
                }
                aria-hidden="true"
              >
                <Menu className="h-6 w-6" />
              </span>
              <span
                className={
                  "absolute inset-0 transition-all duration-300 ease-out " +
                  (isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75")
                }
                aria-hidden="true"
              >
                <X className="h-6 w-6" />
              </span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={
            "md:hidden fixed top-16 left-0 right-0 z-40 overflow-hidden transition-all duration-500 ease-out " +
            (isOpen ? "opacity-100 max-h-[420px] pointer-events-auto" : "opacity-0 max-h-0 pointer-events-none")
          }
        >
          {/* FIX #1: bg solid (bukan /95) + shadow biar watermark hero ga nembus */}
          <div className="bg-background backdrop-blur-lg shadow-xl border-b border-border/50">
            <div className="py-2">
              <div className="flex flex-col items-stretch">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={
                        "group flex items-center gap-3 px-6 py-4 text-sm font-medium text-foreground/80 hover:text-gold hover:bg-gold/5 transition-colors " +
                        (i !== navLinks.length - 1 ? "border-b border-border/40" : "")
                      }
                    >
                      <Icon className="h-4 w-4 text-gold/70 group-hover:text-gold transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* FIX #3: CTA biar ga dead-end di bawah */}
              <div className="px-6 pt-4 pb-2">
                <a
                  href="/#order-platforms"
                  onClick={(e) => handleSmoothScroll(e, "/#order-platforms")}
                  className="flex items-center justify-center gap-2 w-full rounded-md bg-gold text-charcoal font-semibold text-sm py-3 hover:bg-gold/90 transition-colors"
                >
                  Online Orders
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
