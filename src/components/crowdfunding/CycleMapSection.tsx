import { ArrowRight } from "lucide-react";

const cycleSteps = [
  {
    number: "01",
    title: "Historias auténticas",
    description: "Negocios locales aprenden a contar su esencia"
  },
  {
    number: "02",
    title: "Turismo consciente",
    description: "Viajeros que buscan experiencias reales llegan"
  },
  {
    number: "03",
    title: "Economía local",
    description: "El dinero se queda en la comunidad"
  },
  {
    number: "04",
    title: "Protección cultural",
    description: "Se preserva lo que hace único a Minca"
  }
];

export const CycleMapSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-terracotta font-sans-clean text-sm tracking-[0.2em] uppercase">
            Ciclo Regenerativo
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest mt-4">
            Mapa de impacto
          </h2>
          <p className="font-sans-clean text-deep-black/70 max-w-xl mx-auto mt-4">
            Cada aporte activa un ciclo virtuoso que protege y fortalece la comunidad de Minca.
          </p>
        </div>
        
        {/* Cycle visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {cycleSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-warm-white rounded-2xl p-6 h-full shadow-sm border border-forest/10 hover:shadow-md transition-shadow">
                  <span className="font-serif-elegant text-4xl text-gold/40 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="font-serif-elegant text-lg text-forest mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans-clean text-sm text-deep-black/60">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow between steps */}
                {index < cycleSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-terracotta" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Circular arrow back */}
          <div className="flex justify-center mt-8">
            <div className="bg-forest/10 rounded-full px-6 py-3">
              <span className="font-sans-clean text-sm text-forest">
                ↺ El ciclo se repite y fortalece
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
