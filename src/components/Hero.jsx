"use client";
import { motion } from "framer-motion";

export default function Hero() {
    // Force hydration sync
    return (
        <section id="home" className="min-h-[100vh] w-full flex flex-col justify-center items-center relative overflow-hidden ">
            {/* Background with Light Blue Gradient */}
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero_video.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability and light theme */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.05em] leading-tight mb-8 text-white uppercase font-[family-name:var(--font-manrope)] drop-shadow-2xl">
                        Complete Digital Partner <br />
                        <span className="block text-3xl md:text-5xl mt-2 text-gray-100">For Growing Businesses</span>
                    </h1>
                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a
                        href="/portfolio"
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        VIEW OUR WORK
                    </a>
                    <a
                        href="/contact"
                        className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                    >
                        BOOK NOW
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
