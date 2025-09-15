// Projects.jsx
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
        <section
            id="projects"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Projects I worked
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
