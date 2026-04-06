import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Heart, Phone, Shield, Sun, Landmark, MessageCircle, Clock, ArrowLeft, Send, Sparkles, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TermsDialog, PrivacyDialog } from "@/components/LegalDialogs";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormPensionadoSchema } from "@/lib/validations";
import segmentImage from "@/assets/PensionadosPagina.jpg";
import ProductShowcase from "@/components/ProductShowcase";
import Pagadurias from "@/components/Pagadurias";
import { useLeadsForm } from "@/hooks/useLeadsForm";
import { SEOHead } from "@/components/SEOHead";

const benefits = [
  {
    icon: MessageCircle,
    title: "Asistente IA",
    description: "A través de nuestro chat de WhatsApp. Sin menús robóticos, te atiende una persona.",
  },
  {
    icon: Heart,
    title: "Segundo Aire Financiero",
    description: "Tu historial pasado no te define. Te ayudamos a sanear reportes.",
  },
  {
    icon: Shield,
    title: "Respaldo Garantizado",
    description: "Tu pensión es tu mejor aval. Sin papeleos innecesarios.",
  },
  {
    icon: Sun,
    title: "Disfruta tu Retiro",
    description: "Capital de libre inversión para viajar, remodelar o lo que sueñes.",
  },
];

const requirements = [
  "Ser pensionado activo",
  "Cédula de ciudadanía vigente",
  "Desprendible de pago de los últimos 3 meses",
  "Edad máxima: 84 años al finalizar el crédito",
];

const Pensionado = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    errors,
  } = useLeadsForm({
    schema: contactFormPensionadoSchema,
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      mensaje: "",
      aceptaTerminos: false,
      aceptaTratamientoDatos: false,
    },
    segmento: "Pensionados",
  });

  // Color de acento para Pensionados: Naranja cálido
  const accentColor = "hsl(25, 90%, 55%)";
  const accentBg = "bg-orange-500/10";
  const accentText = "text-orange-600";
  const accentBorder = "border-orange-500/30";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Créditos para Pensionados" 
        description="Dedicaste tu vida a trabajar, ahora déjanos trabajar por ti. Te ofrecemos un Segundo Aire Financiero con trato preferencial y créditos de libranza ágiles." 
      />
      <Header />
      <main className="pt-0"> {/* Removed pt-20 to allow hero to touch top */}

        {/* Hero Section - Pensionados */}
        <section className="relative min-h-screen pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden flex flex-col justify-center">
          {/* Background con imagen del segmento covering everything */}
          <div className="absolute inset-0 z-0">
            <img
              src={segmentImage}
              alt="Pensionados felices"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay: Darker on left for text legibility, transparent on right for image clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </div>

          <div className="container relative z-10 h-full flex flex-col">
            {/* Navegación rápida - inside Hero */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="gap-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                  </Button>
                </Link>
                <div className="h-4 w-px bg-white/20 hidden sm:block" />
                <div className="flex gap-2 flex-wrap">
                  <Link to="/docente">
                    <Button variant="outline" size="sm" className="text-xs border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">Zona Docentes</Button>
                  </Link>
                  <Link to="/fuerza-publica">
                    <Button variant="outline" size="sm" className="text-xs border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">Zona Fuerza Pública</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center flex-1">
              <div className="space-y-6 max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Badge con color distintivo */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 rounded-full w-fit`}>
                  <Sun className={`w-4 h-4 text-orange-400`} />
                  <span className={`text-orange-100 font-semibold text-sm tracking-wide`}>
                    Pensionados
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                    Tranquilidad y <br />
                    Respaldo para ti
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Dedicaste tu vida a trabajar, ahora déjanos trabajar por ti. Te ofrecemos un "Segundo Aire Financiero" con trato preferencial.
                  </p>

                  <div className="pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-10 rounded-2xl text-lg shadow-xl shadow-orange-500/20 group"
                      asChild
                    >
                      <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                        <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                        Habla con un asesor
                      </a>
                    </Button>
                  </div>
                </div>


              </div>
              <div id="credit-simulator" className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Facilidades para ti */}
        <section className="py-10 md:py-14">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              ¿Por Qué Los Pensionados Eligen TRUFI?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-card border ${accentBorder} rounded-2xl p-7 text-center hover:shadow-elevated transition-all duration-300 group`}
                >
                  <div className={`w-20 h-20 ${accentBg} rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`w-10 h-10 ${accentText}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Específico Pensionado */}
        <section className="py-10 md:py-14 bg-orange-50/50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200/20 rounded-fullblur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="container">
            <div className="max-w-4xl mx-auto bg-card border border-orange-100 shadow-xl rounded-3xl p-8 md:p-12 relative">
              <div className="absolute top-6 left-6 text-6xl text-orange-200 font-serif opacity-50">"</div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-100 shadow-inner">
                    <img src="/assets/segment-pensionado.jpg" alt="Doña Cecilia" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl text-foreground font-medium italic mb-4">
                    Pensé que por estar reportada ya nadie me prestaría atención. En TRUFI no solo me escucharon, me trataron con un respeto y cariño que no encontré en ningún banco. Pude reformar mi casa y ver felices a mis nietos.
                  </p>
                  <div>
                    <h4 className="font-bold text-orange-800">Cecilia R.</h4>
                    <p className="text-sm text-muted-foreground">Pensionada Colpensiones - 72 años</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-10 md:py-14">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Lo que necesitas para iniciar
              </h2>
              <div className={`bg-card border ${accentBorder} rounded-2xl p-6 md:p-8`}>
                <ul className="space-y-5">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className={`w-7 h-7 ${accentBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-4 h-4 ${accentText}`} />
                      </div>
                      <span className="text-foreground text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <div className="py-4">
          <ProductShowcase
            data={{
              tranquilidad: {
                title: "Tu Tranquilidad:",
                highlight: "Unifica y Respira",
                description: "Unifica todas tus deudas en una sola cuota cómoda con descuento directo de tu mesada.",
                features: ["Unificación de deudas en una sola cuota", "Compra de cartera al 100%", "Reduce tu carga financiera mensual", "Descuento directo de mesada"],
                image: "/lovable-uploads/tu-tranquilidad-pensionadas.png",
                badge: "SANEAMIENTO",
                badgeColor: "bg-orange-50 text-orange-600",
                badgeDotColor: "bg-orange-600",
                titleColor: "text-orange-600",
                checkColor: "text-orange-500 fill-orange-50",
                buttonColor: "bg-orange-600 hover:bg-orange-700",
                buttonShadow: "shadow-orange-600/25 hover:shadow-orange-600/40",
              },
              credito: {
                title: "Crédito para",
                highlight: "Pensionados",
                description: "Ese viaje soñado, apoyar a tus nietos o simplemente tener un respaldo económico. En tu retiro, tú decides en qué invertir.",
                features: ["Aprobación hasta los 84 años", "Sin codeudor", "Libera flujo de caja", "Respuesta en tiempo récord"],
                image: "/lovable-uploads/pensionadolibreinver2.jpg.png",
                badge: "DISFRUTA TU RETIRO",
                badgeColor: "bg-orange-50 text-orange-600",
                badgeDotColor: "bg-orange-600",
                titleColor: "text-orange-600",
                checkColor: "text-orange-500 fill-orange-50",
                buttonColor: "bg-orange-600 hover:bg-orange-700",
                buttonShadow: "shadow-orange-600/25 hover:shadow-orange-600/40",
              },
              vivienda: {
                title: "Mejora tu",
                highlight: "Hogar",
                description: "Dale un nuevo aire a tu hogar. Remodela tu vivienda, tu estabilidad y trayectoria son tu mejor garantía.",
                features: ["Remodelación de vivienda", "Asesoría personalizada", "Trámites simplificados"],
                image: "/lovable-uploads/happy_client_house.png",
                badge: "Tu patrimonio",
                badgeColor: "bg-emerald-50 text-emerald-600",
                badgeDotColor: "bg-emerald-600",
                titleColor: "text-emerald-600",
                checkColor: "text-emerald-500 fill-emerald-50",
                buttonColor: "bg-emerald-600 hover:bg-emerald-700",
                buttonShadow: "shadow-emerald-600/25 hover:shadow-emerald-600/40",
              },
              vehiculo: {
                title: "Muévete con",
                highlight: "Libertad",
                description: "Ya sea para tus diligencias personales o para impulsar un negocio.",
                features: ["Sin codeudor", "Plazos cómodos", "Aprobación rápida", "Cuota fija durante todo el plazo"],
                image: "/lovable-uploads/vehiculo-pensionado-1.png",
                badge: "VIAJA CÓMODO",
                badgeColor: "bg-violet-50 text-violet-600",
                badgeDotColor: "bg-violet-600",
                titleColor: "text-violet-600",
                checkColor: "text-violet-500 fill-violet-50",
                buttonColor: "bg-violet-600 hover:bg-violet-700",
                buttonShadow: "shadow-violet-600/25 hover:shadow-violet-600/40",
              },
            }}
          />
        </div>

        {/* Pagadurias */}
        <div className="py-4">
          <Pagadurias segment="pensionado" />
        </div>

        {/* Formulario de Asistencia */}
        <section className="py-10 md:py-14 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 text-center">
                  ¿Necesitas ayuda personalizada?
                </h2>
                <p className="text-muted-foreground text-sm text-center">
                  Déjanos tus datos y un asesor especializado te contactará
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-7 md:p-9 space-y-5 shadow-lg">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre completo</label>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      className={errors.nombre ? "border-destructive" : ""}
                      maxLength={100}
                    />
                    {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <Input
                      placeholder="Tu teléfono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      className={errors.telefono ? "border-destructive" : ""}
                      maxLength={20}
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                  <Input
                    placeholder="tu@email.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                    maxLength={255}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje (opcional)</label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange("mensaje", e.target.value)}
                    className={errors.mensaje ? "border-destructive" : ""}
                    rows={3}
                    maxLength={1000}
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje}</p>}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terminos"
                      checked={formData.aceptaTerminos}
                      onCheckedChange={(checked) => handleInputChange("aceptaTerminos", checked === true)}
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terminos"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                      >
                        Acepto los <TermsDialog><span className="text-primary hover:underline cursor-pointer">Términos y Condiciones</span></TermsDialog>
                      </label>
                      {errors.aceptaTerminos && <p className="text-xs text-destructive">{errors.aceptaTerminos}</p>}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="tratamiento"
                      checked={formData.aceptaTratamientoDatos}
                      onCheckedChange={(checked) => handleInputChange("aceptaTratamientoDatos", checked === true)}
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="tratamiento"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                      >
                        Acepto la <PrivacyDialog><span className="text-primary hover:underline cursor-pointer">Política de Tratamiento de Datos Personales</span></PrivacyDialog>
                      </label>
                      {errors.aceptaTratamientoDatos && <p className="text-xs text-destructive">{errors.aceptaTratamientoDatos}</p>}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  disabled={isSubmitting || !formData.aceptaTerminos || !formData.aceptaTratamientoDatos}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Solicitar Asistencia Humana
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 translate-x-12"></div>
          <div className="container text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              ¿Listo para tu segundo aire financiero?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto text-center">
              Nuestros asesores están disponibles para ayudarte en cada paso del proceso con paciencia y calidez.
            </p>
            <Button
              size="xl"
              className="bg-white text-orange-600 hover:bg-white/90 font-bold shadow-2xl"
              asChild
            >
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-4 h-4 mr-2" />
                Habla con un asesor ahora
              </a>
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
