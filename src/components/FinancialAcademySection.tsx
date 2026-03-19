import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, ArrowRight, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialAcademySection = () => {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden relative">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="group relative bg-gradient-to-br from-[#1A0B3B] via-[#2D1B69] to-[#120529] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 min-h-[550px] flex flex-col lg:flex-row">

                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] pointer-events-none z-20" />

                    {/* Image Side (Left) - Enhanced */}
                    <div className="lg:w-5/12 relative h-[350px] lg:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0B3B]/80 via-transparent to-transparent z-10 lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A0B3B]/90" />
                        <img
                            src="/lovable-uploads/AcademiaTrufi.jpg"
                            alt="Educación Financiera Trufi"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                    </div>

                    {/* Content Side (Right) */}
                    <div className="lg:w-7/12 p-8 md:p-14 lg:p-20 flex flex-col justify-center text-white relative">

                        {/* Blob Decoration */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen" />

                        <div className="relative z-10 space-y-8 flex flex-col items-center text-center">
                            {/* Badger pulsing */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 w-fit backdrop-blur-md shadow-sm">
                                <BookOpen className="w-4 h-4 text-secondary/70" />
                                <span className="text-xs font-bold text-secondary tracking-wider uppercase">
                                    Aprende con Trufi
                                </span>
                            </div>

                            <div className="max-w-3xl mx-auto w-full text-center">
                                <h2 className="text-2xl md:text-3xl lg:text-3xl font-black leading-tight text-white drop-shadow-lg uppercase tracking-tight">
                                    "Aprende herramientas prácticas para tu día a día”
                                </h2>
                                <p className="text-[#78c0b3] italic text-xl md:text-2xl lg:text-2xl mt-4 drop-shadow-[0_0_15px_rgba(120,192,179,0.3)]">
                                    “a través de nuestros aliados"
                                </p>
                            </div>

                            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-light">
                                No solo hablamos de finanzas. Aprende sobre IA, crece profesionalmente y adquiere habilidades para el mundo de hoy. Contenido 100% gratuito.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 pt-2 justify-center">
                                <Link to="/blog">
                                    <Button
                                        size="lg"
                                        className="relative overflow-hidden bg-secondary hover:bg-secondary/90 text-primary-foreground border-0 font-bold text-lg h-14 px-10 rounded-2xl shadow-[0_0_30px_hsl(var(--secondary)/0.4)] transition-all hover:scale-105 hover:shadow-[0_0_50px_hsl(var(--secondary)/0.6)] group/btn"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Aprende con especialistas
                                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                    </Button>
                                </Link>

                                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <TrendingUp className="w-5 h-5 text-secondary" />
                                    <span className="text-sm font-medium text-white/90">Acceso Gratuito</span>
                                </div>
                            </div>

                            {/* Featured Resources - Modern List */}
                            <div className="pt-10 mt-6 border-t border-white/10">
                                <p className="text-xs font-bold text-white/40 mb-5 uppercase tracking-widest">
                                    Lo más visto hoy
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* Resource 1 */}
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-secondary/30 transition-all hover:bg-white/10 cursor-pointer group/item">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shadow-inner">
                                            <Headphones className="w-5 h-5 text-orange-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover/item:text-secondary transition-colors">
                                                Aprende sobre IA
                                            </p>
                                            <p className="text-[10px] text-white/50 uppercase tracking-wide">Curso • Nivel Básico</p>
                                        </div>
                                    </div>

                                    {/* Resource 2 */}
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-blue-500/30 transition-all hover:bg-white/10 cursor-pointer group/item">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shadow-inner">
                                            <BookOpen className="w-5 h-5 text-blue-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white group-hover/item:text-secondary transition-colors">
                                                Productividad Real
                                            </p>
                                            <p className="text-[10px] text-white/50 uppercase tracking-wide">Blog • 3 min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinancialAcademySection;
