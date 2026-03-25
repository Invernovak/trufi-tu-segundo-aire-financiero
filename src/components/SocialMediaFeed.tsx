import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom TikTok Icon (since Lucide doesn't have it standard or it might differ)
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const socialPlatforms = [
    {
        id: "linkedin",
        name: "LinkedIn",
        icon: Linkedin,
        color: "bg-[#0077b5]",
        link: "#",
        description: "Noticias corporativas"
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: Instagram,
        color: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]",
        link: "#",
        description: "Tips diarios y vida TRUFI"
    },
    {
        id: "facebook",
        name: "Facebook",
        icon: Facebook,
        color: "bg-[#1877F2]",
        link: "#",
        description: "Comunidad y novedades"
    },
    {
        id: "tiktok",
        name: "TikTok",
        icon: TikTokIcon,
        color: "bg-black",
        link: "#",
        description: "Casos de éxito y educación"
    },
];

const SocialMediaFeed = () => {
    return (
        <section className="py-20 bg-muted/10 relative overflow-hidden" id="redes-sociales">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                        Comunidad Digital
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Conectamos contigo en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                            cada plataforma
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Conocerás tips financieros, noticias y soporte directo para pensionados, docentes y fuerza pública.
                    </p>
                </div>

                {/* Social Icons Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {socialPlatforms.map((platform) => (
                        <a
                            key={platform.id}
                            href={platform.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group block"
                        >
                            <div className="bg-white rounded-[2.5rem] p-8 border border-border/40 shadow-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center">
                                <div className={`w-20 h-20 ${platform.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500 mb-6`}>
                                    <platform.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{platform.name}</h3>
                                <p className="text-sm text-muted-foreground mb-6">{platform.description}</p>
                                
                                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                    Seguir ahora
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SocialMediaFeed;
