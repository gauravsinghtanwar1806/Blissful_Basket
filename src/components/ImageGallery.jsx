"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export default function ImageGallery({ images, name }) {
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div 
        className="relative bg-lightBeige/30 rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer group shadow-xl"
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image
          src={`/images/${images[mainImgIndex]}`}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 drop-shadow-lg" size={40} />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImgIndex(idx)}
            className={`relative min-w-[80px] h-[80px] md:min-w-[100px] md:h-[100px] rounded-2xl overflow-hidden border-2 transition-all ${
              idx === mainImgIndex ? "border-roseGold opacity-100 ring-2 ring-pastelPink" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={`/images/${img}`}
              alt={`${name} preview ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={32} />
            </button>
            <Image
              src={`/images/${images[mainImgIndex]}`}
              alt={name}
              width={800}
              height={1000}
              className="max-h-[90vh] w-auto object-contain rounded-xl"
            />
            {/* Nav within Lightbox */}
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImgIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${idx === mainImgIndex ? 'bg-roseGold scale-125' : 'bg-white/50 hover:bg-white'} `}
                  />
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
