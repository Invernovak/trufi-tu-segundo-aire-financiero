import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  // Efecto para detectar scroll y mejorar la visibilidad
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-2" : "bg-primary py-4"
      }`}
    >
      <div className="container flex items-center justify-between h-auto">
        {/* LOGO: Más grande, limpio y sin sombras raras */}
        <Link to="/" className="flex items-center">
          <img
            alt="TRUFI - Confianza Inmediata"
            className="h-14 md:h-20 w-auto object-contain transition-transform hover:scale-105"
            src="/lovable-uploads/4f4d1595-1fcf-4b4e-b604-ec7d158cb34a.png"
          />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO (Letras Blancas) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link to="/" className="text-white hover:text-white/80 transition-colors font-medium text-base">
            Inicio
          </Link>

          {/* Quiénes Somos Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-white/80 transition-colors font-medium text-base outline-none">
              Quiénes Somos
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white border-gray-100">
              <DropdownMenuItem asChild>
                <Link to="/quienes-somos" className="w-full cursor-pointer text-gray-700 hover:text-primary">
                  Sobre TRUFI
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/quienes-somos?tab=mision" className="w-full cursor-pointer text-gray-700 hover:text-primary">
                  Misión y Visión
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to="/quienes-somos?tab=estructura"
                  className="w-full cursor-pointer text-gray-700 hover:text-primary"
                >
                  Estructura Organizacional
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to="/quienes-somos?tab=politicas"
                  className="w-full cursor-pointer text-gray-700 hover:text-primary"
                >
                  Políticas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Servicios Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-white/80 transition-colors font-medium text-base outline-none">
              Servicios
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white border-gray-100">
              <DropdownMenuItem asChild>
                <Link to="/servicios" className="w-full cursor-pointer text-gray-700 hover:text-primary">
                  Todos los Servicios
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/trufi-plus" className="w-full cursor-pointer text-gray-700 hover:text-primary">
                  Crédito Trufi Plus
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/trufi-flex" className="w-full cursor-pointer text-gray-700 hover:text-primary">
                  Crédito Trufi Flex
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/blog" className="text-white hover:text-white/80 transition-colors font-medium text-base">
            Blog Financiero
          </Link>

          <Link to="/zona-pagos" className="text-white hover:text-white/80 transition-colors font-medium text-base">
            Zona de Pagos
          </Link>
        </nav>

        {/* LADO DERECHO: Accesibilidad + BOTÓN BLANCO */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-white">
            <AccessibilityToggle />
          </div>

          <Link to="/servicios">
            {/* Botón blanco con sombra oscura */}
            <Button className="bg-white text-primary font-bold text-base px-8 py-6 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:bg-gray-50 hover:-translate-y-1 transition-all">
              Solicitar Crédito
            </Button>
          </Link>
        </div>

        {/* MENÚ MÓVIL */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="text-white">
            <AccessibilityToggle />
          </div>
          <button
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* CONTENIDO MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-fade-in absolute top-full left-0 right-0 shadow-2xl h-screen">
          <nav className="container py-6 flex flex-col gap-4">
            <Link
              to="/"
              className="text-white text-lg font-medium py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            {/* Quiénes Somos Móvil */}
            <div className="border-b border-white/10 pb-2">
              <p className="text-white/60 font-semibold py-2 text-sm uppercase tracking-wider">Quiénes Somos</p>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  to="/quienes-somos"
                  className="text-white hover:text-white/80 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre TRUFI
                </Link>
                <Link
                  to="/quienes-somos?tab=mision"
                  className="text-white hover:text-white/80 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Misión y Visión
                </Link>
                <Link
                  to="/quienes-somos?tab=estructura"
                  className="text-white hover:text-white/80 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Estructura
                </Link>
              </div>
            </div>

            {/* Servicios Móvil */}
            <div className="border-b border-white/10 pb-2">
              <p className="text-white/60 font-semibold py-2 text-sm uppercase tracking-wider">Servicios</p>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  to="/servicios"
                  className="text-white hover:text-white/80 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Todos los Servicios
                </Link>
                <Link
                  to="/servicios/trufi-plus"
                  className="text-white hover:text-white/80 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Crédito Trufi Plus
                </Link>
                <Link
                  to="/servicios/trufi-flex"
                  className="text-white hover:text-white/80 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Crédito Trufi Flex
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className="text-white text-lg font-medium py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog Financiero
            </Link>

            <Link
              to="/zona-pagos"
              className="text-white text-lg font-medium py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Zona de Pagos
            </Link>

            <Link to="/servicios" onClick={() => setIsMenuOpen(false)} className="mt-4">
              <Button className="w-full bg-white text-primary font-bold py-6 rounded-full shadow-lg">
                Solicitar Crédito
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
