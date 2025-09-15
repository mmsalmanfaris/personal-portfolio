import { FaDocker, FaAws, FaGithub, FaPython } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiAnsible } from "react-icons/si";
import { VscAzure, VscTerminalLinux } from "react-icons/vsc";
import { LiaJenkins } from "react-icons/lia";


export default function Skills() {
    const skills = [
        { name: "Linux", icon: <VscTerminalLinux className="w-10 h-10" /> },
        { name: "Python", icon: <FaPython className="w-10 h-10" /> },
        { name: "Docker", icon: <FaDocker className="w-10 h-10" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-10 h-10" /> },
        { name: "AWS Cloud", icon: <FaAws className="w-10 h-10" /> },
        { name: "Azure Cloud", icon: <VscAzure className="w-10 h-10" /> },
        { name: "Terraform", icon: <SiTerraform className="w-10 h-10" /> },
        { name: "Jenkins", icon: <LiaJenkins className="w-10 h-10" /> },
        { name: "Ansible", icon: <SiAnsible className="w-10 h-10" /> },
        { name: "Prometheus Stack", icon: <SiPrometheus className="w-10 h-10" /> },
    ];


    return (
        <section
            id="skills"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Tools & Technologies
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
