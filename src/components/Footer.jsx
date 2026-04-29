import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-theme bg-theme-primary">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
                <div>
                    <p className="text-sm font-semibold text-theme-primary">MM Salman Faris</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-theme-tertiary">
                        Cloud DevOps Portfolio / {year}
                    </p>
                </div>

                <div className="flex gap-3">
                    <a href="https://github.com/mmsalmanfaris" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-theme text-theme-secondary hover:text-theme-primary" aria-label="GitHub">
                        <FaGithub size={17} />
                    </a>
                    <a href="https://linkedin.com/in/mmsalmanfaris" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-theme text-theme-secondary hover:text-theme-primary" aria-label="LinkedIn">
                        <FaLinkedin size={17} />
                    </a>
                    <a href="mailto:mmsalmanfaaris01@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-theme text-theme-secondary hover:text-theme-primary" aria-label="Email">
                        <FaEnvelope size={17} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
