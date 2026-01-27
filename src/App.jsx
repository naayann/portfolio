import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import SmoothFollower from './components/SmoothFollower'
import DevToast from './components/DevToast'
import HomeFeed from './components/HomeFeed'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialHandles from './components/SocialHandles'
import Footer from './components/Footer'

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
          <div className="container w-200 mx-auto border-l border-r border-white/50 border-dashed p-4">
            <div className='flex flex-col'>
              <SmoothFollower />
              <DevToast />

              <HomeFeed />
              <Experience />
              <Projects />
              <Skills />
              <SocialHandles />
              <Footer />
            </div>
          </div>
        </>
      }
    </>
  )
}

export default App
