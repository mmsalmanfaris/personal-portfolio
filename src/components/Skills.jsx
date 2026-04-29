import { FaAws, FaDocker, FaGitAlt, FaJenkins, FaLinux, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAnsible, SiGrafana, SiKubernetes, SiPrometheus, SiTerraform } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Linux", icon: FaLinux },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: FaAws },
        { name: "Terraform", icon: SiTerraform },
        { name: "Git", icon: FaGitAlt },
        { name: "Ansible", icon: SiAnsible },
        { name: "Jenkins", icon: FaJenkins },
        { name: "Python", icon: FaPython },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Prometheus", icon: SiPrometheus },
        { name: "Grafana", icon: SiGrafana },
    ];

    return (
        <section id="skills" className="section-shell border-y border-theme bg-theme-secondary">
            <div className="section-container">
                <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
                    <div>
                        <p className="section-kicker mb-4">Capabilities</p>
                        <h2 className="section-title">Tools for stable systems.</h2>
                    </div>
                    <p className="section-copy max-w-2xl md:justify-self-end">
                        A focused stack for infrastructure automation, release engineering, observability, and cloud operations.
                    </p>
                </div>

                <div className="grid border-l border-t border-theme sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex min-h-36 items-end justify-between border-b border-r border-theme bg-theme-primary p-5 transition-colors hover:bg-theme-secondary"
                        >
                            <span className="text-lg font-semibold text-theme-primary">{skill.name}</span>
                            <skill.icon className="text-3xl text-theme-tertiary transition-colors group-hover:text-theme-primary" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
