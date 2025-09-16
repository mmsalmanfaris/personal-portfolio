// CICDWorkflow.jsx
import { FaCode, FaDocker, FaVial } from "react-icons/fa";
import { SiKubernetes, SiPrometheus } from "react-icons/si";

export default function CICDWorkflow() {
    const stages = [
        { name: "Code", icon: <FaCode className="w-6 h-6 sm:w-10 sm:h-10" /> },
        { name: "Test", icon: <FaVial className="w-6 h-6 sm:w-10 sm:h-10" /> },
        { name: "Build", icon: <FaDocker className="w-6 h-6 sm:w-10 sm:h-10" /> },
        { name: "Deploy", icon: <SiKubernetes className="w-6 h-6 sm:w-10 sm:h-10" /> },
        { name: "Monitor", icon: <SiPrometheus className="w-6 h-6 sm:w-10 sm:h-10" /> },
    ];

    return (
        <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap relative px-2">
            {stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center relative bg-gray-900">
                    <div className="relative w-12 h-12 sm:w-20 sm:h-20">
                        <svg className="w-12 h-12 sm:w-20 sm:h-20 rotate-[0deg]">
                            {/* Background Circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="white"
                                strokeWidth="3"
                                fill="transparent"
                                className="opacity-20"
                            />
                            {/* Animated Circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="white"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="226"
                                strokeDashoffset="226"
                                style={{
                                    animation: `fillCircle 1s forwards ${index * 0.5}s`,
                                }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            {stage.icon}
                        </div>
                    </div>

                    {/* Connector Line */}
                    {index < stages.length - 1 && (
                        <div
                            className="absolute top-1/2 left-full w-8 sm:w-16 h-[2px] origin-left"
                            style={{
                                backgroundColor: "transparent",
                                animation: `fillLine 1s forwards ${(index + 1) * 0.4}s`,
                            }}
                        />
                    )}
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
                        background-color: transparent;
                        transform: scaleX(0);
                    }
                    to {
                        background-color: white;
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </div>
    );
}
