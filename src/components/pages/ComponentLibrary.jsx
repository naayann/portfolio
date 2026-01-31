'use client'
import React, { useState, useEffect } from 'react'
import { Copy, Check, ChevronLeft, ChevronDown, Download } from 'lucide-react'
import { Link } from 'react-router'
import Footer from '../sections/Footer'


const ComponentLibrary = () => {
  const [activeTab, setActiveTab] = useState({})
  const [copiedId, setCopiedId] = useState(null)
  const [open, setOpen] = useState(false)

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1800)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const components = [
    {
      id: 'button',
      title: 'Button',
      description: 'Primary action with subtle hover lift.',
      preview: (
        <button
          className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl bg-foreground text-text-invert font-medium hover:bg-foreground/85 transition-colors duration-200 text-xs md:text-[14px]"
        > 
          <Download className="w-3 h-3 md:w-4 md:h-4 download-anim" />
          Download CV
        </button>
      ),
      code: `JSX:
        const [open, setOpen] = useState(false)

          <button 
            className="flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl bg-foreground text-text-invert font-medium hover:bg-foreground/85 transition-colors duration-200 text-xs md:text-[14px]"
          >
            <Download className="w-3 h-3 md:w-4 md:h-4 download-anim" />
            Download CV
          </button>
          
Global CSS:
          @keyframes downloadMove {
            0%,
            100% {
              transform: translateY(-1px);
            }

            50% {
              transform: translateY(0);
            }
          }

          .download-anim {
            animation: downloadMove 1.4s ease-in-out infinite;
          }`,
    },
    {
      id: 'accordion',
      title: 'Accordion',
      description: 'Expandable section for details.',
      preview: (
        <>
          <div className="group rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 transition-all duration-300 hover:border-border/15 w-full">
            {/* Header */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center text-xs md:text-sm font-bold">
                  N
                </div>

                <div>
                  <p className="font-semibold text-sm md:text-[16px] text-text">Comapny</p>
                  <p className="text-xs md:text-sm text-text/60">Web Development</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-text">Internship</p>
                  <p className="text-xs text-text/60">DD/MM/YY</p>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-text/60 group-hover:text-text transition-all duration-300 ${open ? 'rotate-180' : ''
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
                <ul className="mt-2 space-y-3 text-xs md:text-sm text-text/70 leading-relaxed">
                  <li>
                    • Your description goes here
                  </li>
                  <li>
                    • Your description goes here
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </>
      ),
      code: `JSX:
const Accordion = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="group rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 transition-all duration-300 hover:border-border/15 animate-fade-in animation-delay-600">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center text-xs md:text-sm font-bold">
              N
            </div>

            <div>
              <p className="font-semibold text-sm md:text-[16px] text-text">Comapny</p>
              <p className="text-xs md:text-sm text-text/60">Web Development</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-text">Internship</p>
              <p className="text-xs text-text/60">DD/MM/YY</p>
            </div>

            <ChevronDown
              className={'w-5 h-5 text-text/60 group-hover:text-text transition-all duration-300 ${open ? 'rotate-180' : ''
        }'}
            />
          </div>
        </button>

        {/* Accordion Content */}
        <div
          className={'
            overflow-hidden transition-all duration-600 ease
            ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          '}
        >
          <div className="px-4 pb-4">
            <ul className="mt-2 space-y-3 text-xs md:text-sm text-text/70 leading-relaxed">
              <li>
                • Your description goes here
              </li>
              <li>
                • Your description goes here
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Accordion`,
    },
  ]

  return (
    <div className="min-h-screen text-text pb-20">

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

      <main className="pt-10 px-3 md:px-5 max-w-4xl mx-auto">
        {/* Header – understated like other pages */}
        <div className="mb-12 text-center animate-fade-in animation-delay-200">
          <h1 className="text-xl md:text-3xl font-bold tracking-tight">
            UI Components
          </h1>
          <p className="mt-3 text-text/60 text-xs md:text-[15px]">
            Reusable React components built for this portfolio.
          </p>
        </div>

        <div className="space-y-10">
          {components.map((comp, i) => (
            <div
              key={comp.id}
              className="group rounded-2xl border border-border/10 bg-foreground/3 transition duration-300 hover:bg-foreground/5 animate-fade-in"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className="p-5 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-md md:text-xl font-semibold text-text">
                      {comp.title}
                    </h2>
                    <p className="mt-1 text-xs md:text-sm text-text/60">
                      {comp.description}
                    </p>
                  </div>
                </div>

                {/* Tabs – simplified */}
                <div className="flex border-b border-border/10 mb-6">
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, [comp.id]: 'preview' }))}
                    className={`pb-2.5 px-4 text-xs md:text-sm font-medium transition-colors ${(activeTab[comp.id] ?? 'preview') === 'preview'
                      ? 'text-text border-b-2 border-text'
                      : 'text-text/60 hover:text-text/90'
                      }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => ({ ...prev, [comp.id]: 'code' }))}
                    className={`pb-2.5 px-4 text-xs md:text-sm font-medium transition-colors ${activeTab[comp.id] === 'code'
                      ? 'text-text border-b-2 border-text'
                      : 'text-text/60 hover:text-text/90'
                      }`}
                  >
                    Code
                  </button>
                </div>

                {/* Content area */}
                {(activeTab[comp.id] ?? 'preview') === 'preview' ? (
                  <div className="min-h-25 flex items-center justify-center p-6 bg-black/10 rounded-xl">
                    {comp.preview}
                  </div>
                ) : (
                  <div className="relative rounded-xl bg-black/20 overflow-hidden">
                    <pre className="p-5 text-sm text-text/90 overflow-x-auto font-mono leading-relaxed">
                      <code>{comp.code}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(comp.code, comp.id)}
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/15 bg-foreground/80 hover:bg-foreground text-xs text-text-invert transition-colors"
                    >
                      {copiedId === comp.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* How to use section */}
        <div className="mt-12 mb-28 animate-fade-in animation-delay-300">
          <h2 className="text-[19px] md:text-2xl font-semibold mb-5">How to use these components</h2>

          <p className="text-text/75 text-sm md:text-md mb-6 leading-relaxed">
            These are not published as an npm package — they are meant to be <strong>copied and pasted</strong> into your project (similar to shadcn/ui or magicui).
          </p>

          <div className="space-y-8 text-xs md:text-sm">
            {/* Step 1 */}
            <div>
              <h3 className="font-medium text-text mb-2.5">1. Prerequisites</h3>
              <ul className="space-y-1.5 text-text/70 list-disc pl-5">
                <li>React 18+ project (Vite)</li>
                <li>Tailwind CSS already set up</li>
                <li>lucide-react icons (used in most components)</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="font-medium text-text mb-2.5">2. Install dependencies</h3>
              <div className="bg-black/40 rounded-xl p-4 overflow-x-auto font-mono text-xs md:text-sm">
                <pre className="
  rounded-lg border border-zinc-700/50
  bg-zinc-950
  shadow-inner shadow-black/60
  p-5 font-mono text-xs md:text-sm text-emerald-300/90 leading-relaxed
">
  {`npm install lucide-react
# or
yarn add lucide-react
# or
pnpm add lucide-react`}</pre>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="font-medium text-text mb-2.5">3. Copy the component code</h3>
              <p className="text-text/70 mb-4">
                Click the <strong>Code</strong> tab below each component → click <strong>Copy</strong> → paste into your project.
              </p>
              <p className="text-text/70 mb-3">Recommended folder structure:</p>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-xs md:text-sm">
                <pre className="
  rounded-lg border border-zinc-700/50
  bg-zinc-950
  shadow-inner shadow-black/60
  p-5 font-mono text-xs md:text-sm text-emerald-300/90 leading-relaxed
">{`src/
  components/
    ui/
      Button.jsx
      Accordion.jsx
      ...`}</pre>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="font-medium text-text mb-2.5">4. Import & use</h3>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-xs md:text-sm overflow-x-auto">
                <pre className="
  rounded-lg border border-zinc-700/50
  bg-zinc-950
  shadow-inner shadow-black/60
  p-5 font-mono text-xs md:text-sm text-emerald-300/90 leading-relaxed
">{`import { Button } from '@/components/ui/Button'
import { ChevronDown, Download } from 'lucide-react'

// Example usage
<Button>
  <Download size={16} />
  Download CV
</Button>`}</pre>
              </div>
            </div>

            {/* Optional notes */}
            <div className="pt-4 border-t border-border/10">
              <p className="text-text/60 text-xs md:text-sm italic">
                • Most components are unstyled / minimally styled — customize freely with Tailwind classes.<br />
                • No external runtime dependencies except <code className="text-text/90">lucide-react</code>.<br />
                • Animations (like fade-in, bounce) require your global CSS / tailwind.config.
              </p>
            </div>
          </div>
        </div>


        <Footer />
      </main>
    </div>
  )
}

export default ComponentLibrary