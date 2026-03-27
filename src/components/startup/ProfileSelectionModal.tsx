import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { GraduationCap, Heart, Shield, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    id: "pensionado",
    title: "Soy Pensionado",
    icon: Heart,
    color: "bg-orange-500",
    path: "/pensionado",
  },
  {
    id: "docente",
    title: "Soy Docente",
    icon: GraduationCap,
    color: "bg-sky-500",
    path: "/docente",
  },
  {
    id: "fuerza-publica",
    title: "Soy Militar",
    icon: Shield,
    color: "bg-emerald-500",
    path: "/fuerza-publica",
  },
];

const ProfileSelectionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSelected = sessionStorage.getItem("trurfi_profile_selected");
    if (!hasSelected) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
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
      <DialogContent className="sm:max-w-md p-0 overflow-visible border-0 bg-transparent shadow-none [&>button]:hidden">
        <div className="bg-[#1A0B3B] p-8 md:p-10 rounded-[2rem] border border-white/10 relative shadow-2xl">
          {/* Custom Close Button */}
          <DialogClose className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/10 transition-colors z-20">
            <X className="w-5 h-5 text-white/60 hover:text-white" />
          </DialogClose>

          <DialogHeader className="relative z-10 text-center space-y-4 mb-8">
            <img
              src="/lovable-uploads/Logo-trufi-menu.png"
              alt="TRUFI"
              className="h-12 w-auto object-contain mx-auto brightness-0 invert"
            />
            <div className="space-y-1">
              <DialogTitle className="text-3xl font-black text-white tracking-tight leading-tight">
                Bienvenido a TRUFI
              </DialogTitle>
              <p className="text-xl font-bold text-secondary tracking-tight text-center">
                Elige tu perfil para continuar
              </p>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-4 relative z-10">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => handleSelect(profile.path)}
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center space-y-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${profile.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <profile.icon className="w-7 h-7" />
                </div>
                <span className="block font-semibold text-white text-sm leading-tight">
                  {profile.title}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-white/30 text-xs font-medium tracking-tight">
            TRUFI S.A.S. | Tu Segundo Aire Financiero
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSelectionModal;
