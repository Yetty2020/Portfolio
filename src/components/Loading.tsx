import  React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import CustomEase from "gsap/CustomEase"

gsap.registerPlugin(CustomEase)
CustomEase.create("hop", "0.9, 0, 0.1, 1")



interface LoadingProps {
        onComplete: () => void;
    }
    
export default function Loading({onComplete} : LoadingProps) {

  const loader = React.useRef<HTMLDivElement | null>(null)
  const overlay = React.useRef<HTMLDivElement | null>(null)
  const introLogo = React.useRef<HTMLDivElement | null>(null)
  const word1 = React.useRef<HTMLDivElement | null>(null)
  const word2 = React.useRef<HTMLDivElement | null>(null)
  const divider = React.useRef<HTMLDivElement | null>(null)
  const spinningContainer = React.useRef<HTMLDivElement | null>(null)
  const spinner = React.useRef<HTMLDivElement | null>(null)
  const counter = React.useRef<HTMLDivElement | null>(null)

  const loadingElement = loader.current


  useEffect (() =>{
    const tl = gsap.timeline({
      delay: 0.3,

    })

    const counts = gsap.utils.toArray(".count-group", loadingElement)
    const blockElements = gsap.utils.toArray(".block", overlay.current);
    const wordElements = [word1.current, word2.current].filter(el => el !== null);
    if (wordElements.length === 0) return;
   

    counts.forEach((count, index)=> {
      const  digits = count.querySelectorAll(".count-digit h1")
      

      tl.to(
        digits, {
          y: "0%",
          duration: 0.6,
          stagger: 0.075,
        }, 
        index * 1
      )
      if (index < counts.length){
        tl.to(
          digits, {
            y: "-100%",
            stagger: 0.075,
            duration: 1,

          }, 
          index * 1 + 1
        )
      }
      
    })

    tl.to(spinner.current, {
        opacity: 0,
        duration: 0.3,
      }, "<")
      
      tl.to(wordElements, {
        opacity: 1,
        y: "0%",
        duration: 0.8
        
      })


      // tl.to(wordElements,{
      //   opacity: 1,
      //   y: "0%",
      //   duration: 1,
      //   ease: "hop",

      // }, "<")

      tl.to(divider.current, {
        scaleY: "100%",
        duration: 1,
        transformOrigin: "center top",
        onComplete: () =>{
          gsap.to(divider.current, {
            opacity: 0,
            duration: 0.2,
            delay: 0.3
          })
        }

      })

      tl.to(word1.current, {
        y: "-100%",
        delay: 0.2,
        duration: 0.8,
        opacity: 0
      } )

      tl.to(word2.current, {
        y: "100%",
        delay: 0.2,
        duration: 0.8,
        opacity: 0
      }, "<")

      tl.to(blockElements, {
        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 0,
        
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
        ease: "power2.out",

        onComplete: () => {
          onComplete();
        }


      })
  })
  

    


  return (

    

    <div ref={loader} className="fixed top-0 left-0 w-[100vw] h-[100svh] overflow-hidden z-[2]">
      <div ref={overlay} className="absolute top-0 flex w-full h-full bg-[#303030]">
        <div className="block w-full h-full bg-[#303030] clip-path:polygon(0% 100%,100% 100%,100% 100%,0% 100%)"></div>
        <div className="block w-full h-full bg-[#303030] clip-path:polygon(0% 0%,100% 0%,100% 0%,0% 0%)"></div>
      </div>
      <div ref={introLogo} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[0.25rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)">
        <div ref={word1} className="relative left-[-0.5rem] pr-[0.25rem] word text-4xl text-white clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) translate-y-[-100%] opacity-0 ">
            <h1 className="relative  "><span>Fatihah.</span></h1>
        </div>
        <div ref={word2} className="relative word text-4xl text-white opacity-0 clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) pl-[0.25rem] left-[0.5rem] translate-y-[100%]  ">
            <h1 className=""><span>Adetoro</span></h1>
        </div>
      </div>

      <div ref={divider} className="absolute top-0 left-1/2 translateX-1/2 origin-top w-[1px] h-full bg-white scale-y-0"></div>
      <div ref={spinningContainer} className="absolute left-1/2 bottom-[10%] -translateX-1/2">
        <div ref={spinner} className="w-[50px] h-[50px] border  border-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-[#303030] border-[1.4px] animate-spin ease-linear"></div>
      </div>

      <div ref={counter} className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 z-[2]">
        <div className="count-group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex  ">
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">0</h1></div>
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">0</h1></div>
        </div>
        <div className="count-group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex ">
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">2</h1></div>
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">7</h1></div>
        </div>
        <div className="count-group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex ">
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">6</h1></div>
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">5</h1></div>
        </div>
        <div className="count-group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex ">
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">9</h1></div>
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">8</h1></div>
        </div>
        <div className="count-group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex ">
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden"><h1 className="relative will-change-transform translate-y-[120%]">9</h1></div>
            <div className="count-digit text-[15rem] text-white flex-1 pt-[1rem] clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%) overflow-hidden "><h1 className="relative will-change-transform translate-y-[120%]">9</h1></div>
        </div>
      </div>

      
    </div>
  )
}
