import logo from '../assets/logo.jpeg';

const Navbar = () => {
  return (
    <>
    <nav className='flex w-140 py-1 bg-white/10 backdrop-blur-md border border-white/20 items-center justify-between rounded-4xl fixed top-6 left-1/2 -translate-x-1/2 z-900'>

      <div className='flex items-center p-2 ml-1.5'>
        <img src={logo} className='w-9 rounded-full'/>
        <p className='font-semibold text-white ml-2 text-lg'>naayann</p>
      </div>
      <div>
        <button className='bg-white rounded-4xl py-2 px-4 mr-3.5 font-semibold text-lg'>Get in touch</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
