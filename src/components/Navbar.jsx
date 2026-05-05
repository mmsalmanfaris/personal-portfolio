// Navbar.jsx
import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/useTheme";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Career", href: "#career" },
        { name: "Events", href: "#events" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 border-b border-theme bg-theme-primary/88 backdrop-blur-xl"
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
                        <img
                            src={theme === 'dark' ? "/logo-w.png" : "/logo-b.png"}
                            alt="Site logo"
                            className="h-7 object-contain"
                        />
                    </a>

                    <div className="hidden md:flex items-center bg-theme-secondary/70 px-2 py-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="rounded-full px-4 py-2 text-sm font-medium text-theme-secondary transition-colors duration-200 hover:bg-theme-primary hover:text-theme-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-theme text-theme-secondary transition-colors hover:border-theme-primary hover:bg-theme-secondary hover:text-theme-primary"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <FaSun className="w-5 h-5" />
                        ) : (
                            <FaMoon className="w-5 h-5" />
                        )}
                    </button>

                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-theme text-theme-secondary"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? (
                                <FaSun className="w-5 h-5" />
                            ) : (
                                <FaMoon className="w-5 h-5" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-theme text-theme-secondary"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden border-t border-theme bg-theme-primary transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col px-5 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="border-b border-theme py-4 text-sm font-medium uppercase tracking-[0.16em] text-theme-secondary last:border-b-0"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
