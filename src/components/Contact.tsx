
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";



export default function Contact() {
  return (
    <div className=" mb-25 mt-10 py-10 h-screen">
        
        <div className="flex  justify-between">
            <ContactSocials/>
            <ContactForm/>

        </div>
       
      
    </div>
  )
}
