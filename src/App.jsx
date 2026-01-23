import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import HomeFeed from './components/HomeFeed'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return (
    <>
      {isLoading ?
        <LoadingScreen /> :
        <>
          <div className="container w-200 mx-auto">
            <div>
              <NavBar />
            </div>
            <div className='flex flex-col'>
              <HomeFeed />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </div>
        </>
      }
    </>
  )
}

export default App
