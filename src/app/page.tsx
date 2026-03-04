import { InvitationHero } from "@/components/InvitationHero";
import { CoupleIntroduction } from "@/components/CoupleIntroduction";
import { PhotoGallery } from "@/components/PhotoGallery";
import { FamilyDetails } from "@/components/FamilyDetails";
import { WeddingEvents } from "@/components/WeddingEvents";
import { WishesWall } from "@/components/WishesWall";
import { EventMap } from "@/components/EventMap";
import { Toaster } from "@/components/ui/toaster";
import { Heart } from "lucide-react";

const HelixSeparator = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20,0 Q35,30 5,60 T20,120" 
      fill="none" 
      stroke="#1a2a1a" 
      strokeWidth="2.5" 
    />
    <path 
      d="M15,0 Q0,30 30,60 T15,120" 
      fill="none" 
      stroke="#2a3a2a" 
      strokeWidth="2" 
      opacity="0.8"
    />
    {/* Thorns */}
    <path d="M24,25 L30,22" stroke="#1a1a1a" strokeWidth="1.2" />
    <path d="M16,55 L10,58" stroke="#1a1a1a" strokeWidth="1.2" />
    <path d="M22,85 L28,82" stroke="#1a1a1a" strokeWidth="1.2" />
    {/* Roses/Berries */}
    <circle cx="28" cy="35" r="4.5" fill="#660000" />
    <circle cx="12" cy="75" r="4" fill="#880000" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <InvitationHero />
      <CoupleIntroduction />
      <PhotoGallery />
      <FamilyDetails />
      <WeddingEvents />
      <WishesWall />
      <EventMap />
      
      {/* Footer */}
      <footer className="py-24 bg-white/60 backdrop-blur-sm text-center relative">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <Heart className="text-accent mb-6 opacity-50" size={32} />
          <h3 className="text-4xl font-headline text-primary mb-4">Manish & Sakshi</h3>
          <p className="text-xl text-muted-foreground italic mb-12">
            "We are better together."
          </p>
          
          {/* Vertical Helix Structure */}
          <div className="relative mb-12">
            <HelixSeparator className="w-12 h-40 opacity-90 mx-auto" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-primary/10 -z-10" />
          </div>
          
          <div className="h-[1px] w-32 bg-primary/20 mb-8" />
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/60 font-semibold">
            Celebrating Love Since 2024
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 mt-2">
            Made with LoveBloom Invites &copy; 2024
          </p>
        </div>
      </footer>
      
      <Toaster />
    </main>
  );
}
