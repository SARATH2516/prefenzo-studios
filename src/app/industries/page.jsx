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

    return (
        <main className="bg-white min-h-screen text-gray-900 overflow-hidden" ref={containerRef}>
            {/* Full-screen Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/industries.jpg"
                        alt="Industries"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Aesthetic Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tighter"
                    >
                        <TextType
                            text={[
                                "Digital Solutions for\nDifferent Industries"
                            ]}
                            className="text-white mt-10"
                            typingSpeed={105}
                            deletingSpeed={50}
                            pauseDuration={999999}
                            showCursor={true}
                            cursorCharacter="_"
                            loop={false}
                            startOnVisible={true}
                        />
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 140 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                        className="h-1.5 bg-white mx-auto mb-12 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    ></motion.div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-xl md:text-3xl text-gray-200 leading-relaxed font-light"
                        >
                            Every industry has different audiences and expectations. We adapt our digital execution for
                            consumer-focused businesses, service-based brands, and professional entities.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-lg text-gray-400 font-medium tracking-widest uppercase"
                        >
                            Custom Strategies • Consistent Standards
                        </motion.p>
                    </div>


                </div>
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

