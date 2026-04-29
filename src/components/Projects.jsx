import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            name: "DevSecOps CI/CD Pipeline",
            description: "Automated release pipeline with security checks, containerized delivery, and repeatable deployment flow.",
            tech: ["GitHub Actions", "Docker", "AWS", "ArgoCD"],
            github: "https://github.com/mmsalmanfaris/DevSecOps-GitHubAction-Pipeline",
            image: "/projects/devsecops.svg",
        },
        {
            name: "E-Commerce Deployment",
            description: "Production-style Kubernetes deployment for 12 microservices with Ingress and Route 53 custom domain setup.",
            tech: ["K8s", "ArgoCD", "Terraform", "Docker", "AWS", "Route53"],
            github: "https://github.com/mmsalmanfaris/devops-ecommerce-deployment",
            image: "/projects/devops.jpeg",
        },
        {
            name: "Automated Parking System",
            description: "Real-time smart parking platform with detection, control automation, and a full application interface.",
            tech: ["FastAPI", "ESP32", "React", "Firebase", "OpenCV"],
            github: "https://github.com/mmsalmanfaris/Smart-Parking-System",
            image: "/projects/parking.png",
        },
        {
            name: "Linux Resource Monitor",
            description: "One-command monitoring tool for real-time Linux system metrics and operational visibility.",
            tech: ["FastAPI", "React", "Tailwind", "Psutil", "Scripting"],
            github: "https://github.com/mmsalmanfaris/Linux-Resource-Monitor",
            image: "/projects/monitor.png",
        },
        {
            name: "Phone Cloud",
            description: "Android-powered file sharing server using Ubuntu, Tailscale networking, and GitHub automation.",
            tech: ["Proot", "Tailscale", "Termux", "SSH", "Bash"],
            github: "https://github.com/mmsalmanfaris/Phone-Cloud",
            image: "/projects/phone.png",
        },
        {
            name: "Gas Distribution System",
            description: "Workflow management system for controlled distribution, user coordination, SMS, and QR-based operations.",
            tech: ["PHP", "Firebase", "MySQL", "SMS", "React Native"],
            github: "https://github.com/mmsalmanfaris/Gas-Distribution-Management",
            image: "/projects/gas.png",
        },
    ];

    return (
        <section id="projects" className="section-shell bg-theme-primary">
            <div className="section-container">
                <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
                    <div>
                        <p className="section-kicker mb-4">Selected Work</p>
                        <h2 className="section-title">Built for delivery.</h2>
                    </div>
                    <p className="section-copy max-w-2xl md:justify-self-end">
                        Practical systems across cloud deployment, automation, monitoring, and full-stack operational workflows.
                    </p>
                </div>

                <div className="grid gap-px overflow-hidden border border-theme bg-[rgb(var(--border-color))] md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.name} className="group flex min-h-full flex-col bg-theme-primary">
                            <div className="relative aspect-[16/10] overflow-hidden bg-theme-secondary">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-5 flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-semibold leading-tight text-theme-primary">{project.name}</h3>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} GitHub repository`}
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-theme text-theme-secondary transition-colors hover:border-theme-primary hover:text-theme-primary"
                                    >
                                        <FaGithub size={17} />
                                    </a>
                                </div>
                                <p className="section-copy mb-6 text-sm">{project.description}</p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-tertiary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
