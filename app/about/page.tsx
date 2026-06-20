"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

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

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="texture-light min-h-screen text-black font-clash relative overflow-hidden">
      <Navbar />

      {/* Light texture background base exactly like landing page */}
      <div className="absolute inset-0 texture-light z-0 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-12 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1] tracking-tight max-w-5xl mb-12 uppercase">
          Design that moves <span className="hero-font italic text-[#A0BEB0]">Brands Forward</span>
        </h1>
        
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-lg mt-16 group">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Team collaborating"
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </section>

      {/* About Description */}
      <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-widest uppercase text-black">About Solune</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            <p>
              We craft striking, high-performing websites for companies that want clarity, speed, and world-class quality.
            </p>
            <p>
              We work with startups, scale-ups, and global companies across technology, e-commerce, finance, real estate, hospitality, healthcare, and lifestyle. Our approach combines clean design, strategic thinking, and fast execution so your brand can move confidently in competitive markets.
            </p>
            <p>
              Our work is driven by clarity. Every brand identity, website, or digital product we create is built on intentional decisions, strong visual systems, and user-focused logic. We believe design should feel premium, communicate instantly, and support long-term growth.
            </p>
            <p className="font-bold text-black">
              Based globally and serving clients worldwide, we operate with an international mindset and a deep understanding of modern digital experiences.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-md mt-24 group">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Modern Office"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-widest uppercase mb-4 text-black">What We Offer</h2>
            <p className="text-gray-500 text-lg">All things design, we got you covered.</p>
          </div>
          <div className="lg:col-span-8 flex flex-col">
          {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group border-b border-black/10 py-8 cursor-pointer relative overflow-hidden transition-colors px-4 -mx-4 rounded-xl hover:bg-black/5"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-between items-start transition-transform duration-300">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl md:text-3xl font-medium mb-1 group-hover:text-[#6a8779] transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-sm md:text-base">{service.subtitle}</p>
                  </div>
                  
                  {/* Plus Icon rotates to X when expanded */}
                  <motion.div
                    animate={{ rotate: hoveredIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-3xl opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 mt-1"
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 pb-2 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4 text-black">Why Choose Solune?</h2>
        <p className="text-gray-500 mb-16 max-w-2xl text-lg lg:text-xl">
          Get reliable, high-quality design without the overhead of hiring in-house or dealing with freelancers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: "💸", title: "Predictable Pricing", color: "bg-blue-100 text-blue-600", text: "Clear product fees with no hidden charges. We keep design costs fully transparent." },
            { icon: "⚡", title: "Fast Turnaround", color: "bg-purple-100 text-purple-600", text: "High quality design delivered exactly to schedule. We value your tight deadlines." },
            { icon: "⭐", title: "Highest Quality", color: "bg-orange-100 text-orange-600", text: "Senior-level design for web, app, and brand experiences that perform beautifully." },
            { icon: "📈", title: "Scale Anytime", color: "bg-pink-100 text-pink-600", text: "Add new pages, features, or full products exactly when your business dictates." },
            { icon: "🔥", title: "Unique & Yours", color: "bg-yellow-100 text-yellow-600", text: "Custom designs created specifically for your brand. High-performance visuals that shine." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-black/5 rounded-[2rem] p-8 flex flex-col gap-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`w-14 h-14 text-2xl flex justify-center items-center rounded-2xl mb-2 ${feature.color}`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-black">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-20 max-w-[1440px] mx-auto pt-10 pb-32 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-[#666] mb-6 uppercase">• Let's Build Your Product Next</span>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight mb-8 text-black">
              Design that solves real problems and delights users.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              We help startups and established teams turn complex problems into seamless digital experiences. Whether you're building from scratch or improving an existing product — we bring clarity, creativity, and execution.
            </p>
          </div>
          
          <div className="flex items-center justify-start lg:justify-end">
            <div className="bg-[#111] text-white p-10 md:p-14 rounded-[3rem] w-full max-w-lg shadow-2xl relative">
              <div className="w-20 h-20 rounded-full mb-8 overflow-hidden relative border-4 border-[#333]">
                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Consultant" fill className="object-cover" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-[1.1] tracking-tight">BOOK A <br/> CONSULTATION <br/> CALL</h3>
              <button className="w-full bg-[#efefef] text-black py-5 rounded-full text-lg font-bold hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 mb-8 border border-transparent hover:border-black shadow-lg">
                Book a Consultation
              </button>
              <div className="flex justify-between items-center text-gray-400 text-sm tracking-wide">
                <span>Prefer email? <br/> hello@solunestudio.com</span>
                <span className="text-2xl hover:text-white transition-colors cursor-pointer">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Global Footer */}
      <Footer />
       
    </main>
  );
}
