import React from 'react'

const About = () => {
  return (
    <>
    
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p>
          Hello, I'm Muhammad Waqas, a passionate Web developer with a keen eye for MERN
          Stack . With a background in Computer Science, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        <h2 className='font-semibold text-lg'>BS Computer Science | <span className='font-semibold text-sm'>University Of Agriculture Faisalabad Sub-Campus Toba Tek Singh</span> | <span className='font-medium  text-sm'>2019-2023</span></h2>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        Proficient in JavaScript, HTML, CSS; experienced with React.js, Node.js, Express.js, PostgreSQL, Git; strong grasp of RESTful API Design, Responsive Web Design. Excellent problem-solving skills; effective communicator and collaborator.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <div className='flex justify-between mt-1'>
          <h2 className='font-semibold text-lg'>MERN Stack Trainee | Knowledge Streams</h2>
          <p className='font-semibold text-sm'>Jan 2024 - April 2024</p>
        </div>
        <ul className='mt-2 list-disc pl-5 space-y-2'>
          <li>Developed responsive user interfaces using React.js, ensuring optimal performance across various devices and browsers.</li>
          <li>Implemented state management using Redux to streamline the data flow and improve application scalability.</li>
          <li>Built RESTful APIs with Node.js and Express.js, facilitating seamless data exchange between client and server.</li>
          <li>Implemented CRUD operations, authentication, and authorization using JWT to enhance application security.</li>
          <li>Managed server-side logic and integrated third-party APIs to extend application functionality.</li>
          <li>Designed and maintained PostgreSQL databases, ensuring data consistency and integrity.</li>
        </ul>
        <br />
        <div className='flex justify-between'>
          <h2 className='font-semibold text-lg'>Front-End Developer Intern | XAMEER Software Technologies</h2>
          <p className='font-semibold text-sm'>April 2023 - July 2023</p>
        </div>
        <ul className='mt-2 list-disc pl-5 space-y-2'>
          <li>Developed web pages using HTML5, ensuring accessibility and SEO optimization.</li>
          <li>Styled pages with CSS3, using Flexbox and Grid for responsive layouts and animations.</li>
          <li>Implemented dynamic features with vanilla JavaScript, including DOM manipulation.</li>
          <li>Used Git for version control, participated in code reviews, and collaborated in Agile sprints.</li> 
        </ul>
        <br />
        <hr />
    </div>
   
    </>

  )
}

export default About
