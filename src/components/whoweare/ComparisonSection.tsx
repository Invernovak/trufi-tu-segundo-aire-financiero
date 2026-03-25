import { CheckCircle2, XCircle } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-gray-50/50 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            ¿Por qué elegir <span className="text-secondary">TRUFI</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            No somos un banco, somos la alternativa humana para quienes el sistema olvidó.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Banking */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm opacity-80 scale-95 grayscale hover:grayscale-0 transition-all duration-700">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              Banca Tradicional
            </h3>
            <ul className="space-y-6">
              {[
                "Análisis automático por algoritmos fríos.",
                "Rechazo inmediato por reportes negativos.",
                "Enfoque exclusivo en números y deudas.",
                "Sin acompañamiento humano ni asesoría.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-300 shrink-0 mt-0.5" />
                  <span className="text-gray-500 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TRUFI Way */}
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 border border-primary shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[4rem] group-hover:bg-secondary/20 transition-all duration-500" />
            
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              El Efecto <span className="text-secondary">TRUFI</span>
            </h3>
            <ul className="space-y-6">
              {[
                "Análisis humano de tu capacidad real.",
                "Te damos la mano pese a reportes negativos.",
                "Enfoque en tu bienestar e historias.",
                "Acompañamiento experto y personalizado.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-secondary shrink-0 mt-0.5" />
                  <span className="text-white/90 text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
