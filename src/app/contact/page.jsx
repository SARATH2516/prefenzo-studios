"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin, Check, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        const { name, email, phoneNumber, message } = formData;

        try {
            const response = await fetch("https://formspree.io/f/mwvnelbl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone: phoneNumber,
                    message
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phoneNumber: "", message: "" });
                // Auto-hide success message after 3 seconds
                setTimeout(() => {
                    setStatus("idle");
                }, 3000);
            } else {
                console.error("Formspree submission failed");
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

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
                            <div className="space-y-3">
                                <a href="mailto:prefenzotechnologies@gmail.com" className="block text-xl md:text-2xl font-medium hover:text-gray-500 transition-all hover:scale-105 hover:translate-x-2">
                                    prefenzotechnologies@gmail.com
                                </a>
                                <a href="tel:+916369269611" className="block text-xl md:text-2xl font-medium hover:text-gray-500 transition-all hover:scale-105 hover:translate-x-2">
                                    +91 6369269611
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-12 ml-8"
                    >
                        <div className="ml-20">
                            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Follow Us</h4>
                            <a
                                href="https://www.instagram.com/prefenzostudio?igsh=bzdycnhhdmJxZzV1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block hover:scale-110 transition-transform"
                            >
                                <Instagram size={36} className="text-black" strokeWidth={1.5} />
                            </a>
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
                        onSubmit={handleSubmit}
                        className="space-y-12"
                    >
                        <div className="group relative">
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                            />
                        </div>

                        <div className="group relative flex items-center">
                            <textarea
                                placeholder="Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-transparent border-b-[2px] border-black/10 py-4 pr-16 text-3xl font-medium focus:outline-none focus:border-black transition-colors placeholder:text-black/20 min-h-[100px] resize-none"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="absolute right-0 bottom-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                ) : status === "success" ? (
                                    <Check size={32} className="text-white" />
                                ) : (
                                    <ArrowRight className="-rotate-45 hover:rotate-0 transition-all" size={32} />
                                )}
                            </button>
                        </div>
                        {status === "error" && (
                            <p className="text-black/60 text-sm mt-4 font-medium">Failed to send message. Please try again or email us directly.</p>
                        )}
                        {status === "success" && (
                            <p className="text-black text-sm mt-4 font-bold">Message sent successfully! We'll get back to you soon.</p>
                        )}
                    </motion.form>
                </section>

            </div>
        </main>
    );
}
