"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

const images = {
    // Layer 1: Outer edges (6 images)
    layer1: [
        "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmYXNoaW9ufGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwZmFzaGlvbiUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    // Layer 2: Inner columns (6 images)
    layer2: [
        "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBwcm9kdWN0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25ld2hlZWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D",
    ],
    // Layer 3: Center column top and bottom (2 images)
    layer3: [
        "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    center: "https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
};

export function ScrollGallery() {
    const containerRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [imageScale, setImageScale] = useState(7);
    const [layer1Opacity, setLayer1Opacity] = useState(0);
    const [layer1Scale, setLayer1Scale] = useState(0);
    const [layer2Opacity, setLayer2Opacity] = useState(0);
    const [layer2Scale, setLayer2Scale] = useState(0);
    const [layer3Opacity, setLayer3Opacity] = useState(0);
    const [layer3Scale, setLayer3Scale] = useState(0);

    // Intersection Observer to detect when component is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.5,
                rootMargin: "0px"
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isInView]);

    // Auto-play animation when in view
    useEffect(() => {
        if (!isInView || animationComplete) return;

        // Lock scroll
        document.body.style.overflow = 'hidden';

        const timeline = async () => {
            // Animate center image scaling down
            await animate(imageScale, 1, {
                duration: 2,
                ease: "easeInOut",
                onUpdate: (v) => setImageScale(v)
            });

            // Animate Layer 1 (starts at 30% of timeline)
            animate(layer1Opacity, 1, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate: (v) => setLayer1Opacity(v)
            });
            await animate(layer1Scale, 1, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate: (v) => setLayer1Scale(v)
            });

            // Animate Layer 2
            animate(layer2Opacity, 1, {
                duration: 1.2,
                ease: "easeOut",
                onUpdate: (v) => setLayer2Opacity(v)
            });
            await animate(layer2Scale, 1, {
                duration: 1.2,
                ease: "easeOut",
                onUpdate: (v) => setLayer2Scale(v)
            });

            // Animate Layer 3
            animate(layer3Opacity, 1, {
                duration: 1,
                ease: "easeOut",
                onUpdate: (v) => setLayer3Opacity(v)
            });
            await animate(layer3Scale, 1, {
                duration: 1,
                ease: "easeOut",
                onUpdate: (v) => setLayer3Scale(v)
            });

            // Animation complete - unlock scroll
            setAnimationComplete(true);
            document.body.style.overflow = '';
        };

        timeline();

        return () => {
            document.body.style.overflow = '';
        };
    }, [isInView, animationComplete]);

    return (
        <div ref={containerRef} className="bg-white text-black min-h-screen flex items-center justify-center py-12 md:py-16">
            <div className="relative w-full max-w-[1600px] mx-auto px-8">
                {/* Grid Container */}
                <div className="grid grid-cols-3 md:grid-cols-5 grid-rows-3 gap-[clamp(10px,7.35vw,80px)] relative max-h-[85vh]">

                    {/* Center Scaler Image */}
                    <motion.div
                        style={{
                            scale: imageScale,
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[375px]"
                    >
                        <img
                            src={images.center}
                            alt="Center"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </motion.div>

                    {/* Layer 1: Outer edges */}
                    {images.layer1.map((src, idx) => {
                        const positions = [
                            "col-start-1 row-start-1",
                            "col-start-1 row-start-2",
                            "col-start-1 row-start-3",
                            "col-start-3 md:col-start-5 row-start-1",
                            "col-start-3 md:col-start-5 row-start-2",
                            "col-start-3 md:col-start-5 row-start-3",
                        ];
                        return (
                            <motion.div
                                key={`layer1-${idx}`}
                                style={{ opacity: layer1Opacity, scale: layer1Scale }}
                                className={positions[idx]}
                            >
                                <img src={src} alt="" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                            </motion.div>
                        );
                    })}

                    {/* Layer 2: Inner columns (hidden on mobile) */}
                    {images.layer2.map((src, idx) => {
                        const positions = [
                            "hidden md:block col-start-2 row-start-1",
                            "hidden md:block col-start-2 row-start-2",
                            "hidden md:block col-start-2 row-start-3",
                            "hidden md:block col-start-4 row-start-1",
                            "hidden md:block col-start-4 row-start-2",
                            "hidden md:block col-start-4 row-start-3",
                        ];
                        return (
                            <motion.div
                                key={`layer2-${idx}`}
                                style={{ opacity: layer2Opacity, scale: layer2Scale }}
                                className={positions[idx]}
                            >
                                <img src={src} alt="" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                            </motion.div>
                        );
                    })}

                    {/* Layer 3: Center column top and bottom (hidden on mobile) */}
                    <motion.div
                        style={{ opacity: layer3Opacity, scale: layer3Scale }}
                        className="hidden md:block col-start-3 row-start-1"
                    >
                        <img src={images.layer3[0]} alt="" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                    </motion.div>
                    <motion.div
                        style={{ opacity: layer3Opacity, scale: layer3Scale }}
                        className="hidden md:block col-start-3 row-start-3"
                    >
                        <img src={images.layer3[1]} alt="" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}