import React, { useEffect, useState } from 'react'

const DevToast = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setShow(true), 2000) 

    const hideTimer = setTimeout(() => setShow(false), 5000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      className={`
        fixed top-5 left-1/2 -translate-x-1/2
        bg-white/10 text-white px-5 py-2 rounded-xl
        backdrop-blur-md border border-white/20
        shadow-lg transition-all duration-300
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        z-50
      `}
    >
      ⚡Light mode? Not today!
    </div>
  )
}

export default DevToast
