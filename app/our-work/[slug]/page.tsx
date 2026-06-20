import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CaseStudyPage({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen font-clash">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-20 max-w-[1440px] mx-auto min-h-[80vh]">
        <div className="mb-12">
          <p className="text-[#666] tracking-[0.2em] mb-4 uppercase text-sm font-semibold">Case Study</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="relative w-full h-[50vh] md:h-[75vh] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#333] pt-12">
          <div className="md:col-span-1">
            <h3 className="text-xl mb-6 font-medium text-gray-400">Services</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#18181A] text-white text-sm font-medium px-4 py-2.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 text-lg md:text-xl text-gray-300 leading-relaxed font-sans space-y-6 max-w-4xl">
            <p>
              This is a comprehensive case study representing the detailed work and process behind <strong>{project.title}</strong>. 
              Our engagement involved deep research, an iterative design phase, and a robust technical implementation to achieve the desired goals.
            </p>
            <p>
              By focusing intensely on the target audience and perfectly aligning design components with overarching business goals, the new digital experience provides significant lift in engagement and overall conversion metrics.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
