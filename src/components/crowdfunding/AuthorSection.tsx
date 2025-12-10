import honeyPhoto from "@/assets/honey-castellanos.jpeg";

export const AuthorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-terracotta font-sans-clean text-sm tracking-[0.2em] uppercase">
            La Autora
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest mt-4">
            Quién soy
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cream shadow-xl">
                  <img 
                    src={honeyPhoto} 
                    alt="Honey Castellanos - Autora" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-terracotta/20 -z-10" />
                <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full bg-gold/20 -z-10" />
              </div>
            </div>
            
            {/* Bio */}
            <div className="text-center md:text-left">
              <h3 className="font-serif-elegant text-2xl md:text-3xl text-forest mb-4">
                Honey Castellanos
              </h3>
              
              <div className="space-y-4 font-sans-clean text-deep-black/80 leading-relaxed">
                <p>
                  Storyteller y estratega de comunicación regenerativa. Llevo más de una década ayudando a negocios y destinos a encontrar su voz auténtica.
                </p>
                <p>
                  En 2019 llegué a Minca buscando un lugar donde reconectar. Lo que encontré fue una comunidad que necesitaba contar su historia de otra manera.
                </p>
                <p>
                  Este libro es el resultado de años de observación, conversaciones con locales, y la urgencia de proteger lo que hace único a este lugar antes de que sea demasiado tarde.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 rounded-full bg-cream text-forest text-sm font-sans-clean">
                  Comunicación regenerativa
                </span>
                <span className="px-4 py-2 rounded-full bg-cream text-forest text-sm font-sans-clean">
                  Turismo consciente
                </span>
                <span className="px-4 py-2 rounded-full bg-cream text-forest text-sm font-sans-clean">
                  Minca, Colombia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
