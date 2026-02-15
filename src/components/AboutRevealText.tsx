import  { useRef, useCallback } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function AboutReveal() {
    
    const triggerRef = useRef<HTMLDivElement>(null);

    
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    
    
    lettersRef.current = []; 
    const setLettersRef = useCallback((ref: HTMLSpanElement | null) => {
        if (ref) {
            lettersRef.current.push(ref);
        }
    }, []);

    const text1 = "I'm a Frontend Developer who enjoys the chaos of creation. I write code, inevitably break things, and then systematically finding the fix to make it all work perfectly.";
    const paragraphText = "I build applications primarily using Next.js, React, and TypeScript. Sometimes, I add sophisticated touches like GSAP and advanced animations, because why just make it work when you can make it amazing? When I finally log off, you can probably find me unwinding by watching a sitcom.";

    useGSAP(() => {
        
        const totalLetters = lettersRef.current.length;
        
        
        const staggerDuration = totalLetters * 0.1; 
        gsap.set(lettersRef.current, { color: "#1b1b1dff" });
        
        
        gsap.to(lettersRef.current, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true, 
                start: "top bottom", 
                
                end: `+=${staggerDuration * 20}`, 
                
               
              
                
            },
            color: "#e5dee3ff", 
            duration: 2, 
            stagger: 1, 
        });
        
    }, { scope: triggerRef, dependencies: [] }); 

   
    const renderText = (text: string) => (
        text.split("").map((letter, index) => (
            <span 
                ref={setLettersRef} 
                className="reveal-text text-red" // Initial color should be light grey
                key={index} 
                style={{ display: 'inline-block' }} // Important for proper spacing and layout
            >
                
                {letter === " " ? "\u00A0" : letter}
            </span>
        ))
    );

    return (
        <>
          
            
          
            <div className='reveal mb-12 lg:w-[60%] ' ref={triggerRef} >
                
                {/* 1. Main Text */}
                <h1 className='text-xl mb-6'>
                    {renderText(text1)}
                </h1>

                {/* 2. Paragraph Text - This animation will start exactly where the first one ends, 
                    because it's just the next set of letters in the same array (lettersRef.current). */}
                <p className="mt-8 text-xl">
                    {renderText(paragraphText)}
                </p>
                
            </div>
            
            
        </>
    );
}