import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GraduationCap, Heart, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    id: "pensionado",
    title: "Soy Pensionado",
    icon: Heart,
    color: "bg-segment-pensionado",
    path: "/pensionado",
  },
  {
    id: "docente",
    title: "Soy Docente",
    icon: GraduationCap,
    color: "bg-segment-docente",
    path: "/docente",
  },
  {
    id: "fuerza-publica",
    title: "Soy Militar",
    icon: Shield,
    color: "bg-segment-fuerza",
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
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden border-0 bg-transparent shadow-none">
        <div className="bg-gradient-to-br from-[#1A0B3B] to-[#2D1B69] p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <DialogHeader className="relative z-10 text-center space-y-4 mb-10">
            <img 
              src="/lovable-uploads/Logo-trufi-menu.png" 
              alt="TRUFI" 
              className="h-12 w-auto mx-auto brightness-0 invert"
            />
            <DialogTitle className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Bienvenido a TRUFI <br />
              <span className="text-secondary">Elige tu perfil para continuar</span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => handleSelect(profile.path)}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center space-y-4"
              >
                <div className={`w-14 h-14 rounded-xl ${profile.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <profile.icon className="w-7 h-7" />
                </div>
                <span className="font-bold text-white text-sm md:text-base">
                  {profile.title}
                </span>
              </button>
            ))}
          </div>
          
          <p className="mt-8 text-center text-white/40 text-xs">
            TRUFI S.A.S. | Tu Segundo Aire Financiero
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSelectionModal;
