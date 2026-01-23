import { MoonIcon } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <nav className=' w-screen flex items-center justify-between px-8 py-5'>
      <div className='flex gap-3'>
        <a 
          href="#home"
          className='text-secondary-text hover:text-text transition-colors duration-300'
        >
          Home
        </a>
        <a 
          href="#projects"
          className='text-secondary-text hover:text-text transition-colors duration-300'
        >
          Projects
        </a>
        <a 
          href="#experience"
          className='text-secondary-text hover:text-text transition-colors duration-300'
        >
          Experience
        </a>
        <a 
          href="#contact"
          className='text-secondary-text hover:text-text transition-colors duration-300'
        >
          Contact
        </a>
      </div>
      <div>
        <MoonIcon className='w-4 fill-black'/>
      </div>
    </nav>
  )
}

export default NavBar
