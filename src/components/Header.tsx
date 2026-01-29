import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importante para navegar sin recargar

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-archive ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO GRANDE */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <img
              src="/lovable-uploads/4f4d1595-1fcf-4b4e-b604-ec7d158cb34a.png"
              alt="Trufi Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* MENÚ ESTILO NU (Limpio y Espaciado) */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-base font-medium text-gray-600 hover:text-[#820AD1] transition-colors">
            Inicio
          </Link>
          <Link to="/blog" className="text-base font-medium text-gray-600 hover:text-[#820AD1] transition-colors">
            Blog Financiero
          </Link>
          <Link
            to="/zona-pagos"
            className="text-base font-medium text-[#820AD1] hover:text-[#6a08a8] transition-colors"
          >
            Zona de Pagos
          </Link>
        </nav>

        {/* BOTÓN SOLICITAR (Redondo y Moderno) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/solicitar"
            className="bg-[#820AD1] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#6a08a8] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Solicitar Crédito
          </Link>
        </div>

        {/* MENÚ MÓVIL (Hamburguesa simple) */}
        <div className="md:hidden">
          <button className="text-gray-700 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
