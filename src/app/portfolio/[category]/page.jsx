"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// In a real app, this would come from a CMS or API
const categoryData = {
    "pre-wedding": {
        title: "Pre-Wedding",
        subtitle: "A Photography Date",
        images: [
            "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800",
            "https://images.unsplash.com/photo-1522673607200-164883eecd4c?q=80&w=800",
            "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=800",
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
            "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=800",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800"
        ]
    },
    "engagement": {
        title: "Engagement",
        subtitle: "The Beginning of Forever",
        images: [
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800",
            "https://images.unsplash.com/photo-1465495910483-0d674b09ec5d?q=80&w=800",
            "https://images.unsplash.com/photo-1519225421980-699bc022ad1a?q=80&w=800",
            "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=800",
            "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a3a3?q=80&w=800",
            "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800"
        ]
    },
    "reception": {
        title: "Reception Functions",
        subtitle: "The Grand Celebration",
        images: [
            "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
            "https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=800",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800",
            "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=800",
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800"
        ]
    },
    "guest-family": {
        title: "Guest & Family Features",
        subtitle: "Shared Moments",
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
            "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800",
            "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
            "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800",
            "https://images.unsplash.com/photo-1469041284831-9a7004407336?q=80&w=800",
            "https://images.unsplash.com/photo-1525026198548-4baa33005838?q=80&w=800"
        ]
    },
    "puberty": {
        title: "Puberty Function",
        subtitle: "Traditional Milestones",
        images: [
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800",
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800",
            "https://images.unsplash.com/photo-1517011578137-0c2c1a1b1ec4?q=80&w=800",
            "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=800",
            "https://images.unsplash.com/photo-1513273784343-2b81582ee59b?q=80&w=800",
            "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=800"
        ]
    },
    "birthday": {
        title: "Birthday",
        subtitle: "Joyful Memories",
        images: [
            "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=800",
            "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800",
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800",
            "https://images.unsplash.com/photo-1502035618526-6b2f1fbb74fd?q=80&w=800",
            "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800",
            "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=800"
        ]
    },
    "baby-shower": {
        title: "Baby Shower",
        subtitle: "New Beginnings",
        images: [
            "https://images.unsplash.com/photo-1560064010-86361501b7a2?q=80&w=800",
            "https://images.unsplash.com/photo-1519622905950-eabb5d5d539d?q=80&w=800",
            "https://images.unsplash.com/photo-1526674179247-495129671f2d?q=80&w=800",
            "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800",
            "https://images.unsplash.com/photo-1555133550-b139ca028bfe?q=80&w=800",
            "https://images.unsplash.com/photo-1522673607200-164883eecd4c?q=80&w=800"
        ]
    }
};

export default function CategoryGallery() {
    const params = useParams();
    const categoryId = params.category;
    const data = categoryData[categoryId];

    if (!data) return <div className="pt-32 text-center text-gray-900">Category not found</div>;

    return (
        <main className="bg-white min-h-screen pt-32 pb-20 text-gray-900">
            <div className="container mx-auto px-6">
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-12 transition-colors">
                    <ChevronLeft size={20} />
                    <span>Back to Portfolio</span>
                </Link>

                <div className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">{data.title}</h1>
                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 italic">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-[4/5] overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500"
                        >
                            <img
                                src={img}
                                alt={`${data.title} showcase ${index + 1}`}
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
