import { FaDocker, FaAws, FaGithub, FaPython } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiAnsible } from "react-icons/si";
import { VscAzure, VscTerminalLinux } from "react-icons/vsc";
import { LiaJenkins } from "react-icons/lia";


export default function Skills() {
    const skills = [
        { name: "Linux", color: "#FCC624", icon: <VscTerminalLinux className="w-10 h-10" /> },
        { name: "Python", color: "#3776AB", icon: <FaPython className="w-10 h-10" /> },
        { name: "Docker", color: "#2496ED", icon: <FaDocker className="w-10 h-10" /> },
        { name: "Kubernetes", color: "#326CE5", icon: <SiKubernetes className="w-10 h-10" /> },
        { name: "AWS Cloud", color: "#FF9900", icon: <FaAws className="w-10 h-10" /> },
        { name: "Azure Cloud", color: "#0078D4", icon: <VscAzure className="w-10 h-10" /> },
        { name: "Terraform", color: "#7B42BC", icon: <SiTerraform className="w-10 h-10" /> },
        { name: "Jenkins", color: "#D24939", icon: <LiaJenkins className="w-10 h-10" /> },
        { name: "Ansible", color: "#EE0000", icon: <SiAnsible className="w-10 h-10" /> },
        { name: "Prometheus & Grafana", color: "#E6522C", icon: <SiPrometheus className="w-10 h-10" /> },
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
                            className="bg-gray-800 p-4 rounded-lg shadow transition-transform transform hover:scale-105 duration-300 flex flex-col items-center"
                        >
                            <div style={{ color: skill.color }} className="w-10 h-10">
                                {skill.icon}
                            </div>
                            <p className="font-semibold text-white mt-2 mb-1">{skill.name}</p>
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
}
