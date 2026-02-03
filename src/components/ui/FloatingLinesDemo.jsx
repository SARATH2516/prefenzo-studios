"use client";
import React from "react";
import FloatingLines from "./FloatingLines";

export default function FloatingLinesDemo() {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }} className="flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={5}
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                <h2 className="text-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
                    Prefenzo Studios, <br /> Creative Digital Growth.
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-white/80 font-medium">
                    Empowering brands with professional content, consistent digital presence,
                    and effective growth strategies tailored for the modern market.
                </p>
            </div>
        </div>
    );
}
