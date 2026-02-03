import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [{
  href: "#menu",
  label: "Menu"
}, {
  href: "#store",
  label: "Our Store"
}, {
  href: "#partners",
  label: "Partners"
}, {
  href: "#about",
  label: "About"
}, {
  href: "#contact",
  label: "Contact Us"
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    // Close mobile menu first to avoid layout shift after scrolling
    setIsOpen(false);

    // Scroll after the DOM/layout updates
    requestAnimationFrame(() => {
      const navHeight = document.querySelector("nav")?.clientHeight ?? 80;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      // Desktop: sedikit jarak; Mobile: dorong lebih turun karena navbar + layout shift
      const extraOffset = isMobile ? -48 : 12;

      const y =
        target.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        extraOffset;

      const top = Math.max(0, y);

      const startY = window.scrollY;
      const diff = top - startY;

      // Slower on mobile for a nicer feel
      const duration = isMobile ? 1600 : 900;

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      let startTime: number | null = null;

      const step = (now: number) => {
        if (startTime === null) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + diff * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);

      // Update hash without triggering a jump
      history.pushState(null, "", href);
    });
  };

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-charcoal/80 backdrop-blur-sm"}`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 md:gap-1.5">
          <img
         src="/Logo.jpg"
         alt="PA KING Logo"
          className="h-16 w-19 object-contain"
          />
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
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-cream/80 hover:text-gold"
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
    isScrolled ? "text-foreground hover:text-primary" : "text-cream hover:text-gold"
  }`}
  aria-label="Toggle menu"
>
  <span className="relative block h-6 w-6">
    {/* Hamburger */}
    <span
      className={
        "absolute inset-0 transition-all duration-300 ease-out " +
        (isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100")
      }
      aria-hidden="true"
    >
      <Menu className="h-6 w-6" />
    </span>

    {/* Close */}
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
            (isOpen
              ? "opacity-100 max-h-64 pointer-events-auto"
              : "opacity-0 max-h-0 pointer-events-none")
          }
        >
          <div className="bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="py-3">
              <div className="flex flex-col items-stretch">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="px-6 py-3 text-sm font-medium text-center text-foreground/80 hover:text-[#B23A2F] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;