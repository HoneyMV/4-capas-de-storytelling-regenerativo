import { BookOpen, Heart, Compass, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "No es solo un libro",
    description: "Es una herramienta estratégica para comunicar desde la profundidad, no desde el ruido."
  },
  {
    icon: Heart,
    title: "Protección cultural",
    description: "Cada página es un acto de preservación de la esencia de Minca y su gente."
  },
  {
    icon: Compass,
    title: "Metodología única",
    description: "Las 4 Capas del Storytelling: un framework probado para narrativas regenerativas."
  },
  {
    icon: Sparkles,
    title: "Impacto real",
    description: "Diseñado para que negocios locales cuenten historias que atraen turismo consciente."
  }
];

export const WhyDifferentSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-terracotta font-sans-clean text-sm tracking-[0.2em] uppercase">
            Lo Que Nos Hace Únicos
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest mt-4">
            Por qué este libro es diferente
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-cream/50 hover:bg-cream transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-serif-elegant text-xl text-forest mb-3">
                {feature.title}
              </h3>
              <p className="font-sans-clean text-deep-black/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
