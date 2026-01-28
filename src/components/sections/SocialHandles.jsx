import { FiArrowUpRight } from 'react-icons/fi'
import { SiGithub, SiX } from 'react-icons/si'

const SocialHandles = () => {
  return (
    <>
      <h1 className="mt-10 mb-6 text-xl font-bold text-text">
        Social Handles
      </h1>

      <section className="grid grid-cols-2 gap-4">

        <a href="https://x.com/intent/follow?screen_name=naayann01" target="_blank">
          <div className="group flex items-center justify-between rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 p-4 transition duration-300 hover:scale-[1.02]">
            <div className='flex items-center gap-4'>
              <div className='bg-background p-3 rounded-md'>
                <SiX className="text-xl text-text" />
              </div>
              <div>
                <h1>X</h1>
                <p className="text-text/60 text-sm">@naayann01</p>
              </div>
            </div>
            <div>
              <FiArrowUpRight className='text-xl text-text/50 group-hover:text-text duration-300' />
            </div>
          </div>
        </a>

        <a href="https://github.com/naayann" target="_blank">
          <div className="group flex items-center justify-between rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 p-4 transition duration-300 hover:scale-[1.02]">
            <div className='flex items-center gap-4'>
              <div className='bg-foreground/10 p-3 rounded-md'>
                <SiGithub className="text-xl text-text" />
              </div>
              <div>
                <h1>Github</h1>
                <p className="text-text/60 text-sm">@naayann</p>
              </div>
            </div>
            <div>
              <FiArrowUpRight className='text-xl text-text/50 group-hover:text-text duration-300' />
            </div>
          </div>
        </a>
      </section>
    </>
  )
}

export default SocialHandles
