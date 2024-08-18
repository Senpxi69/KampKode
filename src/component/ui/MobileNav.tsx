import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const MobileNav = ({ className }: { className?: string }) => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto"; // Ensure it's reset when component unmounts
        };
    }, [open]);

    return (
        <>
            {/* Mobile Navbar */}
            <div
                className={cn(
                    "fixed top-0 left-0 w-full bg-white z-[5000] flex justify-between items-center p-4 transition-transform duration-300",
                    {
                        "-translate-y-full": !visible, // Hide navbar on scroll down
                    },
                    className
                )}
            >
                {/* Logo */}
                <p className="text-2xl font-bold">
                    <span className="text-[#7f56d9]">N</span>AV
                </p>

                {/* Hamburger Menu Button */}
                <button
                    onClick={handleToggle}
                    className={cn(
                        "w-10 h-10 flex items-center justify-center text-black text-3xl",
                        { "text-[#5d2a7c]": open } // Optional: Change color when open
                    )}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Full-Screen Overlay */}
            <div
                className={cn(
                    "fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[4000] transition-opacity duration-300",
                    { "opacity-0 pointer-events-none": !open, "opacity-100": open }
                )}
            >
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: open ? 0 : "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-[80%] h-full mt-16 bg-white p-8 flex flex-col space-y-8 z-[5000]"
                >
                    {/* Navigation Links */}
                    <a href="#home" className="text-2xl font-semibold text-black">Home</a>
                    <a href="#product" className="text-2xl font-semibold text-black">Product</a>
                    <a href="#resource" className="text-2xl font-semibold text-black">Resource</a>
                    <a href="#pricing" className="text-2xl font-semibold text-black">Pricing</a>

                    {/* Buttons */}
                    <div className="mt-auto">
                        <button className="bg-[#f8f4ff] text-[#7f56d9] text-lg font-medium px-4 py-2 rounded-lg w-full mb-2">
                            Login
                        </button>
                        <button className="bg-[#7f56d9] text-white text-lg font-medium px-4 py-2 rounded-lg w-full">
                            Sign up
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    );
};
