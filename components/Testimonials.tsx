"use client";

import React from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emran Hasan",
    profession: "CEO & Co Founder @ Klasa",
    description: "Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Moshiur Rahman Radif",
    profession: "COO @ Ontik Technologies",
    description: "We've worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Jenna Carvalho",
    profession: "Principal @ Guardian Estate Company",
    description: "Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Austin",
    profession: "CEO @ Clarity LLC",
    description: "I've worked with Design Monks on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they're a 10/10 partner for all things design and development.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Sofia Gouveia",
    profession: "Design Director @ Esdiac",
    description: "Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We're proud of the results and happy to continue our long-term partnership with them.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Kunle",
    profession: "CEO @ Real Estate",
    description: "Working with Design Monks transformed our workflow. Their comprehensive brand guidelines increased consistency and contributed to a 25% revenue boost. We now focus more efficiently on strategy and client engagement, saving countless hours.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Ted Nash",
    profession: "Founder & CEO @ Yenez",
    description: "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Evelyn Reed",
    profession: "Head of Product @ TechFlow",
    description: "An absolute game changer for our business. The process was entirely seamless from start to finish. They built out our platform ahead of schedule with zero major bugs during launch week. I am incredibly impressed with their work ethic.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-white border border-[#eaeaea] rounded-[24px] p-8 flex flex-col justify-between w-[320px] md:w-[420px] shrink-0 h-full">
      <p className="text-[#333] text-[0.95rem] leading-[1.6] font-sans font-medium mb-6">
        "{testimonial.description}"
      </p>
      
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-[#111] font-sans font-bold tracking-tight text-[13px] leading-tight">
            {testimonial.name}
          </span>
          <span className="text-[#777] font-sans text-[11px] font-medium leading-tight mt-0.5">
            {testimonial.profession}
          </span>
        </div>
      </div>
    </div>
  );
};

export function TestimonialsVariant() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);

  return (
    <section className="relative z-20 texture-light text-black py-24 md:py-32 font-clash overflow-hidden">
      {/* Background styling inherited from HowWeWork */}
      <div className="absolute inset-0 texture-light z-0"></div>
      
      <div className="w-full mx-auto relative z-20">
        
        {/* Header matched precisely with HowWeWork section */}
        <div className="max-w-[1440px] px-6 md:px-20 mx-auto flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-24">
          <div className="max-w-4xl">
            <p className="text-[#666] text-sm md:text-base uppercase tracking-[0.2em] mb-12 flex items-center gap-3 font-sans font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#666]"></span>
              TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight max-w-[900px]">
              Hear what our{" "}
              <span className="hero-font italic text-[#A0BEB0] relative inline-block">
                clients
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
              say about us.
            </h2>
          </div>
          <div className="lg:max-w-xs mt-12 lg:mt-[8.5rem] text-gray-600 text-sm md:text-base leading-relaxed font-medium">
             We work closely with our clients to understand their goals and target audience. Our team crafts transparent processes that turn ambitious visions into stunning digital realities.
          </div>
        </div>

        {/* MARQUEE SCROLLERS */}
        <div className="flex flex-col gap-6 w-full max-w-[1440px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Row 1: Right to Left */}
          <div className="flex w-fit marquee gap-6 pl-6 hover:[animation-play-state:paused]" style={{ animationDuration: "50s" }}>
            {[...row1, ...row1, ...row1, ...row1].map((testimonial, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={testimonial} />
            ))}
          </div>
          {/* Row 2: Left to Right */}
          <div className="flex w-fit marquee gap-6 pl-6 hover:[animation-play-state:paused]" style={{ animationDirection: "reverse", animationDuration: "60s" }}>
            {[...row2, ...row2, ...row2, ...row2].map((testimonial, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
