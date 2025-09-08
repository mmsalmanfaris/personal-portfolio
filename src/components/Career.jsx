import { useState } from "react";

export default function Career() {
    const [activeTab, setActiveTab] = useState("certifications");

    const certificationData = [
        {
            title: "Introduction to Linux",
            institution: "The Linux Foundation",
            year: "2025",
            image: "/career/linux-foundation.svg"
        },
        {
            title: "Microsoft Certified: Azure Fundamentals",
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
            title: "Digital Marketing Executive",
            company: "Alpha Health Group",
            period: "May 2021 – 2022 Jun",
            image: "/career/alpha.svg"
        }
    ];


    const tabs = {
        certifications: certificationData,
        education: educationData,
        experience: experienceData,
    };

    const data = tabs[activeTab];

    return (
        <section
            id="career"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-2xl mx-auto">
                {/* Heading with Tabs */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
                        Career Journey
                    </h2>
                    <div className="flex justify-center gap-8 border-b border-gray-700 pb-2">
                        {["certifications", "education", "experience"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 font-semibold transition text-lg ${activeTab === tab
                                    ? "text-cyan-400 border-b-2 border-cyan-400"
                                    : "text-gray-400 hover:text-cyan-300"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-cyan-500 pl-6 space-y-5">
                    {data.map((item, index) => (
                        <div key={index} className="relative flex items-start gap-4">
                            {/* Timeline Dot */}
                            <span className="absolute -left-3 top-3 w-5 h-5 bg-cyan-500 rounded-full border-2 border-gray-900"></span>

                            {/* Card */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition flex items-center gap-4 w-full">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-25 h-25 object-contain rounded-lg bg-white p-1 shadow-sm"
                                />

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-cyan-400">
                                        {item.institution || item.company}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {item.year || item.period}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
