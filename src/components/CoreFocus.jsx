"use client";
import { motion } from "framer-motion";
import { Camera, PenTool, Share2, TrendingUp, Users, Plane } from "lucide-react";

const focusAreas = [
    {
        icon: <Camera size={32} />,
        title: "Visual production",
        description: "Photo, video, and cinematic shoots that capture attention.",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <PenTool size={32} />,
        title: "Content creation & design",
        description: "Graphics and videos that communicate your brand message.",
        image: "https://i.pinimg.com/736x/8e/b7/dd/8eb7dd608c85b3562ebe7e72d8189604.jpg"
    },
    {
        icon: <Share2 size={32} />,
        title: "Social media management",
        description: "Consistent presence to build a loyal community.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Digital marketing & ads",
        description: "Strategic promotions to reach your ideal customers.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Users size={32} />,
        title: "Audience reach",
        description: "Expanding your business visibility and growth.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: <Plane size={32} />,
        title: "Drone Shoots",
        description: "Breathtaking aerial perspectives that elevate your brand narrative.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop"
    }
];

export default function CoreFocus() {
    return (
        <section className="py-24 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
                    <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                    <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                        We help businesses build strong digital presence through professional shoots, creative content, digital marketing, and paid promotions — all managed end to end.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative h-[500px] w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image with Parallax-like Zoom */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating Glass Content Card */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl overflow-hidden relative">
                                    {/* Glass Shine Effect */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-white text-black rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {area.icon}
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                            <span className="text-xl">→</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-manrope)] tracking-tight">
                                        {area.title}
                                    </h3>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                        <div className="overflow-hidden">
                                            <p className="text-gray-200 text-sm leading-relaxed pt-2 border-t border-white/10 mt-2">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
