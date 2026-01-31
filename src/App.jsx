import { useEffect, useState } from 'react'
import LoadingScreen from './components/overlays/LoadingScreen'
import SmoothFollower from './components/overlays/SmoothFollower'
import DevToast from './components/overlays/DevToast'
import HomeFeed from './components/pages/HomeFeed'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import SocialHandles from './components/sections/SocialHandles'
import Collections from './components/sections/Collections'
import Footer from './components/sections/Footer'
import GithubStats from './components/sections/GithubStats'
import Maintenance from './components/Maintenance'

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
          <div className="container w-full md:w-200 mx-auto md:border-l md:border-r border-border/50 border-dashed p-4">
            <div className='flex flex-col'>
              <SmoothFollower />
              {/* <DevToast />
              <HomeFeed />
              <Experience />
              <GithubStats />
              <Projects />
              <Skills />
              <SocialHandles />
              <Collections />
              <Footer /> */}
              <Maintenance />
            </div>
          </div>
        </>
      }
    </>
  )
}

export default App
