"use client";
import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Rocket } from "lucide-react";

const services = [
    {
        icon: <Palette size={40} />,
        title: "Brand Identity",
        description: "We craft visual stories that resonate. Logos, guidelines, and systems that define your essence.",
    },
    {
        icon: <Globe size={40} />,
        title: "Web Development",
        description: "Lightning-fast, SEO-optimized websites built with Next.js and modern technologies.",
    },
    {
        icon: <Smartphone size={40} />,
        title: "UI/UX Design",
        description: "Intuitive interfaces and seamless user experiences that keep your audience engaged.",
    },
    {
        icon: <Rocket size={40} />,
        title: "Digital Marketing",
        description: "Strategic campaigns that amplify your reach and convert visitors into loyal customers.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Our Expertise</h2>
                    <div className="w-24 h-1 bg-blue-600 mb-6"></div>
                    <p className="text-gray-600 max-w-xl text-lg">We don't just build websites; we build comprehensive digital ecosystems designed for growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="p-8 border border-gray-100 bg-white rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer shadow-sm"
                        >
                            <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 origin-left">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
