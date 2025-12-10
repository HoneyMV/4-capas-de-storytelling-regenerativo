import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-forest text-warm-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-terracotta blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-12 h-12 text-terracotta mx-auto mb-6" />
          
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-warm-white mb-6">
            Sé parte de esta historia
          </h2>
          
          <p className="font-sans-clean text-lg md:text-xl text-warm-white/80 mb-10 max-w-xl mx-auto">
            Tu aporte no solo financia un libro. Activa un movimiento de protección cultural a través del storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-terracotta text-warm-white hover:bg-terracotta/90 font-sans-clean px-10 py-6 text-lg shadow-lg"
            >
              Apoyar ahora
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold/10 font-sans-clean px-10 py-6 text-lg"
            >
              Compartir proyecto
            </Button>
          </div>
          
          <p className="mt-8 font-sans-clean text-sm text-warm-white/50">
            Cualquier monto hace la diferencia. Gracias por creer en este proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};
