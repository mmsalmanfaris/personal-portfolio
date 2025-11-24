// Navbar.jsx
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

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
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl shadow-sm bg-theme-primary/90 border-theme"
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <a href="/" className="flex items-center group">
                        <img
                            src={theme === 'dark' ? "/logo-w.png" : "/logo-b.png"}
                            alt="Site logo"
                            className="h-8 md:h-10 object-contain"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-medium text-sm md:text-base text-theme-secondary hover:text-cyan-500 transition-colors duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-200 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-theme-secondary hover:text-cyan-200 hover:bg-cyan-500/50 transition-all duration-300 hidden md:block"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <FaSun className="w-5 h-5" />
                        ) : (
                            <FaMoon className="w-5 h-5" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Theme Toggle for Mobile */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-theme-secondary hover:text-cyan-200 hover:bg-cyan-500/50 transition-all duration-300"
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
                            className="p-2 rounded-md text-theme-secondary hover:text-theme-primary focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden bg-theme-primary/95 backdrop-blur-xl overflow-hidden transition-all duration-300 border-t border-theme ${isOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col space-y-1 px-4 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 px-4 rounded-lg text-theme-secondary hover:bg-theme-secondary hover:text-cyan-500 transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
