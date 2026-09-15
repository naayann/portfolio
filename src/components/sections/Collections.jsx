import {
  FiArrowRight,
  FiGrid,
  FiLayers,
  FiBookOpen,
  FiEdit3,
} from 'react-icons/fi'
import { Link } from 'react-router'

const Collections = () => {
  return (
    <>
      <h1 className="mt-10 mb-6 text-lg md:text-xl font-bold text-text animate-fade-in animation-delay-1000">
        Others
      </h1>

      <section className="flex flex-col gap-3 animate-fade-in animation-delay-1000">

        <Card
          icon={<FiGrid />}
          title="UI Components"
          desc="Reusable React components built for this portfolio."
          link="/componentlib"
        />

        <Card
          icon={<FiEdit3 />}
          title="Blogs"
          desc="Thoughts on frontend, design, and things I’m learning."
          link="/blogs"
        />

      </section>
    </>
  )
}

const Card = ({ icon, title, desc, link }) => (
  <Link to={link}>
    <div className="flex items-center rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 p-4 transition  hover:scale-[1.01]">
      <div className="flex items-center gap-4">
        <div className="bg-white/10 p-3 rounded-md text-md md:text-xl text-text">
          {icon}
        </div>
        <div>
          <h1 className="font-semibold text-sm md:text-md">{title}</h1>
          <p className="text-text/60 text-xs md:text-sm">{desc}</p>
        </div>
      </div>
    </div>
  </Link>
)

export default Collections
