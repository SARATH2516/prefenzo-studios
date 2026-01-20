"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const industryGroups = [
    {
        category: "Consumer & Lifestyle",
        list: ["Salons & personal care", "Restaurants & cafes", "Retail & showrooms", "Hotels & hospitality"]
    },
    {
        category: "Professional & Corporate",
        list: ["Clinics & healthcare", "Real estate & builders", "Educational institutions", "Startups & new brands", "Manufacturing & industrial", "Events & entertainment"]
    }
];

export default function IndustriesPage() {
    return (
        <main className="bg-white min-h-screen text-gray-900 pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="mb-20 pt-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Digital Solutions for Different Industries</h1>
                    <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
                        Every industry has different audiences and expectations. We adapt our digital execution for
                        consumer-focused businesses, service-based brands, professional entities, and large-scale operations.
                    </p>
                    <p className="text-lg text-gray-500 mt-4">
                        Our strategies are customized, but our standards remain consistent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industryGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">{group.category}</h2>
                            <div className="grid gap-4">
                                {group.list.map((industry, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-300"
                                    >
                                        <CheckCircle2 className="text-blue-600 shrink-0" />
                                        <span className="text-lg font-medium text-gray-700">{industry}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
