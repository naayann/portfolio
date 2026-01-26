import React from 'react'

const techStack = [ 'JavaScript', 'React', 'Tailwindcss', 'Supabase', 'Figma', 'Git', 'Github', 'NPM', 'Vite', 'Vercel', 'Notion']

const Skills = () => {
  return <>
    <h1 className='mt-10 mb-4 font-bold text-xl'>Skills & Technologies</h1>
    <div className="flex flex-wrap gap-2 justify-cente">

      {techStack.map((skill) => {
        return (
          <div
            key={skill}
            className='bg-blur/5 border border-gray-400 hover:border-gray-200 text-gray-400 hover:text-gray-200 rounded-xl px-5 py-2 transition-all duration-300'>
            <p>{skill}</p>
          </div>
        )
      })}
    </div>
  </>
}

export default Skills
