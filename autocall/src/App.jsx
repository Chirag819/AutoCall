import { useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import SelectLanguage from './Components/SelectLanguage'
import SelectRegion from './Components/SelectRegion'

function App() {
  const [work, setWork] = useState("Generatist Agent");
  const [start, setstart] = useState("Start");
  const [imgSrc, setImgSrc] = useState("images/mic.png");
  const audioRef = useRef(null)
  const writeUp = {
    "Booking Agent" : "Let's have a discovery call with Millis Team. This agent will help you schedule.",
    "Generatist Agent" : "The agent will be able to answer any question about Millis AI."
  }

  const GenerativeAgentClickHandler = () => {
    setWork("Generatist Agent");
  }

  const BookingAgentClickHandler = () => {
    setWork("Booking Agent");
  }

  const playHandler=()=>{

    if(start == 'Start'){
      setstart('Stop');
      setImgSrc("images/micWaving.png")
      audioRef.current.play();
    }
    else{
      setstart('Start');
      setImgSrc("images/mic.png")
      audioRef.current.pause();
    }
  }

  return (
    <>
      <div className='h-screen w-screen bg-black  text-white text-center '>
        <Navbar/>
        <p className='text-white font-medium text-5xl text-center leading-14'>
        Experience the <spam className='text-blue-300'>lowest latency</spam> 
        <br className=''/>
        Voice AI on the market
        </p>
        <div>
          <div className='flex justify-center m-3 relative '>
            <div className='cursor-pointer px-2 ms-40' onClick={GenerativeAgentClickHandler}>
              <p className={`text-xl text-gray-300 pb-3  ${work == 'Generatist Agent' && "font-medium text-white "}`  }>
              Generatist Agent
              </p>

            </div>
            <div className='cursor-pointer  px-2' onClick={BookingAgentClickHandler}>
            <p className={`text-xl text-gray-300 pb-3 ${work == 'Booking Agent' && "font-medium text-white "}`  }>
            Booking Agent
              </p>
 

            </div>
            <div className="relative  w-[160px]">
        <div
          className={`absolute -left-[310px] bottom-0 h-[2px] bg-green-500 transition-transform duration-500`}
          style={{
            width: work === "Generatist Agent" ? "160px" : "150px", // Adjust dynamically based on text width
            transform: work === "Generatist Agent" ? "translateX(0%)" : "translateX(110%) ",
          }}
        />
      </div>

          </div>
          <p className='border-1 rounded-full inline p-1 '>
            {
                writeUp[work]
            }
          </p>
        </div>


        <div className='flex items-center justify-center gap-20 mt-5
'>
          <div className=''>
            <SelectLanguage/>
            <SelectRegion/>
          </div>
          <button className='rounded-full bg-linear-to-r from-gray-700 to-gray-900 p-5 cursor-pointer drop-shadow-[0_5px_5px_rgba(250,250,250,0.25)]' onClick={playHandler}>
            <img src={imgSrc} alt="Logo" className="filter invert w-10 m-3 mx-6"/>
            <p className='font-medium m-1 ps-1'>
              {start} Demo
            </p>
          </button>
          <audio ref={audioRef} src='audio/predefinedAudio.mp3' />
        </div>
        <p className='text-xl m-3 mt-7 font-normal text-gray-400'>
          Like what you hear?
        </p>
        <button className='px-4 py-3 bg-linear-to-r from-gray-800 to-gray-900 rounded-full cursor-pointer m-2 border-1 border-gray-200 hover:border-gray-500'>
          Get In Touch
        </button>
        <button className='px-4 py-3 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 mb-4'>
          Learn More
        </button>
        <br/>
        <spam className='text-xl m-3 font-normal text-gray-400'>
          Latency:
        </spam>
        <spam>
          200ms
        </spam>
        
      </div>
    </>
  )
}

export default App
