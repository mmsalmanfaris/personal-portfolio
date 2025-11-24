// Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative bg-theme-primary">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-theme-secondary max-w-2xl mx-auto">
                        Have a project in mind, want to collaborate, or just say hello?
                        Fill out the form below or book a call through Calendly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="card-theme border border-theme p-8 rounded-2xl shadow-xl">
                        <form action="" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-theme-secondary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full Name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-theme-tertiary border border-theme text-theme-primary placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-theme-secondary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@domain.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-theme-tertiary border border-theme text-theme-primary placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-theme-secondary mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+1 (555) 000-0000"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-theme-tertiary border border-theme text-theme-primary placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-theme-secondary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="How can I help you?"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-theme-tertiary border border-theme text-theme-primary placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Calendly Widget */}
                    <div className="w-full hidden lg:block card-theme border border-theme p-4 rounded-2xl shadow-xl h-full min-h-[600px]">
                        <div
                            className="calendly-inline-widget w-full h-full rounded-xl overflow-hidden"
                            data-url="https://calendly.com/mmsalmanfaaris01/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f172a&text_color=f8fafc&primary_color=06b6d4"
                            style={{ minWidth: "320px", height: "100%" }}
                        ></div>
                        <script
                            type="text/javascript"
                            src="https://assets.calendly.com/assets/external/widget.js"
                            async
                        ></script>
                    </div>
                </div>
            </div>
        </section>
    );
}
