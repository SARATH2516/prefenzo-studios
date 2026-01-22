"use client";
import { motion } from "framer-motion";

import Link from "next/link";

const projects = [
    {
        id: "pre-wedding",
        title: "Pre-Wedding",
        category: "A Photography Date",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "engagement",
        title: "Engagement",
        category: "Beginning of Forever",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "reception",
        title: "Reception",
        category: "Celebrating Love",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "puberty",
        title: "Puberty",
        category: "Cultural Milestones",
        image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "baby-shower",
        title: "Baby Shower",
        category: "New Beginnings",
        image: "https://images.ctfassets.net/2ql69mthp94m/3f3OoSOb4mx4kKufA20984/0ee78e506519c3742131b43363545cfa/Baby-Shower-Checklist-720x432.jpg?fm=webp&q=70"
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white snap-start snap-stop-always">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Portfolio</h2>
                        <p className="text-gray-500 text-lg italic">Every click tells a story. Every frame holds a memory.</p>
                    </div>
                    <Link href="/portfolio" className="text-gray-900 border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors uppercase text-sm font-bold tracking-widest">
                        View All Categories
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link href={`/portfolio/${project.id}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                            >
                                {/* Background Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-bold">{project.title}</h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
