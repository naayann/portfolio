import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    img: "/comingsoon.jpg",
    title: "Weathy",
    desc: "An API-based weather app project, built to monitor weather status.",
    stack: ["React", "TypeScript", "TankStack Query"],
    demo: "https://example.com",
    github: "https://github.com/naayann",
    status: "Building",
    statusColor: "green",
  },
  {
    img: "/comingsoon.jpg",
    title: "Coming Soon",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://example.com",
    github: "https://github.com/naayann",
    status: "Planning",
    statusColor: "red",
  },
]

const Projects = () => {
  return (
    <>
      <h1 className="mt-10 mb-6 text-xl font-bold text-text animate-fade-in animation-delay-800">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in animation-delay-900">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 p-4 transition"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mt-4">
              <h2 className="font-semibold text-text">
                {project.title}
              </h2>

              <span className="flex items-center gap-2 text-xs text-text/60">
                <span
                  className={`w-2 h-2 rounded-full ${project.statusColor === 'green'
                    ? 'bg-green-400'
                    : 'bg-red-400'
                    }`}
                />
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="mt-2 text-sm text-text/60 leading-relaxed">
              {project.desc}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech, iTech) => (
                <span
                  key={iTech}
                  className="rounded-full border border-border/15 px-3 py-1 text-xs text-text/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-5 text-sm">
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-1 text-text/60 group-hover:text-text duration-200 hover:underline cursor-not-allowed"
              >
                View Project
                <ArrowUpRight className="w-4 h-4 send-anim" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
