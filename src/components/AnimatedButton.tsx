
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdOutlineArrowDownward } from "react-icons/md";

export default function AnimatedButton() {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const containerRef = useRef<HTMLButtonElement>(null); // Ref for the button itself
  const bgRef = useRef<HTMLDivElement>(null);
  const arrowEl = useRef<HTMLDivElement>(null);
  const textEl = useRef<HTMLSpanElement>(null);
  const bounceAnim = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (!bgRef.current || !arrowEl.current || !textEl.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(bgRef.current, {
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        // DYNAMIC POSITIONING:
        left: () => {
           // Get the arrow's distance from the left of the button
           const offset = arrowEl.current!.offsetLeft;
           // Center the 42px circle behind the 32px (text-2xl) icon
           return offset - 5; 
        },
        top: () => {
           // Get the arrow's distance from the top
           const offset = arrowEl.current!.offsetTop;
           return offset - 5;
        },
        duration: 0.7,
        ease: "expo.inOut",
      })
      .to(textEl.current, {
        color: "#ffffff",
        duration: 0.4,
      }, "<")
      .to(arrowEl.current, {
        color: "#000000",
        scale: 1.1,
        duration: 0.3,
        ease: "back.out(3)",
      }, "-=0.3")

      .to(arrowEl.current, {
        scale: 1.15,
        duration: 0.6,
        repeat: -1,   // Loops infinitely while the timeline is playing
        yoyo: true,   // Goes back and forth
        ease: "sine.inOut"
      });

      bounceAnim.current = gsap.to(arrowEl.current, {
      scale: 2,
      duration: 0.6,
      ease: "back.out(3)", // This creates the visible bounce
      repeat: -1,
      yoyo: true,
      paused: true, // Start paused
    });
  }, { scope: containerRef }); // Scope to container for better performance

  return (
    <a href="/Resume.pdf" download="Resume.pdf" className="inline-block">
      <button 
        ref={containerRef}
        onMouseEnter={() => tl.current?.play()}
        onMouseLeave={() => tl.current?.reverse()}
        className="relative bg-black border border-white/40 w-full lg:w-[260px] h-[54px] rounded-xl overflow-hidden flex items-center px-6 mt-10"
      >
        {/* The White Background */}
        <div 
          ref={bgRef}
          className="absolute top-0 left-0 w-full h-full bg-white z-0" 
          style={{ transformOrigin: "0% 0%" }} 
        />

        <span 
          ref={textEl} 
          className="relative z-10 font-medium pointer-events-none flex-grow text-left"
          style={{ color: "#000000" }} 
        >
          Download Resume
        </span>

        {/* The target for our background */}
        <span 
          ref={arrowEl} 
          className="relative z-10 flex items-center justify-center w-8 h-8"
          style={{ color: "#000000" }}
        >
          <MdOutlineArrowDownward  className="text-xl" />
        </span>
      </button>
    </a>
  );
}