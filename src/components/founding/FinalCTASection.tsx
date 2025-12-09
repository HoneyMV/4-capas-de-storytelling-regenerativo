import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream to-gold/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest leading-tight mb-8">
          Si Minca te ha dado algo, este es un modo de devolvérselo.
        </h2>
        
        <p className="font-sans-clean text-lg text-deep-black/70 mb-12 max-w-2xl mx-auto">
          Tu aporte no solo financia un libro. Protege una cultura, impulsa una comunidad y crea un precedente de cómo el turismo puede contarse desde otro lugar.
        </p>
        
        <Button 
          size="lg" 
          className="bg-forest text-cream hover:bg-forest/90 font-sans-clean font-medium px-12 py-8 text-xl tracking-wide transition-all duration-300 hover:scale-105 shadow-xl"
        >
          👉 Ser Founding Supporter
        </Button>
      </div>
    </section>
  );
};