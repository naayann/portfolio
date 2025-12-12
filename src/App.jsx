import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoadingScreen from './components/LoadingScreen'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading? <LoadingScreen /> : <><Navbar /> <Home /></>}
    </>
  )
}

export default App
