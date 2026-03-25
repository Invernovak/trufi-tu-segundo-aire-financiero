import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, ArrowRight, Shield, Coins, BarChart } from "lucide-react";
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

                        <div className="relative z-10 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-800/80 bg-purple-900/40 backdrop-blur-md shadow-sm">
                                <BookOpen className="w-4 h-4 text-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
                                    APRENDE CON TRUFI
                                </span>
                            </div>

                            <div className="max-w-3xl w-full">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-lg tracking-tight">
                                    Aprende con Trufi – Tu Beneficio Exclusivo
                                </h2>
                            </div>

                            <div className="w-full space-y-6">
                                <p className="text-lg md:text-xl text-white/90 font-medium">
                                    Creemos que el aprendizaje continuo es tu mejor herramienta para el éxito y la estabilidad.
                                </p>
                                
                                <ul className="space-y-4 text-left inline-block lg:block">
                                    <li className="flex items-center gap-3 text-white/80 md:text-lg">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Coins className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <span>Finanzas, bienestar y desarrollo personal.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white/80 md:text-lg">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <TrendingUp className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <span>Tecnología, emprendimiento y nuevas tendencias.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white/80 md:text-lg">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <span>Contenido de alto valor, 100% gratuito para ti y tu familia.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full lg:w-auto">
                                <Link to="/blog" className="w-full sm:w-auto">
                                    <Button
                                        className="w-full relative overflow-hidden bg-teal-500 hover:bg-teal-400 text-white border-0 font-bold text-base h-12 px-8 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(20,184,166,0.6)] group/btn"
                                    >
                                        <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
                                            Aprende con especialistas
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </span>
                                    </Button>
                                </Link>


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinancialAcademySection;
