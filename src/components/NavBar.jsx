import { MoonIcon } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-5'>
      <div className='flex gap-4'>
        <a 
          href="#home"
          className='text-white/70 hover:text-white transition-colors duration-300'
        >
          Home
        </a>
        <a 
          href="#projects"
          className='text-white/70 hover:text-white transition-colors duration-300'
        >
          Projects
        </a>
        <a 
          href="#contact"
          className='text-white/70 hover:text-white transition-colors duration-300'
        >
          Contact
        </a>
      </div>
      <div>
        <p className='text-white/70 hover:text-white transition-colors duration-300'>Dark</p>
      </div>
    </nav>
  )
}

export default NavBar
