import React from 'react'
import { Sun } from 'lucide-react'

const NavBar2 = () => {
  return (
    <div>
    <div className='absolute top-2 left-150 flex w-80 justify-between bg-gray-500 px-6 py-4 rounded-full'>
      <div>
        <img src="/logo.jpg" alt="logo" className='w-6 h-6 rounded-full'/>
      </div>
      <div className='flex gap-3'>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <Sun className='bg-black rounded-full fill-white p-1'/>
      </div>
    </div>
    </div>
  )
}

export default NavBar2
