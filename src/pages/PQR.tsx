import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
    FileText, Send, Loader2, AlertCircle, HelpCircle, Frown, ShieldCheck, 
    AlertTriangle, Info, Users, DollarSign, Clock, Lightbulb, RefreshCw, 
    Trash2, Lock, Zap, ShieldAlert, CheckCircle2, Plane, MessageSquare, 
    UserX, Settings, ClipboardList, Package, FileSignature, Users2 
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const PQR_GROUPS = [
    {
        id: "solicitud",
        label: "Solicitud",
        icon: FileText,
        subtypes: [
            { id: "info", label: "Solicitud de información", icon: Info, techType: "Solicitud" },
            { id: "operativa", label: "Solicitud Operativa", icon: Settings, techType: "Solicitud" }
        ]
    },
    {
        id: "queja",
        label: "Queja",
        icon: Frown,
        subtypes: [
            { id: "comercial", label: "Queja - Servicio comercial", icon: Users2, techType: "Queja" },
            { id: "credito", label: "Queja - Proceso de crédito", icon: ClipboardList, techType: "Queja" }
        ]
    },
    {
        id: "reclamo",
        label: "Reclamo",
        icon: AlertCircle,
        subtypes: [
            { id: "producto", label: "Reclamo Producto/Operación", icon: Package, techType: "Reclamo" },
            { id: "cartera", label: "Reclamo Cartera y cobranza", icon: DollarSign, techType: "Reclamo" }
        ]
    },
    {
        id: "habeas",
        label: "Habeas Data",
        icon: ShieldCheck,
        subtypes: [
            { id: "proteccion", label: "Protección de datos personales", icon: Lock, techType: "Habeas Data" },
            { id: "financiero", label: "Habeas Data Financiero", icon: CheckCircle2, techType: "Habeas Data" }
        ]
    },
    {
        id: "incidente",
        label: "Incidente",
        icon: ShieldAlert,
        subtypes: [
            { id: "peticion", label: "Derecho de petición", icon: FileSignature, techType: "Incidente" },
            { id: "especial", label: "Incidentes Especiales", icon: Zap, techType: "Incidente" }
        ]
    }
];

const PQR = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        grupo: "", // Consultas, Inconformidad, Privacidad, Urgente
        tipo: "",
        mensaje: "",
        aceptaTerminos: false,
        aceptaTratamientoDatos: false,
    });
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        }
    };

    const handleGroupSelect = (group: string) => {
        setFormData({ ...formData, grupo: group, tipo: "" });
    };

    const handleTypeSelect = (type: string) => {
        setFormData({ ...formData, tipo: type });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.tipo) {
            toast.error("Por favor selecciona el tipo de solicitud");
            return;
        }

        if (!formData.aceptaTerminos || !formData.aceptaTratamientoDatos) {
            toast.error("Debes aceptar los términos y la política de tratamiento de datos");
            return;
        }

        setLoading(true);

        try {
            // Find the technical type from the mapping
            let technicalType = "Solicitud"; // Default fallback
            PQR_GROUPS.forEach(group => {
                const subtype = group.subtypes.find(s => s.label === formData.tipo);
                if (subtype && 'techType' in subtype) {
                    technicalType = subtype.techType as string;
                }
            });

            const { error } = await supabase
                .from('pqrs')
                .insert([
                    {
                        nombre: formData.nombre,
                        email: formData.email,
                        telefono: formData.telefono,
                        tipo: technicalType,
                        mensaje: `${formData.grupo} - ${formData.tipo}: ${formData.mensaje}`,
                        estado: 'Pendiente', // Default state
                    }
                ]);

            if (error) throw error;

            toast.success("¡Tu solicitud ha sido radicada con éxito!", {
                description: "Hemos recibido tu mensaje. Ana de soporte te contactará pronto.",
            });

            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                grupo: "",
                tipo: "",
                mensaje: "",
                aceptaTerminos: false,
                aceptaTratamientoDatos: false,
            });

        } catch (error) {
            console.error('Error submitting PQR:', error);
            toast.error("Hubo un error al enviar tu solicitud", {
                description: "Por favor intenta nuevamente o contáctanos por WhatsApp.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative font-sans">
            <Header />

            <div className="absolute inset-0 z-0 h-[60vh] lg:h-[70vh]">
                <img
                    src="/lovable-uploads/pqr_support.png"
                    alt="Atención al cliente"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-50" />
            </div>

            <main className="pt-28 pb-16 md:pt-36">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">

                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-100 font-semibold text-sm tracking-wide">Centro de Ayuda</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
                            Estamos aquí para escucharte
                        </h1>
                        <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-sm font-medium">
                            Tu voz nos ayuda a mejorar. Cuéntanos qué necesitas y nuestro equipo te responderá lo antes posible.
                        </p>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 md:p-12 relative z-10 overflow-hidden">
                        {/* Support Avatar Decor */}
                        <div className="absolute top-6 right-8 flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 duration-700">
                            <div className="relative">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&backgroundColor=b6e3f4"
                                    alt="Ana de soporte"
                                    className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white shadow-sm"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">En línea</p>
                                <p className="text-xs font-semibold text-slate-700">Ana de soporte recibirá tu mensaje</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10 pt-8">
                            {/* Step 1: Group Selection */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">1</div>
                                    <h3 className="text-xl font-bold text-slate-800">¿Qué tipo de solicitud deseas realizar?</h3>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {PQR_GROUPS.map((group) => (
                                        <button
                                            key={group.id}
                                            type="button"
                                            onClick={() => handleGroupSelect(group.id)}
                                            className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all text-left group ${formData.grupo === group.id
                                                ? "border-emerald-500 bg-emerald-50/50 shadow-md shadow-emerald-100"
                                                : "border-slate-100 bg-slate-50/30 hover:border-emerald-200 hover:bg-white hover:shadow-lg"
                                                }`}
                                        >
                                            <div className={`p-3 rounded-xl transition-colors ${formData.grupo === group.id ? "bg-emerald-500 text-white" : "bg-white text-slate-400 group-hover:text-emerald-500 shadow-sm"}`}>
                                                <group.icon className="w-6 h-6" />
                                            </div>
                                            <span className={`text-sm font-bold leading-tight pt-1 ${formData.grupo === group.id ? "text-emerald-900" : "text-slate-600"}`}>
                                                {group.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Sub-type Selection (Conditional) */}
                            {formData.grupo && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">2</div>
                                        <h3 className="text-xl font-bold text-slate-800">Cuéntanos un poco más...</h3>
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {PQR_GROUPS.find(g => g.id === formData.grupo)?.subtypes.map((sub) => (
                                            <button
                                                key={sub.id}
                                                type="button"
                                                onClick={() => handleTypeSelect(sub.label)}
                                                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${formData.tipo === sub.label
                                                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold shadow-sm"
                                                    : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md text-slate-600"
                                                    }`}
                                            >
                                                <sub.icon className={`w-4 h-4 ${formData.tipo === sub.label ? "text-emerald-600" : "text-slate-400"}`} />
                                                <span className="text-xs">{sub.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Personal Data */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">3</div>
                                    <h3 className="text-xl font-bold text-slate-800">Tu información de contacto</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <Label htmlFor="nombre" className="text-slate-500 font-medium ml-1 italic">¿Cómo te llamas?</Label>
                                        <Input
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Tu nombre completo"
                                            required
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="h-14 rounded-xl border-slate-200 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all text-lg font-medium px-6 placeholder:text-slate-300"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="email" className="text-slate-500 font-medium ml-1 italic flex justify-between items-center">
                                            ¿A qué email podemos escribirte?
                                            {isEmailValid && <CheckCircle2 className="w-5 h-5 text-emerald-500 animate-in zoom-in duration-300" />}
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="tucorreo@ejemplo.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`h-14 rounded-xl border-slate-200 transition-all text-lg font-medium px-6 placeholder:text-slate-300 pr-12 ${isEmailValid ? 'bg-emerald-50/30 border-emerald-200 ring-4 ring-emerald-50/50' : 'bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-emerald-100'}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <Label htmlFor="telefono" className="text-slate-500 font-medium ml-1 italic">¿Un número de teléfono?</Label>
                                        <Input
                                            id="telefono"
                                            name="telefono"
                                            type="tel"
                                            placeholder="300 123 4567"
                                            required
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            className="h-14 rounded-xl border-slate-200 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all text-lg font-medium px-6 placeholder:text-slate-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="mensaje" className="text-slate-500 font-medium ml-1 italic">Cuéntanos tu caso con confianza, estamos listos para ayudarte...</Label>
                                    <Textarea
                                        id="mensaje"
                                        name="mensaje"
                                        placeholder="Describe detalladamente tu situación..."
                                        className="min-h-[180px] rounded-2xl border-slate-200 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-emerald-100 transition-all text-lg font-medium px-6 py-4 placeholder:text-slate-300 resize-none shadow-inner"
                                        required
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>



                            <div className="space-y-4 pt-2">
                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="aceptaTerminos"
                                        checked={formData.aceptaTerminos}
                                        onCheckedChange={(checked) =>
                                            setFormData({ ...formData, aceptaTerminos: checked === true })
                                        }
                                        className="mt-1 border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                                    />
                                    <Label
                                        htmlFor="aceptaTerminos"
                                        className="text-sm text-slate-500 leading-relaxed cursor-pointer font-normal"
                                    >
                                        Acepto los{" "}
                                        <Link to="/terminos-condiciones" className="text-emerald-600 font-bold hover:underline">
                                            términos y condiciones
                                        </Link>
                                    </Label>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="aceptaTratamientoDatos"
                                        checked={formData.aceptaTratamientoDatos}
                                        onCheckedChange={(checked) =>
                                            setFormData({ ...formData, aceptaTratamientoDatos: checked === true })
                                        }
                                        className="mt-1 border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                                    />
                                    <Label
                                        htmlFor="aceptaTratamientoDatos"
                                        className="text-sm text-slate-500 leading-relaxed cursor-pointer font-normal"
                                    >
                                        Acepto la{" "}
                                        <Link to="/politica-privacidad" className="text-emerald-600 font-bold hover:underline">
                                            política de tratamiento de datos personales
                                        </Link>
                                    </Label>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-16 text-lg font-black bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-200/50 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 group/submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                        Enviando mensaje...
                                    </>
                                ) : (
                                    <>
                                        <Plane className="mr-3 h-6 w-6 transition-transform group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1" />
                                        Enviar mi mensaje
                                    </>
                                )}
                            </Button>

                        </form>
                    </div>

                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PQR;
