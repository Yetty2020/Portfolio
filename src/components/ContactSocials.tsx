import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";

export default function ContactSocials() {
  return (
   
      
     <div className="flex flex-col gap-6 lg:w-[40%]">
            <p>Have a project in mind or would like to work with me? Get in touch!</p>
            <div className="flex gap-5 items-center text-2xl justify-center">
                <span><IoLogoLinkedin/></span>
                          <span><FaGithub/></span>
                          <span><FaXTwitter/></span>
                          <span><BiLogoGmail/></span>
            </div>
        </div>
  )
}
