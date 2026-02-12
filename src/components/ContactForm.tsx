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
    <div className='flex flex-col gap-4 lg:w-[50%] border bg-white border-purple p-8 rounded-2xl'>
        <form onSubmit={onSubmit} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3 border border-b-gray-400 '>
                <label htmlFor="name" className='text-black font-bold'> Name
                
                </label>
                <input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} className='text-gray-700 p-4 rounded-md focus:outline-none' placeholder='What is your name'  required />
            </div>
            <div className='flex flex-col gap-3 border border-b-gray-400'>
                <label htmlFor="email" className='text-black font-bold'>Email Address
                
                </label>
                <input type="email" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} className='text-gray-700 p-4 rounded-md focus:outline-none' placeholder='Enter your email address' required/>
            </div>
            <div className='flex flex-col gap-3 border border-b-gray-400'>
                <label htmlFor="message" className='text-black  rounded-md  font-bold'>Your Message
                
                </label>
                <textarea   name="message" id="" value={message} onChange={(e) => setMessage(e.target.value)} className='text-gray-700 p-4 rounded-md focus:outline-none' placeholder='Enter your message' required />
            </div>
            <button type="submit" disabled={isSubmitting} className='bg-black text-white p-4 rounded-md'>Send</button>
            <p>{result}</p>
        </form>
      
    </div>
  )
}
