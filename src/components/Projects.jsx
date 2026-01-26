import React from 'react'

const projects = [
  {
    img: "/comingsoon.png",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React","Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
  {
    img: "/comingsoon.png",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React","Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
  {
    img: "/comingsoon.png",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React","Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
  {
    img: "/comingsoon.png",
    title: "Coming Soon",
    desc: "This project is currenlty under construction, and will be launching soon",
    stack: ["React","Typescript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann"
  },
]

const Projects = () => {
  return (
    <>
    <h1 className='mt-4 mb-4 font-bold text-xl'>Projects</h1>
      <div className='grid grid-cols-2 gap-2'>
        {projects.map((project, i) => (
          <div key={i} className='border border-gray-500 rounded-2xl p-3'>
            <img src={project.img} alt="coming-soon" className='rounded-lg'/>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold'>{project.title}</h2>
              <p className='flex items-center gap-1'>
                <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'/>
                Building
              </p>
            </div>
            <p>{project.desc}</p>
            <div>

            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
