import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-text pb-20">
      {/* Back link – consistent with ProjectPage */}
      <div className="sticky top-0 z-50 pt-5 pl-5 md:pl-8 lg:pl-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-text/60 hover:text-text transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={2.2} />
          Home
        </Link>
      </div>

      <main className="pt-10 px-5 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
        {/* Title + subtitle – same understated treatment */}
        <div className="mb-10 animate-fade-in animation-delay-200">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Case Study
            </h1>
            <span className="text-sm text-text/60 font-medium">
              Thoughts & Notes
            </span>
          </div>
        </div>

        {/* Coming soon card – styled like project cards */}
        <div className="group rounded-2xl border border-border/10 bg-foreground/3 p-8 md:p-10 text-center transition duration-300 hover:bg-foreground/5 animate-fade-in animation-delay-300">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-text mb-4">
              No posts yet
            </h2>
            <p className="text-text/70 leading-relaxed text-[15px] sm:text-base max-w-2xl mx-auto">
              Still collecting ideas worth writing down.  
              The first post is coming soon — likely covering React patterns, Tailwind best practices, or lessons from real projects.
            </p>
          </div>

          <p className="text-sm text-text/50 mt-6">
            Check back later or follow me on X for updates.
          </p>
        </div>

        {/* Tiny footer signature – consistent with ProjectPage */}
        <div className="mt-24 text-center text-xs text-text/40 animate-fade-in animation-delay-500">
          Writing from Imphal • 2025
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;