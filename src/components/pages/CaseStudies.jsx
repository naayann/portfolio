import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import Footer from '../sections/Footer'

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-text pb-20">

      <div className="sticky top-0 z-50 pt-4 px-4 md:px-5">
        <Link
          to="/"
          className="
                  inline-flex items-center gap-1.5
                  text-sm text-text/60 hover:text-text
                  rounded-lg px-3 py-1.5
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  transition-colors duration-200
                "
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={2.2} />
          <p className='hidden md:block'>Home</p>
        </Link>
      </div>

      <main className="pt-10 px-5 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
        {/* Title area – matching Projects / Blogs / ProjectPage */}
        <div className="mb-12 text-center animate-fade-in animation-delay-100">
          <h1 className="text-xl md:text-3xl font-bold tracking-tight">
            Case Studies
          </h1>
          <p className="mt-3 text-text/60 text-xs md:text-[15px]">
            Design decisions, trade-offs, and real-world outcomes.
          </p>
        </div>

        <div className="group rounded-2xl border border-border/10 bg-foreground/3 p-6 md:p-10 text-center transition duration-300 hover:bg-foreground/5 animate-fade-in animation-delay-200">
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-text mb-4">
              No posts yet
            </h2>
            <p className="text-text/70 leading-relaxed text-xs md:text-[15px] max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo sed harum laborum eum nam dolore tenetur, dolorem voluptates quas, facilis rerum, porro incidunt ab. Molestiae sed rerum quisquam?
            </p>
          </div>

          <p className="text-text/55 text-[10px] md:text-xs pt-4">
          For more updates, follow me on X {" "}
          <a
            href="https://x.com/intent/follow?screen_name=naayann01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/80 hover:text-white underline underline-offset-[3px] decoration-text/30 hover:decoration-text/60 transition-colors"
          >
            @naayann01
          </a>
        </p>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default CaseStudiesPage;