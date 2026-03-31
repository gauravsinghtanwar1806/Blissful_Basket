"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hampers } from "@/data/hampers";
import HamperCard from "@/components/HamperCard";
import { Search } from "lucide-react";

export default function HampersListing() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(hampers.map((h) => h.category))];

  const filteredHampers = filter === "All" ? hampers : hampers.filter((h) => h.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
       <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-blissfullBrown mb-4"
          >
            All Hampers ✨
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-warmGray text-lg max-w-2xl mx-auto"
          >
            Browse our curated collection of aesthetic gift boxes tailored for every occasion.
          </motion.p>
       </div>

       {/* Category Filters */}
       <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
               key={idx}
               onClick={() => setFilter(cat)}
               className={`px-5 py-2 rounded-full font-medium transition-all shadow-sm
                ${filter === cat ? "bg-roseGold text-white shadow-md scale-105" : "bg-white text-warmGray hover:bg-pastelPink/30"}
               `}
            >
              {cat}
            </button>
          ))}
       </div>

       {/* Results Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredHampers.map((hamper, idx) => (
               <motion.div 
                 key={hamper.id}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
               >
                 <HamperCard hamper={hamper} index={0} />
               </motion.div>
            ))}
          </AnimatePresence>
       </div>

       {filteredHampers.length === 0 && (
         <div className="text-center text-warmGray/60 py-20 flex flex-col items-center">
             <Search size={48} className="mb-4 opacity-30" />
             <p className="text-xl">No hampers found in this category.</p>
         </div>
       )}
    </div>
  );
}
