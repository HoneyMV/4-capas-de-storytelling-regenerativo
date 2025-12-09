import { Check } from "lucide-react";

export const DifferentSection = () => {
  const points = [
    "No es teoría: es un método vivo probado en marketing emocional, narrativa y turismo regenerativo.",
    "Diseñado para personas reales, no para expertos en branding.",
    "Pensado para ser útil el mismo día que se lee.",
    "Se entregará gratuitamente a quienes sostienen el turismo local.",
    "Tiene una visión ética, sensible y práctica que hoy casi no existe en la industria."
  ];

  return (
    <section className="py-24 md:py-32 bg-forest">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            El Diferenciador
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-cream text-center leading-tight mb-16">
          Qué hace diferente este libro
        </h2>
        
        <div className="space-y-6">
          {points.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-cream/5 border border-cream/10 transition-all duration-300 hover:bg-cream/10"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <p className="font-sans-clean text-lg text-cream/90 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};