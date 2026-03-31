import { notFound } from "next/navigation";
import { hampers } from "@/data/hampers";
import ImageGallery from "@/components/ImageGallery";
import WhatsInside from "@/components/WhatsInside";
import WhyYoullLoveIt from "@/components/WhyYoullLoveIt";
import InstagramCTA from "@/components/InstagramCTA";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import { Tag, Sparkle } from "lucide-react";

export function generateMetadata({ params }) {
  const hamper = hampers.find(h => h.id === params.id);
  if (!hamper) return { title: "Not Found" };
  return { title: `${hamper.name} | Blissfull Basket` };
}

export function generateStaticParams() {
   return hampers.map((hamper) => ({
      id: hamper.id,
   }));
}

export default function HamperDetail({ params }) {
  const hamper = hampers.find((h) => h.id === params.id);
  if (!hamper) notFound();

  const relatedHampers = hampers.filter(h => h.category === hamper.category && h.id !== hamper.id).slice(0, 4);
  const otherHampers = relatedHampers.length > 0 ? relatedHampers : hampers.filter(h => h.id !== hamper.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
       {/* Product Section */}
       <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
         
         <div className="sticky top-28">
           <ImageGallery images={hamper.images} name={hamper.name} />
         </div>

         <div className="flex flex-col">
           {/* Badges */}
           <div className="flex gap-2 mb-4">
              <span className="bg-softLavender/50 text-deepRose px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Tag size={14} /> {hamper.category}
              </span>
              {hamper.featured && (
                <span className="bg-roseGold/10 text-roseGold px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                   <Sparkle size={14} /> Featured Match
                </span>
              )}
           </div>

           <h1 className="font-serif text-4xl lg:text-5xl font-bold text-blissfullBrown">
             {hamper.name}
           </h1>
           
           <div className="mt-4 mb-8 pb-8 border-b border-roseGold/20 flex flex-col items-start gap-4">
             <div className="bg-roseGold text-white px-5 py-2 rounded-2xl text-3xl font-bold shadow-lg shadow-roseGold/30">
               ₹{hamper.price}
             </div>
             <p className="text-xl text-warmGray/90 font-serif italic max-w-lg">
               {hamper.description}
             </p>
           </div>

           <WhatsInside items={hamper.itemsInside} />
           
           <div className="mt-6 w-full max-w-sm">
             <InstagramCTA />
             <p className="text-center text-xs text-warmGray/60 mt-4 leading-relaxed">
               Clicking standardizes your order draft for Instagram.<br/> We’ll confirm your shipping details there!
             </p>
           </div>

         </div>
       </div>

       {/* Why You'll Love It Section */}
       <WhyYoullLoveIt text={hamper.whyLoveIt} />

       {/* Related Carousel */}
       <div className="mt-24 pt-12 border-t border-roseGold/20">
         <h2 className="font-serif text-3xl font-bold text-blissfullBrown text-center mb-8">
           You Might Also Like 🌸
         </h2>
         <FeaturedCarousel hampers={otherHampers} />
       </div>

    </div>
  );
}
