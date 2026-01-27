import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import SmoothFollower from './components/SmoothFollower'
import DevToast from './components/DevToast'
import HomeFeed from './components/sections/HomeFeed'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import SocialHandles from './components/sections/SocialHandles'
import Collections from './components/sections/Collections'
import Footer from './components/sections/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading ?
        <LoadingScreen /> :
        <>
          <div className="container w-125 md:w-200 mx-auto md:border-l md:border-r border-white/50 border-dashed p-4">
            <div className='flex flex-col'>
              <SmoothFollower />
              <DevToast />

              <HomeFeed />
              <Experience />
              <Projects />
              <Skills />
              <SocialHandles />
              <Collections />
              <Footer />
            </div>
          </div>
        </>
      }
    </>
  )
}

export default App
