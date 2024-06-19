import React from 'react';

import pic from "../assets/image/Waqas1.jpg";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>
        <div className='flex flex-col md:flex-row'> 
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed </span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello I'm a </h1>
            {/* <span className='text-red-700 font-bold'> Developer</span> */}
            <ReactTyped
            className='text-red-700 font-bold'
            strings={["Developer","Programmer","Coder"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
            />
            </div>
            <br/>
            <p className='text-sm md:text-md text-justify'>MERN Stack Developer with 6 months of experience, I specialize in building full-stack web applications using React.js, Express.js, Node.js and PostgreSQL. I am eager to join a dynamic team to further develop my skills and contribute to high-quality software solutions.</p>
            <br/>
            {/* Social Media Icon */}
            <div className='flex justify-between flex-col items-center md:flex-row space-y-6 md:space-y-0'>
            <div className='space-y-2 '>
                <h1 className='font-bold  text-center'>Available On</h1>
                <ul className='flex space-x-5'>
                <li  className='text-2xl cursor-pointer'>
                <a href="https://www.linkedin.com/in/muhammeddwaqas/" target='blank'><FaLinkedin /></a>
                </li>
                <li className='text-2xl cursor-pointer'>
                  <a href="https://github.com/Mohammed-waqas" target='blank'><FaGithubSquare /></a>
                </li>
                <li className='text-2xl cursor-pointer'>
                  <a href="https://wa.me/qr/GHAWPZXZO6GSH1" target='blank'><FaWhatsappSquare /></a>
                </li>
                <li className='text-2xl cursor-pointer'>
                  <a href="https://web.facebook.com/mwaqas9733" target='blank'><FaFacebookSquare /></a>
                </li>
                </ul>
            </div>
            <div className='space-y-2 '>
            <h1 className='font-bold text-center'>Currently Working On</h1>
                <div className='flex space-x-5'>
                <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                <BiLogoPostgresql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                </div>
                
            </div>
            </div>
            </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
          <img src={pic} className='rounded-full md:w-[400px] md:h-[400px] border-4 border-white  border-solid shadow-lg' alt="" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
