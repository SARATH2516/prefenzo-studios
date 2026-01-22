"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform, useInView } from "framer-motion";
import { Search, Map, Zap, Rocket, LineChart, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understand",
        headline: "Deep Dive Analysis",
        desc: "We begin by immersing ourselves in your brand's world. Understanding your audience, market position, and core objectives is the foundation of our strategy.",
        icon: <Search className="w-8 h-8 text-white" />,
        color: "bg-blue-600",
        textColor: "text-blue-600",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
    },
    {
        number: "02",
        title: "Plan",
        headline: "Strategic Roadmap",
        desc: "Data meets creativity. We craft a comprehensive roadmap that defines content pillars, channels, and the tone of voice that will resonate with your audience.",
        icon: <Map className="w-8 h-8 text-white" />,
        color: "bg-purple-600",
        textColor: "text-purple-600",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80"
    },
    {
        number: "03",
        title: "Execute",
        headline: "Creative Production",
        desc: "This is where magic happens. Our team of expert creators brings the strategy to life with high-fidelity visuals, compelling copy, and dynamic media.",
        icon: <Zap className="w-8 h-8 text-white" />,
        color: "bg-yellow-500",
        textColor: "text-yellow-500",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
    },
    {
        number: "04",
        title: "Promote",
        headline: "Targeted Distribution",
        desc: "Great content needs eyes. We leverage targeted distribution channels to ensure your message reaches the right people at the right time.",
        icon: <Rocket className="w-8 h-8 text-white" />,
        color: "bg-pink-600",
        textColor: "text-pink-600",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80"
    },
    {
        number: "05",
        title: "Monitor",
        headline: "Continuous Optimization",
        desc: "We don't set and forget. We rigorously track performance metrics, analyze engagement, and refine our approach for maximum ROI.",
        icon: <LineChart className="w-8 h-8 text-white" />,
        color: "bg-green-600",
        textColor: "text-green-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
    },
];

export default function Approach() {
    const containerRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Directly transform scroll progress to height/scale for absolute precision
    const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const smoothProgress = useSpring(progressScale, { damping: 30, stiffness: 200 });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const stepIndex = Math.min(
            Math.floor(latest * steps.length),
            steps.length - 1
        );
        setActiveStep(stepIndex);
    });

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-white snap-start">
            {/* Scroll Snap Anchors - Invisible divs to "catch" the scroll */}
            <div className="absolute inset-0 pointer-events-none">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className="h-screen w-full snap-start snap-stop-always"
                    />
                ))}
            </div>

            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row bg-white z-20">

                {/* Left Side: Content & Navigation */}
                <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative bg-white z-20 order-2 md:order-1">

                    {/* Progress Indicator - Prominent & Reliable */}
                    <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 h-[300px] w-[4px] bg-gray-100 hidden md:block rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleY: smoothProgress, transformOrigin: "top" }}
                            className="w-full h-full bg-black"
                        />
                    </div>

                    <div className="max-w-xl mx-auto md:ml-16">
                        <div className="mb-12">
                            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">Our Process</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-black font-(family-name:--font-manrope)">
                                How We Work
                            </h3>
                        </div>

                        <div className="relative h-[300px]">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        opacity: activeStep === index ? 1 : 0,
                                        y: activeStep === index ? 0 : 20,
                                        pointerEvents: activeStep === index ? "auto" : "none"
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute top-0 left-0 w-full"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className={`text-6xl font-bold ${step.textColor} stroke-text`}>
                                            {step.number}
                                        </span>
                                        <div className={`p-3 rounded-xl ${step.color} shadow-lg scale-110`}>
                                            {step.icon}
                                        </div>
                                    </div>

                                    <h4 className="text-3xl font-bold text-gray-900 mb-4 font-(family-name:--font-manrope)">
                                        {step.headline}
                                    </h4>

                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {step.desc}
                                    </p>

                                    <button className="group flex items-center text-sm font-semibold text-black gap-2 hover:gap-3 transition-all">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals - With Curve & Padding */}
                <div className="w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden order-1 md:order-2 bg-white flex items-center justify-center p-8 md:pl-16 md:pr-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 w-full h-full flex items-center justify-center p-8 md:pl-16"
                        >
                            {/* Clipping Mask Animation Container */}
                            <motion.div
                                initial={{ clipPath: "inset(50% 50% 50% 50%)", borderRadius: "24px" }}
                                animate={{
                                    clipPath: activeStep === index ? "inset(0% 0% 0% 0%)" : "inset(50% 50% 50% 50%)",
                                    zIndex: activeStep === index ? 10 : 0,
                                    borderRadius: "24px"
                                }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-[65%] relative"
                            >
                                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover scale-105"
                                    />
                                    {/* Modern gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Floating Label on Image */}
                                    <div className="absolute bottom-12 left-12 text-white p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl">
                                        <h3 className="text-2xl font-bold font-(family-name:--font-manrope)">{step.title}</h3>
                                        <div className={`h-1.5 w-16 ${step.color} mt-3 rounded-full`} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
