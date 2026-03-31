"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HamperCard({ hamper, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden glass hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <Link href={`/hampers/${hamper.id}`}>
        <div className="relative aspect-square overflow-hidden bg-lightBeige/30">
          <Image
            src={`/images/${hamper.images[0]}`}
            alt={hamper.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          {hamper.featured && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-deepRose px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              ✨ Featured
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-xl font-bold text-blissfullBrown group-hover:text-roseGold transition-colors">
              {hamper.name}
            </h3>
            <span className="font-semibold text-lg text-roseGold bg-pastelPink/20 px-3 py-1 rounded-full">
              ₹{hamper.price}
            </span>
          </div>
          
          <p className="text-sm text-warmGray/80 line-clamp-2 mt-2">
            {hamper.description}
          </p>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-deepRose/70">
              {hamper.category}
            </span>
            <span className="text-roseGold font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
