import { Quote } from "lucide-react";

interface TestimonioCardProps {
  quoteText: string;
  clientName: string;
  clientRole: string;
  imagePath: string;
  imageClassName?: string;
  nameColorClass?: string;
}

const TestimonioCard = ({ 
  quoteText, 
  clientName, 
  clientRole, 
  imagePath,
  imageClassName = "-top-6 w-[130%]",
  nameColorClass = "text-primary"
}: TestimonioCardProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-card border border-border shadow-md rounded-[2.5rem] p-8 md:p-12 relative group hover:shadow-xl transition-all duration-500 overflow-hidden">
      {/* Comilla decorativa eliminada a petición */}

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
        {/* Enmascaramiento Quirúrgico (Avatar Pop-out) */}
        <div className="shrink-0">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-[6px] border-white shadow-lg relative overflow-visible bg-gradient-to-tr from-slate-50 to-white
                          after:content-[''] after:absolute after:inset-[-6px] after:rounded-full after:border-[6px] 
                          after:border-white after:z-20 after:[clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)] 
                          after:pointer-events-none">
            {/* Contenedor que recorta la parte inferior al ras del círculo */}
            <div className="absolute inset-x-0 bottom-0 -top-full rounded-b-full overflow-hidden z-10">
              <div className="absolute bottom-0 left-0 right-0 h-1/2">
                <img
                  src={imagePath}
                  alt={clientName}
                  className={`absolute left-1/2 -translate-x-1/2 h-auto max-w-none object-contain origin-bottom transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 ${imageClassName}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Texto del Testimonio */}
        <div className="text-center md:text-left flex-1">
          <p className="text-lg md:text-xl text-foreground font-medium italic mb-6 leading-relaxed relative">
            "{quoteText}"
          </p>
          <div className="space-y-1">
            <h4 className={`font-bold text-xl leading-none uppercase tracking-tight ${nameColorClass}`}>
              {clientName}
            </h4>
            <div className={`flex items-center gap-2 justify-center md:justify-start ${nameColorClass}`}>
              <div className="h-px w-4 bg-current opacity-60" />
              <p className="text-sm font-semibold uppercase tracking-wider">
                {clientRole}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
    </div>
  );
};

export default TestimonioCard;
