"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [selectedInterest, setSelectedInterest] = useState<string>("UX UI Design");

  const interests = [
    "UX UI Design", "Web Design", "App Design", "Marketing Collateral",
    "Branding", "Development", "Something Else"
  ];

  return (
    <main className="texture-light min-h-screen text-black font-clash relative overflow-hidden flex flex-col justify-between">
      <Navbar />
      <div className="absolute inset-0 texture-light z-0 pointer-events-none"></div>

      {/* Main Content Area */}
      <section className="pt-40 md:pt-48 pb-24 px-6 md:px-20 max-w-[1440px] w-full mx-auto z-10 relative flex-grow">
        <div className="w-full">
            <h1 className="hero-font text-5xl md:text-6xl lg:text-7xl mb-4 uppercase">REQUEST A QUOTE</h1>
            <p className="text-gray-600 mb-12 text-lg font-medium">All things design, we got you covered.</p>

            <form className="flex flex-col gap-10 w-full" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-sm font-bold tracking-widest uppercase text-gray-800">Name</label>
                  <input type="text" placeholder="John" className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-[#A0BEB0] transition-colors text-black placeholder:text-gray-400 font-medium" />
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-sm font-bold tracking-widest uppercase text-gray-800">Email</label>
                  <input type="email" placeholder="me@company.com" className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-[#A0BEB0] transition-colors text-black placeholder:text-gray-400 font-medium" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-sm font-bold tracking-widest uppercase text-gray-800">Company</label>
                  <input type="text" placeholder="My company" className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-[#A0BEB0] transition-colors text-black placeholder:text-gray-400 font-medium" />
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-sm font-bold tracking-widest uppercase text-gray-800">How did you hear about us</label>
                  <input type="text" placeholder="My answer" className="bg-transparent border-b border-black/20 pb-3 outline-none focus:border-[#A0BEB0] transition-colors text-black placeholder:text-gray-400 font-medium" />
                </div>
              </div>

              {/* Interests */}
              <div className="flex flex-col gap-4 mt-6">
                <label className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-2">I&apos;m interested in</label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setSelectedInterest(interest)}
                      className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 flex items-center gap-2
                        ${selectedInterest === interest 
                          ? 'border-[#A0BEB0] bg-[#A0BEB0] text-black shadow-md scale-105' 
                          : 'border-black/20 hover:border-black/40 text-gray-600 hover:text-black hover:bg-black/5'}`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors
                         ${selectedInterest === interest ? 'border-black' : 'border-gray-400'}`}>
                           {selectedInterest === interest && <span className="w-1.5 h-1.5 bg-black rounded-full"></span>}
                      </span>
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-2 mt-8 relative group">
                <label className="text-sm font-bold tracking-widest uppercase text-gray-800">Tell us more about your project</label>
                <textarea 
                  placeholder="Something about my great idea" 
                  rows={4} 
                  className="bg-transparent border-b border-black/20 pb-3 pt-3 outline-none focus:border-[#A0BEB0] transition-colors text-black placeholder:text-gray-400 resize-none font-medium" 
                ></textarea>
              </div>

              <div className="mt-8 flex justify-start">
                <button type="submit" className="bg-[#A0BEB0] text-black px-12 py-4 rounded-full text-lg font-bold hover:bg-[#789b89] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
                  Submit
                </button>
              </div>

            </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
