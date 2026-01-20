"use client";
import { CheckCircle } from "lucide-react";

const industries = [
    "Salons & personal care",
    "Restaurants & cafes",
    "Clinics & healthcare",
    "Real estate & builders",
    "Educational institutions",
    "Retail & showrooms",
    "Startups & new brands",
    "Manufacturing & industrial",
    "Hotels & hospitality",
    "Events & entertainment"
];

export default function IndustryList() {
    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Work With</h2>
                    <p className="text-gray-600 text-lg">
                        We work with businesses across multiple industries, adapting our strategy based on goals, audience, and scale.
                        No matter the industry, our approach remains professional, consistent, and growth-focused.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                            <CheckCircle size={20} className="text-blue-600 shrink-0" />
                            <span className="text-gray-700 font-medium">{industry}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
