import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pensionado from "./pages/Pensionado";
import Docente from "./pages/Docente";
import FuerzaPublica from "./pages/FuerzaPublica";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";
import TrufiPlus from "./pages/TrufiPlus";
import TrufiFlex from "./pages/TrufiFlex";
import Blog from "./pages/Blog";
import ZonaPagos from "./pages/ZonaPagos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pensionado" element={<Pensionado />} />
          <Route path="/docente" element={<Docente />} />
          <Route path="/fuerza-publica" element={<FuerzaPublica />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/trufi-plus" element={<TrufiPlus />} />
          <Route path="/servicios/trufi-flex" element={<TrufiFlex />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/zona-pagos" element={<ZonaPagos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
