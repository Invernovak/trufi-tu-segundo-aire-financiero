import { Shield, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2000&auto=format&fit=crop"
          alt="Familia tranquila disfrutando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm md:text-base font-medium text-white">
              Tu camino a la reincorporación financiera
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6">
            Tu segundo aire{" "}
            <span className="text-secondary">financiero</span>{" "}
            comienza aquí
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed mb-8">
            ¿Reportado en centrales de riesgo? En TRUFI creemos en las segundas oportunidades. 
            Créditos de libranza con respaldo y acompañamiento humano.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Heart className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-base font-medium">Proceso 100% digital</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-base font-medium">Descuento directo de nómina</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="#simulador">
              <Button 
                variant="cta" 
                size="xl" 
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl group"
              >
                Simula tu crédito
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/quienes-somos">
              <Button 
                variant="outline" 
                size="xl" 
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-7 rounded-full"
              >
                Conoce más sobre nosotros
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
