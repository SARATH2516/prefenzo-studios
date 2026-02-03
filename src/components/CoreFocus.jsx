"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, PenTool, Share2, TrendingUp, Users, Plane, ArrowRight } from "lucide-react";
import Link from "next/link";

const focusAreas = [
    {
        icon: <Camera size={24} />,
        title: "Visual production",
        subtitle: "CINEMATOGRAPHY & PHOTOGRAPHY",
        description: "High-end production and artistic direction.",
        image: "/HOME PAGE/VISUAL PRODUCTION.jpg"
    },
    {
        icon: <PenTool size={24} />,
        title: "Content creation",
        subtitle: "GRAPHIC DESIGN & MOTION",
        description: "Impactful graphics and videos with precision.",
        image: "/HOME PAGE/CONTENT CREATION.jpg"
    },
    {
        icon: <Share2 size={24} />,
        title: "Social media",
        subtitle: "MANAGEMENT & STRATEGY",
        description: "Establishing a consistent, high-end presence.",
        image: "/HOME PAGE/SOCIAL MEDIA MANAGEMENT.jpg"
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Digital marketing",
        subtitle: "STRATEGIC GROWTH & ADS",
        description: "Result-driven promotions to scale your brand.",
        image: "/HOME PAGE/DIGITAL MEDIA MARKETING.jpg"
    },
    {
        icon: <Users size={24} />,
        title: "Audience reach",
        subtitle: "VISIBILITY & ENGAGEMENT",
        description: "Strategic maneuvers to expand business visibility.",
        image: "/HOME PAGE/AUDIENCE REACH.jpg"
    },
    {
        icon: <Plane size={24} />,
        title: "Drone Shoots",
        subtitle: "AERIAL PERSPECTIVES",
        description: "Breathtaking aerial views captured with precision.",
        image: "/HOME PAGE/DRONE.jpg"
    }
];

export default function CoreFocus() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isLeft, setIsLeft] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePos({ x: clientX, y: clientY });
        setIsLeft(clientX < window.innerWidth / 2);
    };

    const handleClick = () => {
        if (isLeft) {
            setCurrentIndex((prev) => (prev - 1 + focusAreas.length) % focusAreas.length);
        } else {
            setCurrentIndex((prev) => (prev + 1) % focusAreas.length);
        }
    };

    const getVisibleItems = () => {
        const len = focusAreas.length;
        return [
            { ...focusAreas[(currentIndex - 1 + len) % len], pos: 'left' },
            { ...focusAreas[currentIndex], pos: 'center' },
            { ...focusAreas[(currentIndex + 1) % len], pos: 'right' }
        ];
    };

    const items = getVisibleItems();

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleClick}
            className="py-20 bg-white text-black snap-start overflow-hidden relative select-none cursor-none min-h-[850px] flex flex-col justify-center"
        >
            {/* Mubien Arrow Cursor */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            x: mousePos.x - 40,
                            y: mousePos.y - 40,
                            rotate: isLeft ? 180 : 0,
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.2 }}
                    >
                        <div className="w-20 h-20 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm flex items-center justify-center text-black">
                            <ArrowRight size={32} strokeWidth={1} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-10 mb-2 z-20">
                <h2 className="text-[30px] font-black tracking-[0.3em] text-gray-800 uppercase">SERVICES</h2>
            </div>

            <div className="relative w-full h-[600px] flex items-center justify-center">

                <AnimatePresence mode="popLayout" initial={false}>
                    {items.map((item, idx) => {
                        const isCenter = item.pos === 'center';
                        return (
                            <motion.div
                                key={`${item.title}-${currentIndex}-${item.pos}`}
                                initial={{ opacity: 0, scale: 0.8, x: item.pos === 'right' ? "30%" : "-30%" }}
                                animate={{
                                    opacity: isCenter ? 1 : 0.1,
                                    x: item.pos === 'center' ? 0 : (item.pos === 'left' ? "-65vw" : "65vw"),
                                    scale: isCenter ? 1 : 0.65,
                                    filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
                                    zIndex: isCenter ? 30 : 10
                                }}
                                exit={{ opacity: 0, scale: 0.6, x: item.pos === 'left' ? "-40%" : "40%" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 w-full max-w-7xl px-10"
                            >
                                {/* Text Side */}
                                <div className={`flex-1 text-left transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-xs font-black tracking-[0.4em] text-gray-700 mb-6 block uppercase font-outfit">
                                        {item.subtitle}
                                    </span>
                                    <h3 className="text-5xl md:text-7xl font-black mb-10 leading-[0.85] tracking-tighter uppercase font-inter max-w-md">
                                        {item.title}
                                    </h3>

                                    <Link href="/services">
                                        <button className="px-12 py-3.5 rounded-full border border-black text-[10px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                                            Our Services
                                        </button>
                                    </Link>

                                    {/* Numbering */}
                                    <div className="mt-6 flex items-baseline gap-2 text-gray-700 font-black">
                                        <span className="text-sm">0{currentIndex + 1}</span>
                                        <span className="text-[10px] opacity-30">/</span>
                                        <span className="text-[10px] opacity-30">0{focusAreas.length}</span>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="relative lg:translate-x-32">
                                    <motion.div
                                        animate={{
                                            rotate: isCenter ? -4 : (item.pos === 'left' ? 10 : -10)
                                        }}
                                        className="relative w-[300px] md:w-[450px] aspect-[4/5] bg-gray-50 border border-gray-100 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] overflow-hidden rounded-2xl"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-[2.5s] hover:scale-110"
                                        />
                                        {isCenter && (
                                            <div className="absolute top-8 right-8 w-16 h-16 bg-black flex items-center justify-center rounded-full text-white z-20">
                                                {item.icon}
                                            </div>
                                        )}
                                    </motion.div>
                                </div>

                                <div className="flex-1 hidden lg:block"></div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Bottom guide */}

        </section>
    );
}
