"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onLoadingComplete }) {
    const [stage, setStage] = useState(0); // 0: initial, 1: full text, 2: zoom, 3: complete

    useEffect(() => {
        // Stage 1: Show full text after initial delay
        const timer1 = setTimeout(() => setStage(1), 500);

        // Stage 2: Start zoom effect
        const timer2 = setTimeout(() => setStage(2), 2000);

        // Stage 3: Complete and hide
        const timer3 = setTimeout(() => {
            setStage(3);
            onLoadingComplete();
        }, 3200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {stage < 3 && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-100 bg-white flex items-center justify-center overflow-hidden"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: stage >= 1 ? 1 : 0,
                            scale: stage === 2 ? 1.5 : 1,
                        }}
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut" },
                            scale: { duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }
                        }}
                        className="text-center"
                    >
                        {/* PREFENZO */}
                        <motion.div
                            className="overflow-hidden mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: stage >= 1 ? 1 : 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: stage >= 1 ? 0 : 100 }}
                                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-black"
                            >
                                PREFENZO
                            </motion.h1>
                        </motion.div>

                        {/* STUDIOS */}
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: stage >= 1 ? 1 : 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <motion.h2
                                initial={{ y: 100 }}
                                animate={{ y: stage >= 1 ? 0 : 100 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
                                className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] text-gray-600"
                            >
                                STUDIOS
                            </motion.h2>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
