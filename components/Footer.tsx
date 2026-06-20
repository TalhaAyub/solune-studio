import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative border-t border-[#333]">
      <div className="grid grid-cols-4 gap-[1px] bg-[#333] w-full max-w-[1920px] mx-auto overflow-hidden">
        
        {/* Top Left - Hero Text */}
        <div className="col-span-4 lg:col-span-2 lg:row-span-2 bg-black relative flex items-center p-8 md:p-12 lg:p-24 min-h-[400px]">
          <h1 className="hero-font text-white leading-[0.85] text-[15vw] lg:text-[10vw]">
            DROP<br />
            US <span className="font-serif italic font-light font-clash tracking-tight">A</span><br />
            LINE
          </h1>
          
          {/* Vertical Scrolling/Repeated Text on the exact grid line */}
          <div className="hidden lg:flex absolute right-0 top-0 bottom-0 translate-x-1/2 flex-col items-center justify-center overflow-hidden text-[#333] text-[10px] leading-[1] whitespace-nowrap z-10 pointer-events-none select-none tracking-widest font-clash font-medium mix-blend-screen opacity-50">
            {Array.from({ length: 60 }).map((_, i) => (
              <span key={i} className="py-1">SOLUNE STUDIO</span>
            ))}
          </div>
        </div>

        {/* Top Right - Location */}
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 bg-black p-8 lg:p-12 flex flex-col justify-between items-start gap-8">
          <div>
            <h3 className="text-2xl lg:text-4xl font-clash text-white mb-4 font-medium tracking-tight">LOCATION</h3>
            <p className="font-clash text-[#a1a1a1] text-base lg:text-lg leading-relaxed max-w-[200px]">
              47 W 13th St, New<br/>York, NY 10011, USA
            </p>
          </div>
        </div>

        {/* Top Right - Contact */}
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 bg-black p-8 lg:p-12 flex flex-col justify-start gap-8">
          <div>
            <h3 className="text-2xl lg:text-4xl font-clash text-white mb-4 font-medium tracking-tight">CONTACT</h3>
            <p className="font-clash text-[#a1a1a1] text-base lg:text-lg leading-relaxed">
              solunestudio@gmail.com<br />
              
            </p>
          </div>
        </div>

        {/* Middle Right - Info */}
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 bg-black p-8 lg:p-12 flex flex-col justify-start gap-8">
          <div>
            <h3 className="text-2xl lg:text-4xl font-clash text-white mb-4 font-medium tracking-tight">INFO</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-clash text-[#a1a1a1] text-base lg:text-lg hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="font-clash text-[#a1a1a1] text-base lg:text-lg hover:text-white transition-colors">Terms And Conditions</a>
            </div>
          </div>
        </div>

        {/* Middle Right - Stalk Us */}
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 bg-black p-8 lg:p-12 flex flex-col justify-start gap-8">
          <div>
            <h3 className="text-2xl lg:text-4xl font-clash text-white mb-4 font-medium tracking-tight">STALK US</h3>
            <div className="flex flex-col gap-3">
              {['Facebook', 'Instagram', 'Twitter', 'Behance'].map((link) => (
                 <a key={link} href="#" className="font-clash text-[#a1a1a1] text-base lg:text-lg hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Left - Main Text */}
        <div className="col-span-4 lg:col-span-2 bg-black p-8 lg:p-12 lg:px-24 flex items-center">
          <p className="font-clash text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed tracking-normal font-normal">
            We Are Genuinely Care About You,<br />
            Let US Know How We Serve You
          </p>
        </div>

        {/* Bottom Right - Nav Links */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 bg-black p-8 lg:p-12 flex flex-col justify-center gap-4">
          {['Home', 'About', 'Resources', 'Contact', 'Faq\'s'].map((link) => (
            <a key={link} href="#" className="font-clash text-base lg:text-lg text-[#e0e0e0] hover:text-white font-medium transition-colors">{link}</a>
          ))}
        </div>

        {/* Bottom Right - CTA Button */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 bg-black p-8 lg:p-12 flex items-center justify-start sm:justify-center">
          <button className="group bg-[#A0BEB0] text-black px-10 py-2 rounded-full text-lg font-medium border border-[#A0BEB0] hover:bg-[#789b89] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center justify-center">
            <span className="relative overflow-hidden inline-flex">
              <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-[120%]">Book Free Strategy</span>
              <span className="absolute top-full left-0 w-full text-center transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Book Free Strategy</span>
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
