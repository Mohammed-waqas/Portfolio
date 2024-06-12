import React from 'react'

const Home = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>
        <div className='flex flex-col md:flex-row'> 
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2'>
            <span className='text-xl'>Welcome In My Feed </span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello I'm a </h1>
            <span className='text-red-700 font-bold'> Developer</span>
            </div>
            <br/>
            <p className='text-sm md:text-md text-justify'>MERN Stack Developer with 6 months of experience, I specialize in building full-stack web applications using PostgreSQL, Express.js, React.js, and Node.js. I am eager to join a dynamic team to further develop my skills and contribute to high-quality software solutions.</p>
            <br/>
            {/* Social Media Icon */}
            </div>
        <div className='md:w-1/2'>Right</div>
        </div>
    </div>
    </>
  )
}

export default Home
