import React, {useState} from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import NextjsIcon from '../icons/NextjsIcon';
import SupabaseIcon from "../icons/SupabaseIcon"
import { MdKeyboardArrowRight } from 'react-icons/md';

type StackData = {
    id: number,
    icon: React.ElementType,
    title: string
}

const stackItems: StackData[] = [
    {
        id: 1,
        icon: FaReact,
        title: "React"
    },
    {
        id: 2,
        icon: IoLogoJavascript,
        title: "Javascript"
    },
    {
        id: 3,
        icon: BiLogoTailwindCss ,
        title: "Tailwind CSS"
    },
    {
        id: 4,
        icon: BiLogoTypescript,
        title: "Typescript"
    },
    {
        id: 5,
        icon: NextjsIcon,
        title: "Next.JS"
    },
    {
        id: 6,
        icon: SupabaseIcon,
        title: "Supabase"
    },
    {
        id: 7,
        icon: FaReact,
        title: "GSAP"
    },
    {
        id: 8,
        icon: FaReact,
        title: "Framer Motion"
    },
    {
        id: 9,
        icon: FaReact,
        title: "Git"
    },
    {
        id: 9,
        icon: FaReact,
        title: "Redux"
    }
    
]

function StackItem({ item }: { item: StackData }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-between items-center border border-white p-5 rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="flex gap-4 items-center">
        <Icon className="text-4xl" />
        <span>{item.title}</span>
      </div>

     
      {isHovered && (
        <div><MdKeyboardArrowRight className="text-2xl" /></div>
      )}
    </div>
  );
}

export default function Stack() {


    


    


    
  return (
    <div className=' mb-25 mt-10 py-10'>
      <h1 className='text-white text-3xl mb-10'>Tech Stack</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 gap-x-10  mx-auto'>
        {stackItems.map((item) => (
          <StackItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
