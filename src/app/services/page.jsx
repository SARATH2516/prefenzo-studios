"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

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
            "Event Coverage & Documentation"
        ],
        extra: "From initial concept to final master, we ensure cinematic quality.",
        image: "https://images.pexels.com/photos/5642757/pexels-photo-5642757.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
        image: "https://images.pexels.com/photos/29485989/pexels-photo-29485989.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
        image: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
        image: "https://pixabay.com/get/g992f253b9bb87baa62f5edc769eb67360cd9a8550ba5399a85074a25a06bc2b2b2ecf2217d1feaee25c904e482bd7402.jpg"
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
        image: "https://images.pexels.com/photos/34774342/pexels-photo-34774342.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
        image: "https://pixabay.com/get/gcc4056aac9e226ac82ee6646b832e550aaacd74feaa6c5f13d9773f2dc8b4e951cc29b939c45d5cb0ff6c2ea01c215b1.jpg"
    }
];

export default function ServicesPage() {
    const letterVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -90,
            filter: "blur(10px)"
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.2
            }
        }
    };

    const splitText = (text) => {
        return text.split('').map((char, index) => (
            <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ display: 'inline-block' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.span>
        ));
    };

    return (
        <main className="bg-white min-h-screen text-black pt-20">
            {/* Hero Section - Contact Page Style */}
            <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 relative">
                <div className="container mx-auto max-w-7xl">
                    {/* Small Label with Blur + Slide */}
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-gray-400 mb-4"
                    >
                        What We Offer
                    </motion.p>

                    {/* Main Title - Letter by letter animation with 3D effect */}
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-[16vw] md:text-[14vw] lg:text-[11vw] font-black leading-[0.85] tracking-tighter uppercase mb-2"
                        style={{ perspective: "1000px" }}
                    >
                        {splitText("OUR")}
                    </motion.h1>
                    
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-[16vw] md:text-[14vw] lg:text-[11vw] font-black leading-[0.85] tracking-tighter uppercase mb-6"
                        style={{ perspective: "1000px" }}
                    >
                        {splitText("SERVICES")}
                    </motion.h1>

                    {/* Subtitle with blur + scale effect */}
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl lg:text-2xl text-gray-500 font-light max-w-3xl leading-relaxed"
                    >
                        Comprehensive digital solutions crafted to elevate your brand and drive measurable growth
                    </motion.p>
                </div>

                {/* Scroll Indicator with pulse */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ 
                            y: [0, 10, 0],
                            opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent"
                    />
                </motion.div>
            </section>

            {/* Services Grid - Compact Bento Style */}
            <section className="px-6 md:px-12 py-12 md:py-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function ServiceCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
        >
            {/* Animated gradient overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 pointer-events-none"
                animate={{
                    opacity: isHovered ? 0.03 : 0,
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Shimmer effect on hover */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: '-100%', rotate: -12 }}
                animate={{
                    x: isHovered ? '100%' : '-100%',
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
            </motion.div>

            {/* Image Section - Compact */}
            <div className="relative h-56 md:h-64 overflow-hidden bg-gray-100">
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{
                        scale: isHovered ? 1.08 : 1,
                        filter: isHovered ? "grayscale(0%) brightness(1.05)" : "grayscale(20%) brightness(1)",
                        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                />
                
                {/* Dynamic Gradient Overlay */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"
                    animate={{
                        opacity: isHovered ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                />

                {/* Animated glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/20 to-pink-500/0"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                />
                
                {/* Number Badge with scale animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    animate={{
                        scale: isHovered ? 1.15 : 1,
                        rotate: isHovered ? 360 : 0,
                    }}
                    transition={{ 
                        delay: 0.1, 
                        duration: 0.6,
                        rotate: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
                >
                    <span className="text-white font-black text-lg">{service.id}</span>
                </motion.div>
            </div>

            {/* Content Section - Compact */}
            <div className="p-6 md:p-8">
                {/* Subtitle Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.3 }}
                    className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3"
                >
                    {service.subtitle}
                </motion.p>

                {/* Title with hover gradient */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 leading-none bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text transition-all duration-500 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600"
                    style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                    }}
                >
                    {service.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300"
                >
                    {service.desc}
                </motion.p>

                {/* Capabilities List */}
                <div className="space-y-2 mb-6">
                    {service.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.02, duration: 0.3 }}
                            className="flex items-start gap-2 group/item"
                        >
                            <motion.div
                                animate={{
                                    scale: isHovered ? 1.2 : 1,
                                    rotate: isHovered ? 360 : 0,
                                }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                            >
                                <Check className="w-4 h-4 text-gray-400 mt-0.5 shrink-0 group-hover/item:text-green-600 transition-colors duration-300" />
                            </motion.div>
                            <span className="text-sm md:text-base text-gray-600 group-hover/item:text-gray-900 transition-all duration-300">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Extra Info */}
                {service.extra && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="p-4 bg-white border-l-2 border-gray-300 italic text-sm md:text-base text-gray-500"
                    >
                        "{service.extra}"
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
