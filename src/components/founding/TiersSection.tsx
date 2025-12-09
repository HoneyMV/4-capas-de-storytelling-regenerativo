import { Button } from "@/components/ui/button";
import { Star, Sparkles, Crown, Award } from "lucide-react";

export const TiersSection = () => {
  const tiers = [
    {
      price: "$50 USD",
      name: "Tier 1",
      description: "Reconocimiento + acceso anticipado al libro.",
      icon: Star,
      featured: false
    },
    {
      price: "$150 USD",
      name: "Tier 2",
      description: "Todo lo anterior + invitación a una sesión privada online sobre storytelling.",
      icon: Sparkles,
      featured: false
    },
    {
      price: "$300 USD",
      name: "Tier 3",
      description: "Todo lo anterior + mención destacada en la página final del libro.",
      icon: Award,
      featured: false
    },
    {
      price: "$500 USD",
      name: "Founding Supporter Principal",
      description: "Nombre en la apertura, acceso prioritario, sesión 1:1, agradecimiento firmado.",
      icon: Crown,
      featured: true
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Niveles de Aporte
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest text-center leading-tight mb-6">
          Aportes sugeridos
        </h2>
        
        <p className="text-center text-deep-black/60 font-sans-clean mb-16 max-w-2xl mx-auto">
          Estos valores son orientativos. Cada aporte hace posible que este proyecto nazca y llegue a quienes más lo necesitan.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  tier.featured 
                    ? "bg-forest text-cream shadow-2xl ring-2 ring-gold" 
                    : "bg-white shadow-lg border border-gold/20"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-deep-black text-xs font-sans-clean font-medium px-4 py-1 rounded-full">
                    Más Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  tier.featured ? "bg-gold/20" : "bg-forest/10"
                }`}>
                  <Icon className={`w-6 h-6 ${tier.featured ? "text-gold" : "text-forest"}`} />
                </div>
                
                <div className={`font-serif-elegant text-3xl mb-2 ${tier.featured ? "text-gold" : "text-forest"}`}>
                  {tier.price}
                </div>
                
                <div className={`font-sans-clean text-sm font-medium mb-4 ${
                  tier.featured ? "text-cream/80" : "text-deep-black/60"
                }`}>
                  {tier.name}
                </div>
                
                <p className={`font-sans-clean text-sm leading-relaxed ${
                  tier.featured ? "text-cream/80" : "text-deep-black/70"
                }`}>
                  {tier.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-forest text-cream hover:bg-forest/90 font-sans-clean font-medium px-12 py-6 text-lg tracking-wide transition-all duration-300 hover:scale-105"
          >
            👉 Aportar ahora
          </Button>
        </div>
      </div>
    </section>
  );
};