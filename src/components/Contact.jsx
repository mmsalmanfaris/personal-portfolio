import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const links = [
        { label: "Email", href: "mailto:mmsalmanfaris@outlook.com", icon: FaEnvelope },
        { label: "LinkedIn", href: "https://linkedin.com/in/mmsalmanfaris", icon: FaLinkedin },
        { label: "GitHub", href: "https://github.com/mmsalmanfaris", icon: FaGithub },
    ];

    return (
        <section id="contact" className="section-shell border-t border-theme bg-theme-secondary">
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="section-kicker mb-4">Contact</p>
                        <h2 className="section-title mb-6">Let’s build something reliable.</h2>
                        <p className="section-copy">
                            Send a short note about the system, workflow, or cloud challenge you want to improve.
                        </p>
                        <div className="mt-8 grid gap-3">
                            {links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center justify-between border border-theme bg-theme-primary px-5 py-4 text-theme-primary transition-colors hover:bg-theme-secondary"
                                >
                                    <span className="font-semibold">{link.label}</span>
                                    <link.icon className="text-theme-tertiary" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form action="" method="POST" className="grid gap-5 border border-theme bg-theme-primary p-5 sm:p-8">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-theme-secondary">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full border border-theme bg-theme-secondary px-4 py-3 text-theme-primary placeholder:text-theme-tertiary focus:border-theme-primary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-theme-secondary">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-theme bg-theme-secondary px-4 py-3 text-theme-primary placeholder:text-theme-tertiary focus:border-theme-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-theme-secondary">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+94 123456789"
                                className="w-full border border-theme bg-theme-secondary px-4 py-3 text-theme-primary placeholder:text-theme-tertiary focus:border-theme-primary focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-theme-secondary">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me what you want to ship, fix, or automate."
                                required
                                className="w-full resize-none border border-theme bg-theme-secondary px-4 py-3 text-theme-primary placeholder:text-theme-tertiary focus:border-theme-primary focus:outline-none"
                            />
                        </div>

                        <button type="submit" className="premium-button premium-button-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
