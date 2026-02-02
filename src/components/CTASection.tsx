import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-trufi-purple-light via-background to-trufi-gold-light opacity-40" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12 shadow-elevated border border-border text-center bg-primary">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">
                ⚡ Respuesta en menos de 24 horas
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Es momento de tu{" "}
              <span className="text-secondary">segundo aire financiero</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white/80">
              Somos el camino a tu reincorporación financiera. 
              ¿Reportado en centrales? En TRUFI creemos en ti y te damos una nueva oportunidad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-10 py-6 rounded-full shadow-xl group"
              >
                Solicitar mi Crédito Ahora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/70">¿Prefieres que te contactemos?</p>
              <div className="flex gap-6">
                <a 
                  href="tel:+573001234567" 
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-white hover:text-secondary"
                >
                  <Phone className="w-4 h-4" />
                  Llámanos
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-white hover:text-secondary"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
