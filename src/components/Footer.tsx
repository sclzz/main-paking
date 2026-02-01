import { MessageCircle, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer id="contact" className="bg-black text-white px-4 py-[4px]">
      <div className="container-narrow pt-[25px] pb-[5px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">PA KING</h3>
            <p className="text-white/60 text-sm">Jatiwarna, Pondok Melati 
Bekasi City, West Java 17415</p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="https://wa.me/628121333654" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors group">
              <MessageCircle className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-inherit">+62 812-1333-654</span>
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-gold/30" />
            
            <a href="mailto:hello@bebekpaking.com" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors group">
              <Mail className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">vandrajaya.pakingduck@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom decoration with gold accent */}
        <div className="mt-8 border-t border-gold/20 text-center py-[3px] pt-[3px]">
          <p className="text-white/50 text-xs py-0 text-center">© 2026 Paking. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;