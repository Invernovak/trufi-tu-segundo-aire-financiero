import { Smartphone, Percent, Banknote, CalendarClock, Layers, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Condiciones reales del crédito TRUFI
const beneficiosCredito = [
  {
    icon: Smartphone,
    title: "100 % digital",
    description: "Todo el proceso es en línea, desde la simulación hasta el desembolso.",
  },
  {
    icon: Percent,
    title: "Tasa desde 1,80 % M.V.",
    description: "Tasa mes vencido desde 1,80 % hasta 1,85 %.",
  },
  {
    icon: Banknote,
    title: "Desde $1 hasta $150 millones",
    description: "Montos desde $1.000.000 hasta $150.000.000.",
  },
  {
    icon: CalendarClock,
    title: "Plazos de 6 a 144 meses",
    description: "Elige el plazo que mejor se ajuste a tu presupuesto.",
  },
  {
    icon: Layers,
    title: "Tres modalidades",
    description: "Libre inversión, compra de cartera y retanqueo.",
  },
  {
    icon: Users,
    title: "Para pensionados y empleados",
    description: "Pensionados por vejez, jubilación, sustitución, invalidez y sobrevivencia, y empleados.",
  },
];

const BeneficiosCredito = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="beneficios-credito">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5 text-sm font-semibold uppercase tracking-wider">
            Tu crédito TRUFI
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            Beneficios de tu crédito
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficiosCredito.map((item) => (
            <Card
              key={item.title}
              className="group border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-white rounded-[2rem] p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-left">{item.description}</p>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Tasas y condiciones sujetas a estudio de crédito.
        </p>
      </div>
    </section>
  );
};

export default BeneficiosCredito;
