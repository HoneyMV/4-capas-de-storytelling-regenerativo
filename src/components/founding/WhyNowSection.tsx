export const WhyNowSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Urgencia
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest leading-tight mb-12">
          Por qué ahora
        </h2>
        
        <div className="space-y-8 font-sans-clean text-lg md:text-xl text-deep-black/80 leading-relaxed">
          <p>
            El turismo de Minca está entrando en un{" "}
            <strong className="text-forest">punto crítico.</strong>
          </p>
          
          <p className="text-2xl md:text-3xl font-serif-elegant text-forest py-6">
            O contamos historias nuevas o nos comen las de siempre.
          </p>
          
          <p>
            Este libro es una <em className="text-gold font-medium">intervención temprana.</em>
          </p>
          
          <div className="py-8 px-6 rounded-2xl bg-forest/5 border border-forest/10">
            <p className="font-serif-elegant text-xl md:text-2xl text-forest italic">
              Una forma de proteger lo que amamos antes de que sea demasiado tarde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};