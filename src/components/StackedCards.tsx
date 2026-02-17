import { BsBoxArrowUpRight } from 'react-icons/bs';
import imageA from '../assets/image.jpg'
import React, {useRef} from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);



type cardData = {
  id: number,
  num: string,
  title: string,
  image: string,
  about: string,
  // stack: string[]


}

const ProjectItems : cardData[] = [
  {
    id: 1,
    num: "01",
    title: "First Project",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 2,
    num: "01",
    title: "First Project",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 3,
    num: "01",
    title: "First Project",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 4,
    num: "01",
    title: "First Project",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  },
  {
    id: 5,
    num: "01",
    title: "First Project",
    image: imageA,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sapiente aspernatur a. Sequi illum nesciunt necessitatibus, molestiae ea eveniet earum rem placeat dolores blanditiis veritatis, recusandae veniam eum labore."
  }

]


export default function StackedCards() {

     
  const container = useRef<HTMLDivElement>(null);
  const stackedCards = useRef<HTMLDivElement>(null);
useGSAP(() => {
        
       
        
        const cards = gsap.utils.toArray(".card", stackedCards.current) as HTMLElement[];
        
        if (!stackedCards.current || cards.length === 0) return;

        const vh = window.innerHeight || document.documentElement.clientHeight;
    const CARD_SCROLL_DISTANCE = vh; // one viewport per card
    const END_SPACER_DISTANCE = Math.round(vh * 0.5); // extra half-viewport spacer

        
        const tlStack = gsap.timeline({
            scrollTrigger: {
                trigger: stackedCards.current,
                start: "top top",
                // End duration: 1000px of scroll for each card's animation
                end: `+=${(cards.length * CARD_SCROLL_DISTANCE) + END_SPACER_DISTANCE}`, 
                scrub: 1,
                pin: true, 
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                
            },
            defaults: { ease: "none" }
        });

        if (container.current) {
        container.current.style.background = "#000";
    }

    

        
        cards.forEach((card, i) => {
           
           
            
            if (i !== 0) {
                
                gsap.set(card, { y: window.innerHeight + 100, }); 
            }
            
            

            
            const duration = 1; 

            tlStack.to(card, {
               
                scale: 0.8 + 0.2 * (i / (cards.length - 1)),
                duration: duration,
            });

          
            if (i < cards.length - 1) {
                tlStack.to(cards[i + 1], {
                    y: 0, 
                    duration: duration,
                }, "<"); 
            }

            
           
        });
    }, 
    
    { scope: container } 
    ); 

  return (
    <main className='bg-black'>
        
       
         
         
          <div ref={container} className='container w-full  flex flex-col items-center bg-black mx-auto py-10 md:py-0 mt-30 md:mt-0' >
            <div ref={stackedCards} className='stacked-cards w-full h-[100vh] relative mx-auto md:w-[75%] flex flex-col xl:w-[clamp(85%, 4vw, 90%)] '>

              {
                ProjectItems.map((item, index) => (
                  <div key={item.id} className='absolute inset-0 lg:m-auto card w-full h-[clamp(600px,60vh,900px)]  lg:h-[75vh] flex flex-col lg:flex-row-reverse rounded-md shadow-md  border border-gray-500 p-6 overflow-hidden bg-black' style={{ zIndex: index + 1 }}>
                    
                    <div className='img-wrapper lg:w-1/2 lg:h-[80%] w-full  lg:flex lg:flex-col lg:gap-6 object-contain'>
                       <h4 className='self-start text-3xl lg:hidden mb-4 md:mb-2 '>{`${item.num})`}</h4>
                      <div className='flex justify-between items-center mb-4'>
                        <h1 className=' text-xl lg:text-3xl font-bold '>{item.title}</h1>
                        <BsBoxArrowUpRight className='text-white  text-lg lg:text-xl ' />
                      </div>
                      <img src={item.image} alt='project' className='block w-full lg:max-h-[80%] max-h-48 md:max-h-72 object-cover rounded-md'/>
                    </div>
                    <div className='card-content w-full lg:w-1/2 lg:h-[40%]  flex flex-col gap-5  justify-start items-start lg:justify-content bg-black'>
                       <h4 className='self-start text-5xl hidden lg:flex'>{`${item.num})`}</h4>
                      <p className='mt-5 md:mt-0'>(About The Project)</p>
                      <p className='lg:w-[90%]'>{item.about}</p>
                    </div>
                  </div>

                ))
              }

              {/* <div className="w-full h-96 my-20"></div> */}



              
            </div>
          </div>
       
    
    </main>
  )
}
