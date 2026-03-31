import { HeartPulse } from "lucide-react";

export default function WhyYoullLoveIt({ text }) {
  return (
    <div className="relative p-10 mt-12 mb-12 rounded-[2.5rem] bg-gradient-to-br from-pastelPink/30 to-softWhite text-center max-w-2xl mx-auto shadow-md border border-white/60">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-roseGold p-3 rounded-full shadow-lg">
        <HeartPulse size={28} className="animate-pulse" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-blissfullBrown mb-4 pt-4">
        Why You'll Love It ❤️
      </h3>
      <p className="text-lg text-warmGray/90 italic font-serif leading-relaxed px-4">
        "{text}"
      </p>
    </div>
  );
}
