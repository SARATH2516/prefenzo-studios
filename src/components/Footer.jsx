"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200 text-center">
            <div className="container mx-auto px-6">
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">Prefenzo Studio</h3>
                <p className="text-gray-400 mb-6 font-medium">
                    Branding • Content • Digital Marketing • Growth
                </p>
                <p className="text-gray-500 text-sm mb-8">
                    Professional. Consistent. Effective.
                </p>

                <div className="flex justify-center gap-8 mb-8 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                    <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
                    <Link href="/industries" className="hover:text-blue-600 transition-colors">Industries</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </div>

                <div className="text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} Prefenzo Studios. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
