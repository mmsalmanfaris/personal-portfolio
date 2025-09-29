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
            image: "/event/seventh_event.jpg"
        },
        {
            title: "Azure & GitHub (DevOps)",
            role: "Workshop",
            date: "June 2025",
            image: "/event/sixth_event.jpeg"
        },
        {
            title: "Azure Services and Business Models",
            role: "Workshop",
            date: "March 2025",
            image: "/event/fifth_event.jpg"
        },
        {
            title: "How to become a MLSA",
            role: "Hands-on Lab",
            date: "December 2024",
            image: "/event/fourth_event.jpg"
        },
        {
            title: "Git, GitHub and Azure Static App",
            role: "Hands-on Lab",
            date: "August 2024",
            image: "/event/third_event.jpg"
        },
        {
            title: "Global Azure Sri Lanka",
            role: "Workshop",
            date: "May 2024",
            image: "/event/second_event.jpeg"
        },
        {
            title: "MLSA Introduction and Journey",
            role: "Tech Talk",
            date: "November 2023",
            image: "/event/first_event.jpeg"
        },
    ];

    return (
        <section id="events" className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center md:text-left">
                    Events I Conducted
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    autoplay={{ delay: 2000 }}
                    loop
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {eventsData.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                                {/* Event Image */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover"
                                />

                                {/* Event Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-cyan-400">{event.role}</p>
                                        <p className="text-xs text-gray-400">{event.date}</p>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white py-2">
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
