import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import Marquee from "@/components/Marquee";
import HowWeWork from "@/components/HowWeWork";
import { TestimonialsVariant } from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Marquee />
      <Navbar />
      <Hero />
      <WorkSection />
      <ServicesSection />
      <HowWeWork />
      <TestimonialsVariant />
      <Footer />

    </main>
  );
}

