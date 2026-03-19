import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Shield, Building2, Medal } from "lucide-react";

// Placeholder data for logos. In a real scenario, these would be image paths.
const educationLogos = [
    { name: "ALCALDIA DE SANTA CRUZ DE LORICA", color: "bg-blue-100 text-blue-700" },
    { name: "ALCALDIA MAYOR DE CARTAGENA DE INDIAS", color: "bg-green-100 text-green-700" },
    { name: "ALCALDIA MUNICIPAL DE VALLEDUPAR", color: "bg-red-100 text-red-700" },
    { name: "DEPARTAMENTO DE BOLIVAR - SECRETARIA DE EDUCACION DE BOLIVAR", color: "bg-cyan-100 text-cyan-700" },
    { name: "DEPARTAMENTO DE CUNDINAMARCA (SED CUNDINAMARCA)", color: "bg-yellow-100 text-yellow-700" },
    { name: "DISTRITO DE TURBO ANTIOQUIA EXTRA (SEM TURBO)", color: "bg-blue-100 text-blue-800" },
    { name: "FONDO EDUCATIVO DEPARTAMENTAL DEL MAGDALENA (SED MAGDALENA)", color: "bg-emerald-100 text-emerald-800" },
    { name: "GOBERNACION DE BOLIVAR", color: "bg-orange-100 text-orange-800" },
    { name: "GOBERNACION DE SUCRE (SED SUCRE)", color: "bg-violet-100 text-violet-800" },
    { name: "MUNICIPIO DE MEDELLIN / SECRETARIA DE EDUCACION DE MEDELLIN", color: "bg-indigo-100 text-indigo-800" },
    { name: "SECRETARIA DE EDUCACION DE LA GUAJIRA", color: "bg-blue-50 text-blue-600" },
    { name: "SECRETARIA DE EDUCACION DE MONTERIA", color: "bg-green-50 text-green-600" },
    { name: "SECRETARIA DE EDUCACION DEL CESAR YADIB / YADIB1", color: "bg-red-50 text-red-600" },
    { name: "SECRETARIA DE EDUCACION DEPARTAMENTAL DE RISARALDA", color: "bg-cyan-50 text-cyan-600" },
    { name: "SECRETARIA DE EDUCACION MUNICIPAL DE CIENAGA MAGDALENA", color: "bg-yellow-50 text-yellow-600" },
    { name: "SECRETARIA DE EDUCACION MUNICIPAL DE VALLEDUPAR", color: "bg-emerald-50 text-emerald-600" },
    { name: "SECRETARIA DE EDUCACION MUNICIPAL URIBIA", color: "bg-orange-50 text-orange-600" },
    { name: "SED ANTIOQUIA", color: "bg-green-100 text-green-700" },
    { name: "SED BARRANQUILLA", color: "bg-blue-100 text-blue-700" },
    { name: "SED CARTAGENA", color: "bg-cyan-100 text-cyan-700" },
    { name: "SED CHOCO", color: "bg-red-100 text-red-700" },
    { name: "SED NORTE DE SANTANDER", color: "bg-yellow-100 text-yellow-700" },
    { name: "SEM SAHAGUN", color: "bg-emerald-100 text-emerald-700" },
];

const pensionLogos = [
    { name: "Asulado seguros de vida", color: "bg-blue-50 text-blue-700" },
    { name: "Bbva seguros", color: "bg-blue-100 text-blue-800", image: "/logos/bbva.png" },
    { name: "Colfondos", color: "bg-blue-50 text-blue-600", image: "/logos/colfondos.png" },
    { name: "Colpensiones", color: "bg-yellow-50 text-yellow-800", image: "/logos/colpensiones.png" },
    { name: "Compañía de seguros bolívar", color: "bg-red-50 text-red-800", image: "/logos/seguros_bolivar.png" },
    { name: "Consorcio fopep (Aparece también como Fondo de Pensiones Públicas Nivel Nacional)", color: "bg-red-100 text-red-700" },
    { name: "Fiduprevisora", color: "bg-blue-50 text-blue-800", image: "/logos/fiduprevisora.png" },
    { name: "Global seguros de vida S.A.", color: "bg-emerald-50 text-emerald-800", image: "/logos/global_seguros.png" },
    { name: "Mapfre colombia", color: "bg-red-50 text-red-700", image: "/logos/mapfre.png" },
    { name: "Mapfre pensionados", color: "bg-orange-50 text-orange-700", image: "/logos/mapfre.png" },
    { name: "Porvenir", color: "bg-emerald-50 text-emerald-700", image: "/logos/porvenir.png" },
    { name: "Protección S.A.", color: "bg-yellow-50 text-yellow-700", image: "/logos/proteccion.png" },
    { name: "Seguros alfa", color: "bg-red-50 text-red-600", image: "/logos/seguros_alfa.png" },
    { name: "Skandia", color: "bg-emerald-50 text-emerald-600", image: "/logos/skandia.png" },
];

const fuerzaPublicaLogos = [
    { name: "CREMIL / MD CREMIL (Caja de Retiro de las Fuerzas Militares)", color: "bg-army-dark/10 text-army-dark" },
    { name: "CASUR (Caja de Sueldos de Retiro de la Policía)", color: "bg-olive-600/10 text-olive-700" },
    { name: "CAGEN (Caja General de la Policía Nacional)", color: "bg-blue-50 text-blue-900" },
    { name: "TEGEN", color: "bg-gray-100 text-gray-800" },
    { name: "MINDEFENSA", color: "bg-emerald-50 text-emerald-800" },
];

const LogoPlaceholder = ({ name, color, image }: { name: string; color: string; image?: string }) => (
    <div className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group`}>
        <div className={`w-full h-16 mb-4 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105`}>
            {image ? (
                <img 
                    src={image} 
                    alt={name} 
                    className="max-w-[85%] max-h-[85%] object-contain"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                    }}
                />
            ) : null}
            <div className={`fallback-icon w-16 h-16 rounded-xl flex items-center justify-center ${color} ${image ? 'hidden' : ''}`}>
                <Building2 className="w-8 h-8 opacity-80" />
            </div>
        </div>
        <span className="text-sm font-semibold text-center text-gray-700 group-hover:text-primary transition-colors leading-tight line-clamp-3">
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
                            <LogoPlaceholder key={idx} name={logo.name} color={logo.color} image={(logo as any).image} />
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
                                <LogoPlaceholder key={idx} name={logo.name} color={logo.color} image={(logo as any).image} />
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
