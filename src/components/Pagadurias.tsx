import { Badge } from "@/components/ui/badge";
import { GraduationCap, Shield, Building2, Medal, Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const educationLogos = [
    { name: "ALCALDIA DE SANTA CRUZ DE LORICA" },
    { name: "ALCALDIA MAYOR DE CARTAGENA DE INDIAS" },
    { name: "ALCALDIA MUNICIPAL DE VALLEDUPAR" },
    { name: "DEPARTAMENTO DE BOLIVAR - SECRETARIA DE EDUCACION DE BOLIVAR" },
    { name: "DEPARTAMENTO DE CUNDINAMARCA (SED CUNDINAMARCA)" },
    { name: "DISTRITO DE TURBO ANTIOQUIA EXTRA (SEM TURBO)" },
    { name: "FONDO EDUCATIVO DEPARTAMENTAL DEL MAGDALENA (SED MAGDALENA)" },
    { name: "GOBERNACION DE BOLIVAR" },
    { name: "GOBERNACION DE SUCRE (SED SUCRE)" },
    { name: "MUNICIPIO DE MEDELLIN / SECRETARIA DE EDUCACION DE MEDELLIN" },
    { name: "SECRETARIA DE EDUCACION DE LA GUAJIRA" },
    { name: "SECRETARIA DE EDUCACION DE MONTERIA" },
    { name: "SECRETARIA DE EDUCACION DEL CESAR YADIB / YADIB1" },
    { name: "SECRETARIA DE EDUCACION DEPARTAMENTAL DE RISARALDA" },
    { name: "SECRETARIA DE EDUCACION MUNICIPAL DE CIENAGA MAGDALENA" },
    { name: "SECRETARIA DE EDUCACION MUNICIPAL DE VALLEDUPAR" },
    { name: "SECRETARIA DE EDUCACION MUNICIPAL URIBIA" },
    { name: "SED ANTIOQUIA" },
    { name: "SED BARRANQUILLA" },
    { name: "SED CARTAGENA" },
    { name: "SED CHOCO" },
    { name: "SED NORTE DE SANTANDER" },
    { name: "SEM SAHAGUN" },
];

const pensionLogos = [
    { name: "Asulado seguros de vida" },
    { name: "Bbva seguros" },
    { name: "Colfondos" },
    { name: "Colpensiones" },
    { name: "Compañía de seguros bolívar" },
    { name: "Consorcio fopep (Aparece también como Fondo de Pensiones Públicas Nivel Nacional)" },
    { name: "Fiduprevisora" },
    { name: "Global seguros de vida S.A." },
    { name: "Mapfre colombia" },
    { name: "Mapfre pensionados" },
    { name: "Porvenir" },
    { name: "Protección S.A." },
    { name: "Seguros alfa" },
    { name: "Skandia" },
];

const fuerzaPublicaLogos = [
    { name: "CREMIL / MD CREMIL (Caja de Retiro de las Fuerzas Militares)" },
    { name: "CASUR (Caja de Sueldos de Retiro de la Policía)" },
    { name: "CAGEN (Caja General de la Policía Nacional)" },
    { name: "TEGEN" },
    { name: "MINDEFENSA" },
];

type PagaduriasProps = {
    segment?: 'docente' | 'pensionado' | 'fuerza-publica';
};

const PagaduriasList = ({ items }: { items: { name: string }[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.length > 0 ? (
            items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 line-clamp-2 uppercase">
                        {item.name}
                    </span>
                </div>
            ))
        ) : (
            <div className="col-span-full py-8 text-center text-slate-400 italic">
                No se encontraron resultados
            </div>
        )}
    </div>
);

const Pagadurias = ({ segment }: PagaduriasProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEducation = useMemo(() =>
        educationLogos.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm]);

    const filteredPension = useMemo(() =>
        pensionLogos.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm]);

    const filteredFuerza = useMemo(() =>
        fuerzaPublicaLogos.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm]);

    const defaultAccordion =
        segment === 'docente' ? 'educacion' :
            segment === 'pensionado' ? 'pensionados' :
                segment === 'fuerza-publica' ? 'fuerza-publica' :
                    'educacion';

    return (
        <section className="py-24 bg-slate-50/50 overflow-hidden" id="convenios">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <Badge variant="outline" className="px-4 py-1.5 border-emerald-500/20 text-emerald-600 text-sm font-bold tracking-wide uppercase bg-white">
                        Convenios y Pagadurías
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                        ¿Tu entidad está afiliada?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium text-center">
                        Busca tu secretaria de educación en nuestro listado oficial
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Search Bar */}
                    <div className="relative group max-w-xl mx-auto">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                            <Input
                                type="text"
                                placeholder="Busca tu secretaría, fondo o entidad..."
                                className="pl-12 h-16 bg-white border-2 border-slate-100 rounded-2xl shadow-sm focus:border-emerald-500 focus:ring-emerald-500/20 text-lg font-medium transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-4 p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-slate-400" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Accordion List */}
                    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <Accordion type="single" collapsible defaultValue={defaultAccordion} className="w-full">
                            {/* Educación */}
                            {(segment === 'docente' || !segment) && (
                                <AccordionItem value="educacion" className="border-slate-100">
                                    <AccordionTrigger className="hover:no-underline py-6 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-all">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-lg font-black text-slate-800 tracking-tight">Sector Educación</h3>
                                                <p className="text-sm font-medium text-slate-400">Secretarías certificadas a nivel nacional</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-8">
                                        <PagaduriasList items={filteredEducation} />
                                    </AccordionContent>
                                </AccordionItem>
                            )}

                            {/* Pensionados */}
                            {(segment === 'pensionado' || !segment) && (
                                <AccordionItem value="pensionados" className="border-slate-100">
                                    <AccordionTrigger className="hover:no-underline py-6 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-data-[state=open]:bg-emerald-600 group-data-[state=open]:text-white transition-all">
                                                <Shield className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-lg font-black text-slate-800 tracking-tight">Pensionados</h3>
                                                <p className="text-sm font-medium text-slate-400">Fondos públicos y privados, Colpensiones y FOPEP</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-8">
                                        <PagaduriasList items={filteredPension} />
                                    </AccordionContent>
                                </AccordionItem>
                            )}

                            {/* Fuerza Pública */}
                            {(segment === 'fuerza-publica' || !segment) && (
                                <AccordionItem value="fuerza-publica" className="border-slate-100">
                                    <AccordionTrigger className="hover:no-underline py-6 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-data-[state=open]:bg-indigo-600 group-data-[state=open]:text-white transition-all">
                                                <Medal className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-lg font-black text-slate-800 tracking-tight">Fuerza Pública</h3>
                                                <p className="text-sm font-medium text-slate-400">CASUR, CREMIL y TEGEN</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-8">
                                        <PagaduriasList items={filteredFuerza} />
                                    </AccordionContent>
                                </AccordionItem>
                            )}
                        </Accordion>

                        {searchTerm && filteredEducation.length === 0 && filteredPension.length === 0 && filteredFuerza.length === 0 && (
                            <div className="py-12 text-center">
                                <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                <p className="text-slate-500 font-medium">No encontramos coincidencias para "<span className="text-slate-900 font-bold">{searchTerm}</span>"</p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="mt-4 text-emerald-600 font-bold hover:underline"
                                >
                                    Limpiar búsqueda
                                </button>
                            </div>
                        )}
                    </div>

                    <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest pt-8">
                        Respaldo garantizado por Trufi • Actualizado 2024
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pagadurias;
