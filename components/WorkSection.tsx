import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

interface WorkSectionProps {
  isOurWorkPage?: boolean;
}

export default function WorkSection({ isOurWorkPage = false }: WorkSectionProps) {
  return (
    <section className="w-full min-h-screen text-white px-6 md:px-20 py-24 font-clash relative overflow-hidden texture-dark">
      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 lg:mb-32">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight max-w-[900px]">
              We craft{" "}
              <span className="hero-font italic text-[#A0BEB0] relative inline-block">
                custom
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
              design solutions that help you drive change.
            </h2>
          </div>
          <div className="lg:max-w-xs mt-12 lg:mt-[11rem] text-[#888] text-sm md:text-base leading-relaxed font-medium">
            Empowering tech companies with innovative design solutions, enabling
            them to drive impactful change.
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Project 1 - Tall Card */}
            <Link href={`/our-work/${projects[0].slug}`} className="group relative overflow-hidden bg-[#18181A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[500px] md:h-[824px] cursor-pointer block">
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOurWorkPage ? "grayscale contrast-[1.10] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100" : ""
                    }`}
                />
                {/* Overlay gradients for readability */}
                <div className={`absolute inset-0 transition-all duration-500 group-hover:opacity-0 ${isOurWorkPage
                    ? "bg-gradient-to-b from-black/50 via-transparent to-white/10 mix-blend-overlay opacity-90"
                    : "bg-gradient-to-b from-black/15 via-transparent to-black/15"
                  }`}></div>
                {/* Additional gradient layer to enhance black & white look and readability */}
                {isOurWorkPage && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none z-0 transition-all duration-500 group-hover:opacity-0"></div>
                )}
              </div>

              {/* Top Content (Title) */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 bg-white/30 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full shadow-sm transform transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-12 group-hover:opacity-0">
                <h3 className="text-lg md:text-xl tracking-tight text-black font-semibold">
                  {projects[0].title}
                </h3>
              </div>

              {/* Bottom Content (Desc + Tags) */}
              <div className="relative z-10 bg-white/30 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-[1.25rem] mt-auto shadow-sm transform transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-12 group-hover:opacity-0">
                <p className="text-black/90 text-sm md:text-base font-medium mb-4 max-w-sm leading-relaxed">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#18181A] text-white text-[11px] md:text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Rest of the cards stacked vertically */}
            {projects.slice(1).map((project, idx) => (
              <Link
                href={`/our-work/${project.slug}`}
                key={idx}
                className="group relative overflow-hidden bg-[#18181A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] cursor-pointer block"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOurWorkPage ? "grayscale contrast-[1.10] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100" : ""
                      }`}
                  />
                  {/* Overlay gradients for readability */}
                  <div className={`absolute inset-0 transition-all duration-500 group-hover:opacity-0 ${isOurWorkPage
                      ? "bg-gradient-to-b from-black/50 via-transparent to-white/10 mix-blend-overlay opacity-90"
                      : "bg-gradient-to-b from-black/15 via-transparent to-black/15"
                    }`}></div>
                  {/* Additional gradient layer to enhance black & white look and readability */}
                  {isOurWorkPage && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none z-0 transition-all duration-500 group-hover:opacity-0"></div>
                  )}
                </div>

                {/* Top Content (Title) */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 bg-white/30 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full shadow-sm transform transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-12 group-hover:opacity-0">
                  <h3 className="text-lg md:text-xl tracking-tight text-black font-semibold">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Content (Desc + Tags) */}
                <div className="relative z-10 bg-white/30 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-[1.25rem] mt-auto shadow-sm transform transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-12 group-hover:opacity-0">
                  <p className="text-black/90 text-sm md:text-base font-medium mb-4 max-w-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#18181A] text-white text-[11px] md:text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}