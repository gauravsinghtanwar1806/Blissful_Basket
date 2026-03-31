"use client";

import HamperCard from "./HamperCard";

export default function FeaturedCarousel({ hampers }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-blissfullBrown">
            Featured Hampers 🌟
          </h2>
          <p className="text-warmGray mt-2">Our most loved curated boxes.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-0 gap-8">
        {hampers.map((hamper, idx) => (
          <div key={hamper.id} className="w-full">
            <HamperCard hamper={hamper} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
