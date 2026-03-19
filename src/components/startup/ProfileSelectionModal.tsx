import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { GraduationCap, Heart, Shield, ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    id: "pensionado",
    title: "Soy Pensionado",
    icon: Heart,
    color: "bg-[#F38120]",
    path: "/pensionado",
  },
  {
    id: "docente",
    title: "Soy Docente",
    icon: GraduationCap,
    color: "bg-[#0689E1]",
    path: "/docente",
  },
  {
    id: "fuerza-publica",
    title: "Soy Militar",
    icon: Shield,
    color: "bg-[#4CAF50]",
    path: "/fuerza-publica",
  },
];

const ProfileSelectionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSelected = sessionStorage.getItem("trurfi_profile_selected");
    if (!hasSelected) {
      const timer = setTimeout(() => setIsOpen(true), 1500); // Show after loader
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (path: string) => {
    sessionStorage.setItem("trurfi_profile_selected", "true");
    setIsOpen(false);
    navigate(path);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-visible border-0 bg-transparent shadow-none [&>button]:hidden">
        <div className="bg-[#EEEDED]/80 backdrop-blur-3xl p-8 md:p-14 rounded-[3.5rem] border border-white/40 relative shadow-2xl">
          {/* Custom Close Button */}
          <DialogClose className="absolute right-8 top-8 rounded-full p-3 hover:bg-[#1A0B3B]/5 transition-colors z-20">
            <X className="w-7 h-7 text-[#1A0B3B] opacity-40 hover:opacity-100" />
          </DialogClose>

          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <DialogHeader className="relative z-10 text-center space-y-6 mb-12">
            <img 
              src="/lovable-uploads/Logo-trufi-menu.png" 
              alt="TRUFI" 
              className="h-14 w-auto mx-auto"
            />
            <div className="space-y-1">
              <DialogTitle className="text-4xl md:text-5xl font-black text-[#1A0B3B] tracking-tight leading-tight">
                Bienvenido a TRUFI
              </DialogTitle>
              <p className="text-2xl md:text-3xl font-bold text-[#446061] tracking-tight">
                Elige tu perfil para continuar
              </p>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => handleSelect(profile.path)}
                className="group p-8 pt-12 pb-10 rounded-[2.5rem] bg-white border border-slate-50 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center space-y-6 relative"
              >
                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 text-[#1A0B3B] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>

                <div className={`w-20 h-20 rounded-3xl ${profile.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  <profile.icon className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <span className="block font-bold text-[#1A0B3B] text-xl leading-tight">
                    {profile.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <p className="mt-14 text-center text-slate-500 text-sm font-medium tracking-tight">
            TRUFI S.A.S. | Tu Segundo Aire Financiero
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSelectionModal;
