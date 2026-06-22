"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        number: "01.",
        title: "DISCOVERY & STRATEGY",
        description: "We start by diving deep into your brand's vision, goals, and target audience to lay a solid foundation for the project.",
        points: [
            "Comprehensive brand and market analysis",
            "Defining core objectives and deliverables",
            "Delivering a tailored strategy roadmap"
        ]
    },
    {
        number: "02.",
        title: "ONBOARDING & PLANNING",
        description: "Once the strategy is set, we seamlessly integrate you into our workflow, ensuring transparent communication and clear timelines.",
        points: [
            "Setting up project management channels",
            "Establishing milestones and clear timelines",
            "Gathering necessary assets and resources"
        ]
    },
    {
        number: "03.",
        title: "DESIGN & DEVELOPMENT",
        description: "Our experts bring your vision to life with precision and creativity, crafting a high-performance, user-centric solution.",
        points: [
            "Iterative UI/UX design and prototyping",
            "Robust and scalable technical development",
            "Continuous feedback loops and refinements"
        ]
    },
    {
        number: "04.",
        title: "TESTING & LAUNCH",
        description: "Before going live, we rigorously test every aspect to ensure a flawless launch. We then hand over the keys and support your growth.",
        points: [
            "Comprehensive QA and performance testing",
            "Final deployment and seamless handover",
            "Ongoing maintenance and optimization support"
        ]
    }
];

export default function HowWeWork() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const prevElement = sectionRef.current?.previousElementSibling as HTMLElement | null;

        if (prevElement) {
            // Ensure HowWeWork overlaps ServicesSection during transition
            gsap.set(sectionRef.current, { zIndex: 20 });
            gsap.set(prevElement, { zIndex: 10, position: "relative" });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom", // Animation starts when HowWeWork's top enters screen
                end: "top top",      // Animation ends when HowWeWork fully covers screen
                scrub: true,
                snap: {
                    snapTo: [0, 1], // Enforces exactly ONE single scroll action (no partial states)
                    duration: { min: 0.8, max: 1.2 },
                    ease: "power2.inOut",
                    delay: 0,
                }
            }
        });

        if (prevElement) {
            // Translating previous element down by exactly 100vh while the user scrolls down 100vh
            // Perfectly pins the Services section visually in place so HowWeWork slides over it!
            tl.fromTo(prevElement, 
                { y: 0 },
                { y: () => window.innerHeight, ease: "none" },
                0
            );
        }

        return () => {
            tl.kill();
            ScrollTrigger.refresh();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative z-20 texture-light text-black py-24 md:py-32 px-6 md:px-20 font-clash min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
            {/* The light theme base (dotted texture) */}
            <div className="absolute inset-0 texture-light z-0"></div>

            <div className="w-full mx-auto relative z-20">
                {/* Header Area */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-40">
                    <div className="max-w-4xl">
                        <p className="text-[#666] text-sm md:text-base uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#666]"></span>
                            HOW WE WORK
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight max-w-[900px]">
                            Unlock your{" "}
                            <span className="hero-font italic text-[#A0BEB0] relative inline-block">
                                brand's
                                <svg
                                    className="absolute -bottom-3 left-0 w-[110%] h-[16px] text-[#86AA97] -translate-x-2"
                                    viewBox="0 0 100 20"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2 13 Q 30 7 98 12 Q 50 18 8 16"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        className="opacity-90"
                                    />
                                    <path
                                        d="M10 18 Q 50 12 90 18"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeLinecap="round"
                                        className="opacity-60"
                                    />
                                </svg>
                            </span>{" "}
                            full potential.
                        </h2>
                    </div>
                    <div className="lg:max-w-xs mt-12 lg:mt-[8.5rem] text-gray-600 text-sm md:text-base leading-relaxed font-medium lg:-translate-x-[100px]">
                        We work closely with our clients to understand their goals and target audience. Our team of experts crafts transparent, milestone-driven processes that turn ambitious visions into stunning digital realities.
                    </div>
                </div>

                <div className="flex flex-col gap-10 md:gap-16 w-full relative pb-32">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            style={{ "--card-top": `calc(15vh + ${index * 5.5}rem)` } as React.CSSProperties}
                            className="relative md:sticky border border-black/20 rounded-2xl md:rounded-3xl overflow-hidden bg-[#fafafa] min-h-[45vh] transition-all ease-in-out duration-300 md:top-[var(--card-top)]"
                        >
                            {/* Header */}
                            <div className="h-[5.5rem] bg-black/5 px-6 md:px-12 flex items-center gap-4 border-b border-black/20 backdrop-blur-sm">
                                <span className="text-2xl md:text-3xl font-medium">{step.number}</span>
                                <h3 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Body */}
                            <div className="px-8 md:px-12 py-8 md:py-10">
                                <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
                                    {step.description}
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg">
                                    {step.points.map((point, ptIdx) => (
                                        <li key={ptIdx} className="pl-2 marker:text-black/50">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}