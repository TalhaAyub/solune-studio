"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isDarkPage = pathname !== "/our-work" && pathname?.startsWith("/our-work/");
    return (
        <>
            {/* LOGO LAYER (behind circle) */}
            <div className="absolute top-12 left-0 w-full z-[100] pointer-events-none">
                <div className="max-w-[1440px] w-full px-6 md:px-20 mx-auto flex items-center">
                    <Link href="/" className="cursor-pointer z-100 block pointer-events-auto">
                        <img
                            src="/logo with name.svg"
                            alt="Solune Studio"
                            className={`h-24 w-auto nav-logo ${isDarkPage ? "invert" : ""}`}
                        />
                    </Link>
                </div>
            </div>

            {/* NAV LINKS LAYER (above circle) */}
            <div className="fixed top-12 left-0 w-full z-[200] pointer-events-none">
                <div className="max-w-[1440px] w-full px-6 md:px-20 mx-auto flex justify-end">

                    <div className="bg-white text-black rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.08)] transition-all duration-300 pointer-events-auto">

                        <Link href="/about" className="group text-lg font-medium px-5 py-2 rounded-full hover:bg-[#A0BEB0] transition-colors duration-300 cursor-pointer overflow-hidden flex items-center justify-center">
                            <span className="relative overflow-hidden inline-flex">
                                <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">About</span>
                                <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full text-black">About</span>
                            </span>
                        </Link>

                        <Link href="/services" className="group text-lg font-medium px-5 py-2 rounded-full hover:bg-[#A0BEB0] transition-colors duration-300 cursor-pointer overflow-hidden flex items-center justify-center">
                            <span className="relative overflow-hidden inline-flex">
                                <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Services</span>
                                <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full text-black">Services</span>
                            </span>
                        </Link>

                        <Link href="/our-work" className="group text-lg font-medium px-5 py-2 rounded-full hover:bg-[#A0BEB0] transition-colors duration-300 cursor-pointer overflow-hidden flex items-center justify-center">
                            <span className="relative overflow-hidden inline-flex">
                                <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Our Work</span>
                                <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full text-black">Our Work</span>
                            </span>
                        </Link>

                        

                        <Link href="/contact" className="group bg-[#A0BEB0] text-black px-8 py-2.5 rounded-full text-lg font-medium border border-black hover:bg-[#789b89] hover:scale-105 active:scale-95 transition-all duration-300 ml-4 overflow-hidden flex items-center justify-center block">
                            <span className="relative overflow-hidden inline-flex">
                                <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Let&apos;s Talk!</span>
                                <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Let&apos;s Talk!</span>
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    );
}