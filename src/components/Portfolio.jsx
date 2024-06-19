import React from 'react'
import react from "../assets/image/reactjs1.png"


const Portfolio = () => {
/* const cardItem=[
  {
    id:1,
    logo: react,
    name:"React.js"
  },
  {
    id:2,
    logo: react,
    name:"React.js"
  },
  {
    id:3,
    logo: react,
    name:"React.js"
  },
  {
    id:4,
    logo: react,
    name:"React.js"
  },
] */

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
     <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
       <div className='flex items-center justify-center  mx-auto mt-4 '>
        {/* -----------Grid---------- */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {/* ---------Card--------- */}
          <div className='card'>
              <div className='p-5 flex flex-col items-center justify-center'> 
                <div className='rounded-xl overflow-hidden '>
                  <img src={react} alt="" className='w-[150px] h-[150px] border-[2px] rounded-full p-1'/>
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Online Bus Booking</h5>
                <p className='text-slate-500 text-lg mt-3 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="https://github.com/Mohammed-waqas/Online-Bus-Ticket-Booking" target='blank' className='text-center bg-green-600 text-white py-2 px-4 rounded-lg font-semibold mt-4  hover:bg-green-500 focus:scale-95 transition-all-duration-200 ease-out'>View Source Code</a>
              </div>
          </div>
          {/* ---------Card--------- */}
          <div className='card'>
              <div className='p-5 flex flex-col items-center justify-center'> 
                <div className='rounded-xl overflow-hidden '>
                  <img src={react} alt="" className='w-[150px] h-[150px] border-[2px] rounded-full p-1'/>
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Password Generator</h5>
                <p className='text-slate-500 text-lg mt-3 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="https://github.com/Mohammed-waqas/Password-Generator" target='blank' className='text-center bg-green-600 text-white py-2 px-4 rounded-lg font-semibold mt-4  hover:bg-green-500 focus:scale-95 transition-all-duration-200 ease-out'>View Source Code</a>
              </div>
          </div>
          {/* ---------Card--------- */}
          <div className='card'>
              <div className='p-5 flex flex-col items-center justify-center'> 
                <div className='rounded-xl overflow-hidden '>
                  <img src={react} alt="" className='w-[150px] h-[150px] border-[2px] rounded-full p-1'/>
                </div>
                <h5 className='text-2xl md:text-2xl font-medium mt-3'>Background Changer </h5>
                <p className='text-slate-500 text-lg mt-3 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href="https://github.com/Mohammed-waqas/Background-Changer" target='blank' className='text-center bg-green-600 text-white py-2 px-4 rounded-lg font-semibold mt-4  hover:bg-green-500 focus:scale-95 transition-all-duration-200 ease-out'>View Source Code</a>
              </div>
          </div>
        </div>
        {/* -----------End Grid---------- */}
       </div>
     </div>
     </div>
     
  )
}

export default Portfolio
