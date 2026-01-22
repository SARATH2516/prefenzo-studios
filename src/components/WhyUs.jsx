"use client";

export default function WhyUs() {
    return (
        <section className="py-24 bg-white text-black snap-start snap-stop-always">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Why Prefenzo Studio?</h2>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-8 border-l-4 border-black pl-6">
                            Businesses choose us because we offer more than just services.
                            We handle the digital complexity so you can focus on running your business.
                        </h3>
                    </div>

                    <div className="space-y-6">
                        {[
                            "End-to-end digital capability",
                            "Strong focus on visuals and branding",
                            "Marketing and promotion expertise",
                            "Consistent execution and quality control",
                            "Long-term partnership mindset"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-200">
                                <span className="text-2xl font-bold text-gray-300">{(index + 1).toString().padStart(2, '0')}</span>
                                <span className="text-lg font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 bg-blue-600 text-white rounded-3xl p-12 text-center shadow-2xl shadow-blue-200">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let’s Build Your Digital Presence</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                        If you’re looking for a reliable digital partner who can manage shoots, content, marketing, and promotions — we’re ready to work with you.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition-colors hover:scale-105 transform duration-300 shadow-lg">
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}
