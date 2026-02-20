
import { useState, useEffect } from "react"  
import memo from "../assets/memo.jpg"
import {getCurrentWeekDay} from "../utils/dateUtils"
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import AnimatedButton from "./AnimatedButton";



export default function Hero() {

  const [currentDay, setCurrentDay] = useState<string>("")

  useEffect(() =>{
    const dayString: string = getCurrentWeekDay()
    setCurrentDay(dayString)
  }, [])
  return (
    <main className="text-white    h-screen   ">
        
        <div className="  w-full flex flex-col justify-content gap-2  lg:pt-30 mt-7 pt-20 ">
          
        <img src={memo} alt="" className="w-[20%] lg:w-[8%] rounded-full mb-2"/>
        <h1 data-cursor="hero-btn" className="text-2xl font-bold lg:mb-4">Hey, Fatihah here.</h1>
        <p>How's {currentDay}?</p>
        <p className="mt-2 leading-loose">I'm a Frontend Developer who genuinely loves making things look and feel fantastic. With two years of pushing pixels and writing clean code... uh, I mean developing modern interfaces ... I turn "wait, how will that look?" ideas into "wow, that's slick and responsive!" reality. My stack of choice? React, Next.js, and TypeScript, focusing on clean codes and practical solutions.</p>

        {/* social media icons  */}
        <div className="flex gap-5 lg:hidden items-center justify-content mx-auto my-4">
          <span><IoLogoLinkedin/></span>
          <span><FaGithub/></span>
          <span><FaXTwitter/></span>
          <span><BiLogoGmail/></span>
        </div>

        
        <AnimatedButton/>

        


       </div>
      
    </main>
  )
}
