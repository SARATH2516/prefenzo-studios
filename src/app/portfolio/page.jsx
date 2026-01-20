"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const categories = [
    {
        id: "pre-wedding",
        title: "Pre-Wedding",
        subtitle: "A PHOTOGRAPHY DATE",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "engagement",
        title: "Engagement",
        subtitle: "BEGINNING OF FOREVER",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "reception",
        title: "Reception Functions",
        subtitle: "CELEBRATING LOVE",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "guest-family",
        title: "Guest & Family Features",
        subtitle: "THOSE WHO MATTER",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "puberty",
        title: "Puberty Function",
        subtitle: "CULTURAL MILESTONES",
        image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "birthday",
        title: "Birthday",
        subtitle: "JOYFUL CELEBRATIONS",
        image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "baby-shower",
        title: "Baby Shower",
        subtitle: "WAITING FOR A MIRACLE",
        image: "https://images.ctfassets.net/2ql69mthp94m/3f3OoSOb4mx4kKufA20984/0ee78e506519c3742131b43363545cfa/Baby-Shower-Checklist-720x432.jpg?fm=webp&q=70",
    }
];

export default function PortfolioPage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-20 text-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">Portfolio</h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto italic">
                        Experience the magic through our lens. Every click tells a story.
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    {categories.map((cat, index) => (
                        <Link href={`/portfolio/${cat.id}`} key={cat.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "group relative flex flex-col md:flex-row h-[70vh] md:h-[60vh] overflow-hidden cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500",
                                    index % 2 !== 0 && "md:flex-row-reverse"
                                )}
                            >
                                {/* Text Section */}
                                <div className={cn(
                                    "w-full md:w-1/3 flex flex-col justify-center items-center p-12 text-center transition-colors duration-500 bg-gray-50 group-hover:bg-white border-x border-gray-100"
                                )}>
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-wide group-hover:scale-105 transition-transform duration-500 leading-tight group-hover:text-blue-600">
                                        {cat.title}
                                    </h2>
                                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 group-hover:text-gray-800 transition-colors duration-500">
                                        {cat.subtitle}
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="w-full md:w-2/3 relative h-full overflow-hidden">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
