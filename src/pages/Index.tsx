import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceSegmentation from "@/components/AudienceSegmentation";
import BeneficiosTrufi from "@/components/BeneficiosTrufi";
import CreditSimulator from "@/components/CreditSimulator";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero Section - Impactante con imagen de fondo */}
        <HeroSection />
        
        {/* 2. Selección de Perfil - ANTES del simulador */}
        <AudienceSegmentation />
        
        {/* 3. Beneficios Trufi - Nueva sección de seguros */}
        <BeneficiosTrufi />
        
        {/* 4. Simulador de Crédito - Ajustado */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Calcula tu crédito en segundos
              </h2>
              <p className="text-muted-foreground text-lg">
                Usa nuestro simulador y descubre cuánto puedes obtener con cuotas que se ajustan a tu presupuesto.
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <CreditSimulator />
            </div>
          </div>
        </section>
        
        {/* 5. Cómo funciona */}
        <HowItWorks />
        
        {/* 6. Banner de Cierre (CTA) */}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
