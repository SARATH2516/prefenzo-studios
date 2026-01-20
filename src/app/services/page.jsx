"use client";
import { motion } from "framer-motion";
import { Camera, PenTool, Share2, TrendingUp } from "lucide-react";

const services = [
    {
        title: "Visual Production",
        desc: "Strong visuals form the foundation of digital branding.",
        items: [
            "Professional photography",
            "Video production",
            "Drone photography & videography",
            "Indoor and outdoor shoots"
        ],
        extra: "All shoots are planned to match brand identity and marketing goals.",
        icon: <Camera size={40} />,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Content Creation & Design",
        desc: "We create content that represents your brand clearly and professionally.",
        items: [
            "Short-form videos & reels",
            "Promotional and branding videos",
            "Digital creatives and posters",
            "Campaign-based content",
            "Brand communication visuals"
        ],
        icon: <PenTool size={40} />,
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Social Media Management",
        desc: "We manage social media platforms to ensure consistent and professional presence.",
        items: [
            "Content planning and scheduling",
            "Posting and engagement",
            "Brand-consistent communication",
            "Platform optimization"
        ],
        icon: <Share2 size={40} />,
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Digital Marketing & Promotions",
        desc: "Creating content is only effective when it reaches the right audience.",
        items: [
            "Digital marketing campaigns",
            "Social media advertising",
            "Local and regional promotions",
            "Performance-focused paid ads"
        ],
        extra: "Our goal is to convert digital visibility into real enquiries and growth.",
        icon: <TrendingUp size={40} />,
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen text-gray-900 pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="mb-20 pt-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Our Services</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We provide end-to-end digital solutions to build, grow, and maintaing your brand.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="p-4 bg-white rounded-xl text-blue-600 shrink-0 shadow-sm border border-gray-100">
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed border-l-4 border-blue-200 pl-4">
                                        {service.desc}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">We Provide:</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.items.map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {service.extra && (
                                        <p className="text-sm text-gray-500 italic bg-white p-4 rounded-lg mb-6 border border-gray-100">
                                            {service.extra}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full md:w-72 lg:w-96 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shrink-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
