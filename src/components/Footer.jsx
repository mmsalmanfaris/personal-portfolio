// Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 px-6 sm:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left side */}
                <p className="text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} mmsalmanfaris. All rights reserved.
                </p>

                {/* Right side - social links */}
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-200"
                    >
                        <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-200"
                    >
                        <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                        href="mailto:your@email.com"
                        className="hover:text-cyan-400 transition-colors duration-200"
                    >
                        <i className="fas fa-envelope text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
