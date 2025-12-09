export const WhySection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            El Origen
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest text-center leading-tight mb-12">
          Por qué existe este libro
        </h2>
        
        <div className="space-y-6 font-sans-clean text-lg md:text-xl text-deep-black/80 leading-relaxed">
          <p>
            Este proyecto nació al ver cómo Minca se enfrenta a una tensión real:{" "}
            <strong className="text-forest">más turismo, menos alma.</strong>
          </p>
          
          <p>
            Este libro es una herramienta estratégica y emocional para que quienes trabajan aquí puedan comunicar desde otra profundidad —sin tener que competir con ruido, sin convertirse en caricatura turística, sin perder su esencia.
          </p>
          
          <div className="py-8 border-l-4 border-gold pl-8 my-12 bg-gold/5">
            <p className="font-serif-elegant text-2xl md:text-3xl text-forest italic">
              Es un acto de protección cultural.
            </p>
            <p className="font-serif-elegant text-xl md:text-2xl text-forest/80 mt-4">
              Un puente entre lo que somos y lo que queremos honrar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};