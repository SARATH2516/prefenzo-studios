"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
                className="w-full h-full text-black"
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

    // Smooth reveal with scale and fade
    const lineVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const labelVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const dividerVariants = {
        hidden: {
            scaleX: 0,
        },
        visible: {
            scaleX: 1,
            transition: {
                duration: 1,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const descVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <main className="bg-white min-h-screen text-black overflow-hidden selection:bg-black selection:text-white" ref={containerRef}>
            {/* Hero Section */}
            <section className="relative min-h-screen w-full flex items-center justify-center pt-32 md:pt-24">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    {/* Small Label */}
                    <motion.p
                        variants={labelVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-8 md:mb-12"
                    >
                        Industries We Serve
                    </motion.p>

                    {/* Main Title - Alternating Alignment */}
                    <div className="mb-12 md:mb-16">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="space-y-2 md:space-y-4"
                        >
                            {/* Line 1: DIGITAL - Left aligned */}
                            <div className="overflow-hidden">
                                <motion.h1
                                    custom={0}
                                    variants={lineVariants}
                                    className="text-[16vw] md:text-[14vw] lg:text-[11vw] font-black leading-[0.85] tracking-tighter uppercase text-left"
                                >
                                    DIGITAL
                                </motion.h1>
                            </div>

                            {/* Line 2: SOLUTIONS FOR EVERY INDUSTRY - Right aligned */}
                            <div className="overflow-hidden flex flex-wrap justify-end gap-4 md:gap-8">
                                <motion.h1
                                    custom={1}
                                    variants={lineVariants}
                                    className="text-[16vw] md:text-[14vw] lg:text-[11vw] font-black leading-[0.85] tracking-tighter uppercase text-right"
                                >
                                    SOLUTIONS
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden w-full ">

                                <motion.h1
                                    custom={2}
                                    variants={lineVariants}
                                    className="text-[16vw] md:text-[16vw] lg:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase  "
                                >
                                    FOR EVERY INDUSTRY
                                </motion.h1>
                            </div>

                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.div
                        variants={descVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl"
                    >
                        <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light">
                            Every industry has different audiences and expectations. We adapt our digital execution for
                            consumer-focused businesses, service-based brands, and professional entities.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Dots Background Decoration */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gray-200 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, Math.random() * -30 - 10, 0],
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Subtle Gradient Orbs */}
                <motion.div
                    className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30 pointer-events-none"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-pink-50 to-orange-50 rounded-full blur-3xl opacity-30 pointer-events-none"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 relative">
                {/* Section Title - No Line Above */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        Our Coverage
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl">
                        Tailored digital solutions across diverse sectors
                    </p>
                </motion.div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {industryGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: groupIndex * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            {/* Category Header with Animated Underline - Width Matches Text */}
                            <div className="relative pb-4 inline-block">
                                <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
                                    {group.category}
                                </h3>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + groupIndex * 0.2 }}
                                    className="absolute bottom-0 left-0 h-[2px] bg-black w-full origin-left"
                                />
                            </div>

                            {/* Industry List */}
                            <div className="flex flex-col gap-8 pt-4">
                                {group.list.map((industry, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.08,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        whileHover={{ x: 8, scale: 1.02 }}
                                        className="flex items-center gap-6 group cursor-default"
                                    >
                                        <AnimatedCheck delay={0.1 + (i * 0.08)} />
                                        <motion.span
                                            className="text-xl md:text-2xl font-medium text-gray-700 group-hover:text-black transition-all duration-300 uppercase tracking-wide leading-none"
                                            whileHover={{ letterSpacing: "0.05em" }}
                                        >
                                            {industry}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA Section with Button */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="container mx-auto px-6 md:px-12 py-20 md:py-2"
            >
                <div className="relative border-t-2 border-black pt-16 md:pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Ready to elevate
                            <br />
                            <span className="text-gray-400">your industry?</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed mb-12"
                        >
                            Let's discuss how our tailored digital solutions can transform your business presence.
                        </motion.p>

                        {/* Modern Animated Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-10 py-5 bg-black text-white font-bold text-lg uppercase tracking-wider overflow-hidden"
                                >
                                    {/* Animated Background */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    />

                                    {/* Button Content */}
                                    <span className="relative z-10 flex items-center gap-3">
                                        Get In Touch
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.span>
                                    </span>

                                    {/* Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            boxShadow: "0 0 30px rgba(0,0,0,0.5)"
                                        }}
                                    />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Subtle Grid Background Pattern */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.015]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, black 1px, transparent 1px),
                            linear-gradient(to bottom, black 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>
        </main>
    );
}
