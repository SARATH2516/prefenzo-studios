"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: ""
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const budgetOptions = [
        { label: "Below ₹10K", value: "small" },
        { label: "₹10K - ₹40K", value: "medium" },
        { label: "₹40K+", value: "large" }
    ];

    const slideUpReveal = {
        initial: { y: "110%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] }
    };

    const slideDownReveal = {
        initial: { y: "-110%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    return (
        <main className="bg-white min-h-screen text-black selection:bg-black selection:text-white overflow-x-hidden">
            <div className="container mx-auto px-6">

                {/* Hero Section - Full Page */}
                <section className="h-screen flex flex-col justify-center relative">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="flex flex-col items-start w-full"
                    >
                        {/* First Line: GET IN */}
                        <div className="overflow-hidden w-full mb-8 ml-100">
                            <motion.h1
                                variants={slideUpReveal}
                                className="text-[20vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter uppercase text-white mix-blend-difference"
                            >
                                GET IN
                            </motion.h1>
                        </div>

                        {/* Second Line: TOUCH + Arrow Down */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                            <div className="overflow-hidden">
                                <motion.h1
                                    variants={slideUpReveal}
                                    className="text-[15vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter uppercase shrink-0"
                                >
                                    TOUCH
                                </motion.h1>
                            </div>


                            <div className="overflow-hidden">
                                <motion.div
                                    variants={slideDownReveal}
                                    className="shrink-0"
                                >
                                    <motion.div
                                        animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowDown strokeWidth={2} className="w-[15vw] h-[15vw] md:w-[13vw] md:h-[13vw] ml-20 text-black" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Details Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <h4 className="text-lg font-bold tracking-widest uppercase text-gray-400 mb-6 w-full">Location</h4>
                        <div className="space-y-4">

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-md font-bold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                            >
                                VIEW IN GOOGLE MAPS <ArrowRight size={14} />
                            </a>
                            <p className="text-xl md:text-xl font-medium w-full leading-tight">
                                BBC, NGPASC, Coimbatore, India
                            </p>

                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">General Enquiries</h4>
                            <a href="mailto:hello@prefenzo.com" className="text-xl md:text-2xl font-medium hover:text-gray-500 transition-colors border-b border-transparent hover:border-gray-500">
                                hello@prefenzo.com
                            </a>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Follow Us</h4>
                            <div className="flex gap-6">
                                {["IG", "BE", "LN", "TW"].map((social) => (
                                    <a key={social} href="#" className="font-bold hover:text-gray-400 pb-1 border-b border-black hover:border-gray-400 transition-all">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>


                {/* Form Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                            We love to discuss your brand and business goals and objectives
                        </h2>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-12"
                    >
                        <div className="group relative">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="text"
                                placeholder="Company"
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                            />
                        </div>
                        <div ref={dropdownRef} className="group relative z-100">
                            <div
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 flex items-center justify-between cursor-pointer transition-colors focus-within:border-black hover:border-black"
                            >
                                <span className={`text-3xl font-medium ${!formData.budget ? 'text-black/20' : 'text-black'}`}>
                                    {formData.budget ? budgetOptions.find(o => o.value === formData.budget)?.label : "Budget"}
                                </span>
                                <motion.div
                                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowDown size={30} />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-full bg-white border border-black/10 shadow-xl mt-2 overflow-hidden"
                                    >
                                        {budgetOptions.map((option) => (
                                            <div
                                                key={option.value}
                                                onClick={() => {
                                                    setFormData({ ...formData, budget: option.value });
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="px-6 py-4 text-xl hover:bg-black hover:text-white transition-colors cursor-pointer border-b border-black/5 last:border-none"
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="group relative flex items-center">
                            <textarea
                                placeholder="Message"
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 pr-16 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20 min-h-[100px] resize-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 bottom-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 active:scale-95"
                            >
                                <ArrowRight className="-rotate-45 hover:rotate-0 transition-all" size={32} />
                            </button>
                        </div>
                    </motion.form>
                </section>

            </div>
        </main>
    );
}
