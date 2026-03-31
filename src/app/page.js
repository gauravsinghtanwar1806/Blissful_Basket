import HeroSection from "@/components/HeroSection";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import InstagramCTA from "@/components/InstagramCTA";
import { hampers } from "@/data/hampers";
import { HeartHandshake, ShieldCheck, Sparkle } from "lucide-react";

export default function Home() {
  const featured = hampers.filter(h => h.featured);

  return (
    <div className="flex flex-col gap-12 pb-20">
      <HeroSection />
      
      <FeaturedCarousel hampers={featured} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-t from-lightBeige/40 to-softWhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blissfullBrown">
              The Blissfull Promise ✨
            </h2>
            <p className="text-warmGray mt-4 text-lg max-w-2xl mx-auto">
              We believe gifting should be an experience — aesthetically pleasing, deeply personal, and completely stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/60 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-white">
              <div className="bg-pastelPink/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-deepRose">
                <HeartHandshake size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-blissfullBrown mb-3">Handcrafted with Love</h3>
              <p className="text-warmGray/80">Every ribbon, every note, and every item is handpicked to make your loved ones feel special.</p>
            </div>
            
            <div className="text-center p-8 bg-white/60 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-white">
              <div className="bg-softLavender/40 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-deepRose">
                <ShieldCheck size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-blissfullBrown mb-3">Premium Quality</h3>
              <p className="text-warmGray/80">From gourmet sweets to aesthetic accessories, we never compromise on the quality of our content.</p>
            </div>
            
            <div className="text-center p-8 bg-white/60 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-white">
              <div className="bg-roseGold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-deepRose">
                <Sparkle size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-blissfullBrown mb-3">Perfect for Gifting</h3>
              <p className="text-warmGray/80">Beautiful packaging that looks like a Pinterest board brought to life. Perfect for their Instagram stories!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="max-w-4xl mx-auto px-6 w-full text-center mt-10">
        <h2 className="font-serif text-3xl font-bold text-blissfullBrown mb-6">Ready to make their day?</h2>
        <div className="max-w-md mx-auto">
          <InstagramCTA />
        </div>
      </section>
    </div>
  );
}
