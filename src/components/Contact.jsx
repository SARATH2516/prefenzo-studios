"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                        >
                            Let's create something <span className="text-gray-400">extraordinary.</span>
                        </motion.h2>
                        <div className="flex gap-4">
                            <a href="mailto:hello@prefenzo.com" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                        <div className="space-y-4">
                            <h4 className="text-gray-900 font-semibold text-lg">Contact</h4>
                            <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                                <Mail size={18} />
                                <span>prefenzostudios@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                                <Phone size={18} />
                                <span>+91 6369269611</span>
                            </div>
                            <div className="flex items-start gap-3 hover:text-blue-600 transition-colors cursor-pointer">
                                <MapPin size={18} />
                                <span>BBC,NGPASC,Coimbatore-48</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-gray-900 font-semibold text-lg">Socials</h4>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={24} /></a>
                                <a href="#" className="hover:text-blue-600 transition-colors"><Instagram size={24} /></a>
                                <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                                <a href="#" className="hover:text-blue-600 transition-colors"><Github size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Prefenzo Studios. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
