import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Check, BookOpen, GraduationCap, Percent, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Tasas especiales",
    description: "Condiciones exclusivas para educadores del sector público y privado",
  },
  {
    icon: Calendar,
    title: "Plazos flexibles",
    description: "Hasta 84 meses para que tu cuota se ajuste a tu presupuesto",
  },
  {
    icon: GraduationCap,
    title: "Sin papeleos",
    description: "Proceso 100% digital, sin filas ni trámites presenciales",
  },
  {
    icon: BookOpen,
    title: "Crédito educativo",
    description: "Financiamiento para estudios de posgrado o especialización",
  },
];

const requirements = [
  "Ser docente activo del sector público o privado",
  "Cédula de ciudadanía vigente",
  "Certificado laboral con fecha reciente (máximo 30 días)",
  "Desprendibles de nómina de los últimos 3 meses",
  "Antigüedad mínima de 1 año en la institución",
];

const Docente = () => {
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
                    Créditos para Docentes
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Apoyamos a quienes{" "}
                  <span className="text-primary">transforman vidas</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Como educador, inspiras el futuro de Colombia. Te ofrecemos las 
                  herramientas financieras que mereces para cumplir tus metas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Solicitar Ahora
                  </Button>
                  <Button variant="outline" size="xl">
                    Hablar con un Asesor
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
              Beneficios Exclusivos para Educadores
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
                Requisitos para Docentes
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

        {/* Special Offer Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                🎓 Crédito para Estudios de Posgrado
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Financia tu maestría o especialización con tasas preferenciales. 
                Invierte en tu desarrollo profesional y aumenta tu impacto como educador.
              </p>
              <Button variant="gold" size="xl">
                Conocer Más
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Tu dedicación merece reconocimiento
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Únete a miles de docentes que ya confían en TRUFI para sus necesidades financieras.
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

export default Docente;
