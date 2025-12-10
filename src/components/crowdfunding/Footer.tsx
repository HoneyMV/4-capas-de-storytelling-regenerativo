import { Link } from "react-router-dom";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-deep-black text-warm-white/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-serif-elegant text-lg text-gold mb-4">
              Las 4 Capas del Storytelling
            </h4>
            <p className="font-sans-clean text-sm text-warm-white/60 leading-relaxed">
              Un libro para transformar cómo contamos el turismo en Minca, protegiendo su esencia a través de narrativas regenerativas.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-serif-elegant text-lg text-gold mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2 font-sans-clean text-sm">
              <li>
                <Link to="/founding-supporters" className="text-warm-white/60 hover:text-gold transition-colors">
                  Founding Supporters
                </Link>
              </li>
              <li>
                <a href="#rewards" className="text-warm-white/60 hover:text-gold transition-colors">
                  Recompensas
                </a>
              </li>
              <li>
                <a href="#author" className="text-warm-white/60 hover:text-gold transition-colors">
                  Sobre la autora
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-serif-elegant text-lg text-gold mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <a href="mailto:honey@storytelling.co" className="flex items-center gap-2 text-warm-white/60 hover:text-gold transition-colors font-sans-clean text-sm">
                <Mail className="w-4 h-4" />
                honey@storytelling.co
              </a>
              <a href="https://instagram.com/honeycastellanos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-warm-white/60 hover:text-gold transition-colors font-sans-clean text-sm">
                <Instagram className="w-4 h-4" />
                @honeycastellanos
              </a>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-warm-white/60 hover:text-gold transition-colors font-sans-clean text-sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warm-white/10 text-center">
          <p className="font-sans-clean text-xs text-warm-white/40">
            © 2024 Honey Castellanos. Hecho con amor desde Minca, Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
};
