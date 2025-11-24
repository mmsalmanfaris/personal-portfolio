// CICDWorkflow.jsx
import { FaCode, FaDocker, FaVial } from "react-icons/fa";
import { SiKubernetes, SiPrometheus } from "react-icons/si";

export default function CICDWorkflow() {
    const stages = [
        { name: "Code", icon: <FaCode className="w-6 h-6 sm:w-15 sm:h-15" /> },
        { name: "Test", icon: <FaVial className="w-6 h-6 sm:w-15 sm:h-15" /> },
        { name: "Build", icon: <FaDocker className="w-6 h-6 sm:w-15 sm:h-15" /> },
        { name: "Deploy", icon: <SiKubernetes className="w-6 h-6 sm:w-15 sm:h-15" /> },
        { name: "Monitor", icon: <SiPrometheus className="w-6 h-6 sm:w-15 sm:h-15" /> },
    ];

    return (
        <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap relative px-2">
            {stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center relative bg-transparent">
                    <div className="relative w-12 h-12 sm:w-27 sm:h-27 text-theme-primary">
                        <svg className="w-12 h-12 sm:w-27 sm:h-27 rotate-[0deg]">
                            {/* Background Circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="transparent"
                                className="opacity-20"
                            />
                            {/* Animated Circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="360"
                                strokeDashoffset="360"
                                style={{
                                    animation: `fillCircle 1s forwards ${index * 0.5}s`,
                                }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-theme-primary">
                            {stage.icon}
                        </div>
                    </div>
                </div>
            ))}

            <style jsx>{`
                @keyframes fillCircle {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes fillLine {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </div>
    );
}
