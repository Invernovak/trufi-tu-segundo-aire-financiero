import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Heart, GraduationCap, Laptop, Shield, MessageCircle, ArrowLeft, Send, Sparkles, Zap, BookOpen, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TermsDialog, PrivacyDialog } from "@/components/LegalDialogs";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormDocenteSchema, type ContactFormDocente } from "@/lib/validations";
import segmentImage from "@/assets/segment-docente.jpg";
import ProductShowcase from "@/components/ProductShowcase";
import Pagadurias from "@/components/Pagadurias";
import { supabase } from "@/lib/supabase";

const benefits = [
  {
    icon: Laptop,
    title: "100% Digital",
    description: "Sin filas ni papeleos físicos. Realiza tu solicitud desde tu celular en el descanso.",
  },
  {
    icon: Zap,
    title: "Aprobación Flash",
    description: "Sabemos que tu tiempo vale oro. Respuesta en tiempo récord.",
  },
  {
    icon: BookOpen,
    title: "Impulsa tu Carrera",
    description: "Financiación especial para maestrías, doctorados o cursos de ascenso.",
  },
  {
    icon: Sparkles,
    title: "Libre Inversión",
    description: "Para tus proyectos personales.",
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
  const [formData, setFormData] = useState<ContactFormDocente>({
    nombre: "",
    telefono: "",
    email: "",
    institucion: "",
    mensaje: "",
    aceptaTerminos: false,
    aceptaTratamientoDatos: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormDocente, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormDocenteSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormDocente, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormDocente;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      toast.error("Por favor corrige los errores en el formulario");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads_comerciales')
        .insert([
          {
            nombre_completo: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            mensaje: formData.mensaje,
            acepta_terminos: formData.aceptaTerminos,
            acepta_tratamiento_datos: formData.aceptaTratamientoDatos,
            monto_solicitado: 0,
            origen: 'Docentes'
          }
        ]);

      if (error) throw error;

      setErrors({});
      toast.success("¡Gracias! Hemos recibido tus datos con éxito.");
      setFormData({ 
        nombre: "", 
        telefono: "", 
        email: "", 
        institucion: "", 
        mensaje: "", 
        aceptaTerminos: false, 
        aceptaTratamientoDatos: false 
      });

    } catch (error: any) {
      console.error('Error en el envío:', error);
      toast.error("Hubo un error al procesar tu solicitud", {
        description: error.message || "Por favor intenta nuevamente más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Color de acento para Docentes: Azul educativo
  const accentBg = "bg-blue-500/10";
  const accentText = "text-blue-600";
  const accentBorder = "border-blue-500/30";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">

        {/* Hero Section - Docentes */}
        <section className="relative min-h-screen pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden flex flex-col justify-center">
          {/* Background con imagen del segmento */}
          <div className="absolute inset-0 z-0">
            <img
              src={segmentImage}
              alt="Docente en aula"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent" />
          </div>

          <div className="container relative z-10 h-full flex flex-col">
            {/* Navegación rápida - Inside Hero */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="gap-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                  </Button>
                </Link>
                <div className="h-4 w-px bg-white/20 hidden sm:block" />
                <div className="flex gap-2 flex-wrap">
                  <Link to="/pensionado">
                    <Button variant="outline" size="sm" className="text-xs border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">Zona Pensionados</Button>
                  </Link>
                  <Link to="/fuerza-publica">
                    <Button variant="outline" size="sm" className="text-xs border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all">Zona Fuerza Pública</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center flex-1">
              <div className="space-y-6 max-w-xl">
                {/* Badge con color distintivo */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full`}>
                  <GraduationCap className={`w-4 h-4 text-blue-300`} />
                  <span className={`text-blue-100 font-semibold text-sm tracking-wide`}>
                    Sector Educativo
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                    Progreso y <br />
                    Bienestar para ti
                  </h1>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
                    Transformas vidas en el aula, nosotros transformamos tus finanzas. Accede a crédito ágil sin descuidar ni un minuto de tu clase.
                  </p>
                </div>

                {/* Highlight: Proceso Digital */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                  <div className="bg-blue-600 rounded-full p-2.5 text-white shadow-lg">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Sin salir del salón de clase</h4>
                    <p className="text-xs text-white/70">Proceso 100% digital desde tu celular.</p>
                  </div>
                </div>

                <div className="pt-2 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-2xl text-lg shadow-xl shadow-blue-500/20 group"
                    asChild
                  >
                    <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                      Habla con un asesor
                    </a>
                  </Button>
                </div>

              </div>
              <div id="credit-simulator" className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0 scale-90 md:scale-100 origin-top">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Facilidades para ti */}
        <section className="py-10 md:py-14">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Facilidades para ti
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-card border ${accentBorder} rounded-2xl p-5 text-center hover:shadow-elevated transition-all duration-300 group`}
                >
                  <div className={`w-16 h-16 ${accentBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`w-8 h-8 ${accentText}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Específico Docente */}
        <section className="py-10 md:py-14 bg-blue-50/50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-fullblur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="container">
            <div className="max-w-4xl mx-auto bg-card border border-blue-100 shadow-xl rounded-3xl p-6 md:p-10 relative">
              <div className="absolute top-4 left-4 text-5xl text-blue-200 font-serif opacity-50">"</div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100 shadow-inner">
                    <img src="/assets/segment-docente.jpg" alt="Profesor Carlos" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base md:text-lg text-foreground font-medium italic mb-3">
                    Mi meta era hacer la maestría, pero estaba reportado por ser fiador. TRUFI confió en mi estabilidad laboral y me aprobó el crédito en menos de 24 horas. Hoy soy Magíster gracias a esa segunda oportunidad.
                  </p>
                  <div>
                    <h4 className="font-bold text-blue-800">Carlos M.</h4>
                    <p className="text-xs text-muted-foreground">Docente Distrito Capital - 12 años de servicio</p>
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
                Requisitos para Docentes
              </h2>
              <div className={`bg-card border ${accentBorder} rounded-2xl p-6 md:p-8`}>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-3.5 h-3.5 ${accentText}`} />
                      </div>
                      <span className="text-foreground text-sm md:text-base leading-relaxed">{req}</span>
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
              credito: {
                title: "Inversión en tu",
                highlight: "Futuro",
                description: "¿Una maestría, un curso de ascenso o un proyecto personal? Invierte en lo que te impulsa. Financiamos tus metas.",
                features: ["Financia tu maestría", "Sin codeudor", "Descuento directo de tu salario", "Respuesta en tiempo récord", "Tasa preferencial por libranza"],
                image: "/lovable-uploads/happy_client_credit.png",
                badge: "Libre Inversión",
                badgeColor: "bg-blue-50 text-blue-600",
                badgeDotColor: "bg-blue-600",
                titleColor: "text-blue-600",
                checkColor: "text-blue-500 fill-blue-50",
                buttonColor: "bg-blue-600 hover:bg-blue-700",
                buttonShadow: "shadow-blue-600/25 hover:shadow-blue-600/40",
              },
              vivienda: {
                title: "Vivienda para",
                highlight: "Maestros",
                description: "El espacio ideal para preparar tus clases y disfrutar en familia.",
                features: ["Remodelación y adecuación", "Cocinas, baños y zonas sociales", "Instalaciones eléctricas y sanitarias", "Pintura, pisos y fachadas"],
                image: "/lovable-uploads/docentemujer1.jpg",
                badge: "Tu Espacio Ideal",
                badgeColor: "bg-emerald-50 text-emerald-600",
                badgeDotColor: "bg-emerald-600",
                titleColor: "text-emerald-600",
                checkColor: "text-emerald-500 fill-emerald-50",
                buttonColor: "bg-emerald-600 hover:bg-emerald-700",
                buttonShadow: "shadow-emerald-600/25 hover:shadow-emerald-600/40",
              },
              vehiculo: {
                title: "Llega fácil a",
                highlight: "Clase",
                description: "Olvídate del transporte público. Adquiere tu vehículo y muévete con comodidad",
                features: ["Sin codeudor", "Plazos cómodos", "Aprobación rápida", "Sin intermediarios", "Cuota fija durante todo el plazo"],
                image: "/lovable-uploads/Puedes_hacer_a_este_docente_comprando_su_nuevo_car_delpmaspu.png",
                badge: "Movilidad Docente",
                badgeColor: "bg-violet-50 text-violet-600",
                badgeDotColor: "bg-violet-600",
                titleColor: "text-violet-600",
                checkColor: "text-violet-500 fill-violet-50",
                buttonColor: "bg-violet-600 hover:bg-violet-700",
                buttonShadow: "shadow-violet-600/25 hover:shadow-violet-600/40",
              },
              tranquilidad: {
                title: "Tu Tranquilidad:",
                highlight: "Unifica y Respira",
                description: "Unifica todas tus deudas en una sola cuota cómoda con descuento directo de tu nómina.",
                features: ["Unificación de deudas en una sola cuota", "Compra de cartera al 100%", "Reduce tu carga financiera mensual", "Descuento directo de nómina"],
                image: "/lovable-uploads/Tu-tranquilidad-docentes (2).png",
                badge: "SANEAMIENTO",
                badgeColor: "bg-blue-50 text-blue-600",
                badgeDotColor: "bg-blue-600",
                titleColor: "text-blue-600",
                checkColor: "text-blue-500 fill-blue-50",
                buttonColor: "bg-blue-600 hover:bg-blue-700",
                buttonShadow: "shadow-blue-600/25 hover:shadow-blue-600/40",
              },
            }}
          />
        </div>

        {/* Pagadurias */}
        <div className="py-4">
          <Pagadurias segment="docente" />
        </div>

        {/* Formulario de Asistencia */}
        <section className="py-10 md:py-14 bg-muted/40">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  ¿Necesitas ayuda personalizada?
                </h2>
                <p className="text-muted-foreground text-sm">
                  Déjanos tus datos y un asesor especializado te contactará
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Nombre completo</label>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) => {
                        setFormData({ ...formData, nombre: e.target.value });
                        if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                      }}
                      className={`h-9 ${errors.nombre ? "border-destructive" : ""}`}
                      maxLength={100}
                    />
                    {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Teléfono</label>
                    <Input
                      placeholder="Tu teléfono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => {
                        setFormData({ ...formData, telefono: e.target.value });
                        if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                      }}
                      className={`h-9 ${errors.telefono ? "border-destructive" : ""}`}
                      maxLength={20}
                    />
                    {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Correo electrónico</label>
                    <Input
                      placeholder="tu@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`h-9 ${errors.email ? "border-destructive" : ""}`}
                      maxLength={255}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Institución educativa</label>
                    <Input
                      placeholder="Nombre de tu institución"
                      value={formData.institucion}
                      onChange={(e) => {
                        setFormData({ ...formData, institucion: e.target.value });
                        if (errors.institucion) setErrors({ ...errors, institucion: undefined });
                      }}
                      className={`h-9 ${errors.institucion ? "border-destructive" : ""}`}
                      maxLength={200}
                    />
                    {errors.institucion && <p className="text-xs text-destructive">{errors.institucion}</p>}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground">Mensaje (opcional)</label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    value={formData.mensaje}
                    onChange={(e) => {
                      setFormData({ ...formData, mensaje: e.target.value });
                      if (errors.mensaje) setErrors({ ...errors, mensaje: undefined });
                    }}
                    className={errors.mensaje ? "border-destructive" : ""}
                    rows={2}
                    maxLength={1000}
                  />
                  {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje}</p>}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terminos"
                      checked={formData.aceptaTerminos}
                      onCheckedChange={(checked) => {
                        setFormData({ ...formData, aceptaTerminos: checked === true });
                        if (errors.aceptaTerminos) setErrors({ ...errors, aceptaTerminos: undefined });
                      }}
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
                      onCheckedChange={(checked) => {
                        setFormData({ ...formData, aceptaTratamientoDatos: checked === true });
                        if (errors.aceptaTratamientoDatos) setErrors({ ...errors, aceptaTratamientoDatos: undefined });
                      }}
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
                      Solicitar Asistencia
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-white/10 -skew-x-12 -translate-x-12"></div>
          <div className="container text-center relative z-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Tu dedicación merece reconocimiento
            </h2>
            <p className="text-white/90 mb-6 max-w-lg mx-auto text-sm">
              Únete a miles de colegas que ya encontraron su solución financiera con TRUFI.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 font-bold shadow-xl"
              asChild
            >
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                Habla con un asesor
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

export default Docente;
