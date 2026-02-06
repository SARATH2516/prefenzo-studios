"use client";
import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import TextType from "@/components/ui/TextType";

const industryGroups = [
    {
        category: "Consumer & Lifestyle",
        list: [
            "Salons & personal care",
            "Restaurants & cafes",
            "Retail & showrooms",
            "Hotels & hospitality",
            "E-commerce & Fashion",
            "Fitness & Wellness"
        ]
    },
    {
        category: "Professional & Corporate",
        list: [
            "Clinics & healthcare",
            "Real estate & builders",
            "Educational institutions",
            "Startups & new brands",
            "Manufacturing & industrial",
            "Events & entertainment"
        ]
    }
];

const AnimatedCheck = ({ delay = 0 }) => {
    return (
        <div className="relative flex items-center justify-center shrink-0 w-6 h-6">
            <motion.svg
                viewBox="0 0 24 24"
                className="w-full h-full text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <motion.path
                    d="M20 6L9 17L4 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                        duration: 0.8,
                        delay: delay,
                        ease: "easeInOut"
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default function IndustriesPage() {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
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
        <main className="bg-white min-h-screen text-gray-900 overflow-hidden" ref={containerRef}>
            {/* Full-screen Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                        scale: 1.1
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 30 }}
                >
                    <Image
                        src="/industries.jpg"
                        alt="Industries"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Modern Gradient Overlay for Better Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/20"></div>

                    {/* Animated Mesh Gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 z-[1] pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/40 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Small Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/80 mb-8"
                    >
                        Industries We Serve
                    </motion.p>

                    {/* Main Title with Letter Animation */}
                    <div className="mb-8">
                        <motion.h1
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white mb-4"
                            style={{ perspective: "1000px" }}
                        >
                            <div className="mb-2">
                                {splitText("DIGITAL SOLUTIONS")}
                            </div>
                        </motion.h1>

                        <motion.h1
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            style={{
                                perspective: "1000px",
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text'
                            }}
                        >
                            {splitText("FOR EVERY INDUSTRY")}
                        </motion.h1>
                    </div>

                    {/* Animated Divider */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 160, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-10 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                    />

                    {/* Description with Glassmorphism */}
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
                        >
                            <p className="text-lg md:text-2xl text-black leading-relaxed font-light mb-4">
                                Every industry has different audiences and expectations. We adapt our digital execution for
                                consumer-focused businesses, service-based brands, and professional entities.
                            </p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.8 }}
                                className="flex items-center justify-center gap-4 text-sm md:text-base text-black/70 font-semibold tracking-widest uppercase"
                            >
                                <span className="inline-block w-8 h-[1px] bg-gradient-to-r from-transparent to-white/50"></span>
                                Custom Strategies • Consistent Standards
                                <span className="inline-block w-8 h-[1px] bg-gradient-to-l from-transparent to-white/50"></span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Scroll</span>
                            <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Vignette Effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent z-[2]" />
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-32 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {industryGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
                            className="space-y-10"
                        >
                            <h2 className="text-4xl font-black text-gray-900 pb-10 flex items-center gap-5 uppercase tracking-tighter whitespace-nowrap">
                                {group.category}
                            </h2>
                            <div className="flex flex-col gap-16 pt-4">
                                {group.list.map((industry, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        transition={{
                                            duration: 0.4,
                                            delay: i * 0.05,
                                        }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-8 bg-transparent transition-all duration-300 group cursor-default border-none shadow-none"
                                    >
                                        <AnimatedCheck delay={0.05 + (i * 0.05)} />
                                        <span className="text-xl font-medium text-black group-hover:text-black group-hover:font-black transition-all duration-300 uppercase tracking-[0.2em] leading-none whitespace-nowrap font-outfit">
                                            {industry}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Aesthetic Background Decoration */}
            <div className="fixed top-0 right-0 -z-10 opacity-[0.02] pointer-events-none">
                <svg width="1000" height="1000" viewBox="0 0 1000 1000">
                    <circle cx="500" cy="500" r="400" fill="currentColor" className="text-gray-900" />
                </svg>
            </div>
        </main>
    );
}
