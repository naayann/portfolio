import React, { useEffect } from 'react';
import { Github, Globe, ChevronLeft } from 'lucide-react';
import { useParams, Link } from 'react-router';
import { projects } from '../../data/projects';
import Footer from '../sections/Footer'

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects?.[id] ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen text-text">

      <div className="sticky top-0 z-50 pt-4 px-4 md:px-5">
        <Link
          to="/"
          className="
            inline-flex items-center gap-1.5
            text-sm text-text/60 hover:text-text
            rounded-lg px-3 py-1.5
            bg-white/5 backdrop-blur-md
            border border-white/10
            transition-colors duration-200
          "
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={2.2} />
          <p className='hidden md:block'>Home</p>
        </Link>
      </div>


      <main className="pt-6 px-5 md:px-12 max-w-4xl mx-auto">
        <div className="mb-5 animate-fade-in animation-delay-100">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-xs md:text-sm text-text/60">
              <span
                className={`w-2 h-2 rounded-full ${
                  project.statusColor === 'green' ? 'bg-green-400' : 'bg-red-400'
                }`}
              />
              {project.status}
            </div>
          </div>

          <div className="mt-1.5 text-xs md:text-sm text-text/60">
            {project.role}
          </div>
        </div>

        <div className="mb-5 group rounded-2xl overflow-hidden ring-1 p-1 ring-border/10 hover:ring-border/50 transition-all duration-200 animate-fade-in animation-delay-200">
          <img
            src={project.img}
            alt={project.title}
            className="w-full aspect-video object-cover rounded-xl md:grayscale group-hover:grayscale-0 transition-all duration-200"
          />
        </div>

        {/* Quick actions */}
        <div className="flex flex-wrap gap-3 mb-8 animate-fade-in animation-delay-400">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/15 bg-foreground/3 hover:bg-foreground/6 text-text/90 hover:text-text text-xs md:text-sm font-medium transition duration-200  cursor-not-allowed"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/15 bg-foreground/3 hover:bg-foreground/6 text-text/90 hover:text-text text-xs md:text-sm font-medium transition duration-200  cursor-not-allowed"
            >
              <Globe className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>

        {/* Description */}
        <section className="mb-8 animate-fade-in animation-delay-500">
          <p className="text-text/75 leading-relaxed text-xs md:text-[15px] whitespace-pre-line">
            {project.description}
          </p>
        </section>

        {/* Tech stack – same style as card */}
        {project.stack?.length > 0 && (
          <section className="mb-30 animate-fade-in animation-delay-600">
            <h2 className="text-md md:text-lg font-semibold mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border/15 px-3 py-1 text-xs text-text/70 bg-foreground/2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;