"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen text-gray-900 pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-20 pt-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Who We Are</h1>
                    <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
                        Prefenzo Studio is a creative and digital growth studio built to support businesses in today’s digital-first environment.
                        We help brands communicate clearly, appear professional online, and reach the right audience through structured digital execution.
                    </p>
                </div>

                {/* Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Philosophy</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            We believe digital growth is not about random posting or short-term visibility.
                            It’s about:
                        </p>
                        <div className="space-y-4">
                            {[
                                "Consistency",
                                "Clear brand communication",
                                "Quality visuals",
                                "Strategic promotion",
                                "Continuous improvement"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="bg-blue-50 p-2 rounded-full">
                                        <Check size={16} className="text-blue-600" />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-lg mt-8 italic">
                            Every project we take is handled with this mindset.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 aspect-square lg:aspect-auto">
                        <img
                            src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1000&auto=format&fit=crop"
                            alt="Our Philosophy"
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>
                </div>

                {/* How We Work */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900">How We Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Understand", desc: "your business goals" },
                            { title: "Plan", desc: "content and marketing activities" },
                            { title: "Execute", desc: "consistently every month" },
                            { title: "Review", desc: "performance and refine strategy" }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-4xl font-bold text-blue-100 mb-4">0{index + 1}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">We {step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-12 text-lg">
                        Clear communication and reliability are at the core of our work.
                    </p>
                </div>
            </div>
        </main>
    );
}
