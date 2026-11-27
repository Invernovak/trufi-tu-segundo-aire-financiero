import { lazy, Suspense } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// El formulario (con el selector de país) se carga aparte para no pesar en la carga inicial
const FooterContactForm = lazy(() => import("./FooterContactForm"));

const Footer = () => {
  return (
    <footer className="bg-trufi-purple-dark text-primary-foreground relative overflow-hidden text-sm">
      {/* Decorative elements - Subtle */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-trufi-cyan via-white to-trufi-cyan opacity-20" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-trufi-cyan/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container py-6 md:py-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left Column: Brand & Description (Compact) */}
          <div className="lg:col-span-4 space-y-3">
            <img
              alt="TRUFI - Confianza Inmediata"
              className="h-12 md:h-14 w-auto"
              src="/logos/trufi-marca-negativo.svg"
            />
            <p className="text-primary-foreground/70 leading-relaxed text-xs md:text-sm max-w-sm">
              Reincorporamos personas al sistema financiero con créditos de libranza seguros y transparentes.
              Tu segundo aire financiero comienza aquí.
            </p>

            {/* Contact Info - Compact Vertical List */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <MapPin className="w-3.5 h-3.5 text-trufi-cyan flex-shrink-0" />
                <span>Cra 100 # 16 - 321, Oficina 608 Edificio Jardin Central, Cali - Colombia</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <Phone className="w-3.5 h-3.5 text-trufi-cyan flex-shrink-0" />
                <span>+57 313 813 0907</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <Mail className="w-3.5 h-3.5 text-trufi-cyan flex-shrink-0" />
                <span>Servicioalcliente@trufi.com.co</span>
              </div>
            </div>

            {/* Social Icons - Horizontal */}
            <div className="flex gap-3">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column: Unified Links Grid */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div>
              <h4 className="font-semibold text-white mb-2">Legal</h4>
              <ul className="space-y-1.5 text-primary-foreground/60 text-xs md:text-sm">
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Términos y Condiciones</a></li>
                <li><Link to="/politica-privacidad" className="hover:text-trufi-cyan transition-colors">Política de Privacidad</Link></li>
                <li><Link to="/politica-privacidad" className="hover:text-trufi-cyan transition-colors">Tratamiento de Datos</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form (Compact Wrapper) */}
          <div className="lg:col-span-4">
            <div className="transform scale-95 origin-top-right">
              <Suspense fallback={<div className="h-[300px] rounded-xl border border-white/10 bg-white/5" />}>
                <FooterContactForm />
              </Suspense>
            </div>
          </div>

        </div>

        {/* Separator - Removed Content */}
        <div className="mt-4"></div>

        {/* Copyright & Disclaimer - Mini */}
        <div className="border-t border-white/5 pt-4 text-[10px] md:text-xs text-primary-foreground/40 text-justify md:text-center leading-relaxed">
          <p className="mb-2">
            TRUFI S.A.S. cumple con la Ley 1527 de 2012. Tasas y condiciones sujetas a estudio.
            Nunca solicitamos dinero por adelantado.
          </p>
          <p>© 2026 Trufi S.A.S. | Vigilado por La Super sociedades</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;