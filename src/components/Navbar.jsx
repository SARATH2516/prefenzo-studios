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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="absolute top-0 left-0 right-0 z-50 py-6 bg-transparent border-b border-transparent"
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-bold tracking-tighter relative z-50 group flex items-center gap-2",
                        isScrolled || !isHome ? "text-black" : "text-white"
                    )}
                >
                    <span className="bg-white px-2 font-black tracking-wide text-black">PREFENZO</span>
                    <span className={cn("font-black  transition-colors tracking-wide", isScrolled || !isHome ? "text-gray-600 group-hover:text-blue-600" : "text-gray-300 group-hover:text-white")}>
                        STUDIOS
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/item">
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-base font-medium hover:text-blue-600 transition-colors tracking-wide relative flex items-center gap-1 py-4",
                                    isScrolled || !isHome ? "text-gray-600" : "text-white"
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover/item:w-full" />
                            </Link>

                            {/* Dropdown Desktop */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 translate-y-2 group-hover/item:translate-y-0 shadow-2xl">
                                    <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-xl overflow-hidden py-2 p-1 shadow-xl">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-2 text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
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
                    className="md:hidden z-50 text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col items-center">
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-light text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 px-6">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
