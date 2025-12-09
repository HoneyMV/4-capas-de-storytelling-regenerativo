export const FundsSection = () => {
  const items = [
    { label: "Diseño y edición", percentage: 25 },
    { label: "Ilustraciones y mapas conceptuales", percentage: 15 },
    { label: "Traducción (es/en)", percentage: 15 },
    { label: "Producción audiovisual para lanzar el proyecto", percentage: 15 },
    { label: "Impresión inicial para Minca", percentage: 10 },
    { label: "Plataforma web y distribución", percentage: 10 },
    { label: "Horas de trabajo creativo y curaduría", percentage: 10 }
  ];

  return (
    <section className="py-24 md:py-32 bg-forest">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase">
            Transparencia Total
          </span>
        </div>
        
        <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-cream text-center leading-tight mb-16">
          Cómo usaré los fondos
        </h2>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans-clean text-cream/90">{item.label}</span>
                <span className="font-sans-clean text-gold font-medium">{item.percentage}%</span>
              </div>
              <div className="h-2 bg-cream/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold to-gold/60 rounded-full transition-all duration-1000 group-hover:opacity-80"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-xl bg-cream/5 border border-cream/10 text-center">
          <p className="font-sans-clean text-cream/70 text-sm">
            Cada peso se destina directamente a hacer este proyecto realidad. Sin intermediarios, sin comisiones ocultas.
          </p>
        </div>
      </div>
    </section>
  );
};