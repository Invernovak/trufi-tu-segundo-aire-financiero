import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TermsDialog, PrivacyDialog } from "@/components/LegalDialogs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { 
    FileText, Send, Loader2, AlertCircle, HelpCircle, Frown, ShieldCheck, 
    AlertTriangle, Info, Users, DollarSign, Clock, Lightbulb, RefreshCw, 
    Trash2, Lock, Zap, ShieldAlert, CheckCircle2, Plane, MessageSquare, 
    UserX, Settings, ClipboardList, Package, FileSignature, Users2,
    CheckCircle, Home, ArrowRight, Mail
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const PQR_GROUPS = [
    {
        id: "solicitud",
        label: "Solicitud",
        icon: FileText,
        subcategories: [
            {
                id: "info",
                label: "Solicitud de Información",
                icon: Info,
                topics: [
                    "Estado del crédito", "Plan de pagos", "Saldo actual", 
                    "Fecha estimada de desembolso", "Requisitos de crédito", 
                    "Tasa y condiciones", "Simulación de crédito", 
                    "Estado de compra de cartera", "Información de descuento por pagaduría"
                ]
            },
            {
                id: "operativa",
                label: "Solicitudes Operativas",
                icon: Settings,
                topics: [
                    "Certificado de deuda", "Paz y salvo", "Extracto detallado", 
                    "Actualización de datos", "Cambio de cuenta bancaria", 
                    "Certificación de descuentos aplicados", "Copia de pagaré o contrato", 
                    "Revocatoria de autorización de tratamiento de datos"
                ]
            }
        ]
    },
    {
        id: "queja",
        label: "Queja",
        icon: Frown,
        subcategories: [
            {
                id: "comercial",
                label: "Quejas - Servicio Comercial",
                icon: Users2,
                topics: [
                    "Información incompleta o errónea del asesor", 
                    "Incumplimiento en tiempos de respuesta", 
                    "Trato inadecuado", 
                    "Ofrecimiento no acorde a condiciones reales", 
                    "Publicidad confusa"
                ]
            },
            {
                id: "credito",
                label: "Quejas - Proceso de Crédito",
                icon: ClipboardList,
                topics: [
                    "Negación sin explicación clara", 
                    "Demora en estudio", 
                    "Cambios en condiciones aprobadas", 
                    "Desembolso fuera del plazo informado", 
                    "Error en valor desembolsado"
                ]
            }
        ]
    },
    {
        id: "reclamo",
        label: "Reclamo",
        icon: AlertCircle,
        subcategories: [
            {
                id: "producto",
                label: "Reclamos - Producto / Operación",
                icon: Package,
                topics: [
                    "Descuento mayor al autorizado", 
                    "Doble descuento por pagaduría", 
                    "Descuento sin desembolso", 
                    "Error en liquidación de saldo", 
                    "Cobro de valores no pactados", 
                    "Reporte negativo en centrales de riesgo", 
                    "No aplicación de pagos realizados", 
                    "Error en tasa aplicada"
                ]
            },
            {
                id: "cartera",
                label: "Reclamos - Cartera y Cobranza",
                icon: DollarSign,
                topics: [
                    "Gestión de cobro indebida", 
                    "Contacto fuera de horario permitido", 
                    "Cobro a tercero no autorizado", 
                    "Información errada en saldo vencido", 
                    "No actualización posterior a pago"
                ]
            }
        ]
    },
    {
        id: "habeas",
        label: "Habeas Data",
        icon: ShieldCheck,
        subcategories: [
            {
                id: "proteccion",
                label: "Protección de Datos Personales (Ley 1581)",
                icon: Lock,
                topics: [
                    "Solicitud de actualización de datos", 
                    "Consulta de datos almacenados", 
                    "Reclamo por uso indebido de datos"
                ]
            },
            {
                id: "financiero",
                label: "Habeas Data Financiero (Ley 1266)",
                icon: CheckCircle2,
                topics: [
                    "Solicitud de corrección de reporte", 
                    "Reclamo por reporte negativo", 
                    "Solicitud de certificación de reporte", 
                    "Reclamo por permanencia en centrales"
                ]
            }
        ]
    },
    {
        id: "incidente",
        label: "Incidente",
        icon: ShieldAlert,
        subcategories: [
            {
                id: "peticion",
                label: "Derechos de Petición",
                icon: FileSignature,
                topics: [
                    "Solicitud formal de información", 
                    "Solicitud de copia de documentos", 
                    "Solicitud de aclaración contractual"
                ]
            },
            {
                id: "especial",
                label: "Incidentes Especiales (Alta criticidad)",
                icon: Zap,
                topics: [
                    "Presunto fraude", 
                    "Suplantación", 
                    "Falsificación de firma", 
                    "Crédito no solicitado", 
                    "Vulneración de información", 
                    "Incidente de seguridad digital"
                ]
            }
        ]
    }
];

const PQR = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        grupo: "", // Level 1: Solicitud, Queja, etc.
        subgrupo: "", // Level 2: Solicitud de Información, etc.
        tipo: "", // Level 3: Tema específico
        mensaje: "",
        aceptaTerminos: false,
        aceptaTratamientoDatos: false,
    });
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [radicadoNumber, setRadicadoNumber] = useState("");

    const supportAgent = useMemo(() => {
        const agents = [
            { name: "Ana", avatar: "https://api.dicebear.com/7.x/micah/svg?seed=Aneka&backgroundColor=b6e3f4" },
            { name: "Carlos", avatar: "https://api.dicebear.com/7.x/micah/svg?seed=Felix&backgroundColor=b6e3f4" }
        ];
        return agents[Math.floor(Math.random() * agents.length)];
    }, []);

    const generateRadicado = () => {
        const year = new Date().getFullYear();
        const random = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `TRF-${year}-${random}`;
    };

    const sendEmailNotifications = async (pqrData: any, radicado: string) => {
        console.log("🚀 Enviando notificaciones de PQR...", {
            para_trufi: "notificaciones@trufi.com.co",
            para_cliente: pqrData.email,
            radicado: radicado
        });
        
        // NOTA PARA EL USUARIO: Para que esto envíe correos reales:
        // 1. Usa Supabase Edge Functions: supabase.functions.invoke('pqr-email', { body: { pqrData, radicado } })
        // 2. O usa EmailJS: emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { ...pqrData, radicado })
        
        // Simulamos un delay de red para realismo
        await new Promise(resolve => setTimeout(resolve, 1500));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        }
    };

    const handleGroupSelect = (group: string) => {
        setFormData({ ...formData, grupo: group, subgrupo: "", tipo: "" });
    };

    const handleSubgroupSelect = (subgroup: string) => {
        setFormData({ ...formData, subgrupo: subgroup, tipo: "" });
    };

    const handleTypeSelect = (type: string) => {
        setFormData({ ...formData, tipo: type });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.aceptaTerminos || !formData.aceptaTratamientoDatos) {
            toast.error("Debes aceptar los términos y la política de datos");
            return;
        }

        setLoading(true);

        try {
            // Generación de Radicado: TRF-2026- + 4 caracteres aleatorios
            const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
            const radicado = `TRF-2026-${randomChars}`;
            
            // Inserción en Supabase
            const { error } = await supabase
                .from('pqrs')
                .insert([
                    {
                        nombre: formData.nombre,
                        email: formData.email,
                        mensaje: formData.mensaje,
                        estado: 'Pendiente',
                        numero_radicado: radicado,
                        acepta_terminospqr: formData.aceptaTerminos,
                        acepta_tratamiento_datospqr: formData.aceptaTratamientoDatos,
                    }
                ]);

            if (error) {
                console.error("Error DB:", error);
                throw new Error("No se pudo guardar la PQR.");
            }

            // Exito: Notificación con el radicado
            toast.success(`PQR radicado con éxito. Tu número de seguimiento es: ${radicado}`);

            // Guardar radicado para mostrar en la pantalla de éxito
            setRadicadoNumber(radicado);
            setIsSubmitted(true);

            // Limpia el formulario (reset)
            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                grupo: "",
                subgrupo: "",
                tipo: "",
                mensaje: "",
                aceptaTerminos: false,
                aceptaTratamientoDatos: false,
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error: any) {
            console.error('Error en PQR:', error);
            toast.error("Hubo un error al procesar tu radicado. Inténtalo de nuevo.");
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
                        {!isSubmitted ? (
                            <>
                                {/* Support Avatar Decor */}
                                <div className="absolute top-6 right-8 flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-right-4 duration-700">
                                    <div className="relative">
                                        <img
                                            src={supportAgent.avatar}
                                            alt={`${supportAgent.name} de soporte`}
                                            className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white shadow-sm"
                                        />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">En línea</p>
                                        <p className="text-xs font-semibold text-slate-700">{supportAgent.name} de soporte recibirá tu mensaje</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-10 pt-8">
                                    {/* Step 1: Group Selection */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">1</div>
                                            <h3 className="text-xl font-bold text-slate-800">¿Qué tipo de solicitud deseas realizar?</h3>
                                        </div>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

                                    {/* Step 2: Sub-category Selection (Conditional) */}
                                    {formData.grupo && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">2</div>
                                                <h3 className="text-xl font-bold text-slate-800">
                                                    ¿Cuál de estas áreas describe mejor tu caso?
                                                </h3>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {PQR_GROUPS.find(g => g.id === formData.grupo)?.subcategories.map((sub) => (
                                                    <button
                                                        key={sub.id}
                                                        type="button"
                                                        onClick={() => handleSubgroupSelect(sub.label)}
                                                        className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all text-left group ${formData.subgrupo === sub.label
                                                            ? "border-emerald-500 bg-emerald-50/50 shadow-md shadow-emerald-100"
                                                            : "border-slate-100 bg-slate-50/30 hover:border-emerald-200 hover:bg-white hover:shadow-lg"
                                                            }`}
                                                    >
                                                        <div className={`p-3 rounded-xl transition-colors ${formData.subgrupo === sub.label ? "bg-emerald-500 text-white" : "bg-white text-slate-400 group-hover:text-emerald-500 shadow-sm"}`}>
                                                            <sub.icon className="w-6 h-6" />
                                                        </div>
                                                        <span className={`text-sm font-bold leading-tight pt-1 ${formData.subgrupo === sub.label ? "text-emerald-900" : "text-slate-600"}`}>
                                                            {sub.label}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3: Specific Topic Selection (Conditional) */}
                                    {formData.subgrupo && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">3</div>
                                                <h3 className="text-xl font-bold text-slate-800">
                                                    Selecciona el tema específico
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {PQR_GROUPS.find(g => g.id === formData.grupo)
                                                    ?.subcategories.find(s => s.label === formData.subgrupo)
                                                    ?.topics.map((topic) => (
                                                        <button
                                                            key={topic}
                                                            type="button"
                                                            onClick={() => handleTypeSelect(topic)}
                                                            className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left text-sm ${formData.tipo === topic
                                                                ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold shadow-sm"
                                                                : "border-slate-100 bg-white hover:border-emerald-200 hover:shadow-md text-slate-600"
                                                                }`}
                                                        >
                                                            {formData.tipo === topic ? (
                                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                            ) : (
                                                                <div className="w-2 h-2 rounded-full bg-emerald-200 shrink-0" />
                                                            )}
                                                            <span>{topic}</span>
                                                        </button>
                                                    ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 4: Personal Data */}
                                    <div className={`space-y-8 transition-opacity duration-300 ${formData.tipo ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">4</div>
                                            <h3 className="text-xl font-bold text-slate-800">Casi terminamos... tu información</h3>
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
                                                <TermsDialog>
                                                    <span className="text-emerald-600 font-bold hover:underline cursor-pointer">
                                                        términos y condiciones
                                                    </span>
                                                </TermsDialog>
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
                                                <PrivacyDialog>
                                                    <span className="text-emerald-600 font-bold hover:underline cursor-pointer">
                                                        política de tratamiento de datos personales
                                                    </span>
                                                </PrivacyDialog>
                                            </Label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-16 text-lg font-black bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-200/50 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 group/submit disabled:opacity-50 disabled:grayscale disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed"
                                        disabled={loading || !formData.aceptaTerminos || !formData.aceptaTratamientoDatos}
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
                            </>
                        ) : (
                            <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-700">
                                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-8 relative">
                                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                                    <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin duration-[3000ms]" />
                                </div>
                                
                                <h2 className="text-3xl font-black text-slate-800 mb-4">¡Solicitud Radicada!</h2>
                                <p className="text-lg text-slate-500 mb-10 max-w-md">
                                    Hemos recibido tu solicitud correctamente. El equipo de Trufi te dará una respuesta en el menor tiempo posible.
                                </p>

                                <div className="bg-slate-50 w-full rounded-3xl p-8 border border-slate-100 mb-10 flex flex-col items-center">
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Tu número de radicado</p>
                                    <div className="text-4xl font-black text-emerald-600 font-mono tracking-tight bg-white px-8 py-4 rounded-2xl border border-emerald-100 shadow-sm">
                                        {radicadoNumber}
                                    </div>
                                    <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
                                        <Mail className="w-4 h-4" />
                                        Copia enviada a {formData.email}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                                    <Link to="/" className="flex items-center justify-center gap-2 h-14 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all">
                                        <Home className="w-5 h-5" />
                                        Volver al inicio
                                    </Link>
                                    <Button 
                                        onClick={() => window.location.reload()}
                                        className="h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black shadow-lg shadow-emerald-100"
                                    >
                                        Nueva solicitud
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PQR;
