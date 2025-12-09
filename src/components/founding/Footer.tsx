import { Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  const links = [
    { label: "Sobre la autora", href: "#about" },
    { label: "Contacto", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Actualizaciones del proyecto", href: "#updates" }
  ];

  return (
    <footer className="py-16 bg-deep-black border-t border-cream/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Title */}
          <div className="text-center md:text-left">
            <h3 className="font-serif-elegant text-2xl text-cream mb-2">
              Las 4 Capas del Storytelling
            </h3>
            <p className="font-sans-clean text-sm text-cream/50">
              Un proyecto de Honey Castellanos
            </p>
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="font-sans-clean text-sm text-cream/60 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contacto@honeycastellanos.com" 
              className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-sans-clean text-sm">Contacto</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-sans-clean text-sm">WhatsApp</span>
            </a>
          </div>
          
          <p className="font-sans-clean text-xs text-cream/40">
            © 2024 Honey Castellanos. Hecho con amor desde Minca.
          </p>
        </div>
      </div>
    </footer>
  );
};