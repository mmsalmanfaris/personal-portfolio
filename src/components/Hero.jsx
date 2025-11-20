// Hero.jsx - Premium theme-aware version
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-theme-primary"
        >
            {/* Background Glow - theme aware */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 dark:bg-cyan-500/20 light:bg-cyan-100/40"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-theme-primary">
                        Hi, I'm <br />
                        <span className="text-gradient">
                            Salman Faris
                        </span>
                    </h1>
                    <p className="text-theme-secondary text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Software Engineer (Ops) specializing in <span className="text-cyan-500 font-medium">automation</span>, <span className="text-cyan-500 font-medium">monitoring</span>, and <span className="text-cyan-500 font-medium">system reliability</span>. Building resilient cloud platforms with modern DevOps practices.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            Resume
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/mmsalmanfaris/" },
                                { icon: FaGithub, href: "https://github.com/mmsalmanfaris" },
                                { icon: FaFacebook, href: "https://www.facebook.com/mmsalmanfaris" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full border border-theme text-theme-secondary hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-64 sm:w-80 md:w-96 aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                        <img
                            src="/profile.webp"
                            alt="MM Salman Faris"
                            className="relative w-full h-full object-cover rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-cyan-500/20 dark:border dark:border-white/10 light:border-4 light:border-white"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
