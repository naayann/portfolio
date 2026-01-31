import React, { useEffect } from 'react'

const Maintenance = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-text flex items-center justify-center px-5">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-2xl font-medium tracking-tight text-white/95">
          Under Maintainance
        </h1>

        <div className="space-y-4 text-text/70 text-sm leading-relaxed">
          <p>This portfolio is temporarily under maintenance for design and functionality enhancements.
Will be back ASAP.</p>
        </div>

        <p className="text-text/55 text-xs pt-4">
          For more updates, follow me on X:  →{' '}
          <a
            href="https://x.com/naayann01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/80 hover:text-white underline underline-offset-[3px] decoration-text/30 hover:decoration-text/60 transition-colors"
          >
            @naayann01
          </a>
        </p>
      </div>
    </div>
  )
}

export default Maintenance