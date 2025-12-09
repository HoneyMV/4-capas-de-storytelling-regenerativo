import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-6">
      <div className="text-center max-w-2xl">
        <span className="text-gold font-sans-clean text-sm tracking-[0.2em] uppercase mb-4 block">
          Storytelling Regenerativo
        </span>
        
        <h1 className="font-serif-elegant text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
          Las 4 Capas del Storytelling
        </h1>
        
        <p className="font-sans-clean text-lg text-deep-black/70 mb-8">
          Un libro para transformar cómo contamos el turismo en Minca, Colombia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/founding-supporters">
            <Button 
              size="lg" 
              className="bg-forest text-cream hover:bg-forest/90 font-sans-clean px-8 py-6"
            >
              Founding Supporters
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            className="border-forest text-forest hover:bg-forest/5 font-sans-clean px-8 py-6"
            disabled
          >
            Crowdfunding General (Próximamente)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;