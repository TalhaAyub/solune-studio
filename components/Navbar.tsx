"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const isDarkPage = pathname?.startsWith("/our-work");
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const hasMarquee = pathname === "/";

    return (
        <>
            {/* HEADER LAYER */}
            <div className={`fixed left-0 w-full pointer-events-none transition-all duration-300 ${
                isOpen ? "z-[300]" : "z-[200]"
            } ${
                isScrolled
                ? (hasMarquee ? "top-4 md:top-4" : "top-2 md:top-4")
                : (hasMarquee ? "top-14 md:top-20" : "top-6 md:top-12")
            }`}>
                <div className="max-w-[1440px] w-full px-6 md:px-20 mx-auto flex items-center justify-between">
                    <Link href="/" className="cursor-pointer z-100 block pointer-events-auto">
                        <img
                            src="/logo with name.svg"
                            alt="Solune Studio"
                            className={`w-auto nav-logo transition-all duration-300 ${
                                isScrolled ? "h-10 md:h-14" : "h-14 md:h-24"
                            } ${
                                (isDarkPage || isOpen) ? "invert" : ""
                            }`}
                        />
                    </Link>

                    {/* DESKTOP NAV LINKS */}
                    <div className="hidden md:block pointer-events-auto">
                        <div className={`bg-white text-black rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.08)] transition-all duration-300 ${
                            isScrolled ? "px-3 py-1.5" : "px-4 py-2"
                        }`}>
                            <Link href="/about" className={`group font-medium rounded-full hover:bg-[#A0BEB0] transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center ${
                                isScrolled ? "text-base px-4 py-1.5" : "text-lg px-5 py-2"
                            }`}>
                                <span className="relative overflow-hidden inline-flex">
                                    <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">About</span>
                                    <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full text-black">About</span>
                                </span>
                            </Link>

                            <Link href="/services" className={`group font-medium rounded-full hover:bg-[#A0BEB0] transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center ${
                                isScrolled ? "text-base px-4 py-1.5" : "text-lg px-5 py-2"
                            }`}>
                                <span className="relative overflow-hidden inline-flex">
                                    <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Services</span>
                                    <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full text-black">Services</span>
                                </span>
                            </Link>

                            <Link href="/our-work" className={`group font-medium rounded-full hover:bg-[#A0BEB0] transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center ${
                                isScrolled ? "text-base px-4 py-1.5" : "text-lg px-5 py-2"
                            }`}>
                                <span className="relative overflow-hidden inline-flex">
                                    <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Our Work</span>
                                    <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full text-black">Our Work</span>
                                </span>
                            </Link>

                            <Link href="/contact" className={`group bg-[#A0BEB0] text-black rounded-full border border-black hover:bg-[#789b89] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center justify-center block ${
                                isScrolled ? "px-6 py-2 text-base ml-2" : "px-8 py-2.5 text-lg font-medium ml-4"
                            }`}>
                                <span className="relative overflow-hidden inline-flex">
                                    <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Let&apos;s Talk!</span>
                                    <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Let&apos;s Talk!</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className={`flex pointer-events-auto items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
                            isScrolled ? "p-2" : "p-3"
                        } ${
                            (isDarkPage || isOpen)
                            ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
                            : "bg-black/5 border-black/10 text-black hover:bg-black/10"
                        }`}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAVIGATION OVERLAY */}
            <div className="block">
                <AnimatePresence>
                    {mounted && isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100vh" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl z-[250] flex flex-col justify-center items-center px-8 text-white overflow-hidden pointer-events-auto"
                        >
                            {/* Mobile Menu Links */}
                            <div className="flex flex-col items-center gap-8 text-center mt-12 w-full">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    { name: "Our Work", href: "/our-work" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="text-4xl font-medium tracking-tight hover:text-[#A0BEB0] transition-colors duration-300 block"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                    className="mt-8 w-full max-w-xs"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={closeMenu}
                                        className="bg-[#A0BEB0] text-black w-full py-4 rounded-full text-xl font-bold flex items-center justify-center border border-black hover:bg-[#789b89] transition-colors duration-300 block text-center"
                                    >
                                        Let&apos;s Talk!
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
