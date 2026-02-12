import Hero from "./Hero"
import Loading from "./Loading"
import { useState, useCallback, useRef } from "react"
import Projects from "./Projects"
import About from "./About"
import Stack from "./Stack"
import Footer from "./Footer"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

    


import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "./Navbar"
import Contact from "./Contact"

gsap.registerPlugin(useGSAP,ScrollSmoother, ScrollTrigger);


export default function LandingPage() {
    const smoothWrapper =  useRef<HTMLDivElement>(null);
      const smoothContent = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true)

    const handleLoadingComplete = useCallback(() => {
  setIsLoading(false);

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}, []);


    useGSAP(() => {
  if (isLoading) return;

  if (!ScrollSmoother.get()) {
    ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
  }

  ScrollTrigger.refresh();
}, [isLoading]);

  return (

    
    

    <main className="bg-black text-white   ">

        <div ref={smoothWrapper} id='smooth-wrapper' className='  '>
              {!isLoading && <Navbar />}
        <div ref={smoothContent} id='smooth-content' className='will-change-transform bg-black'>
        <div className="">

        {isLoading && <Loading onComplete={handleLoadingComplete} />}

        {!isLoading && (

            <div className="lg:w-[60%] lg:p-4 mx-auto">
            <Hero/>

            <Projects/>
        <About/>
        <Stack/>
        <Contact/>
        <Footer/>
            </div>
        )}
        
        </div>
        </div>
        </div>



    </main>
  )
}
