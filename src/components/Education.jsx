import { useState } from "react";

export default function Career() {
    const [activeTab, setActiveTab] = useState("education");

    const educationData = [
        {
            title: "BSc in Computer Science",
            institution: "University of Colombo",
            year: "2020 - 2023",
            details: [
                "Focused on Cloud Computing, DevOps, and Software Engineering",
                "Graduated with First Class Honors",
            ],
        },
    ];

    const experienceData = [
        {
            title: "DevOps Engineer",
            company: "Tech Solutions Pvt Ltd",
            period: "Jan 2023 – Present",
            details: [
                "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%.",
                "Managed Kubernetes clusters on AWS EKS with automated scaling and monitoring.",
                "Created Infrastructure as Code with Terraform for multi-cloud deployments.",
            ],
        },
        {
            title: "Cloud & Infrastructure Intern",
            company: "CloudX Labs",
            period: "Aug 2022 – Dec 2022",
            details: [
                "Worked on containerizing microservices using Docker.",
                "Automated server provisioning using Ansible.",
                "Monitored systems with Prometheus and Grafana.",
            ],
        },
    ];

    const certificationData = [
        {
            title: "Certified Kubernetes Administrator (CKA)",
            institution: "The Linux Foundation",
            year: "2024",
            details: [
                "Hands-on expertise in Kubernetes deployment, scaling, and security",
            ],
        },
        {
            title: "AWS Certified Solutions Architect – Associate",
            institution: "Amazon Web Services",
            year: "2023",
            details: [
                "Specialized in designing highly available, cost-efficient cloud architectures",
            ],
        },
    ];

    const tabs = {
        education: educationData,
        experience: experienceData,
        certifications: certificationData,
    };

    const data = tabs[activeTab];

    return (
        <section
            id="career"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-4xl mx-auto">
                {/* Heading with Tabs */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
                        Career Journey
                    </h2>
                    <div className="flex justify-center gap-8 border-b border-gray-700 pb-2">
                        {["education", "experience", "certifications"].map((tab) => (
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
                        <div key={index} className="relative">
                            {/* Timeline Dot */}
                            <span className="absolute -left-3 top-1 w-5 h-5 bg-cyan-500 rounded-full border-2 border-gray-900"></span>

                            {/* Card */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-cyan-400">
                                    {item.institution || item.company}
                                </p>
                                <p className="text-xs text-gray-400 mb-3">
                                    {item.year || item.period}
                                </p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {item.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
