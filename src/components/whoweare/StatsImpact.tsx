import { Users, Heart, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Heart,
    value: "98%",
    label: "Satisfacción",
    description: "Nuestros clientes recuperan su tranquilidad.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: Users,
    value: "+10k",
    label: "Vidas Impactadas",
    description: "Mil historias de segundas oportunidades.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: ShieldCheck,
    value: "+15",
    label: "Aliados Estratégicos",
    description: "Respaldo sólido para tu futuro.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

const StatsImpact = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-5xl font-black text-primary mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-lg font-bold text-gray-900 mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsImpact;
