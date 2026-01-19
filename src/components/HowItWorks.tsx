import { FileText, Fingerprint, Banknote, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Solicita",
    description: "Completa tu solicitud en menos de 5 minutos. Solo necesitas tu cédula y datos básicos. 100% en línea.",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Validamos tu Identidad",
    description: "Seguridad biométrica de última generación. Protegemos tus datos mientras verificamos tu identidad al instante.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Desembolsamos",
    description: "Una vez aprobado, el dinero llega directamente a tu cuenta. Descuento automático de nómina sin complicaciones.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Proceso Simple
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu crédito en{" "}
            <span className="text-gradient">3 pasos simples</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sin complicaciones, sin demoras innecesarias. 
            Diseñamos un proceso pensado para tu comodidad.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border h-full hover:shadow-card transition-shadow duration-300">
                {/* Step number */}
                <span className="text-6xl font-bold text-muted/60 absolute top-4 right-6">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 shadow-trufi">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
