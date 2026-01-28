"use client";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && (
                <LoadingScreen onLoadingComplete={handleLoadingComplete} />
            )}
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
