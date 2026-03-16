import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Shield, Building2, Medal } from "lucide-react";

// Placeholder data for logos. In a real scenario, these would be image paths.
const educationLogos = [
    { name: "SED BOGOTÁ", color: "bg-blue-100 text-blue-700" },
    { name: "SED ANTIOQUIA", color: "bg-green-100 text-green-700" },
    { name: "SED VALLE", color: "bg-red-100 text-red-700" },
    { name: "SED ATLÁNTICO", color: "bg-cyan-100 text-cyan-700" },
    { name: "SED SANTANDER", color: "bg-yellow-100 text-yellow-700" },
    { name: "SED CUNDINAMARCA", color: "bg-blue-100 text-blue-800" },
];

const pensionLogos = [
    { name: "COLPENSIONES", color: "bg-yellow-50 text-yellow-800" },
    { name: "FOPEP", color: "bg-red-50 text-red-800" },
    { name: "FIDUPREVISORA", color: "bg-blue-50 text-blue-800" },
    { name: "FERROCARRILES", color: "bg-gray-100 text-gray-800" },
    { name: "FONDO PASIVO SOCIAL FERROCARRILES", color: "bg-gray-50 text-gray-700" },
    { name: "COLFONDOS", color: "bg-blue-50 text-blue-600" },
    { name: "PORVENIR", color: "bg-emerald-50 text-emerald-700" },
    { name: "PROTECCIÓN", color: "bg-yellow-50 text-yellow-700" },
];

const fuerzaPublicaLogos = [
    { name: "CREMIL", color: "bg-army-dark/10 text-army-dark" },
    { name: "CASUR", color: "bg-olive-600/10 text-olive-700" },
    { name: "TEGEN", color: "bg-blue-50 text-blue-900" },
    { name: "MINDEFENSA", color: "bg-gray-100 text-gray-800" },
    { name: "DIVISIÓN PENSIONES POLICÍA", color: "bg-emerald-50 text-emerald-800" },
];

const LogoPlaceholder = ({ name, color }: { name: string; color: string }) => (
    <div className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group`}>
        <div className={`w-16 h-16 mb-4 rounded-xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
            <Building2 className="w-8 h-8 opacity-80" />
        </div>
        <span className="text-sm font-semibold text-center text-gray-700 group-hover:text-primary transition-colors leading-tight">
            {name}
        </span>
    </div>
);

type PagaduriasProps = {
    segment?: 'docente' | 'pensionado' | 'fuerza-publica';
};

const Pagadurias = ({ segment }: PagaduriasProps) => {
    // If a segment is provided, render only that content
    if (segment) {
        let logos: typeof pensionLogos = [];
        let title = "";
        let description = "";

        switch (segment) {
            case 'docente':
                logos = educationLogos;
                title = "Secretarías de Educación";
                description = "Convenios con las principales secretarías certificadas del país.";
                break;
            case 'pensionado':
                logos = pensionLogos;
                title = "Fondos de Pensiones";
                description = "Convenios con Colpensiones, FOPEP y los principales fondos privados.";
                break;
            case 'fuerza-publica':
                logos = fuerzaPublicaLogos;
                title = "Cajas de Retiro y Mindefensa";
                description = "Entidades oficiales para miembros activos y retirados.";
                break;
        }

        return (
            <section className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                        <Badge variant="outline" className="px-4 py-1.5 border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase bg-white">
                            Respaldo Garantizado
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {logos.map((logo, idx) => (
                            <LogoPlaceholder key={idx} name={logo.name} color={logo.color} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Default view (with Tabs)
    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="px-4 py-1.5 border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase bg-white">
                        Nuestros Aliados
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Convenios y Pagadurías
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Trabajamos con las principales entidades del país para brindarte la seguridad y respaldo que necesitas.
                    </p>
                </div>

                <Tabs defaultValue="educacion" className="w-full max-w-5xl mx-auto">
                    <div className="flex justify-center mb-16">
                        <TabsList className="grid w-full max-w-md grid-cols-2 h-auto p-1.5 bg-white rounded-full border border-gray-200 shadow-sm">
                            <TabsTrigger
                                value="educacion"
                                className="rounded-full py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-bold text-sm md:text-base">Sector Educación</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="pensionados"
                                className="rounded-full py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-bold text-sm md:text-base">Pensionados y Fuerza Pública</span>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="educacion" className="focus-visible:outline-none focus-visible:ring-0 mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {educationLogos.map((logo, idx) => (
                                <LogoPlaceholder key={idx} name={logo.name} color={logo.color} />
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-12 bg-white/50 py-2 rounded-full w-fit mx-auto px-6 border border-gray-100">
                            * Y muchas más secretarías a nivel nacional
                        </p>
                    </TabsContent>

                    <TabsContent value="pensionados" className="focus-visible:outline-none focus-visible:ring-0 mt-0 animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {/* Combining pension and fp for the 'all' view */}
                            {[...pensionLogos, ...fuerzaPublicaLogos].map((logo, idx) => (
                                <LogoPlaceholder key={idx} name={logo.name} color={logo.color} />
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-12 bg-white/50 py-2 rounded-full w-fit mx-auto px-6 border border-gray-100">
                            * Convenios con las principales pagadurías y fondos
                        </p>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Pagadurias;
