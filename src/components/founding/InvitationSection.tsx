export const InvitationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Una Invitación Personal
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest text-center leading-tight mb-12">
          Por qué te estoy invitando a ti
        </h2>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gold/20">
          <div className="space-y-6 font-serif-elegant text-xl md:text-2xl text-forest/90 leading-relaxed text-center">
            <p>Esta invitación no es masiva.</p>
            <p className="text-gold text-2xl md:text-3xl">Es íntima.</p>
            <p>
              Es para quienes ya creen en el valor de crear algo con impacto y entienden que un pequeño aporte puede abrir una puerta grande para muchas personas aquí.
            </p>
            <div className="pt-6 border-t border-gold/20 mt-8">
              <p className="font-sans-clean text-lg text-forest font-medium">
                Tú eres una de esas personas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};