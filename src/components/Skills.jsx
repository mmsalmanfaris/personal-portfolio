// Skills.jsx - Premium theme-aware version
import { FaPython, FaDocker, FaAws, FaGitAlt, FaLinux, FaJenkins, FaNodeJs } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiAnsible } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
        { name: "Docker", icon: FaDocker, color: "text-blue-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
        { name: "AWS", icon: FaAws, color: "text-orange-400" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Ansible", icon: SiAnsible, color: "text-red-500" },
        { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
        { name: "Jenkins", icon: FaJenkins, color: "text-red-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-orange-400" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
    ];

    return (
        <section id="skills" className="py-24 relative bg-theme-secondary">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">
                            Technical Skills
                        </span>
                    </h2>
                    <p className="text-theme-secondary max-w-2xl mx-auto">
                        Technologies I work with to build resilient and scalable infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative p-6 rounded-2xl card-theme card-theme-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center gap-4"
                        >
                            <div className={`text-4xl ${skill.color} drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                <skill.icon />
                            </div>
                            <span className="text-theme-secondary font-medium text-sm group-hover:text-cyan-500 transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
