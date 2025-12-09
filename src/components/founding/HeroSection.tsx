import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-minca-aerial.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/40 to-deep-black/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block text-gold font-sans-clean text-sm tracking-[0.3em] uppercase mb-6">
            Invitación Exclusiva
          </span>
        </div>
        
        <h1 
          className="font-serif-elegant text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          Sé parte del origen de un libro que puede cambiar cómo contamos el turismo en Minca.
        </h1>
        
        <p 
          className="font-sans-clean text-lg md:text-xl text-cream/80 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          Un grupo muy pequeño hará posible que{" "}
          <em className="text-gold font-serif-elegant">Las 4 Capas del Storytelling</em>{" "}
          nazca y llegue gratuitamente a guías, emprendedores, mujeres locales y proyectos que hoy sostienen el alma de este territorio.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          <Button 
            size="lg" 
            className="bg-gold text-deep-black hover:bg-gold/90 font-sans-clean font-medium px-8 py-6 text-base tracking-wide transition-all duration-300 hover:scale-105"
          >
            👉 Convertirme en Founding Supporter
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-cream/40 text-cream hover:bg-cream/10 font-sans-clean px-8 py-6 text-base"
          >
            Leer la visión del proyecto
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};