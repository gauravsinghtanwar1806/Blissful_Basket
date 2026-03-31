"use client";

// Raw SVG for Instagram icon since lucide-react removed brand icons
const InstagramIcon = ({ size = 28, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function InstagramCTA() {
  return (
    <a 
      href="https://instagram.com/blissfullbasket" 
      target="_blank" 
      rel="noreferrer"
      className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:animate-shimmer"></div>
      <InstagramIcon size={28} className="group-hover:scale-110 transition-transform" />
      <span className="font-semibold text-lg md:text-xl tracking-wide">
        Order via Instagram
      </span>
    </a>
  );
}
