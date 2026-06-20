"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

const detailedServices = [
  {
    title: "UX UI PRODUCT DESIGN",
    subtitle: "Design that performs.",
    description: "We turn complex ideas into intuitive, elegant interfaces users love. Our UX/UI team blends clarity, usability, and visual emotion to create experiences that connect and retain. From research to high-fidelity prototypes, every detail is crafted to look stunning and work flawlessly across web, app, and SaaS products.",
    includes: ["UX research & journey mapping", "Wireframes & design systems", "Web, app & SaaS interfaces"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "BRANDING",
    subtitle: "Build a brand people remember.",
    description: "We craft distinctive brand identities that express who you are and what you stand for. From strategy and naming to logo design and visual systems, we shape brands that connect emotionally and stand out in competitive markets.",
    includes: ["Brand strategy & positioning", "Logo & visual identity design", "Messaging & tone of voice", "Brand guidelines & collateral"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "WEB & APP DEVELOPMENT",
    subtitle: "High-performance builds engineered in-house.",
    description: "Our in-house development team transforms design into scalable, production-ready digital products. From custom web applications to complex integrations, we deliver clean, reliable code with rigorous attention to performance, stability, and long-term scalability.",
    includes: ["Custom web & app development", "API & third-party integrations", "Performance optimization & QA", "Ongoing support & maintenance"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "WEBFLOW DEVELOPMENT",
    subtitle: "Launch fast with no-code precision.",
    description: "We design and build on platforms like Webflow, Framer, and advanced CMS tools — delivering speed, flexibility, and control. From UX and UI to responsive layouts and SEO setup, your site will look world-class and perform seamlessly without heavy code.",
    includes: ["Webflow, Framer or CMS design", "Responsive layouts & interactions", "UI/UX design for conversion", "SEO setup & basic integrations"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "MARKETING COLLATERAL",
    subtitle: "Designs that sell your story.",
    description: "We create marketing materials that keep your brand consistent and compelling across every channel. From pitch decks to campaign visuals, every asset is designed to capture attention, communicate clearly, and convert.",
    includes: ["Investor & sales decks", "Social media templates", "Ad & campaign visuals", "Print & event materials"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ServicesPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const scrollAmount = sliderRef.current.firstElementChild.clientWidth + 24; 
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const scrollAmount = sliderRef.current.firstElementChild.clientWidth + 24; 
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <main className="texture-light min-h-screen text-black font-clash relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 texture-light z-0 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-16 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1] tracking-tight max-w-5xl mb-12 uppercase">
          Our <span className="hero-font italic text-[#A0BEB0]">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed font-medium">
          We create digital experiences that help businesses move faster, look sharper, and grow smarter. From strategy to execution, our team delivers end-to-end design that connects with users and drives measurable results.
        </p>
      </section>

      {/* Details Services List */}
      <section className="py-12 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative flex flex-col gap-12 lg:gap-16">
        {detailedServices.map((service, idx) => (
          <div key={idx} className="bg-white border border-black/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 shadow-sm hover:shadow-xl transition-shadow duration-500 items-center">
            
            <div className="w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight uppercase mb-4 text-black">
                {service.title}
              </h2>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.subtitle}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {service.description}
              </p>

              <div className="mb-10 w-full">
                <h4 className="font-bold mb-3 text-sm tracking-widest uppercase text-gray-500 text-left">Includes:</h4>
                <ul className="text-gray-700 space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex flex-row items-baseline gap-3 text-base font-medium">
                      <span className="text-[#A0BEB0] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={service.link} className="bg-white text-black px-10 py-4 rounded-full text-base font-semibold border-2 border-black hover:bg-[#A0BEB0] hover:border-[#A0BEB0] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
                Learn More
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative h-[350px] md:h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden border border-black/10 bg-gray-50 shadow-inner group">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        ))}
      </section>

      {/* Recent Work Slider */}
      <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto z-10 relative">
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-widest uppercase text-black">Recent Work</h2>
            <div className="flex gap-4">
                <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>
        </div>

        <div ref={sliderRef} className="flex overflow-hidden gap-6 pb-8 snap-x snap-mandatory">
            {projects.map((p, i) => (
                <Link key={i} href={`/our-work/${p.slug}`} className="w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] flex-shrink-0 snap-start group cursor-pointer border border-black/10 rounded-3xl overflow-hidden block bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]" />
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#A0BEB0] transition-colors">{p.title}</h3>
                        <p className="text-gray-500 text-sm md:text-base">{p.tags[0]}</p>
                    </div>
                </Link>
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

      <Footer />
    </main>
  );
}
