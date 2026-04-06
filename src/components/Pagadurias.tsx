import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import { educationLogos, pensionLogos, fuerzaPublicaLogos } from "./PagaduriasData";

// Importación de componentes especializados (Presentación)
import PagaduriasPensionados from "./PagaduriasPensionados";
import PagaduriasDocentes from "./PagaduriasDocentes";
import PagaduriasFuerzaPublica from "./PagaduriasFuerzaPublica";

interface PagaduriasProps {
    segment?: 'docente' | 'pensionado' | 'fuerza-publica';
}

// Sub-componente de Cabecera (Presentación)
const PagaduriasHeader = ({ title, description }: { title: string; description: string }) => (
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <Badge variant="outline" className="px-4 py-1.5 border-emerald-500/20 text-emerald-600 text-sm font-bold tracking-wide uppercase bg-white">
            Convenios y Pagadurías
        </Badge>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 text-center">
            {title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium text-center">
            {description}
        </p>
    </div>
);

// Sub-componente de Búsqueda (Controlado)
const SearchBar = ({ searchTerm, setSearchTerm, placeholder }: { searchTerm: string; setSearchTerm: (val: string) => void; placeholder: string }) => (
    <div className="relative group max-w-xl mx-auto">
        <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <Input
                type="text"
                placeholder={placeholder}
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
);

const Pagadurias = ({ segment }: PagaduriasProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Lógica de filtrado centralizada en el Orquestador
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

    const getHeaderContent = () => {
        switch (segment) {
            case 'pensionado':
                return { title: "¿Tu fondo está afiliado?", description: "Busca tu fondo de pensiones en nuestro listado oficial" };
            case 'docente':
                return { title: "¿Tu secretaría está afiliada?", description: "Busca tu secretaría de educación en nuestro listado oficial" };
            case 'fuerza-publica':
                return { title: "¿Tu entidad está afiliada?", description: "Busca tu caja de retiro en nuestro listado oficial" };
            default:
                return { title: "¿Tu entidad está afiliada?", description: "Busca tu entidad en nuestros convenios nacionales" };
        }
    };

    const { title, description } = getHeaderContent();

    return (
        <section className="py-24 bg-slate-50/50 overflow-hidden" id="convenios">
            <div className="container px-4 md:px-6">
                
                <PagaduriasHeader title={title} description={description} />

                <div className="max-w-4xl mx-auto space-y-8">
                    <SearchBar 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                        placeholder="Busca tu secretaría, fondo o entidad..." 
                    />

                    {/* Orquestación de Secciones especializadas */}
                    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <Accordion type="single" collapsible defaultValue={defaultAccordion} className="w-full">
                            {(segment === 'docente' || !segment) && (
                                <PagaduriasDocentes data={filteredEducation} />
                            )}

                            {(segment === 'pensionado' || !segment) && (
                                <PagaduriasPensionados data={filteredPension} />
                            )}

                            {(segment === 'fuerza-publica' || !segment) && (
                                <PagaduriasFuerzaPublica data={filteredFuerza} />
                            )}
                        </Accordion>

                        {/* Sin resultados centralizado */}
                        {searchTerm && (filteredEducation.length + filteredPension.length + filteredFuerza.length) === 0 && (
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
