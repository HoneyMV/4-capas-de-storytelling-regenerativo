import honeyImage from "@/assets/honey-castellanos.jpeg";

export const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-deep-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            La Autora
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={honeyImage} 
                alt="Honey Castellanos" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest/30 rounded-full blur-2xl" />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif-elegant text-3xl md:text-4xl text-cream">
              Honey Castellanos
            </h2>
            
            <p className="font-sans-clean text-gold text-lg">
              Minca, Santa Marta, Colombia
            </p>
            
            <div className="space-y-4 font-sans-clean text-cream/80 leading-relaxed">
              <p>
                Venezolana de origen (Maracay/Maracaibo), 50 años. Especialista en{" "}
                <strong className="text-cream">Marketing Digital + Storytelling</strong>{" "}
                para proyectos regenerativos y sostenibles que necesitan visibilidad real y sostenible sin explotación.
              </p>
              
              <p>
                Trabajo con emprendedores turísticos conscientes, viajeros que buscan experiencias auténticas, y proyectos locales que SÍ regeneran sus territorios.
              </p>
              
              <div className="pt-6 border-t border-cream/10">
                <p className="font-serif-elegant text-lg text-gold italic">
                  "No solo cuento historias de ecoturismo. Resuelvo la recaudación y visibilidad para proyectos auténticos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};