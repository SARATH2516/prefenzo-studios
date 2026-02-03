"use client";
import { motion } from "framer-motion";
import { Check, Target, Zap } from "lucide-react";
import BackgroundLinesDemo from "@/components/ui/BackgroundLinesDemo";

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen text-white pb-5 overflow-x-hidden">
            {/* Hero Section with Integrated Background Lines */}
            <section className="relative">
                <BackgroundLinesDemo />
            </section>

            <div className="container mx-auto px-6 pt-20">
                {/* Intro Section - Enhanced Design */}
                <section className="mb-40 relative">
                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -left-20 top-1/4 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-7"
                        >
                            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                                Creative Excellence Since 2005
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">
                                WE ARE <br />
                                <span className="text-blue-600">STRATEGIC</span> <br />
                                <span className="relative">
                                    BUILDERS
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="absolute -bottom-2 left-0 h-4 bg-blue-600/10 -z-10"
                                    />
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                Prefenzo Studio is a creative and digital growth studio built to support businesses in today’s digital-first environment.
                            </p>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-2xl md:text-4xl font-black text-black mt-6 tracking-tight flex items-center gap-4"
                            >
                                <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                                WE DON'T JUST CREATE; <br className="hidden md:block" /> WE STRATEGICALLY BUILD.
                            </motion.h3>
                        </motion.div>

                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 10,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between aspect-[4/5] relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                            >
                                <div className="relative z-10 h-full flex flex-col">
                                    <Target className="text-blue-600 mb-6 group-hover:scale-125 transition-transform duration-500" size={48} />
                                    <h4 className="text-2xl font-bold leading-tight">Goal <br /> Oriented</h4>
                                    <p className="text-gray-500 mt-auto text-sm">Every pixel serves a clear business purpose.</p>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                            </motion.div>

                            <div className="flex flex-col gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        x: 10,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="bg-black p-8 rounded-[2rem] text-white flex-col justify-between flex-1 flex group overflow-hidden relative cursor-pointer shadow-xl"
                                >
                                    <Zap className="text-blue-400 mb-4 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" size={40} />
                                    <h4 className="text-xl font-bold mt-auto relative z-10">Fast <br /> Execution</h4>
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-200 transition-transform duration-700" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -5,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="bg-blue-600 p-8 rounded-[2rem] text-white flex-col justify-between flex-1 flex group cursor-pointer shadow-xl"
                                >
                                    <div className="text-4xl font-black mb-4 group-hover:scale-125 transition-transform duration-500 tracking-tighter">99+</div>
                                    <h4 className="text-lg font-bold mt-auto leading-tight">Growth <br /> Focus</h4>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 p-12 bg-black rounded-[3.5rem] relative overflow-hidden">
                    {/* Flickering Bulb Glow Effect */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.4, 0.3, 0.5, 0.2, 0.4, 0.3],
                            scale: [1, 1.05, 1, 1.1, 0.95, 1.05, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.4, 0.5, 0.7, 0.8, 1]
                        }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/10 to-transparent blur-[120px] pointer-events-none"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-950 text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/5"
                    >
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center relative">
                                        <motion.div
                                            animate={{ opacity: [1, 0.5, 1, 0.2, 0.8, 1] }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: Math.random() * 5 }}
                                            className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_#fff]"
                                        />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold">Our Philosophy</h2>
                                </div>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                    We believe digital growth is not about random posting or short-term visibility.
                                    It’s about a consistent, clear brand communication system.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "Consistency is the new Currency",
                                        "Clear brand communication over noise",
                                        "High-end visuals that build trust",
                                        "Strategic promotion that converts",
                                        "Continuous refinement through data"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                                                <Check size={14} className="text-black" />
                                            </div>
                                            <span className="text-lg font-medium text-gray-200">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group">
                                <motion.div
                                    animate={{
                                        opacity: [1, 0.8, 0.9, 0.3, 0.8, 0.9, 1],
                                        boxShadow: [
                                            "0 0 20px rgba(255,255,255,0.1)",
                                            "0 0 40px rgba(255,255,255,0.2)",
                                            "0 0 20px rgba(255,255,255,0.1)",
                                            "0 0 10px rgba(255,255,255,0.05)",
                                            "0 0 30px rgba(255,255,255,0.15)",
                                            "0 0 20px rgba(255,255,255,0.1)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.3, 0.4, 0.6, 0.8, 1] }}
                                    className="bg-white/5 p-2 rounded-[2rem] border border-white/10 relative overflow-hidden"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1000&auto=format&fit=crop"
                                        alt="Our Philosophy"
                                        className="w-full h-[400px] object-cover rounded-[1.5rem] opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Flickering light ray overlay */}
                                    <motion.div
                                        animate={{ opacity: [0, 0.1, 0, 0.2, 0.05, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute inset-0 bg-white pointer-events-none mix-blend-overlay"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

            </div>
        </main>
    );
}
