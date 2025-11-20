// Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Left side */}
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span>&copy; {new Date().getFullYear()} mmsalmanfaris.</span>
                        <span className="hidden sm:inline">Built with</span>
                        <FaHeart className="text-cyan-400 animate-pulse" size={14} />
                        <span className="hidden sm:inline">and React</span>
                    </div>

                    {/* Right side - social links */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/mmsalmanfaris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/mmsalmanfaris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:mmsalmanfaaris01@gmail.com"
                            className="p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30 transition-all duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
