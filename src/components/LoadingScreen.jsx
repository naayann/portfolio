const LoadingScreen = () => {

  return (
    <div className='w-full h-full inset-0 bg-white fixed flex flex-col justify-center items-center z-1000'>
      <div>
        <p className='text-black text-2xl font-semibold mb-2'>Nayan Sarania</p>
      </div>
      <div className="w-50 h-1 bg-gray-300 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
