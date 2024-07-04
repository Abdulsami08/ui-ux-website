import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq";
import { Pricing } from "./components/Pricing";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features/>
      </div>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Faq/>
      </div>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Pricing/>
      </div>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Cta/>
      <Footer/>
      </div>
       

    </div>  
    );
}
