import { Heart, Mail } from "lucide-react";
import Link from "next/link";

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-roseGold/20 bg-gradient-to-br from-softWhite to-pastelPink/20 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-blissfullBrown mb-4">Blissfull Basket</h2>
          <p className="text-warmGray/80 max-w-sm mx-auto md:mx-0">
            Curated hampers made with love 💝. We put smiles in boxes.
          </p>
        </div>

        <div>
           <h3 className="font-medium text-lg mb-4 text-deepRose">Quick Links</h3>
           <ul className="space-y-2">
             <li><Link href="/" className="text-warmGray hover:text-roseGold transition-colors">Home</Link></li>
             <li><Link href="/hampers" className="text-warmGray hover:text-roseGold transition-colors">All Hampers</Link></li>
           </ul>
        </div>

        <div>
           <h3 className="font-medium text-lg mb-4 text-deepRose">Contact & Social</h3>
           <a 
             href="mailto:Mahikakumawat09@gmail.com" 
             className="inline-flex items-center gap-2 text-warmGray hover:text-roseGold transition-colors mb-3"
           >
             <Mail size={18} /> Mahikakumawat09@gmail.com
           </a>
           <br/>
           <a 
             href="https://instagram.com/blissfullbasket"
             target="_blank"
             rel="noreferrer" 
             className="inline-flex items-center gap-2 text-warmGray hover:text-roseGold transition-colors"
           >
             <InstagramIcon size={18} /> @blissfullbasket
           </a>
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-warmGray/60 flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-roseGold fill-roseGold" /> for aesthetic gifting. © {new Date().getFullYear()} Blissfull Basket.
      </div>
    </footer>
  );
}
