import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Experience = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1 className="mt-10 mb-6 text-xl font-bold text-white">
        Experience
      </h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition">
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sm font-bold">
              MMES
            </div>

            <div>
              <p className="font-semibold text-white">MMES</p>
              <p className="text-sm text-white/60">Web Development</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">Internship</p>
              <p className="text-xs text-white/60">August 2025</p>
            </div>

            <ChevronDown
              className={`w-5 h-5 text-white/60 transition-transform ${open ? 'rotate-180' : ''
                }`}
            />
          </div>
        </button>

        {/* Accordion Content */}
        <div
          className={`
            overflow-hidden transition-all duration-600 ease
            ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-4 pb-4">
            <ul className="mt-2 space-y-3 text-sm text-white/70 leading-relaxed">
              <li>
                • Designed and developed a dynamic portfolio website for a local village to improve digital visibility.
              </li>
              <li>
                • Built a responsive website to maintain the village’s digital presence, ensuring accessibility across devices.
              </li>
              <li>
                • Collaborated with professors to gather requirements and translate them into clean UI components.
              </li>
              <li>
                • Focused on performance, usability, and maintainable frontend structure following best practices.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Experience
