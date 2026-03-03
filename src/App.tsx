import Cursor from "./components/Cursor"
import LandingPage from "./components/LandingPage"


export default function App() {
  return (
    <div className="bg-[#000505]">
      
      {/* <div className="fixed top-[-5%] left-[-10%] w-[400px] h-[400px] rounded-full 
                      bg-[#00F5D4] opacity-[0.12] blur-[120px] pointer-events-none z-5" />
                      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] 
                      bg-[#108080] opacity-20 blur-[120px] rounded-full 
                      pointer-events-none z-0" />

      
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full 
                      bg-[#00F5D4] opacity-[0.2] blur-[150px] pointer-events-none z-10" />
                      <div className="fixed bottom-[-20%] left-[-10%] w-[800px] h-[800px] 
                      bg-[#082020] opacity-40 blur-[150px] rounded-full 
                      pointer-events-none z-10" /> */}
      
      <Cursor/>
      <LandingPage/>
      
      
      
      
    </div>
  )
}
