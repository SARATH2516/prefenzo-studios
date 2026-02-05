"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Minus } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Visual Production",
        subtitle: "CINEMATOGRAPHY & PHOTOGRAPHY",
        desc: "End-to-end visual storytelling solutions. We handle every aspect of production to ensure your brand stands out.",
        items: [
            "Commercial & Product Photography",
            "Fashion & High-End Editorials",
            "Corporate Brand Identity",
            "Industrial & Architectural Shoots",
            "Event Coverage & Documentation",
            "360° Virtual Tours"
        ],
        details: [
            { label: "Pre-Production", value: "Concept Development, Scripting, location scouting, casting." },
            { label: "Production", value: "4K/8K Cinema Cameras, Professional Lighting, Drone Operations." },
            { label: "Post-Production", value: "Advanced Color Grading, VFX, Sound Design, Editing." }
        ],
        extra: "From initial concept to final master, we ensure cinematic quality.",
        image: "https://images.unsplash.com/photo-1601056586047-926f0aa98486?q=80&w=1200&auto=format&fit=crop" // Adding a production image
    },
    {
        id: "02",
        title: "Content Creation",
        subtitle: "GRAPHIC DESIGN & MOTION",
        desc: "We create content that represents your brand clearly and professionally.",
        items: [
            "Short-form videos & reels",
            "Promotional and branding videos",
            "Digital creatives and posters",
            "Campaign-based content",
            "Brand communication visuals"
        ],
        image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Social Media",
        subtitle: "MANAGEMENT & STRATEGY",
        desc: "We manage social media platforms to ensure consistent and professional presence.",
        items: [
            "Content planning and scheduling",
            "Posting and engagement",
            "Brand-consistent communication",
            "Platform optimization"
        ],
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Digital Marketing",
        subtitle: "STRATEGIC GROWTH & ADS",
        desc: "Creating content is only effective when it reaches the right audience.",
        items: [
            "Digital marketing campaigns",
            "Social media advertising",
            "Local and regional promotions",
            "Performance-focused paid ads"
        ],
        extra: "Our goal is to convert digital visibility into real enquiries and growth.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "05",
        title: "Audience Reach",
        subtitle: "VISIBILITY & ENGAGEMENT",
        desc: "Strategic maneuvers to expand business visibility and engage with the right demographics.",
        items: [
            "Targeted Audience Analysis",
            "Community Management",
            "Influencer Collaborations",
            "Cross-Platform Growth Strategies"
        ],
        extra: "Building a loyal community around your brand.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" // New image as associated with 'Business/Team'
    },
    {
        id: "06",
        title: "Drone Shoots",
        subtitle: "AERIAL PERSPECTIVES",
        desc: "Breathtaking aerial views captured with precision to give your content a cinematic edge.",
        items: [
            "Real Estate Aerials",
            "Event Drone Coverage",
            "Cinematic FPV Shots",
            "Large Scale Site Surveys"
        ],
        extra: "4K/60fps aerial cinematography with licensed pilots.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen text-black">
            {/* Hero Section */}
            <section className="h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 border-b border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 text-gray-500">What We Do</h2>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] mb-8 md:mb-12 uppercase">
                        Our <br />
                        Expertise
                    </h1>
                    <div className="w-full h-px bg-black/10"></div>
                </motion.div>
            </section>

            {/* Services List */}
            <section className="bg-white">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </section>
        </main>
    );
}

function ServiceCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row border-b border-gray-100 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Content Side */}
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-20 bg-white/95 backdrop-blur-sm lg:bg-transparent">
                <div className="mb-12">
                    <span className="text-xs font-black tracking-[0.2em] uppercase text-gray-400 block mb-4">
                        {service.id} — {service.subtitle}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        {service.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
                        {service.desc}
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6">Capabilities</h3>
                    {service.items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-4 group/item"
                            initial={{ x: 0 }}
                            whileHover={{ x: 10 }}
                        >
                            <Minus className="w-4 h-4 text-gray-300 group-hover/item:text-black transition-colors" />
                            <span className="text-lg text-gray-500 group-hover/item:text-black transition-colors duration-300">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {service.extra && (
                    <div className="p-6 bg-gray-50 border border-gray-100 italic text-gray-500 max-w-md">
                        "{service.extra}"
                    </div>
                )}
            </div>

            {/* Image/Detail Side - Reveal Effect */}
            <div className="lg:w-1/2 h-full min-h-[50vh] flex flex-col justify-center p-12 md:p-20 bg-gray-50 relative">
                {/* Rectangle Shape Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full aspect-video md:aspect-[4/3] mb-12 rounded-lg overflow-hidden shrink-0 shadow-sm"
                >
                    {service.image ? (
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <span className="uppercase tracking-widest text-xs">No Image Available</span>
                        </div>
                    )}

                </motion.div>

                {/* Additional Details (if any) */}
                {service.details && (
                    <div className="grid gap-8">
                        {service.details.map((detail, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (idx * 0.1) }}
                            >
                                <h4 className="text-lg font-medium mb-1 text-black">{detail.label}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{detail.value}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
