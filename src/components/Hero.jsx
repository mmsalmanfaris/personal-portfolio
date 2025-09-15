// Hero.jsx
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="bg-gray-900 text-white min-h-screen flex items-center"
        >
            <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center gap-10">
                {/* Left: Text */}
                <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-8">
                        Hi, I’m Salman Faris
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl mb-8">
                        I’m a <span className="text-white font-semibold">DevOps Engineer & SRE</span>
                        who builds scalable, automated, and resilient cloud systems.
                        Passionate about CI/CD, Kubernetes, Terraform, and cloud automation.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap gap-4">
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
                                href="https://github.com/mmsalmanfaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-200 border px-2 py-3 rounded-lg"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mmsalmanfaris/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-200 border px-2 py-3 rounded-lg"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.facebook.com/mmsalmanfaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-200 border px-2 py-3 rounded-lg"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Right: Illustration / Image */}
                <div className="flex-1 flex justify-end">
                    <img
                        src="/profile.webp"
                        alt="MM Salman Faris Image"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
