import React from 'react'
import { SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiSupabase, SiFigma, SiGit, SiGithub, SiNpm, SiVercel, SiNotion } from 'react-icons/si'

const techStack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Figma', icon: SiFigma },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'NPM', icon: SiNpm },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Notion', icon: SiNotion },
]


const Skills = () => {
  return (
    <>
      <h1 className="mt-10 mb-5 text-xl font-bold text-white">
        Skills & Technologies
      </h1>

      <div className="flex flex-wrap gap-3">
        {techStack.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/70 border border-white/10 hover:bg-white/10 hover:text-white transition"
          >
            <Icon className="w-4 h-4" />
            {name}
          </span>
        ))}


      </div>
    </>
  )
}

export default Skills
