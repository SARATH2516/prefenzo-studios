"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Portfolio",
        href: "/portfolio",
        dropdown: [
            { name: "Pre-Wedding", href: "/portfolio/pre-wedding" },
            { name: "Engagement", href: "/portfolio/engagement" },
            { name: "Reception", href: "/portfolio/reception" },
            { name: "Family", href: "/portfolio/guest-family" },
            { name: "Puberty", href: "/portfolio/puberty" },
            { name: "Birthday", href: "/portfolio/birthday" },
            { name: "Baby Shower", href: "/portfolio/baby-shower" },
        ]
    },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Determine if the current page has a dark background
    const isDarkPage = ["/", "/industries"].includes(pathname);

    // Theme color classes
    const textColor = isDarkPage ? "text-white" : "text-black";
    const hoverTextColor = isDarkPage ? "group-hover:text-black" : "group-hover:text-white";
    const hoverBgColor = isDarkPage ? "bg-white" : "bg-black";
    const studiosColor = isDarkPage ? "text-white" : "text-black";

    return (
        <nav
            className={cn(
                "absolute top-0 left-0 right-0 z-50 py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-bold tracking-tighter relative z-50 group flex items-center gap-1 transition-transform duration-300",
                        textColor
                    )}
                >
                    <span className={cn(
                        "px-2 font-black tracking-wide transition-all duration-300",
                        isDarkPage ? "bg-white text-black" : "bg-black text-white"
                    )}>
                        PREFENZO
                    </span>
                    <span className={cn(
                        "font-black transition-colors tracking-wide",
                        studiosColor
                    )}>
                        STUDIOS
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/item">
                            <Link
                                href={link.href}
                                className={cn(
                                    "px-6 py-2.5 text-sm font-bold transition-all duration-300 tracking-widest relative flex items-center gap-1 group overflow-hidden uppercase",
                                    textColor,
                                    hoverTextColor
                                )}
                            >
                                {/* Rectangular Hover Background */}
                                <span className={cn(
                                    "absolute inset-0 -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out",
                                    hoverBgColor
                                )} />

                                <span className={cn(
                                    "relative z-10 transition-colors duration-500 font-bold",
                                    isDarkPage ? "group-hover:text-black" : "group-hover:text-white"
                                )}>
                                    {link.name}
                                </span>
                            </Link>

                            {/* Dropdown Desktop */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 translate-y-2 group-hover/item:translate-y-0 z-50">
                                    <div className="bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-2xl overflow-hidden py-2">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-6 py-3 text-[10px] font-black text-gray-400 hover:text-white hover:bg-black transition-all duration-200 uppercase tracking-widest border-l-4 border-transparent hover:border-black"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden z-50 p-2 transition-all duration-300 active:scale-95",
                        textColor,
                        isOpen ? "text-black" : ""
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-10 md:hidden z-40"
                        >
                            <div className="flex flex-col items-center gap-8 w-full px-10">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="w-full text-center"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-6xl font-black text-gray-100 hover:text-black transition-all duration-300 tracking-tighter uppercase"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Mobile Text */}
                            <div className="absolute bottom-10 left-10 text-[10vw] font-black text-gray-50 opacity-10 pointer-events-none select-none uppercase leading-none">
                                Prefenzo <br /> Studios
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

