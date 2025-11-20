// Events.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
    const eventsData = [
        {
            title: "Cloud Computing & Developer Tools",
            role: "Workshop",
            date: "Sep 2025",
            image: "/event/seventh_event.webp"
        },
        {
            title: "Azure & GitHub (DevOps)",
            role: "Workshop",
            date: "June 2025",
            image: "/event/sixth_event.webp"
        },
        {
            title: "Azure Services and Business Models",
            role: "Workshop",
            date: "March 2025",
            image: "/event/fifth_event.webp"
        },
        {
            title: "How to become a MLSA",
            role: "Hands-on Lab",
            date: "December 2024",
            image: "/event/fourth_event.webp"
        },
        {
            title: "Git, GitHub and Azure Static App",
            role: "Hands-on Lab",
            date: "August 2024",
            image: "/event/third_event.webp"
        },
        {
            title: "Global Azure Sri Lanka",
            role: "Workshop",
            date: "May 2024",
            image: "/event/second_event.webp"
        },
        {
            title: "MLSA Introduction and Journey",
            role: "Tech Talk",
            date: "November 2023",
            image: "/event/first_event.webp"
        },
    ];

    return (
        <section id="events" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Events I Conducted
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Workshops, hands-on labs, and tech talks I've delivered to share knowledge with the community.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="pb-4"
                >
                    {eventsData.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 h-full">
                                {/* Event Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Event Content */}
                                <div className="p-6 relative z-20">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
                                            {event.role}
                                        </span>
                                        <span className="text-xs text-slate-500">{event.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
