"use client";

import { useRef } from "react";
import HamperCard from "./HamperCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function FeaturedCarousel({ hampers }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-blissfullBrown">
            Featured Hampers 🌟
          </h2>
          <p className="text-warmGray mt-2">Our most loved curated boxes.</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={scrollLeft}
            className="p-2 rounded-full bg-pastelPink/20 text-deepRose hover:bg-roseGold hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 rounded-full bg-pastelPink/20 text-deepRose hover:bg-roseGold hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {hampers.map((hamper, idx) => (
          <div key={hamper.id} className="min-w-[300px] md:min-w-[350px] snap-center">
            <HamperCard hamper={hamper} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
