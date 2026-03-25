import { Check, Info } from "lucide-react";

const documents = [
  "Certificado de deuda",
  "Plan de Pagos",
  "Certificado tributario declaración de renta",
  "Paz y Salvos",
  "Copias documentales",
];

const DocumentCostsTable = () => {
  return (
    <div className="mt-12 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-8 bg-secondary rounded-full" />
        <h3 className="text-2xl font-black text-primary">Certificaciones sin Costo</h3>
      </div>
      
      <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest">Documento</th>
              <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest text-right">Valor de Emisión</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {documents.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-50/80 transition-colors group">
                <td className="px-8 py-4 text-gray-700 font-medium">{doc}</td>
                <td className="px-8 py-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-tight">
                    <Check className="w-3.5 h-3.5" />
                    Sin Costo
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-2xl border border-amber-100/50">
        <Info className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed italic">
          La expedición de documentos queda sujeta a tiempos y políticas internas de la organización.
        </p>
      </div>
    </div>
  );
};

export default DocumentCostsTable;
