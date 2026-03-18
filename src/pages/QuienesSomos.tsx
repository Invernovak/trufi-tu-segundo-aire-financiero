import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Heart, Zap, Play, UserCheck, Target, Eye, Users, FileText, BarChart3, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrustSealSection from "@/components/TrustSealSection";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      <main>
        {/* --- Hero Section: El Impacto --- */}
        <section className="relative h-screen overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <video
              src="/lovable-uploads/Diseño sin título.mp4"
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
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 fade-in duration-1000 delay-200 viewport-trigger">
              <h2 className="text-3xl md:text-4xl font-bold font-archive text-primary mb-8">
                Nuestra Tesis: <span className="text-secondary-foreground">Reincorporación Humana</span>
              </h2>
              <div className="relative group cursor-default">
                <div className="absolute -left-2 -top-2 text-6xl text-primary/10 select-none group-hover:text-primary/20 transition-colors duration-500">"</div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium transition-all duration-300 group-hover:text-foreground">
                  Si la banca tradicional te cerró la puerta, nosotros te damos la mano.
                  Nacimos para combatir la exclusión, no solo para hacer negocios.
                  Queremos llegar a ayudar a más colombianos a limpiar su historial crediticio.
                </p>
                <div className="absolute -right-2 -bottom-2 text-6xl text-primary/10 select-none transform rotate-180 group-hover:text-primary/20 transition-colors duration-500">"</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Diferencial: El Asesor Humano (Cero Fricción) --- */}
        <section className="py-24 bg-[#1A0B3B] relative overflow-hidden">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Lado Izquierdo: Imagen con Glassmorphism */}
              <div className="relative group perspective-1000">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=800&auto=format&fit=crop" 
                    alt="Asesoría personalizada TRUFI" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent mix-blend-overlay"></div>
                </div>

                {/* Glassmorphism Card 1: Rendimiento */}
                <div className="absolute -top-6 -right-6 md:-right-12 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Rendimiento</p>
                    </div>
                  </div>
                  <div className="h-16 w-32 flex items-end gap-1">
                    <div className="w-full bg-secondary/20 h-6 rounded-t-sm" />
                    <div className="w-full bg-secondary/40 h-10 rounded-t-sm" />
                    <div className="w-full bg-secondary/60 h-14 rounded-t-sm" />
                    <div className="w-full bg-secondary h-18 rounded-t-sm" />
                  </div>
                </div>

                {/* Glassmorphism Card 2: Portafolio */}
                <div className="absolute -bottom-8 -left-6 md:-left-12 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-in fade-in slide-in-from-left-10 duration-1000 delay-500">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">Activos</p>
                  <div className="flex items-center justify-between mt-4 p-3 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-white text-xs">Riesgo Bajo</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Lado Derecho: Contenido */}
              <div className="animate-in slide-in-from-right-10 fade-in duration-1000 delay-400">
                <div className="inline-block mb-6 px-4 py-1.5 border-white/20 text-white bg-white/5 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm rounded-full">
                  ¿Por qué somos diferentes?
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                  El Nexo entre <br />
                  <span className="text-secondary">Tecnología y Empatía</span>
                </h2>
                <p className="text-white/70 text-lg md:text-xl font-light mb-10 leading-relaxed">
                  En Trufi, la tecnología es la herramienta, pero la empatía es el motor. 
                  Entendemos que detrás de cada cifra hay un sueño, y detrás de cada 
                  meta hay un esfuerzo de años.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="space-y-2">
                    <p className="text-secondary text-4xl font-black">98%</p>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Satisfacción</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-secondary text-4xl font-black">+10k</p>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Vidas Impactadas</p>
                  </div>
                </div>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg font-black px-10 h-16 rounded-2xl shadow-xl shadow-secondary/20 transition-all hover:scale-[1.02]">
                  Comenzar ahora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Propósito y Estructura (Humanizado) --- */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold font-archive text-foreground mb-4">
                  Lo que nos mueve
                </h2>
                <p className="text-lg text-muted-foreground">
                  Más que una empresa, somos un equipo de personas trabajando para personas.
                </p>
              </div>

              <Tabs defaultValue="proposito" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted rounded-xl mb-8">
                  <TabsTrigger value="proposito" className="py-3 text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">
                    Nuestro Propósito
                  </TabsTrigger>
                  <TabsTrigger value="equipo" className="py-3 text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">
                    Quiénes te Respaldan
                  </TabsTrigger>
                  <TabsTrigger value="reglas" className="py-3 text-sm md:text-base font-medium data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">
                    Transparencia Total
                  </TabsTrigger>
                </TabsList>

                {/* Tab: Propósito (Misión/Visión) */}
                <TabsContent value="proposito" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-archive mb-2 text-foreground">Más que una Misión</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No solo damos créditos. Trabajamos cada día para que un "no" del pasado se convierta en el "sí" que necesitas hoy.
                        Democratizamos las oportunidades para quienes han servido al país.
                      </p>
                    </div>
                    <div className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <Eye className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold font-archive mb-2 text-foreground">Nuestra Visión</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Soñamos con un país donde tu historial pasado no condene tu futuro.
                        Queremos ser la primera mano amiga en la que pienses cuando necesites un respiro financiero.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Equipo (Estructura) */}
                <TabsContent value="equipo" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="bg-card border border-border/60 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-archive text-foreground">Humanos respaldando Humanos</h3>
                        <p className="text-muted-foreground">
                          Detrás de nuestra plataforma digital, hay un equipo real estructurado para protegerte y servirte.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { area: "Dirección", icon: "🧠", focus: "Estrategia Humana" },
                        { area: "Servicio", icon: "🤝", focus: "Tu Bienestar" },
                        { area: "Tecnología", icon: "💻", focus: "Simplicidad" },
                        { area: "Legal", icon: "⚖️", focus: "Tu Seguridad" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-muted/40 rounded-xl p-4 text-center hover:bg-muted/60 transition-colors">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <h4 className="font-bold text-sm text-foreground">{item.area}</h4>
                          <p className="text-xs text-muted-foreground">{item.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Reglas (Políticas) */}
                <TabsContent value="reglas" className="space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="bg-card border border-border/60 rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-archive text-foreground">Reglas claras, amistad larga</h3>
                        <p className="text-muted-foreground text-sm">
                          Nuestras políticas no son letra pequeña para confundirte, son compromisos para protegerte.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {[
                        { title: "Tus Datos son Sagrados", desc: "Cumplimos estrictamente la Ley 1581. Tu información es tuya, nosotros solo la custodiamos." },
                        { title: "Crédito Responsable", desc: "No te prestamos para que te ahogues. Analizamos tu capacidad real para que vivas tranquilo." },
                        { title: "Cero Tolerancia al Fraude", desc: "Controles rigurosos para que nadie use tu nombre indebidamente." }
                      ].map((policy, i) => (
                        <div key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          <div>
                            <h4 className="font-bold text-sm text-foreground">{policy.title}</h4>
                            <p className="text-sm text-muted-foreground">{policy.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border text-center">
                      <Button variant="link" className="text-primary h-auto p-0 text-sm">
                        Ver todas las políticas oficiales completas &rarr;
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* --- Valores: El Sello de Confianza --- */}
        <TrustSealSection />

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuienesSomos;

