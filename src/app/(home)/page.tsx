import AllProduct from "@/components/AllProduct";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-100vh space-y-4  bg-amber-700">
        <HeroSection />
        <AllProduct />
    </div>  
  );
}
