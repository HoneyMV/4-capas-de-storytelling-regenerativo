import { Quote } from "lucide-react";

export const BookExcerptSection = () => {
  return (
    <section className="py-20 md:py-28 bg-forest text-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Un Adelanto
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-warm-white mt-4">
            Fragmento del libro
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-warm-white/5 rounded-3xl p-8 md:p-12 border border-warm-white/10">
            <Quote className="w-10 h-10 text-gold/40 absolute top-6 left-6" />
            
            <div className="relative z-10 space-y-6 font-serif-elegant text-lg md:text-xl text-warm-white/90 leading-relaxed italic">
              <p>
                "Minca no necesita que la vendamos. Minca necesita que la contemos.
              </p>
              <p>
                La diferencia parece sutil, pero lo cambia todo. Vender es extraer. Contar es honrar.
              </p>
              <p>
                Cuando vendes, conviertes un lugar en producto. Cuando cuentas, conviertes una experiencia en puente.
              </p>
              <p>
                Este libro no es sobre marketing turístico. Es sobre dignidad narrativa. Es sobre el derecho que tiene un lugar —y su gente— de ser contado desde su verdad, no desde la fantasía de quien llega a consumirlo."
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-warm-white/10">
              <p className="font-sans-clean text-sm text-gold">
                — Introducción, "Las 4 Capas del Storytelling"
              </p>
            </div>
          </div>
          
          <p className="text-center mt-8 font-sans-clean text-warm-white/60 text-sm">
            Este es solo un fragmento. El libro completo incluye metodología, ejemplos y ejercicios prácticos.
          </p>
        </div>
      </div>
    </section>
  );
};
