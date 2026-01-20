"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen text-gray-900 pt-24 pb-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-10">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Get in Touch</h1>
                        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                        <p className="text-xl text-gray-600 mb-12">
                            Let’s discuss how we can support your business digitally.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Phone className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+91 63692 69611</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <Mail className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">prefenzostudios@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <MapPin className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Location</h3>
                                    <p className="text-gray-600">BBC,NGPASC,Coimbatore</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Quick Enquiry</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder="Your Business"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                                    placeholder="+91"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Requirement</label>
                                <textarea
                                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors h-32 resize-none"
                                    placeholder="Tell us what you need..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
