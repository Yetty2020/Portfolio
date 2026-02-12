import  {useState} from 'react'

export default function ContactForm() {

    const [name, setName ] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d457b70d-afa1-45e2-82ff-8eef34c22e3c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    setIsSubmitting(true)
  };
  return (
    <div className='flex flex-col gap-4 lg:w-[50%] border border-white p-8 rounded-md'>
        <form onSubmit={onSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <label htmlFor="name">Your Name
                
                </label>
                <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} className='bg-white p-4 rounded-md' required/>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="email">Email Address
                
                </label>
                <input type="email" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-white p-4 rounded-md' required/>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="message">Your Message
                
                </label>
                <textarea   name="message" id="" value={message} onChange={(e) => setMessage(e.target.value)} className='bg-white p-4 rounded-md' required />
            </div>
            <button type="submit" disabled={isSubmitting}>Send</button>
            <p>{result}</p>
        </form>
      
    </div>
  )
}
