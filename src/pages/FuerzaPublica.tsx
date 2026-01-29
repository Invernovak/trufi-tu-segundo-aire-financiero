import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Check, Shield, Award, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Reconocemos tu servicio",
    description: "Tasas preferenciales como agradecimiento a tu labor por Colombia",
  },
  {
    icon: Clock,
    title: "Desembolso express",
    description: "Aprobación y desembolso en tiempo récord",
  },
  {
    icon: Shield,
    title: "Respaldo institucional",
    description: "Convenios directos con las fuerzas armadas y de policía",
  },
  {
    icon: Users,
    title: "Beneficios familiares",
    description: "Extensibles a cónyuge e hijos dependientes",
  },
];

const requirements = [
  "Ser miembro activo o retirado de las Fuerzas Armadas o Policía Nacional",
  "Cédula de ciudadanía o tarjeta militar vigente",
  "Certificado de ingresos y retenciones",
  "Desprendible de pago de los últimos 3 meses",
  "Para retirados: Resolución de asignación de retiro",
];

const institutions = [
  "Ejército Nacional",
  "Armada Nacional",
  "Fuerza Aérea Colombiana",
  "Policía Nacional",
  "INPEC",
];

const FuerzaPublica = () => {
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
                    Créditos para Fuerza Pública
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Respaldamos a quienes{" "}
                  <span className="text-primary">protegen a Colombia</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Tu compromiso con la patria merece condiciones financieras especiales. 
                  Créditos diseñados exclusivamente para héroes como tú.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Solicitar Ahora
                  </Button>
                  <Button variant="outline" size="xl">
                    Contactar Asesor
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Section */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <p className="text-center text-muted-foreground mb-4 text-sm">
              Convenios activos con:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {institutions.map((inst, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground"
                >
                  {inst}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Beneficios Exclusivos para la Fuerza Pública
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
                Requisitos para Miembros de la Fuerza Pública
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

        {/* Special Programs Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Programa para Activos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Créditos con descuento directo de nómina y las mejores tasas del mercado 
                  para personal en servicio activo.
                </p>
                <Button variant="outline" className="w-full">
                  Más Información
                </Button>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Programa para Retirados
                </h3>
                <p className="text-muted-foreground mb-4">
                  Condiciones especiales para quienes ya cumplieron su servicio. 
                  Tu asignación de retiro es tu mejor respaldo.
                </p>
                <Button variant="outline" className="w-full">
                  Más Información
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Tu servicio a Colombia tiene recompensa
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Miles de miembros de la Fuerza Pública ya confían en TRUFI. Únete y descubre 
              por qué somos su aliado financiero preferido.
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

export default FuerzaPublica;
