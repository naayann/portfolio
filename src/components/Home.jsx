import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <main className='h-screen flex flex-col items-center mt-80'>
      <div>
        <p className="flex items-center justify-center gap-2 text-white bg-white/20 px-3 rounded-2xl">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          Available
        </p>

      </div>
      <h1 className='text-white text-5xl font-extrabold'>Nayan Sarania</h1>
      <h1 className='text-white/80 text-5xl font-extrabold'>A Frontend Developer</h1>
      <Button />
    </main>
  )
}

export default Home
