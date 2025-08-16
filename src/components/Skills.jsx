import { FaDocker, FaAws, FaGithub, FaPython } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiAnsible } from "react-icons/si";
import { VscAzure, VscTerminalLinux } from "react-icons/vsc";
import { LiaJenkins } from "react-icons/lia";


export default function Skills() {
    const skills = [
        { name: "Linux", level: "Advanced", icon: <VscTerminalLinux className="text-white w-10 h-10" /> },
        { name: "Python", level: "Advanced", icon: <FaPython className="text-white w-10 h-10" /> },
        { name: "Docker", level: "Expert", icon: <FaDocker className="text-white w-10 h-10" /> },
        { name: "Kubernetes", level: "Advanced", icon: <SiKubernetes className="text-white w-10 h-10" /> },
        { name: "AWS Cloud", level: "Advanced", icon: <FaAws className="text-white w-10 h-10" /> },
        { name: "Azure Cloud", level: "Intermediate", icon: <VscAzure className="text-white w-10 h-10" /> },
        { name: "Terraform", level: "Advanced", icon: <SiTerraform className="text-white w-10 h-10" /> },
        { name: "Jenkins", level: "Advanced", icon: <LiaJenkins className="text-white w-10 h-10" /> },
        { name: "Ansible", level: "Intermediate", icon: <SiAnsible className="text-white w-10 h-10" /> },
        { name: "Prometheus & Grafana", level: "Intermediate", icon: <SiPrometheus className="text-white w-10 h-10" /> },
    ];

    return (
        <section
            id="skills"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-lg shadow transition-transform transform hover:shadow-white hover:border-1 duration-300 flex flex-col items-center"
                        >
                            {skill.icon}
                            <p className="font-semibold text-white mt-2 mb-1">{skill.name}</p>
                            {/* <p className="text-sm text-gray-400">{skill.level}</p> */}
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
