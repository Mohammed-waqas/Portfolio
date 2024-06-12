import React, { useState } from 'react'
import pic from "../assets/image/Waqas1.jpg";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [menu, setMenu]=useState(false);
    const navItem=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        },
    ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Muhammad <span className='text-green-600 '>Waqas</span>
                <p className='text-sm'>MERN Stack Developer</p>
                </h1>
            </div>
             {/*Desktop Menu */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navItem.map(({id,text})=>(
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                {text}
                            </li>
                        ))
                    }
                </ul>
               <div onClick={()=>setMenu(!menu)} className='md:hidden'>{menu?<IoMenu size={24}/>:<IoCloseSharp size={24}/>}
                
               </div>
            </div>
        </div>

        {/*Mobile Navbar */}
        {
            menu && (
        <div>
            <ul className='md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-xl'>
            {
            navItem.map(({id,text})=>(
            <li className='hover:scale-105 duration-200 cursor-pointer ' key={id}>
            {text}
            </li>
                ))
            }
            </ul>
        </div>
            )
        }
        
    </div>
    </>
  )
}

export default Navbar
