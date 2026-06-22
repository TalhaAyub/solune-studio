import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkSection from "@/components/WorkSection";

export default function OurWorkPage() {
  return (
    <main className="texture-dark min-h-screen text-white font-clash relative overflow-hidden flex flex-col justify-between">
      <Navbar />
      <div className="absolute inset-0 texture-dark z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex-grow pt-20">
        <WorkSection isOurWorkPage={true} />
      </div>
      
      <Footer />
    </main>
  );
}
