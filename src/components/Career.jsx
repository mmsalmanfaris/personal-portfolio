import { useState } from "react";

export default function Career() {
    const [activeTab, setActiveTab] = useState("certifications");

    const certificationData = [
        {
            title: "FinOps Certified Practitioner",
            institution: "FinOps Foundation",
            year: "2025 - 2027",
            image: "/career/finops-practitioner.svg"
        },
        {
            title: "Introduction to Linux",
            institution: "The Linux Foundation",
            year: "2025",
            image: "/career/linux-foundation.svg"
        },
        {
            title: "Microsoft Azure Fundamentals",
            institution: "Microsoft",
            year: "2025",
            image: "/career/azure-fundamental.svg"
        },
        {
            title: "Github Foundation",
            institution: "Github",
            year: "2024",
            image: "/career/github-foundation.svg"
        },
        {
            title: "Google Cyber Security Foundation",
            institution: "Google",
            year: "2023",
            image: "/career/google-cybersecurity.svg"
        },
    ];

    const educationData = [
        {
            title: "BEng in Software Engineering",
            institution: "London Metropolitan University",
            year: "2023 Jan - 2025 Aug",
            image: "/career/lmu.svg"
        },
        {
            title: "Bachelor of Arts",
            institution: "South Eastern University fo Sri Lanka",
            year: "Oct 2022 - Drop Out",
            image: "/career/seusl.svg"
        }
    ];

    const experienceData = [
        {
            title: "Intern DevOps Engineer",
            company: "QuickMan",
            period: "Oct 2025 – Present",
            image: "/career/quickman.svg"
        },
        {
            title: "Freelance Developer",
            company: "Digital Partner UAE",
            period: "Aug 2022 – 2025 Aug",
            image: "/career/dp.svg"
        },
        {
            title: "Digital Marketing Executive",
            company: "Alpha Health Group",
            period: "May 2021 – 2022 Jun",
            image: "/career/alpha.svg"
        }
    ];

    const tabs = {
        certifications: certificationData,
        experience: experienceData,
        education: educationData,
    };

    const data = tabs[activeTab];

    return (
        <section id="career" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Career Journey
                        </span>
                    </h2>
                    <div className="flex justify-center gap-8 border-b border-gray-700 pb-2">
                        {["certifications", "experience", "education"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                                        : "bg-slate-900/50 text-slate-400 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative space-y-8">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 transform md:-translate-x-1/2"></div>

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } gap-8`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 transform md:-translate-x-1/2 shadow-lg shadow-cyan-500/50 z-10"></div>

                            {/* Spacer for desktop */}
                            <div className="hidden md:block flex-1"></div>

                            {/* Card */}
                            <div className="flex-1 ml-8 md:ml-0 group">
                                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                                    <div className="flex items-start gap-4">
                                        {/* Image */}
                                        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl p-2 shadow-md">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-medium text-cyan-400 mb-1">
                                                {item.institution || item.company}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {item.year || item.period}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
