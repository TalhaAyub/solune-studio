import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkSection from "@/components/WorkSection";

export default function OurWorkPage() {
  return (
    <main className="texture-light min-h-screen text-black font-clash relative overflow-hidden flex flex-col justify-between">
      <Navbar />
      <div className="absolute inset-0 texture-light z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex-grow pt-20">
        <WorkSection isOurWorkPage={true} />
      </div>
      
      <Footer />
    </main>
  );
}
