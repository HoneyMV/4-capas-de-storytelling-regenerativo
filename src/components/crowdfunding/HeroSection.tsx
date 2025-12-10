import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-minca-aerial.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block text-terracotta font-sans-clean text-sm tracking-[0.25em] uppercase mb-6 animate-fade-in">
          Crowdfunding • Storytelling Regenerativo
        </span>
        
        <h1 className="font-serif-elegant text-4xl md:text-6xl lg:text-7xl text-warm-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Las 4 Capas del<br />
          <span className="text-gold">Storytelling</span>
        </h1>
        
        <p className="font-sans-clean text-lg md:text-xl text-warm-white/90 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Un libro para transformar cómo contamos el turismo en Minca, Colombia.
          <br className="hidden md:block" />
          Protege lo que amas a través de las historias que cuentas.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="bg-terracotta text-warm-white hover:bg-terracotta/90 font-sans-clean px-10 py-6 text-lg shadow-lg"
          >
            Apoyar con tarjeta
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold/10 font-sans-clean px-10 py-6 text-lg"
          >
            Apoyar con crypto
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-warm-white/60 mx-auto" />
        </div>
      </div>
    </section>
  );
};
