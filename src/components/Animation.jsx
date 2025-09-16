// CICDWorkflow.jsx
import { FaCode, FaDocker, FaVial } from "react-icons/fa";
import { SiKubernetes, SiPrometheus } from "react-icons/si";

export default function CICDWorkflow() {
    const stages = [
        { name: "Code", icon: <FaCode className="w-10 h-10" /> },
        { name: "Test", icon: <FaVial className="w-10 h-10" /> },
        { name: "Build", icon: <FaDocker className="w-10 h-10" /> },
        { name: "Deploy", icon: <SiKubernetes className="w-10 h-10" /> },
        { name: "Monitor", icon: <SiPrometheus className="w-10 h-10" /> },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
            {stages.map((stage, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center relative bg-gray-900"
                >
                    <div className="relative w-20 h-20">
                        <svg className="w-20 h-20">
                            {/* Background Circle */}
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="white"
                                strokeWidth="4"
                                fill="transparent"
                                className="opacity-20"
                            />
                            {/* Animated Circle */}
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="white"
                                strokeWidth="3"
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
                        <>
                            <div
                                className="hidden md:block absolute top-1/2 left-full w-16 h-1 origin-left"
                                style={{
                                    backgroundColor: "transparent",
                                    animation: `fillLine 1s forwards ${(index + 1) * 0.4}s`,
                                }}
                            />
                            <div
                                className="block md:hidden absolute top-20 left-1/2 w-1 h-16 origin-top"
                                style={{
                                    backgroundColor: "transparent",
                                    animation: `fillLine 1s forwards ${(index + 1) * 0.4}s`,
                                }}
                            />
                        </>
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

                /* Mobile vertical line animation */
                @media (max-width: 767px) {
                    @keyframes fillLine {
                        from {
                            background-color: transparent;
                            transform: scaleY(0);
                        }
                        to {
                            background-color: white;
                            transform: scaleY(1);
                        }
                    }
                }
            `}</style>
        </div>
    );
}
