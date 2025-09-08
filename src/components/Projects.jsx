// Projects.jsx
export default function Projects() {
    const projects = [
        {
            name: "DevSecOps CI/CD Pipeline",
            description:
                "Designed and implemented a complete CI/CD pipeline with security practices for a NodeJs application.",
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
                "Built a cloud-connected IoT parking system using FastAPI, ESP32, and Kubernetes with automated scaling and monitoring.",
            tech: ["FastAPI", "ESP32", "Kubernetes", "Docker"],
            github: "https://github.com/mmsalmanfaris/Automated-Parking-System",
            image: "/projects/parking.webp",
        },
        {
            name: "Cloud Resource Monitor",
            description:
                "Developed a full-stack system monitoring tool with FastAPI backend and React frontend for real-time system metrics.",
            tech: ["FastAPI", "React", "Tailwind CSS", "Prometheus"],
            github: "https://github.com/mmsalmanfaris/System-Monitor",
            image: "/projects/monitor.webp",
        },
        {
            name: "Phone Cloud",
            description:
                "Turned an Android phone into a file-sharing cloud server with Ubuntu, Tailscale, and GitHub automation.",
            tech: ["Ubuntu", "Tailscale", "GitHub", "SSH"],
            github: "https://github.com/mmsalmanfaris/Phone-Cloud",
            image: "/projects/phonecloud.webp",
        },
        {
            name: "Portfolio Website",
            description:
                "Built a modern, responsive portfolio using React, Tailwind CSS, and shadcn UI to showcase DevOps projects.",
            tech: ["React", "Tailwind CSS", "shadcn/ui"],
            github: "https://github.com/mmsalmanfaris/portfolio",
            image: "/projects/portfolio.webp",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200 flex flex-col justify-between"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />

                            {/* Project Info */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 text-left">
                                    {project.name}
                                </h3>
                                <p className="text-gray-300 mb-4 text-left">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* GitHub Link */}
                            <div className="flex mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 text-sm inline-flex items-center group"
                                >
                                    GitHub
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform transform group-hover:translate-x-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
