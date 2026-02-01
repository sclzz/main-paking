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
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-charcoal/80 backdrop-blur-sm"}`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5">
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
            {navLinks.map(link => <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-cream/80 hover:text-gold'}`}>
                {link.label}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-cream hover:text-gold'}`} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="flex flex-col py-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={handleLinkClick} className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors">
                  {link.label}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;