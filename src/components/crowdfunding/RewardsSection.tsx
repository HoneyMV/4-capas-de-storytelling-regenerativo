import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const rewards = [
  {
    amount: 10,
    title: "Semilla",
    description: "Tu nombre en los agradecimientos del libro",
    perks: [
      "Mención en agradecimientos",
      "Acceso a actualizaciones del proyecto"
    ],
    featured: false
  },
  {
    amount: 30,
    title: "Raíz",
    description: "Ebook + agradecimientos",
    perks: [
      "Ebook en formato PDF",
      "Mención en agradecimientos",
      "Acceso anticipado al contenido"
    ],
    featured: false
  },
  {
    amount: 60,
    title: "Tronco",
    description: "Libro físico + ebook",
    perks: [
      "Libro físico primera edición",
      "Ebook en formato PDF",
      "Mención en agradecimientos",
      "Envío incluido (Colombia)"
    ],
    featured: true
  },
  {
    amount: 100,
    title: "Copa",
    description: "Libro firmado + mención especial",
    perks: [
      "Libro físico firmado por la autora",
      "Ebook en formato PDF",
      "Mención destacada",
      "Postal exclusiva de Minca",
      "Envío incluido (internacional)"
    ],
    featured: false
  },
  {
    amount: 200,
    title: "Bosque",
    description: "Experiencia completa + consultoría",
    perks: [
      "Todo lo anterior",
      "Sesión de 1 hora de consultoría en storytelling",
      "Acceso a comunidad privada",
      "Nombre en página de mecenas"
    ],
    featured: false
  }
];

export const RewardsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-terracotta font-sans-clean text-sm tracking-[0.2em] uppercase">
            Recompensas
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest mt-4">
            Elige tu nivel de apoyo
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {rewards.map((reward, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 flex flex-col ${
                reward.featured 
                  ? 'bg-forest text-warm-white shadow-xl ring-2 ring-gold' 
                  : 'bg-warm-white border border-forest/10 shadow-sm'
              }`}
            >
              {reward.featured && (
                <span className="bg-gold text-forest text-xs font-sans-clean font-medium px-3 py-1 rounded-full self-start mb-3">
                  Más popular
                </span>
              )}
              
              <div className="mb-4">
                <span className={`font-serif-elegant text-3xl ${reward.featured ? 'text-gold' : 'text-terracotta'}`}>
                  ${reward.amount}
                </span>
                <span className={`text-sm ml-1 ${reward.featured ? 'text-warm-white/70' : 'text-deep-black/50'}`}>USD</span>
              </div>
              
              <h3 className={`font-serif-elegant text-xl mb-2 ${reward.featured ? 'text-warm-white' : 'text-forest'}`}>
                {reward.title}
              </h3>
              
              <p className={`font-sans-clean text-sm mb-4 ${reward.featured ? 'text-warm-white/80' : 'text-deep-black/70'}`}>
                {reward.description}
              </p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {reward.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${reward.featured ? 'text-gold' : 'text-forest'}`} />
                    <span className={`font-sans-clean text-xs ${reward.featured ? 'text-warm-white/80' : 'text-deep-black/60'}`}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={reward.featured 
                  ? "bg-gold text-forest hover:bg-gold/90 w-full mt-auto" 
                  : "bg-forest text-warm-white hover:bg-forest/90 w-full mt-auto"
                }
              >
                Seleccionar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
