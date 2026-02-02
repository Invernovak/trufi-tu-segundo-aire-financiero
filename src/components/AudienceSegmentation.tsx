import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSegmentos } from "@/hooks/useSegmentos";

// Imágenes de respaldo para cada perfil si no hay imagen en BD
const fallbackImages: Record<string, string> = {
  pensionado: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop",
  docente: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  "fuerza-publica": "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?q=80&w=800&auto=format&fit=crop",
};

const AudienceSegmentation = () => {
  const { data: segmentos, isLoading } = useSegmentos();

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30" id="audiencias">
        <div className="container flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (!segmentos || segmentos.length === 0) {
    return null;
  }

  const getFallbackImage = (enlace: string) => {
    const key = enlace.replace("/", "");
    return fallbackImages[key] || fallbackImages.pensionado;
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30" id="audiencias">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Elige tu perfil
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿A qué grupo perteneces?
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona tu perfil para ver los beneficios personalizados diseñados especialmente para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segmentos.map((item) => (
            <Link key={item.id} to={item.enlace} className="block group">
              <Card className="h-full border-0 shadow-card hover:shadow-elevated transition-all duration-500 group-hover:-translate-y-2 bg-card overflow-hidden rounded-3xl">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imagen_url || getFallbackImage(item.enlace)}
                    alt={item.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{item.titulo}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.descripcion}</p>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary group-hover:bg-primary/5 font-semibold"
                  >
                    Ver mis beneficios
                    <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegmentation;
