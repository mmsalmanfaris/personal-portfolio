// Navbar.jsx
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
            className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <a href="/" className="flex items-center">
                        <img
                            src="/logo.png"
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
                                className="font-medium text-sm md:text-base hover:text-cyan-400 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
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

            {/* Mobile Menu - animated height for smooth open/close */}
            <div
                id="mobile-menu"
                className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72 py-3" : "max-h-0 py-0"
                    }`}
            >
                <div className="flex flex-col space-y-1 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-2 rounded hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-150"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
