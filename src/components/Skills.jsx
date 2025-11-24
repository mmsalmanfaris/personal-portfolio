// Skills.jsx - Premium theme-aware version
import { FaPython, FaDocker, FaAws, FaGitAlt, FaLinux, FaJenkins, FaNodeJs } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiAnsible } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Linux", icon: FaLinux, color: "text-yellow-600 dark:text-yellow-400" },
        { name: "Docker", icon: FaDocker, color: "text-blue-600 dark:text-blue-400" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-700 dark:text-blue-500" },
        { name: "AWS", icon: FaAws, color: "text-orange-600 dark:text-orange-400" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-600 dark:text-purple-500" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600 dark:text-orange-500" },
        { name: "Ansible", icon: SiAnsible, color: "text-red-600 dark:text-red-500" },
        { name: "Jenkins", icon: FaJenkins, color: "text-red-600 dark:text-red-400" },
        { name: "Python", icon: FaPython, color: "text-yellow-600 dark:text-yellow-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600 dark:text-green-500" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-orange-600 dark:text-orange-400" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-600 dark:text-orange-500" },
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

                {/* Grid with lines between items (using gap-px and background color) */}
                <div className="bg-gray-200 dark:bg-slate-800 rounded-2xl overflow-hidden gap-[1px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-200 dark:border-slate-800">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="relative p-8 bg-theme-primary flex flex-col items-center justify-center gap-4"
                        >
                            <div className={`text-4xl ${skill.color} drop-shadow-3xl`}>
                                <skill.icon />
                            </div>
                            <span className="text-theme-secondary font-medium text-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
