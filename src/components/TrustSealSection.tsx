import { ShieldCheck, MessageCircle, HeartHandshake } from "lucide-react";

const pillars = [
  {
    title: "Transparencia Radical",
    description: "Sin letra pequeña ni sorpresas. Te explicamos cada condición de tu crédito con claridad, porque la confianza se construye con información honesta.",
    icon: ShieldCheck,
    color: "text-secondary",
  },
  {
    title: "Conexión Vital",
    description: "Cada persona que llega a TRUFI trae una historia que merece ser escuchada. Aunque nuestro proceso es 100% digital, siempre tendrás un canal directo y ágil a través de nuestro chat de WhatsApp.",
    icon: MessageCircle,
    color: "text-green-400",
  },
  {
    title: "Ecosistema de Valor",
    description: "Tu crédito es solo el comienzo. Con TRUFI accedes a educación de valor gratuita, asistencias para tu hogar y herramientas pensadas para cuidar tu bienestar y el de tu familia durante toda la vida del credito.",
    icon: HeartHandshake,
    color: "text-trufi-cyan",
  },
];

const TrustSealSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#1A0B3B] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-bold tracking-widest uppercase">
            Sello TRUFI
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Nuestro Sello de <span className="text-secondary">Confianza</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light">
            Construimos relaciones duraderas basadas en nuestros tres pilares principales que garantizan tu tranquilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <pillar.icon className="w-24 h-24" />
              </div>
              
              <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 ${pillar.color} shadow-lg`}>
                <pillar.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-white/70 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSealSection;
