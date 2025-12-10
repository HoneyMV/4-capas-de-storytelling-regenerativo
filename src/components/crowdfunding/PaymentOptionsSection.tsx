import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Building2, Send } from "lucide-react";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Tarjeta de crédito/débito",
    description: "Visa, Mastercard, American Express",
    buttonText: "Pagar con tarjeta",
    primary: true
  },
  {
    icon: Wallet,
    title: "Crypto",
    description: "Bitcoin, Ethereum, USDC",
    buttonText: "Pagar con crypto",
    primary: false
  },
  {
    icon: Building2,
    title: "Transferencia bancaria",
    description: "Colombia: Bancolombia, Davivienda",
    buttonText: "Ver datos bancarios",
    primary: false
  },
  {
    icon: Send,
    title: "Nequi / Daviplata",
    description: "Pagos móviles en Colombia",
    buttonText: "Ver número",
    primary: false
  }
];

export const PaymentOptionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-terracotta font-sans-clean text-sm tracking-[0.2em] uppercase">
            Métodos de Pago
          </span>
          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-5xl text-forest mt-4">
            Opciones para aportar
          </h2>
          <p className="font-sans-clean text-deep-black/70 max-w-xl mx-auto mt-4">
            Elige el método que más te convenga. Todos los aportes van directo al proyecto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                method.primary 
                  ? 'bg-forest text-warm-white shadow-lg' 
                  : 'bg-cream border border-forest/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                method.primary ? 'bg-warm-white/20' : 'bg-forest/10'
              }`}>
                <method.icon className={`w-6 h-6 ${method.primary ? 'text-warm-white' : 'text-forest'}`} />
              </div>
              <h3 className={`font-serif-elegant text-lg mb-2 ${method.primary ? 'text-warm-white' : 'text-forest'}`}>
                {method.title}
              </h3>
              <p className={`font-sans-clean text-sm mb-4 ${method.primary ? 'text-warm-white/70' : 'text-deep-black/60'}`}>
                {method.description}
              </p>
              <Button 
                variant={method.primary ? "secondary" : "outline"}
                size="sm"
                className={method.primary 
                  ? "bg-gold text-forest hover:bg-gold/90 w-full" 
                  : "border-forest text-forest hover:bg-forest/5 w-full"
                }
              >
                {method.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
