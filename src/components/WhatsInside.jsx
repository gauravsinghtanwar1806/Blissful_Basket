"use client";

import { Gift, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsInside({ items }) {
  return (
    <div className="mt-10 mb-8 p-8 bg-white/50 glass rounded-3xl border border-roseGold/20">
      <h3 className="font-serif text-2xl font-semibold text-deepRose mb-6 flex items-center gap-2">
        <Gift className="text-roseGold" /> What's Inside 🎁
      </h3>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-3 text-lg text-warmGray/90 glass py-3 px-4 rounded-xl border-l-[4px] border-l-pastelPink hover:border-l-roseGold hover:-translate-y-1 transition-all shadow-sm"
          >
             {idx % 2 === 0 ? <Sparkles className="text-roseGold/70" size={18} /> : <Star className="text-pastelPink" size={18} fill="currentColor" />}
             {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
