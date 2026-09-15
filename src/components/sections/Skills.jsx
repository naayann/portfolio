import { 
  SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiSupabase, 
  SiFigma, SiGit, SiGithub, SiNpm, SiVercel, SiNextdotjs, 
  SiMysql, SiPostgresql, SiPython, SiC 
} from 'react-icons/si'

import { DiJava } from 'react-icons/di'

const techStack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'MySql', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: DiJava },
  { name: 'Figma', icon: SiFigma },
]


const Skills = () => {
  return (
    <>
      <h1 className="mt-10 mb-5 text-lg md:text-xl font-bold text-text animate-fade-in animation-delay-800">
        Skills & Technologies
      </h1>

      <div className="flex flex-wrap gap-3">
        { /* eslint-disable */
          techStack.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="flex items-center gap-2 rounded-full bg-foreground/5 hover:bg-foreground/8 px-4 py-2 text-sm text-text/70 border border-border/10  hover:text-text/90 transition animate-fade-in animation-delay-800"
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
