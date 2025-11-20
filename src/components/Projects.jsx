// Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            name: "DevSecOps CI/CD Pipeline",
            description:
                "An automated pipeline that reduced deployment errors, accelerated release cycles, and enforced security checks.",
            tech: ["GitHub Actions", "Docker", "AWS", "ArgoCD", "K8s", "ghcr.io", "Trivy"],
            github: "https://github.com/mmsalmanfaris/DevSecOps-GitHubAction-Pipeline",
            image: "/projects/devsecops.svg",
        },
        {
            name: "DevOps E-Commerce Deployment",
            description:
                "Deployed a telemetry project with 12 microservices, Kubernetes, Ingress, and AWS Route 53 custom domain setup.",
            tech: ["K8s", "ArgoCD", "Terraform", "Docker", "AWS", "GitHub Action", "Route53"],
            github: "https://github.com/mmsalmanfaris/devops-ecommerce-deployment",
            image: "/projects/devops.jpeg",
        },
        {
            name: "Automated Parking System",
            description:
                "An intelligent parking solution enabling real-time detection and automated control, reducing congestion, improving efficiency.",
            tech: ["FastAPI", "ESP32", "ReactJS", "Firebase", "C++", "Sensor", "Servo", "OpenCV"],
            github: "https://github.com/mmsalmanfaris/Smart-Parking-System",
            image: "/projects/parking.png",
        },
        {
            name: "Linux Resource Monitor",
            description:
                "A full-stack system monitoring tool with a streamlined one-command setup, enabling real-time visualization of system metrics.",
            tech: ["FastAPI", "React", "Tailwind CSS", "Psutil", "Scripting"],
            github: "https://github.com/mmsalmanfaris/Linux-Resource-Monitor",
            image: "/projects/monitor.png",
        },
        {
            name: "Phone Cloud",
            description:
                "Turned an Android phone into a file-sharing cloud server with Ubuntu, Tailscale, and GitHub automation.",
            tech: ["Proot", "Tailscale", "Termux", "SSH", "bash"],
            github: "https://github.com/mmsalmanfaris/Phone-Cloud",
            image: "/projects/phone.png",
        },
        {
            name: "Gas Distribution System",
            description:
                "Designed and implemented a workflow management system to deliver a seamless experience across the users",
            tech: ["Bootstrap", "PHP", "Firebase", "MySQL", "SMS", "QR Code", "React Native"],
            github: "https://github.com/mmsalmanfaris/Gas-Distribution-Management",
            image: "/projects/gas.png",
        },
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of projects demonstrating my expertise in DevOps, Cloud, and Full Stack Development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6 relative z-20">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 4).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                                    >
                                        <FaGithub size={16} />
                                        <span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
