
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";



export default function Contact() {
  return (
    <div className=" mb-25 mt-10 py-10">
        <h1 className='text-white text-3xl mb-10'>Contact Me</h1>
        <div className="flex  justify-between">
            <ContactSocials/>
            <ContactForm/>

        </div>
       
      
    </div>
  )
}
