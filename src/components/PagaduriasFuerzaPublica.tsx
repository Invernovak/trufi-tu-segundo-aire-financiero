import { Medal } from "lucide-react";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface PagaduriasListProps {
    items: { name: string }[];
}

const PagaduriasList = ({ items }: PagaduriasListProps) => (
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
                No se encontraron resultados en esta categoría
            </div>
        )}
    </div>
);

const PagaduriasFuerzaPublica = ({ data }: { data: { name: string }[] }) => {
    return (
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
                <PagaduriasList items={data} />
            </AccordionContent>
        </AccordionItem>
    );
};

export default PagaduriasFuerzaPublica;
