import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import { Shield, Heart, Zap, Play, UserCheck, Target, Eye, Users, FileText, BarChart3, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrustSealSection from "@/components/TrustSealSection";
import StatsImpact from "@/components/whoweare/StatsImpact";
import ComparisonSection from "@/components/whoweare/ComparisonSection";
import JourneyRoadmap from "@/components/whoweare/JourneyRoadmap";
import DocumentCostsTable from "@/components/whoweare/DocumentCostsTable";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SEOHead 
        title="Quiénes Somos | Nuestra Historia y Misión" 
        description="Conoce a TRUFI, el equipo humano que trabaja para reincorporar a pensionados y docentes al sistema financiero con transparencia y calidez." 
      />
      <Header />
      <main>
        {/* --- Hero Section: El Impacto --- */}
        <section className="relative h-[80vh] md:h-screen overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <video
              src="/lovable-uploads/corporate-video.mp4"
              className="w-full h-full object-cover object-center animate-in fade-in duration-1000"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Gradient Overlay for "Nexo Dinámico" feel: Blue to Transparent to Warm */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          </div>


          {/* Marquee Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-md py-4 z-20 overflow-hidden border-t border-white/10">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
              <span className="text-lg md:text-xl text-white font-bold px-4">
                Bienvenido a <span className="text-secondary">TRUFI</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                Dejar de ser "un crédito más" para ser <span className="text-secondary font-bold">"Tu segunda oportunidad real"</span>.
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                En TRUFI, no miramos cifras, miramos historias.
              </span>
              <span className="text-white/30">•</span>
              <span className="text-lg md:text-xl text-white font-medium px-4">
                Somos el puente para que pensionados y docentes recuperen su tranquilidad financiera.
              </span>
            </div>
          </div>
        </section>

        {/* --- Nuestra Tesis: Reincorporación Humana --- */}
        <section className="py-24 bg-background relative overflow-hidden border-y border-gray-100">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 fade-in duration-1000 delay-200 viewport-trigger">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                Nuestra Filosofía
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-archive text-primary mb-10 tracking-tight">
                La Tesis de la <span className="text-secondary">Reincorporación Financiera</span>
              </h2>
              <div className="relative group cursor-default">
                {/* Accent line replacing the old Quote watermark */}
                <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full shadow-sm" />
                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-archive italic pl-4">
                  "Si la banca tradicional te cerró la puerta, nosotros te damos la mano.
                  Nacimos para combatir la exclusión, no solo para hacer negocios."
                </p>
                <div className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center">
                  Queremos llegar a ayudar a más colombianos a limpiar su historial crediticio y recuperar su lugar en el sistema.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New: Stats Section for quick trust building */}
        <StatsImpact />

        {/* New: Comparison Section to highlight the "Why Choose Us" */}
        <ComparisonSection />

        {/* New: Journey Roadmap to explain the process clearly */}
        <JourneyRoadmap />

        {/* --- Propósito y Estructura (Humanizado) --- */}
        <section className="py-24 bg-gray-50/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black font-archive text-foreground mb-4">
                  Lo que nos mueve
                </h2>
                <p className="text-xl text-muted-foreground text-center">
                  Más que una empresa, somos un equipo de personas trabajando para personas.
                </p>
              </div>

              <Tabs defaultValue="proposito" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1.5 bg-gray-200/50 rounded-2xl mb-12">
                  <TabsTrigger value="proposito" className="py-4 text-sm md:text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg rounded-xl transition-all">
                    Propósito
                  </TabsTrigger>
                  <TabsTrigger value="equipo" className="py-4 text-sm md:text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg rounded-xl transition-all">
                    Respaldo
                  </TabsTrigger>
                  <TabsTrigger value="reglas" className="py-4 text-sm md:text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg rounded-xl transition-all">
                    Transparencia
                  </TabsTrigger>
                </TabsList>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50">
                  {/* Tab: Propósito */}
                  <TabsContent value="proposito" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                          <Target className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900">Más que una Misión</h3>
                        <p className="text-gray-600 leading-relaxed text-[17px] text-justify">
                          No solo damos créditos. Cada día trabajamos para que tu historial no sea un obstáculo, sino el punto de partida de tu nueva etapa financiera. Creemos en soluciones reales, ágiles y transparentes, diseñadas para quienes han servido y merecen una segunda oportunidad.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                          <Eye className="w-7 h-7 text-secondary-foreground" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900">Nuestra Visión</h3>
                        <p className="text-gray-600 leading-relaxed text-[17px] text-justify">
                          Soñamos con un país donde pensionados y docentes tengan en TRUFI su aliado financiero de confianza. Para 2030, queremos ser el puente que conecta a más colombianos con el sistema financiero, de forma digna, simple y sin letra pequeña.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Tab: Equipo */}
                  <TabsContent value="equipo" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
                      <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center shrink-0">
                        <Users className="w-10 h-10 text-blue-600" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-3xl font-black text-gray-900">Humanos respaldando Humanos</h3>
                        <p className="text-gray-600 text-lg">
                          Detrás de nuestra plataforma digital, hay un equipo real protegiendo tus sueños.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { area: "Dirección", icon: "🧠" },
                        { area: "Servicio", icon: "🤝" },
                        { area: "Tecnología", icon: "💻" },
                        { area: "Legal", icon: "⚖️" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-primary hover:text-white transition-all duration-300 group">
                          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                          <h4 className="font-bold text-sm tracking-widest uppercase">{item.area}</h4>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Tab: Reglas */}
                  <TabsContent value="reglas" className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                    <div className="grid gap-6">
                      {[
                        { title: "Tus Datos son Sagrados", desc: "Cumplimos con la Ley 1581 y 1266." },
                        { title: "Crédito Responsable", desc: "No te prestamos para que te ahogues. Analizamos tu capacidad real." },
                        { title: "Cero Tolerancia al Fraude", desc: "Controles rigurosos para proteger tu identidad." }
                      ].map((policy, i) => (
                        <div key={i} className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-colors">
                          <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{policy.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{policy.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <DocumentCostsTable />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>


        {/* --- Valores: El Sello de Confianza --- */}
        <div className="pt-12 bg-gray-50/50">
          <TrustSealSection />
        </div>

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienesSomos;

