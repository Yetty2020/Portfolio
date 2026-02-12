import { useEffect, useRef, useState } from "react";
import { RiContactsBook2Line, RiHomeSmileFill } from "react-icons/ri";
import { MdPerson3 } from "react-icons/md";
import { VscBook } from "react-icons/vsc";
import { IoClose, IoDocumentTextOutline } from "react-icons/io5";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail, BiMenuAltRight } from "react-icons/bi";

type iconData = {
    id: number,
    iconComponent: JSX.Element,
    title: string
    href?: string
}

const navIcons: iconData[] = [
    {
        id: 1,
        iconComponent: <RiHomeSmileFill />,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        iconComponent: <MdPerson3 />,
        title: "About",
        href: "/about"
    },
    {
        id: 3,
        iconComponent: <VscBook />,
        title: "Projects",
        href: "/projects"
    },
    {
        id: 4,
        iconComponent: <IoDocumentTextOutline />,
        title: "Resume",
        href: "/resume"
    },
    {
        id: 5,
        iconComponent: <RiContactsBook2Line />,
        title: "Contact"
    },
    {
        id: 6,
        iconComponent: <HiSquare3Stack3D />,
        title: "Stack",
    },
    {
        id: 7,
        iconComponent: <FaXTwitter />,
        title: "Twitter",
    },
    {
        id: 8,
        iconComponent: <IoLogoLinkedin />,
        title: "LinkedIn",
    },
    {
        id: 9,
        iconComponent: <BiLogoGmail />,
        title: "Gmail",
    },
    {
        id: 10,
        iconComponent: <FaGithub />,
        title: "Github"
    }
]



export default function Navbar() {

    const visibleIcons = navIcons.slice(0,5);
   

    const [isHovered, setIsHovered] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    //to toggle the mobileMenu
    const toggleMobileMenu = () =>{
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
    }

    //set Mouse enter or leave
    const handleMouseEnter = () =>{
        setIsHovered(true)
    }

    const handleMouseLeave = () =>{
        setIsHovered(false)
    }

    //ref to mobile list
    const menuRef = useRef<HTMLUListElement | null>(null);

    //effect to handle click outside mobile menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) =>{
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [isMenuOpen]); // Dependency array: Re-run if isMenuOpen changes
    

    


  return (
    <div>
        <nav  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hidden lg:block lg:fixed translate-y-[-50%] top-[50%] left-10 z-[999] bg-black/50 rounded-3xl p-4 text-white  ">

            

            
                {isHovered ? (
                    <ul className="flex flex-col gap-6 ">
                        {navIcons.map((item)=>(
                            <li key={item.id} className="flex gap-6 items-center cursor-pointer hover:bg-gray-800 p-2 rounded-xl">
                                <span className="text-2xl">{item.iconComponent}</span>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul> ):
                    (
                        <ul className="flex flex-col gap-6">
                            {visibleIcons.map((item) =>(
                                <li key={item.id}>
                                    <span className="text-2xl">{item.iconComponent}</span>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </nav>
            <nav className="fixed block text-white  z-[999] lg:hidden bg-gray-400">
    <div onClick={toggleMobileMenu} className=" text-2xl fixed right-0 top-5 z-[1000] cursor-pointer">
        {
            isMenuOpen ? (<IoClose/>) : (<BiMenuAltRight/>)
        }
    </div>
    <ul ref={menuRef} className={`flex flex-col gap-5 bg-black z-[999] px-6  py-4  text-white rounded-2xl
            transition-transform duration-500 ease-in-out fixed top-20 right-0  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={toggleMobileMenu}>
        {
            visibleIcons.map((item)=> (
                 <li key={item.id} className="p-2 flex gap-4 items-center ">
                    <span>{item.iconComponent}</span>
                    <span className="">{item.title}</span>
                 </li>
            ))
           

        }
    </ul>
</nav>


            


            
      

        
      
    </div>
  )
}
