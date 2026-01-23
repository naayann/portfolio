import React from 'react'
import { Download, Github, Twitter } from 'lucide-react'

const HomeFeed = () => {
  return (
    <div className="container w-200 mx-auto">
      <div className='relative bg-black h-40 w-full'>

        {/* Purple Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "white",
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
      {/* Header Content */}
      <div className='flex items-center gap-3 justify-between'>
        <div>
          <div className='absolute top-36 left-105'>
            <img src="/profile.jpg" alt="Nayan Sarania" className='w-40 h-40 rounded-full ring-5 ring-[#fdfdfd]' />
          </div>
          <div className='mt-22'>
            <h1 className='font-bold text-4xl'>Nayan Sarania</h1>
            <p className='text-sm text-secondary-text'>20 • Front-End Developer • React Enthusiast</p>
          </div>
        </div>

        <div>
          <div className='flex gap-2'>
            <a href="">
              <button className='hover:bg-black/5 p-2 rounded-full ring-1 ring-secondary-text/50'>
                <Twitter />
              </button>
            </a>
            <a href="">
              <button className='hover:bg-black/5 p-2 rounded-full ring-1 ring-secondary-text/50'>
                <Github />
              </button>
            </a>
            <button
              className='flex font-medium items-center gap-1 text-md bg-black hover:bg-black/80 text-white px-4 py-2 rounded-2xl'
            >
              Resume
              <Download className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <h2 className='mt-4 font-bold text-xl'>
        Who am I?
      </h2>
      <p>
        I’m a frontend developer based in India, building high-performance React
        applications with a strong focus on user experience. Currently open to new
        opportunities.
      </p>

    </div>
  )
}

export default HomeFeed
