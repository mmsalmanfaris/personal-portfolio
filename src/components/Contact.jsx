// Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Contact Me
                </h2>
                <p className="text-gray-300 mb-12">
                    Have a project in mind, want to collaborate, or just say hello?
                    Fill out the form below or book a call through Calendly.
                </p>

                {/* Layout: Form + Calendly side by side on large screens */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <form
                        action=""
                        method="POST"
                        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full"
                    >
                        <div className="mb-4 text-left">
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                required
                                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4 text-left">
                            <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+94 76 123 4567"
                                required
                                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="mb-4 text-left">
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Calendly Widget (hidden on mobile) */}
                    <div className="w-full hidden lg:block">
                        <div
                            className="calendly-inline-widget rounded-lg shadow-lg"
                            data-url="https://calendly.com/mmsalmanfaaris01/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                            style={{ minWidth: "320px", height: "550px" }}
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
