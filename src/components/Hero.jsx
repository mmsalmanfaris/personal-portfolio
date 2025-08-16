// Hero.jsx
export default function Hero() {
    return (
        <section
            id="home"
            className="bg-gray-900 text-white min-h-screen flex items-center"
        >
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-10">
                {/* Left: Text */}
                <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">
                        Hi, I’m Salman Faris
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl mb-6">
                        I’m a <span className="text-white font-semibold">DevOps Engineer & SRE</span>
                        who builds scalable, automated, and resilient cloud systems.
                        Passionate about CI/CD, Kubernetes, Terraform, and cloud automation.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg transition duration-200"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf" // Replace with your resume path
                            target="_blank"
                            className="border border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-400 font-semibold py-3 px-6 rounded-lg transition duration-200"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>

                {/* Right: Illustration / Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/profile.jpg" // Replace with your image or illustration
                        alt="DevOps Illustration"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
