import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Eye, Users, FileText, Building } from "lucide-react";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container text-center max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Conoce a <span className="text-primary">TRUFI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Somos una fintech colombiana comprometida con la inclusión financiera, 
              ofreciendo soluciones de crédito accesibles y transparentes para pensionados, 
              docentes y miembros de la fuerza pública.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <Tabs defaultValue="mision" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted rounded-xl">
                <TabsTrigger value="mision" className="py-3 text-sm md:text-base">
                  Misión y Visión
                </TabsTrigger>
                <TabsTrigger value="estructura" className="py-3 text-sm md:text-base">
                  Estructura
                </TabsTrigger>
                <TabsTrigger value="politicas" className="py-3 text-sm md:text-base">
                  Políticas
                </TabsTrigger>
              </TabsList>

              {/* Misión y Visión */}
              <TabsContent value="mision" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Democratizar el acceso al crédito en Colombia, ofreciendo productos financieros 
                      justos, transparentes y diseñados específicamente para las necesidades de 
                      pensionados, docentes y miembros de la fuerza pública, utilizando tecnología 
                      de vanguardia para simplificar cada paso del proceso.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                      <Eye className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Nuestra Visión</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser la fintech de referencia en Colombia para créditos de libranza, 
                      reconocida por nuestra innovación tecnológica, transparencia y compromiso 
                      con el bienestar financiero de nuestros clientes. Para 2030, aspiramos a 
                      haber impactado positivamente la vida de más de 100,000 familias colombianas.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-center text-foreground mb-8">
                    Nuestros Valores
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Confianza", desc: "Base de cada relación" },
                      { name: "Transparencia", desc: "Sin letra pequeña" },
                      { name: "Innovación", desc: "Tecnología al servicio" },
                      { name: "Inclusión", desc: "Crédito para todos" },
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="bg-muted/50 rounded-xl p-4 text-center"
                      >
                        <h4 className="font-bold text-foreground mb-1">{value.name}</h4>
                        <p className="text-sm text-muted-foreground">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Estructura Organizacional */}
              <TabsContent value="estructura" className="mt-8">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Building className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Estructura Organizacional</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Leadership */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                        Equipo Directivo
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          { role: "CEO", name: "Director Ejecutivo", dept: "Dirección General" },
                          { role: "CFO", name: "Director Financiero", dept: "Finanzas y Tesorería" },
                          { role: "CTO", name: "Director Tecnológico", dept: "Tecnología e Innovación" },
                        ].map((person, index) => (
                          <div key={index} className="bg-muted/30 rounded-xl p-4">
                            <p className="text-primary font-bold text-sm">{person.role}</p>
                            <p className="font-semibold text-foreground">{person.name}</p>
                            <p className="text-sm text-muted-foreground">{person.dept}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Departments */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                        Áreas Funcionales
                      </h3>
                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          "Originación de Crédito",
                          "Riesgo y Cobranza",
                          "Operaciones",
                          "Atención al Cliente",
                          "Tecnología",
                          "Legal y Cumplimiento",
                          "Marketing",
                          "Recursos Humanos",
                        ].map((dept, index) => (
                          <div
                            key={index}
                            className="bg-muted/50 rounded-lg p-3 text-center text-sm font-medium text-foreground"
                          >
                            {dept}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Políticas */}
              <TabsContent value="politicas" className="mt-8">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Políticas Corporativas</h2>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Política de Tratamiento de Datos Personales",
                        description:
                          "Cumplimos con la Ley 1581 de 2012 y garantizamos la protección de la información de nuestros clientes.",
                      },
                      {
                        title: "Política de Crédito Responsable",
                        description:
                          "Otorgamos créditos basados en la capacidad de pago real del cliente, promoviendo el endeudamiento responsable.",
                      },
                      {
                        title: "Política de Prevención LAFT",
                        description:
                          "Implementamos controles rigurosos para prevenir el lavado de activos y la financiación del terrorismo.",
                      },
                      {
                        title: "Política de Atención al Consumidor Financiero",
                        description:
                          "Garantizamos un trato justo, transparente y respetuoso en todas las interacciones con nuestros clientes.",
                      },
                      {
                        title: "Política de Seguridad de la Información",
                        description:
                          "Protegemos la confidencialidad, integridad y disponibilidad de la información mediante estándares internacionales.",
                      },
                    ].map((policy, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-0">
                        <h3 className="font-bold text-foreground mb-2">{policy.title}</h3>
                        <p className="text-muted-foreground text-sm">{policy.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-muted/50 rounded-xl">
                    <p className="text-sm text-muted-foreground text-center">
                      Para consultar las políticas completas, contáctenos a través de nuestros 
                      canales de atención o solicítelas a través de WhatsApp.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienesSomos;
