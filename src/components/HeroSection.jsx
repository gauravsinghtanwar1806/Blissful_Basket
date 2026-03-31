"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Heart, Gift } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-softWhite via-pastelPink/30 to-softLavender/20">
      {/* Decorative Floating Elements */}
      <motion.div className="absolute top-1/4 left-[10%] text-roseGold/40 animate-float" style={{ animationDelay: '0s' }}><Heart size={40} fill="currentColor" /></motion.div>
      <motion.div className="absolute top-1/3 right-[15%] text-pastelPink animate-float" style={{ animationDelay: '1s' }}><Sparkles size={60} /></motion.div>
      <motion.div className="absolute bottom-1/4 left-[20%] text-softLavender animate-float" style={{ animationDelay: '2s' }}><Gift size={50} /></motion.div>
      <motion.div className="absolute bottom-1/5 right-[10%] text-blissfullBrown/20 animate-float" style={{ animationDelay: '3s' }}><Heart size={30} /></motion.div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastelPink/40 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-50"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full text-deepRose font-medium mb-8 max-w-max mx-auto shadow-sm border border-white/50"
        >
          <Sparkles size={16} /> Premium Gift Hampers
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold text-blissfullBrown mb-6 leading-tight"
        >
          Curated Hampers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-roseGold to-deepRose">
            Made With Love 💝
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-warmGray/90 mb-10 max-w-2xl mx-auto"
        >
          Discover aesthetically pleasing gift boxes filled with curated surprises. 
          Perfect for birthdays, anniversaries, and making everyday special.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/hampers"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-roseGold to-deepRose text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_8px_30px_rgb(183,110,121,0.3)] hover:shadow-[0_8px_30px_rgb(183,110,121,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            Explore Hampers <Gift size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
