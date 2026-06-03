import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEOHead } from "@/components/SEOHead";
import FinancialAcademySection from "@/components/FinancialAcademySection";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Blog y Academia Financiera | Aprende con Trufi" 
        description="Mejora tu educación financiera con nuestros artículos y consejos expertos. En TRUFI te ayudamos a tomar las mejores decisiones para tu futuro." 
      />
      <Header />
      <main className="flex-1 flex flex-col justify-center bg-background">
        <FinancialAcademySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
