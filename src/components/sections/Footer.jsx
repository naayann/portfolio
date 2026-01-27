import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Quote */}
      <div className="mt-24 mb-4 text-center">
        <p className="italic text-white/50">
          “Regret of time wasted is wasting more time.”
        </p>
      </div>

      <footer className="mt-20 mb-6 text-center text-xs text-white/40">
        <p>
          Designed & Developed by {" "}
          <span
            className='text-white/80 font-medium'>
            NayanSarania
          </span>
        </p>
        <p className='text-white/30 mt-1'>
          &copy; 2026. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default Footer
