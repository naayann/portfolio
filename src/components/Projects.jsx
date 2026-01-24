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
]

const Projects = () => {
  return (
    <>
    <h1 className='mt-4 font-bold text-xl'>Featured Projects</h1>
      <div className='grid grid-cols-2'>
        {projects.map((project, i) => (
          <div key={i}>
            <img src={project.img} alt="coming-soon" />
            <h2>{project.title}</h2>
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
