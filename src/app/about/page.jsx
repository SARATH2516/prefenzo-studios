"use client";
import { motion } from "framer-motion";
import { Check, Target, Zap } from "lucide-react";
import FloatingLinesDemo from "@/components/ui/FloatingLinesDemo";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen text-black pb-5 overflow-x-hidden">
            {/* Hero Section with Integrated Floating Lines */}
            <section className="relative">
                <FloatingLinesDemo />
            </section>

            <div className="container mx-auto px-6 pt-12 pb-20">
                {/* Intro Section - Minimalist Editorial */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-7"
                        >
                            <h2 className="text-7xl md:text-9xl font-black leading-none tracking-tighter uppercase text-black flex flex-col gap-2 md:gap-2">
                                <span>WE ARE</span>
                                <span className="text-gray-700 ">STRATEGIC</span>
                                <span>BUILDERS</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="lg:col-span-5 flex flex-col gap-12 py-2 pr-12"
                        >
                            <div className="max-w-lg">
                                <p className="text-xl text-gray-600 leading-relaxed font-outfit ml-15 mt-15" >
                                    Prefenzo Studio is a creative and digital growth studio built to support businesses in today’s digital-first environment.
                                    We transform vision into structured digital reality.
                                </p>
                            </div>
                            <div className="max-w-lg">
                                <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2 ml-15">Philosophy</h3>
                                <p className="text-sm text-gray-500 italic ml-15">"WE DON'T JUST CREATE; WE STRATEGICALLY BUILD."</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section - Modern Bauhaus Monoliths */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-gray-100">
                        {[
                            {
                                id: "01",
                                title: "GOAL ORIENTED",
                                desc: "Every pixel serves a clear business purpose, mapping pure design directly to measurable performance.",
                                icon: <Target size={32} strokeWidth={1.5} />
                            },
                            {
                                id: "02",
                                title: "FAST EXECUTION",
                                desc: "Propelling brands forward with high-impact delivery that meets the frantic speed of the modern market.",
                                icon: <Zap size={32} strokeWidth={1.5} />
                            },
                            {
                                id: "03",
                                title: "GROWTH CENTERED",
                                desc: "99+ successful deployments focusing on sustainable, scalable digital systems that evolve with your brand.",
                                icon: <Check size={32} strokeWidth={1.5} />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-square border-r border-y border-gray-100 p-12 flex flex-col justify-between group hover:z-10 transition-all duration-700 overflow-hidden cursor-default"
                            >
                                {/* Hover Inversion Background */}
                                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                                <div className="relative z-10 flex justify-between items-start">
                                    <span className="text-[10px] font-black tracking-[0.4em] text-gray-300 group-hover:text-gray-600 transition-colors duration-500 uppercase">
                                        SYSTEM {item.id}
                                    </span>
                                    <div className="text-black group-hover:text-white transition-colors duration-700 scale-100 group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter text-black group-hover:text-white transition-colors duration-700 leading-none">
                                        {item.title.split(' ')[0]} <br />
                                        <span className="text-gray-500 group-hover:text-gray-600 transition-colors duration-700 italic">
                                            {item.title.split(' ')[1]}
                                        </span>
                                    </h4>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-700 max-w-[240px] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Methodology / Philosophy Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 leading-none mt-10">
                            Our <br /> Methodology
                        </h2>
                        <div className="space-y-12">
                            {[
                                { t: "CONSISTENCY", d: "The baseline for modern brand trust and recognition." },
                                { t: "CLARITY", d: "Removing the noise to let your core message speak." },
                                { t: "PRECISION", d: "High-end visuals engineered for pixel-perfect impact." },
                                { t: "EVOLUTION", d: "Strategic refinement through continuous data analysis." }
                            ].map((item, idx) => (
                                <div key={idx} className="group cursor-default">
                                    <h4 className="text-xs font-black tracking-[0.3em] text-gray-300 group-hover:text-black transition-colors mb-2">{item.t}</h4>
                                    <p className="text-lg text-gray-700 group-hover:text-black transition-colors">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        <div className="h-[500px]  ml-10 w-[500px] mt-10 aspect-[4/5] bg-gray-50 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-gray-100 ">
                            <img
                                src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1000&auto=format&fit=crop"
                                alt="Studio Philosophy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                    </motion.div>
                </section>

            </div>
        </main>
    );
}
