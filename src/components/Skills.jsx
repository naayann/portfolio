import React from 'react'

const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Supabase', 'Figma', 'Git', 'Github', 'NPM', 'Vite']

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-2 max-w-xl justify-center">
      {techStack.map((skill) => {
        return (
          <div
            key={skill}
            className='bg-blur/5 border border-accent rounded-full px-5 py-2 whitespace-nowrap'>
            <p className='text-accent'>{skill}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
