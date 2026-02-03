import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Briefcase, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for internal links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-2" : "bg-primary py-1"
        }`}
    >
      <div className="container flex items-center justify-between h-auto">
        {/* LOGO: Significativamente más grande */}
        <Link to="/" className="flex items-center">
          <img
            alt="TRUFI - Confianza Inmediata"
            className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105"
            src="/lovable-uploads/Logo-trufi-menu.png"
          />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO - Simplificada */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          <Link
            to="/"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-base"
          >
            Inicio
          </Link>

          {/* Quiénes Somos */}
          <Link
            to="/quienes-somos"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-base"
          >
            Quiénes Somos
          </Link>

          {/* Productos Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-emerald-400 transition-colors font-medium text-base outline-none">
              Productos
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white border-border">
              <DropdownMenuItem asChild>
                <Link to="/pensionado" className="w-full cursor-pointer text-foreground hover:text-primary">
                  Pensionados
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/docente" className="w-full cursor-pointer text-foreground hover:text-primary">
                  Docentes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/fuerza-publica" className="w-full cursor-pointer text-foreground hover:text-primary">
                  Fuerza Pública
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Zona de Aprendizaje - Oculto si no hay contenido */}
          <Link
            to="/blog"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-base"
          >
            Blog
          </Link>
        </nav>

        {/* LADO DERECHO: Accesibilidad + Botones - Simplificado */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="text-white">
            <AccessibilityToggle />
          </div>

          {/* Portal Comercial - Ahora botón Blanco/Morado */}
          <Button
            className="bg-white text-primary hover:bg-white/90 font-bold text-sm px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            asChild
          >
            <a href="https://sales.trufi.com.co/formCredits" target="_blank" rel="noopener noreferrer">
              <Briefcase className="w-4 h-4 mr-2" />
              Portal Comercial
            </a>
          </Button>

          {/* Zona Clientes - CTA Principal destacado con ícono */}
          <Button className="bg-[#78c0b3] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#78c0b3]/90 hover:-translate-y-0.5 transition-all" asChild>
            <a href="https://app.trufi.com.co/" target="_blank" rel="noopener noreferrer">
              <User className="w-4 h-4 mr-2" />
              Zona Clientes
            </a>
          </Button>
        </div>

        {/* MENÚ MÓVIL */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="text-white">
            <AccessibilityToggle />
          </div>
          <button
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* CONTENIDO MENÚ MÓVIL - Simplificado */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-fade-in absolute top-full left-0 right-0 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container py-6 flex flex-col gap-3">
            <Link
              to="/"
              className="text-white text-base font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              to="/quienes-somos"
              className="text-white text-base font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiénes Somos
            </Link>

            {/* Productos Móvil */}
            <div className="border-b border-white/10 pb-3">
              <p className="text-white/50 font-semibold py-2 text-xs uppercase tracking-wider">Productos</p>
              <div className="pl-3 flex flex-col gap-2">
                <Link
                  to="/pensionado"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🧓 Pensionados
                </Link>
                <Link
                  to="/docente"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📚 Docentes
                </Link>
                <Link
                  to="/fuerza-publica"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🛡️ Fuerza Pública
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className="text-white text-base font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/20">
              {/* Portal Comercial - Texto secundario en móvil */}
              <a
                href="https://sales.trufi.com.co/formCredits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white/70 text-sm font-medium py-2 flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Briefcase className="w-4 h-4" />
                Portal Comercial
              </a>

              {/* Zona Clientes - CTA Principal */}
              <Button
                className="w-full bg-[#78c0b3] text-white font-bold py-5 rounded-full shadow-lg hover:bg-[#78c0b3]/90"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <a href="https://app.trufi.com.co/" target="_blank" rel="noopener noreferrer">
                  <User className="w-4 h-4 mr-2" />
                  Zona Clientes
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
