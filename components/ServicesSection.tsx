"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "UX/UI Design",
    subtitle: "Intuitive, clean interfaces that users love",
    description: "We craft intuitive, conversion-focused user experiences and beautiful, clean interfaces that users love. From research and wireframes to high-fidelity prototypes, we design digital products that feel effortless and perform seamlessly across all devices."
  },
  {
    title: "Branding",
    subtitle: "Distinctive brand identities that leave a mark",
    description: "We create bold, memorable brand identities that stand the test of time. Our branding services include naming, strategy, visual identity, tone of voice, and brand systems, all designed to position your brand uniquely and powerfully in the market."
  },
  {
    title: "Web & App Development",
    subtitle: "Powerful digital products, delivered seamlessly",
    description: "We turn your ideas into functional digital products, fast. From apps to platforms, we deliver reliable solutions that scale – built by our senior development team."
  },
  {
    title: "Webflow Development & Framer",
    subtitle: "Modern websites that look great and work better",
    description: "We build visually striking, user-centric websites that combine form and function. We develop using Webflow, Framer, and WordPress, selecting the right technology to deliver scalable, high-performance results tailored to your goals."
  },
  {
    title: "Marketing Collateral",
    subtitle: "Engaging, on-brand designs that bring your story to life",
    description: "From pitch decks and social media assets to product one-pagers and event visuals, we design cohesive, on-brand marketing materials that communicate your message quickly, clearly, and with impact, helping you sell your story at first glance."
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen texture-dark text-white px-6 md:px-20 py-24 font-clash selection:bg-white selection:text-black">

      {/* DOTTED TEXTURE */}


      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-32">
          <div className="max-w-4xl">
            <p className="text-[#666] text-large  uppercase tracking-[0.2em] mb-12">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight max-w-[900px]">
              We deliver{" "}
              <span className="hero-font italic text-[#A0BEB0] relative inline-block">
                exceptional
                {/* SVG Underline matched to the scratch design */}
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
              digital experiences that elevate your brand.
            </h2>
          </div>
          <div className="lg:max-w-xs mt-12 lg:mt-[11rem] text-[#888] text-sm md:text-base leading-relaxed font-medium">
            Helping businesses scale with top-tier design, development, and marketing strategies perfectly tailored to your goals.
          </div>
        </div>

        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-white/20 pt-8 pb-4 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.75rem] font-medium tracking-tight text-white mb-1">
                    {service.title}
                  </h2>
                  <p className="text-[#cbcbcb] text-sm md:text-base font-medium font-sans">
                    {service.subtitle}
                  </p>
                </div>

                {/* Chevron Icon */}
                <motion.div
                  animate={{ rotate: hoveredIndex === index ? 0 : 180 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-white/60 group-hover:text-white transition-colors mt-2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 pb-4 text-[#e2e2e2] text-base md:text-lg leading-relaxed max-w-7xl font-sans">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* BOTTOM BORDER */}
        <div className="border-t border-white/20 mt-4"></div>

      </div>
    </section>
  );
}