import { Download, Send } from 'lucide-react'
import profile from "../../assets/profile.jpg"
import Experience from "../sections/Experience"
import GithubStats from "../sections/GithubStats"
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import SocialHandles from '../sections/SocialHandles'
import Collections from '../sections/Collections'
import Footer from '../sections/Footer'

const HomeFeed = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative h-32 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(180)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-foreground/30"
              style={{
                /* eslint-disable */
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Profile */}
      <div className="-mt-10">
        <div className="flex items-end gap-4">
          <img
            src={profile}
            alt="Nayan Sarania"
            className="w-22 h-22 md:w-28 md:h-28 rounded-2xl ring-1 ring-border/20 hover:ring-white/50 transition-all duration-200 p-1 z-50 bg-foreground/5 animate-fade-in animation-delay-50"
          />

          <div>
            <h1 className="text-xl md:text-3xl font-bold text-text cursor-default animate-fade-in animation-delay-100">
              Nayan Sarania
            </h1>

            <p className="text-[10px] md:text-sm text-text/60 mt-1 animate-fade-in animation-delay-200">
              React Developer • Learning Full-Stack
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mt-8 max-w-2xl animate-fade-in animation-delay-300">
        <h2 className="text-md md:text-lg font-semibold text-text">
          About
        </h2>

        <p className="text-xs md:text-[16px] mt-3 text-text/70 leading-relaxed">
          I’m a Web Developer based in India, <br /> specializing in Frontend and expanding to Full-Stack.
          Experienced in crafting clean, performant React applications with a strong focus on user experience, accessibility, and maintainable code.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 mt-6 animate-fade-in animation-delay-400">
          <button 
            className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl bg-foreground text-text-invert font-medium hover:bg-foreground/85 transition-colors duration-200 text-xs md:text-[14px] cursor-not-allowed"
          >
            <Download className="w-3 h-3 md:w-4 md:h-4 download-anim" />
            Download CV
          </button>

          <a href="https://mail.google.com/mail/?view=cm&to=nayan.sarania.work@gmail.com" target="_blank">
            <button 
              className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl bg-foreground/10 hover:bg-foreground/15 border border-border/20 text-text transition text-xs md:text-[14px] cursor-pointer"
            >
              <Send className="w-3 h-3 md:w-4 md:h-4 send-anim" />
              Send Mail
            </button>
          </a>
        </div>
      </div>

      <Experience />
      <GithubStats />
      <Projects />
      <Skills />
      <SocialHandles />
      <Collections />
      <Footer />
    </>
  )
}

export default HomeFeed
