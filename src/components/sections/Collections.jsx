import {
  FiArrowRight,
  FiGrid,
  FiLayers,
  FiBookOpen,
  FiEdit3,
} from 'react-icons/fi'

const Collections = () => {
  return (
    <>
      <h1 className="mt-10 mb-6 text-xl font-bold text-text">
        Collections
      </h1>

      <section className="flex flex-col gap-3">

        <Card
          icon={<FiGrid />}
          title="UI Kit"
          desc="Reusable React components built for this portfolio."
        />

        <Card
          icon={<FiLayers />}
          title="Concept Experiments"
          desc="Early-stage UI ideas and interaction explorations."
        />
        <Card
          icon={<FiBookOpen />}
          title="Case Studies"
          desc="Design decisions, trade-offs, and real-world outcomes."
        />

        <Card
          icon={<FiEdit3 />}
          title="Blogs"
          desc="Thoughts on frontend, design, and things I’m learning."
        />

      </section>
    </>
  )
}

const Card = ({ icon, title, desc }) => (
  <a href="#">
    <div className="flex items-center rounded-2xl border border-border/10 bg-foreground/3 hover:bg-foreground/5 p-4 transition cursor-not-allowed hover:scale-[1.01]">
      <div className="flex items-center gap-4">
        <div className="bg-white/10 p-3 rounded-md text-xl text-text">
          {icon}
        </div>
        <div>
          <h1 className="font-semibold">{title}</h1>
          <p className="text-text/60 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  </a>
)

export default Collections
