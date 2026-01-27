import { Download, Send } from 'lucide-react'

const HomeFeed = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative h-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(180)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/30"
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
            src="/profile.jpg"
            alt="Nayan Sarania"
            className="w-28 h-28 rounded-2xl ring-1 ring-white/20 hover:ring-white/50 transition-all duration-200 p-1 z-50 bg-white/5"
          />

          <div className="relative group">
            <h1 className="text-3xl font-bold text-white cursor-default">
              Nayan Sarania
            </h1>

            {/* Tooltip */}
            <span
              className="absolute left-67 -translate-x-1/2 top-1.5 bg-white/50 text-black text-xs font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap z-50"
            >
              Open to Work
            </span>

            <p className="text-sm text-white/60 mt-1">
              Frontend Developer • React Enthusiast
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mt-8 max-w-xl">
        <h2 className="text-lg font-semibold text-white">
          About
        </h2>

        <p className="mt-3 text-white/70 leading-relaxed">
          I’m a frontend developer based in India, focused on building
          performance oriented React applications with clean UI and solid UX. <br />
          Currently open to new opportunities.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 mt-6">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors duration-200 text-sm md:text-md cursor-not-allowed">
            <Download className="w-4 h-4 download-anim" />
            Download CV
          </button>

          <a href="https://mail.google.com/mail/?view=cm&to=nayan.sarania.work@gmail.com" target="_blank">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition text-sm md:text-md cursor-pointer">
              <Send className="w-4 h-4 send-anim" />
              Send Mail
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default HomeFeed
