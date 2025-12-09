import { Check } from "lucide-react";

export const WhatItMeansSection = () => {
  const benefits = [
    "Aporta al nacimiento del libro",
    "Apoya un proyecto cultural y regenerativo",
    "Permite entregar la versión gratuita en Minca",
    "Hace posible la distribución en español e inglés",
    "Sostiene el proceso creativo y editorial",
    "Se convierte en una pieza visible del origen"
  ];

  return (
    <section className="py-24 md:py-32 bg-deep-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Tu Rol
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-cream text-center leading-tight mb-16">
          Qué significa ser Founding Supporter
        </h2>
        
        <p className="text-center text-cream/70 font-sans-clean text-lg mb-12">
          Un Founding Supporter es alguien que:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-cream/5 border border-cream/10"
            >
              <Check className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="font-sans-clean text-cream/90">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30">
          <p className="font-serif-elegant text-xl md:text-2xl text-cream italic">
            Tu nombre quedará en la sección{" "}
            <span className="text-gold">"Fundadores del Proyecto"</span>{" "}
            dentro del libro.
          </p>
        </div>
      </div>
    </section>
  );
};