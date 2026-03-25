import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FinancialAcademySection from "@/components/FinancialAcademySection";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
