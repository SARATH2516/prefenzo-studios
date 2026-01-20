"use client";
import { motion } from "framer-motion";
import { Search, Map, Zap, Rocket, LineChart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understand",
        desc: "your business and audience",
        icon: <Search className="w-6 h-6 text-blue-400" />
    },
    {
        number: "02",
        title: "Plan",
        desc: "content and marketing direction",
        icon: <Map className="w-6 h-6 text-purple-400" />
    },
    {
        number: "03",
        title: "Execute",
        desc: "shoots, creatives, and campaigns",
        icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
        number: "04",
        title: "Promote",
        desc: "strategically to the right audience",
        icon: <Rocket className="w-6 h-6 text-pink-400" />
    },
    {
        number: "05",
        title: "Monitor",
        desc: "performance and improve continuously",
        icon: <LineChart className="w-6 h-6 text-green-400" />
    },
];

export default function Approach() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background  & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/approach2.jpg"
                    alt="Office Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50 opacity-80" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 border-b border-gray-200 pb-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight font-[family-name:var(--font-manrope)]"
                        >
                            Our Approach
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-black text-lg leading-relaxed"
                        >
                            A refined workflow designed for impact. We follow a clear, proven process that ensures consistency, quality, and measurable results for your brand.
                        </motion.p>
                    </div>
                </div>

                {/* Horizontal Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-full"
                        >
                            {/* Connector Line (Desktop) - except last item */}
                            {index !== steps.length - 1 && (
                                <div className="absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-gray-300 to-transparent hidden md:block" />
                            )}

                            <div className="bg-white border border-gray-200 p-8 rounded-2xl h-full shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group-hover:-translate-y-2">

                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-bold text-black/20 font-[family-name:var(--font-manrope)] group-hover:text-black/40 transition-colors">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-gray-800 text-sm leading-relaxed group-hover:text-black transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
