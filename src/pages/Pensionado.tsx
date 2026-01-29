import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Check, Heart, Clock, Shield, Phone } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Aprobación en 24 horas",
    description: "Proceso ágil diseñado para tu comodidad",
  },
  {
    icon: Heart,
    title: "Tasas preferenciales",
    description: "Las mejores condiciones del mercado para pensionados",
  },
  {
    icon: Shield,
    title: "Sin codeudor",
    description: "Tu pensión es tu respaldo, sin trámites adicionales",
  },
  {
    icon: Phone,
    title: "Atención personalizada",
    description: "Asesores especializados en tu bienestar financiero",
  },
];

const requirements = [
  "Ser pensionado activo (Colpensiones, FOPEP, o fondo privado)",
  "Cédula de ciudadanía vigente",
  "Desprendible de pago de los últimos 3 meses",
  "Edad hasta 85 años al momento de finalizar el crédito",
];

const Pensionado = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold text-sm">
                    Créditos para Pensionados
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Tu tranquilidad financiera está{" "}
                  <span className="text-primary">garantizada</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Después de años de trabajo, mereces disfrutar sin preocupaciones.
                  Nuestros créditos están diseñados pensando en ti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Solicitar Ahora
                  </Button>
                  <Button variant="outline" size="xl">
                    Llamar a un Asesor
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Beneficios Exclusivos para Pensionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elevated transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Requisitos Sencillos
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Nuestros asesores están disponibles para ayudarte en cada paso del proceso.
            </p>
            <Button variant="secondary" size="xl">
              Solicitar Crédito Ahora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pensionado;
