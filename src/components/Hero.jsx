// Hero.jsx
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="bg-gray-900 text-white flex items-center py-30"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6 sm:px-12 lg:px-16">
                {/* Left: Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
                        Hi, I’m Salman Faris
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8">
                        I’m a DevOps Engineer & SRE
                        who builds scalable, automated, and resilient cloud systems.
                        Passionate about delivering reliable operations and cloud solutions.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-400 font-semibold py-3 px-6 rounded-lg transition duration-200"
                        >
                            Download Resume
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-cyan-400 text-2xl">
                            <a
                                href="https://www.linkedin.com/in/mmsalmanfaris/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-200 border px-2 py-3 rounded-lg"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/mmsalmanfaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-200 border px-2 py-3 rounded-lg"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.facebook.com/mmsalmanfaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-200 border px-2 py-3 rounded-lg"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end ">
                    <img
                        src="/profile.webp"
                        alt="MM Salman Faris"
                        className="w-70 sm:w-64 md:w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
