import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Events() {
    const eventsData = [
        { title: "Gap between Industry and Academia", role: "Workshop", date: "Nov 2025", image: "/event/eight_event.webp" },
        { title: "Cloud Computing & Developer Tools", role: "Workshop", date: "Sep 2025", image: "/event/seventh_event.webp" },
        { title: "Microsoft Azure & GitHub Workflows", role: "Workshop", date: "June 2025", image: "/event/sixth_event.webp" },
        { title: "Azure Services and Business Models", role: "Workshop", date: "March 2025", image: "/event/fifth_event.webp" },
        { title: "How to become a MLSA", role: "Hands-on Lab", date: "December 2024", image: "/event/fourth_event.webp" },
        { title: "Git, GitHub and Azure Static App", role: "Hands-on Lab", date: "August 2024", image: "/event/third_event.webp" },
        { title: "Global Azure Day in Sri Lanka", role: "Workshop", date: "May 2024", image: "/event/second_event.webp" },
        { title: "MLSA Introduction and Journey", role: "Tech Talk", date: "November 2023", image: "/event/first_event.webp" },
    ];

    return (
        <section id="events" className="section-shell bg-theme-primary">
            <div className="section-container">
                <div className="mb-12 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
                    <div>
                        <p className="section-kicker mb-4">Community</p>
                        <h2 className="section-title">Sessions and labs.</h2>
                    </div>
                    <p className="section-copy max-w-2xl md:justify-self-end">
                        Workshops and hands-on sessions delivered around cloud platforms, developer tools, and career pathways.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={1}
                    autoplay={{ delay: 3200, disableOnInteraction: false }}
                    loop
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        700: { slidesPerView: 2 },
                        1100: { slidesPerView: 3 },
                    }}
                    className="border border-theme bg-[rgb(var(--border-color))]"
                >
                    {eventsData.map((event) => (
                        <SwiperSlide key={`${event.title}-${event.date}`}>
                            <article className="h-full bg-theme-primary">
                                <div className="aspect-[4/3] overflow-hidden bg-theme-secondary">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-full w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-theme-tertiary">
                                        <span>{event.role}</span>
                                        <span>{event.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold leading-tight text-theme-primary">{event.title}</h3>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
