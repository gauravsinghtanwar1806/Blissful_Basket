"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gift } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 group">
        <Gift className="text-roseGold group-hover:scale-110 transition-transform duration-300" size={28} />
        <span className="font-serif text-2xl font-semibold text-blissfullBrown">Blissfull Basket</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-warmGray hover:text-roseGold transition-colors font-medium">Home</Link>
        <Link href="/hampers" className="text-warmGray hover:text-roseGold transition-colors font-medium">Hampers</Link>
        <a 
          href="https://instagram.com/blissfullbasket" 
          target="_blank" 
          rel="noreferrer"
          className="bg-pastelPink text-blissfullBrown px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Instagram
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button className="md:hidden text-blissfullBrown" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-softWhite/95 border-b border-roseGold/20 shadow-xl p-6 flex flex-col gap-6 md:hidden glass"
          >
             <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-warmGray hover:text-roseGold">Home</Link>
             <Link href="/hampers" onClick={() => setIsOpen(false)} className="text-lg font-medium text-warmGray hover:text-roseGold">Hampers</Link>
             <a 
               href="https://instagram.com/blissfullbasket" 
               target="_blank" 
               rel="noreferrer"
               className="bg-pastelPink text-center text-blissfullBrown px-5 py-3 rounded-full font-medium"
             >
               Order on Instagram
             </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
