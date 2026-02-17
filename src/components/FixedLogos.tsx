import dots from "../assets/Dots.svg"
import dotts from "../assets/Dotts.svg"
import Logo from "../assets/Logo.svg"

export default function FixedLogos() {
  return (
    <div>

        <img
        src={dotts}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="fixed bottom-[3%] right-[4%] md:right-[6%] lg:right-[8%] w-[6%] md:w-[8%] lg:w-[6%] opacity-30 z-10"
      />
          <img
        src={Logo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="fixed top-[10%] right-[6%] md:right-[6%] lg:right-[15%] w-[18%] md:w-[12%] lg:w-[8%] opacity-40 z-10"
      />

          <img
        src={dots}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="fixed top-[10%] left-[10%] md:left-[9%] w-[10%] md:w-[8%] lg:w-[10%] opacity-25 z-10"
      />
      
    </div>
  )
}





