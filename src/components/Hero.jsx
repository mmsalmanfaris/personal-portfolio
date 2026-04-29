import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import * as Motion from "framer-motion";

export default function Hero() {
    const socials = [
        { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mmsalmanfaris/" },
        { icon: FaGithub, label: "GitHub", href: "https://github.com/mmsalmanfaris" },
        { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/mmsalmanfaris" },
    ];

    const metrics = [
        { value: "12+", label: "Cloud and DevOps projects" },
        { value: "8", label: "Technical sessions delivered" },
        { value: "6", label: "Professional certifications" },
    ];

    return (
        <section id="home" className="min-h-screen bg-theme-primary pt-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
                <Motion.motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col justify-between gap-12"
                >
                    <div>
                        <p className="section-kicker mb-6">MM Salman Faris</p>
                        <h1 className="max-w-5xl text-[clamp(3.25rem,10vw,8.75rem)] font-bold leading-[0.86] tracking-normal text-theme-primary">
                            Cloud DevOps Engineer.
                        </h1>
                    </div>

                    <div className="grid gap-8 border-y border-theme py-8 md:grid-cols-[0.95fr_1.05fr]">
                        <p className="section-copy text-lg">
                            I build reliable delivery systems, scalable cloud infrastructure, and cost-aware operations for teams that need production to feel calm.
                        </p>
                        <div className="space-y-5">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-theme-tertiary">
                                DevOps / CloudOps / FinOps
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="premium-button premium-button-primary">
                                    Resume <FaArrowRight size={13} />
                                </a>
                                <a href="#projects" className="premium-button premium-button-secondary">
                                    View Work
                                </a>
                            </div>
                        </div>
                    </div>
                </Motion.motion.div>

                <Motion.motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="relative overflow-hidden border border-theme bg-theme-secondary">
                        <img
                            src="/profile.webp"
                            alt="MM Salman Faris"
                            className="aspect-[4/5] h-full w-full object-cover grayscale"
                        />
                        <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-black/75 p-5 text-white backdrop-blur">
                            <p className="text-sm uppercase tracking-[0.18em] text-white/60">Available for</p>
                            <p className="mt-1 text-xl font-semibold">Cloud automation, CI/CD, and platform operations</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 border border-theme">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="border-r border-theme p-4 last:border-r-0">
                                <p className="text-2xl font-bold text-theme-primary">{metric.value}</p>
                                <p className="mt-1 text-xs leading-5 text-theme-tertiary">{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-theme text-theme-secondary transition-colors hover:border-theme-primary hover:bg-theme-secondary hover:text-theme-primary"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </Motion.motion.div>
            </div>
        </section>
    );
}
