import { Target, TrendingUp, Users } from "lucide-react";

export const ImpactSection = () => {
  const progress = 15; // Percentage of goal reached
  const raised = 450; // USD raised
  const goal = 3000; // USD goal
  const backers = 12;

  return (
    <section className="py-20 md:py-28 bg-forest text-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Meta de Financiamiento
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-warm-white mt-4">
            Impacto concreto
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-3">
              <span className="font-serif-elegant text-4xl md:text-5xl text-gold">
                ${raised.toLocaleString()}
              </span>
              <span className="font-sans-clean text-warm-white/70">
                de ${goal.toLocaleString()} USD
              </span>
            </div>
            <div className="h-3 bg-warm-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-terracotta to-gold rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="text-center p-4 rounded-xl bg-warm-white/5">
              <Target className="w-6 h-6 text-gold mx-auto mb-2" />
              <span className="block font-serif-elegant text-2xl text-warm-white">{progress}%</span>
              <span className="text-warm-white/60 text-sm font-sans-clean">Financiado</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-warm-white/5">
              <Users className="w-6 h-6 text-gold mx-auto mb-2" />
              <span className="block font-serif-elegant text-2xl text-warm-white">{backers}</span>
              <span className="text-warm-white/60 text-sm font-sans-clean">Patrocinadores</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-warm-white/5">
              <TrendingUp className="w-6 h-6 text-gold mx-auto mb-2" />
              <span className="block font-serif-elegant text-2xl text-warm-white">30</span>
              <span className="text-warm-white/60 text-sm font-sans-clean">Días restantes</span>
            </div>
          </div>
          
          {/* Use of funds */}
          <div className="bg-warm-white/5 rounded-2xl p-8">
            <h3 className="font-serif-elegant text-xl text-gold mb-6 text-center">
              ¿Cómo se usará tu aporte?
            </h3>
            <div className="space-y-4">
              {[
                { label: "Diseño editorial y maquetación", percentage: 35 },
                { label: "Fotografía profesional de Minca", percentage: 25 },
                { label: "Impresión primera edición (500 copias)", percentage: 30 },
                { label: "Distribución y envíos", percentage: 10 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-sans-clean mb-1">
                    <span className="text-warm-white/80">{item.label}</span>
                    <span className="text-gold">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-warm-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold/60 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
