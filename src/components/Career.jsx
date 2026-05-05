import { useState } from "react";

export default function Career() {
    const [activeTab, setActiveTab] = useState("experience");

    const certificationData = [
        { title: "Microsoft Security, Compliance", institution: "Microsoft", year: "2026", image: "/career/microsoft-security.svg" },
        { title: "FinOps Certified Practitioner", institution: "FinOps Foundation", year: "2025 - 2027", image: "/career/finops-practitioner.svg" },
        { title: "Introduction to Linux", institution: "The Linux Foundation", year: "2025", image: "/career/linux-foundation.svg" },
        { title: "Microsoft Azure Fundamentals", institution: "Microsoft", year: "2025", image: "/career/azure-fundamental.svg" },
        { title: "Github Foundation", institution: "Github", year: "2024", image: "/career/github-foundation.svg" },
        { title: "Google Cyber Security Foundation", institution: "Google", year: "2023", image: "/career/google-cybersecurity.svg" },
    ];

    const educationData = [
        { title: "BEng in Software Engineering", institution: "London Metropolitan University", year: "2023 Jan - 2025 Aug", image: "/career/lmu.svg" },
        { title: "Bachelor of Arts", institution: "South Eastern University of Sri Lanka", year: "Oct 2022 - Drop Out", image: "/career/seusl.svg" },
    ];

    const experienceData = [
        { title: "Associate Cloud DevOps Engineer", company: "QuickMan", period: "Apr 2026 - Present", image: "/career/quickman.svg" },
        { title: "Intern Cloud DevOps Engineer", company: "QuickMan", period: "Oct 2025 - Mar 2026", image: "/career/quickman.svg" },
        { title: "Web Developer", company: "ASRL General Trading UAE", period: "Aug 2024 - Aug 2025", image: "/career/asrl-trading.svg" },
        { title: "Digital Marketing Executive", company: "Alpha Health Group", period: "May 2021 - Jun 2022", image: "/career/alpha.svg" },
    ];

    const tabs = {
        experience: experienceData,
        certification: certificationData,
        education: educationData,
    };

    return (
        <section id="career" className="section-shell border-y border-theme bg-theme-secondary">
            <div className="section-container">
                <div className="mb-12 grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
                    <div>
                        <p className="section-kicker mb-4">Career</p>
                        <h2 className="section-title">A practical growth path.</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {Object.keys(tabs).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`premium-button ${activeTab === tab ? "premium-button-primary" : "premium-button-secondary"}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="border-t border-theme">
                    {tabs[activeTab].map((item, index) => (
                        <article key={`${item.title}-${index}`} className="grid gap-5 border-b border-theme py-7 md:grid-cols-[14rem_minmax(0,1fr)_5rem] md:items-center">
                            <div className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-theme-tertiary">
                                {item.year || item.period}
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="group flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-theme bg-white p-2 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                                    <img src={item.image} alt="" className="h-full w-full object-contain grayscale transition duration-300 group-hover:grayscale-0" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-theme-primary">{item.title}</h3>
                                    <p className="mt-1 text-theme-secondary">{item.institution || item.company}</p>
                                </div>
                            </div>
                            <div className="hidden text-right text-3xl font-bold text-theme-tertiary md:block">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
