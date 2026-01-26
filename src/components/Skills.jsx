import React from 'react'

const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Supabase', 'Figma', 'Git', 'Github', 'NPM', 'Vite']

const Skills = () => {
  return <>
    <h1 className='mt-10 mb-4 font-bold text-xl'>Skills & Technologies</h1>
    <div className="flex flex-wrap gap-2 justify-cente">

      {techStack.map((skill) => {
        return (
          <div
            key={skill}
            className='bg-blur/5 border border-gray-400 rounded-xl px-5 py-2 whitespace-nowrap'>
            <p className='text-gray-400 hover:text-gray-200 transition-colors duration-300'>{skill}</p>
          </div>
        )
      })}
    </div>
  </>
}

export default Skills
