"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolioImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
        alt: "Wedding Photography",
        // From LEFT
        initial: { x: -500, y: 0, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: 0, opacity: 1, rotate: -8, scale: 1 },
        spread: { x: -300, y: -100, opacity: 1, rotate: -12, scale: 1 },
        className: "w-[400px] h-[260px]",
        zIndex: 10
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
        alt: "Engagement Shoot",
        // From RIGHT
        initial: { x: 500, y: 0, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -30, opacity: 1, rotate: 12, scale: 1 },
        spread: { x: 380, y: 80, opacity: 1, rotate: 15, scale: 1 },
        className: "w-[380px] h-[280px]",
        zIndex: 20
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
        alt: "Reception Photography",
        // From BOTTOM CENTER
        initial: { x: 0, y: 400, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -60, opacity: 1, rotate: -5, scale: 1 },
        spread: { x: 120, y: -200, opacity: 1, rotate: -3, scale: 1 },
        className: "w-[430px] h-[240px]",
        zIndex: 30
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
        alt: "Pre-Wedding",
        // From LEFT
        initial: { x: -500, y: 0, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -90, opacity: 1, rotate: 7, scale: 1 },
        spread: { x: -220, y: 120, opacity: 1, rotate: 10, scale: 1 },
        className: "w-[400px] h-[270px]",
        zIndex: 40
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
        alt: "Birthday Party",
        // From RIGHT
        initial: { x: 500, y: 0, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -120, opacity: 1, rotate: -10, scale: 1 },
        spread: { x: 450, y: -150, opacity: 1, rotate: -13, scale: 1 },
        className: "w-[410px] h-[250px]",
        zIndex: 50
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
        alt: "Baby Shower",
        // From BOTTOM CENTER
        initial: { x: 0, y: 400, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -150, opacity: 1, rotate: 6, scale: 1 },
        spread: { x: -20, y: 150, opacity: 1, rotate: 8, scale: 1 },
        className: "w-[380px] h-[260px]",
        zIndex: 60
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=800&auto=format&fit=crop",
        alt: "Outdoor Portrait",
        // From LEFT
        initial: { x: -500, y: 0, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -180, opacity: 1, rotate: -7, scale: 1 },
        spread: { x: 280, y: -80, opacity: 1, rotate: -9, scale: 1 },
        className: "w-[420px] h-[250px]",
        zIndex: 70
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
        alt: "Corporate Event",
        // From RIGHT
        initial: { x: 500, y: 0, opacity: 0, rotate: 0, scale: 0.8 },
        animate: { x: 80, y: -210, opacity: 1, rotate: 9, scale: 1 },
        spread: { x: -100, y: -50, opacity: 1, rotate: 11, scale: 1 },
        className: "w-[400px] h-[240px]",
        zIndex: 80
    }
];

export default function Portfolio() {
    const [isHovered, setIsHovered] = useState(false);
    const [isSpread, setIsSpread] = useState(false);

    useEffect(() => {
        if (isHovered) {
            // After 2 seconds of hovering, trigger spread animation
            const spreadTimer = setTimeout(() => {
                setIsSpread(true);
            }, 2000);

            return () => clearTimeout(spreadTimer);
        } else {
            // Reset spread when not hovering
            setIsSpread(false);
        }
    }, [isHovered]);

    return (
        <section
            id="portfolio"
            className="relative h-screen bg-white snap-start snap-stop-always py-12 flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto px-6 h-full flex flex-col">
                {/* Top Section - Heading and Button */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 shrink-0">
                    {/* Heading - Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-3 tracking-tight">
                            OUR PORTFOLIO
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg max-w-2xl">
                            Every click tells a story. Every frame holds a memory.
                        </p>
                    </motion.div>

                    {/* Button - Right */}
                    <div
                        className="shrink-0"
                    >
                        <Link href="/portfolio">
                            <motion.button
                                animate={{
                                    width: isHovered ? "280px" : "200px",
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="relative z-50 px-6 py-5 bg-white border-2 border-black rounded-full text-black font-bold text-base tracking-wide hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
                            >
                                <span>VIEW</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-3 text-gray-400 text-xs text-center"
                        >
                            Hover to explore
                        </motion.p>
                    </div>
                </div>

                {/* Large Space Below for Images - Takes remaining height */}
                <div className="relative w-full flex-1 flex items-end justify-start pb-12">
                    {/* Portfolio Images Container */}
                    <div className="absolute inset-0">
                        {portfolioImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={image.initial}
                                animate={
                                    isHovered
                                        ? (isSpread ? image.spread : image.animate)
                                        : image.initial
                                }
                                transition={{
                                    duration: 1.5,
                                    delay: index * 0.2,
                                    ease: [0.6, 0.05, 0.01, 0.9]
                                }}
                                className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${image.className} rounded-2xl overflow-hidden shadow-2xl`}
                                style={{ zIndex: image.zIndex }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Large Text at Bottom Left - Always Visible */}
                    <div className="relative z-[100] max-w-2xl">
                        <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight tracking-tight">
                            <br />

                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
