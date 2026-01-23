import React from 'react'
import { Download, Github, Twitter } from 'lucide-react'

const HomeFeed = () => {
  return (
    <div className="container w-200 mx-auto">
      {/* Header Content */}
      <div className='flex items-center gap-3 justify-between'>
        <div>
          <div>
            <img src="/profile.jpg" alt="Nayan Sarania" className='w-40 h-40 rounded-full ring-2 ring-secondary-text/30' />
          </div>
          <div>
            <h1 className='font-bold text-4xl'>Nayan Sarania</h1>
            <p className='text-sm text-secondary-text'>20 • Front-End Developer • React Enthusiast</p>
          </div>
        </div>

        <div>
          <div className='flex gap-2'>
            <a href="">
              <button className='bg-black/5 hover:bg-black/10 p-2 rounded-full ring-1'>
                <Twitter />
              </button>
            </a>
            <a href="">
              <button className='bg-black/5 hover:bg-black/10 p-2 rounded-full ring-1'>
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
