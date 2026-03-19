import { LayoutGrid, FileSearch, Sparkles, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Conoce tu Realidad",
    desc: "Hablamos contigo, entendemos tu historia más allá de las centrales de riesgo.",
    step: "01",
  },
  {
    icon: FileSearch,
    title: "Análisis Humano",
    desc: "Evaluamos tu capacidad de pago real y diseñamos una solución a tu medida.",
    step: "02",
  },
  {
    icon: Sparkles,
    title: "Nueva Identidad",
    desc: "Limpias tu historial, recuperas tu flujo de caja y vuelves a ser dueño de tu futuro.",
    step: "03",
  },
];

const JourneyRoadmap = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            Tu Camino a la <span className="text-secondary">Libertad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso diseñado para ser simple, transparente y, sobre todo, humano.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-20 z-0" />
          
          {steps.map((item, index) => (
            <div key={index} className="relative z-10 group">
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="absolute top-4 right-8 text-6xl font-black text-gray-50 select-none group-hover:text-secondary/5 transition-colors">
                  {item.step}
                </div>
                
                <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20 transform group-hover:rotate-6 transition-transform">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyRoadmap;
