import { Quote } from "lucide-react";

interface TestimonioCardProps {
  quoteText: string;
  clientName: string;
  clientRole: string;
  imagePath: string;
}

const TestimonioCard = ({ 
  quoteText, 
  clientName, 
  clientRole, 
  imagePath 
}: TestimonioCardProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-card border border-border shadow-md rounded-[2.5rem] p-8 md:p-12 relative group hover:shadow-xl transition-all duration-500 overflow-hidden">
      {/* Comilla decorativa */}
      <div className="absolute top-6 left-10 transition-transform group-hover:scale-110 duration-500 opacity-20 pointer-events-none">
         <Quote className="w-16 h-16 text-primary rotate-180" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
        {/* Enmascaramiento Quirúrgico (Avatar Pop-out) */}
        <div className="shrink-0">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-[6px] border-white shadow-lg relative overflow-visible bg-gradient-to-tr from-slate-50 to-white
                          after:content-[''] after:absolute after:inset-[-6px] after:rounded-full after:border-[6px] 
                          after:border-white after:z-20 after:[clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)] 
                          after:pointer-events-none">
            <img
              src={imagePath}
              alt={clientName}
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-[130%] h-auto max-w-none object-contain origin-bottom z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
            />
          </div>
        </div>

        {/* Texto del Testimonio */}
        <div className="text-center md:text-left flex-1">
          <p className="text-lg md:text-xl text-foreground font-medium italic mb-6 leading-relaxed relative">
            "{quoteText}"
          </p>
          <div className="space-y-1">
            <h4 className="font-bold text-xl text-primary leading-none uppercase tracking-tight">
              {clientName}
            </h4>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="h-px w-4 bg-primary/30" />
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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
