import { InvitationHero } from "@/components/InvitationHero";
import { CoupleIntroduction } from "@/components/CoupleIntroduction";
import { PhotoGallery } from "@/components/PhotoGallery";
import { FamilyDetails } from "@/components/FamilyDetails";
import { WeddingEvents } from "@/components/WeddingEvents";
import { WishesWall } from "@/components/WishesWall";
import { EventMap } from "@/components/EventMap";
import { Toaster } from "@/components/ui/toaster";
import { Heart } from "lucide-react";

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
      <footer className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Heart className="mx-auto text-accent mb-6 opacity-50" size={32} />
          <h3 className="text-3xl font-headline text-primary mb-4">Manish & Sakshi</h3>
          <p className="text-muted-foreground italic mb-8">
            "We are better together."
          </p>
          <div className="h-[1px] w-24 bg-primary/20 mx-auto mb-8" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
            Made with LoveBloom Invites &copy; 2024
          </p>
        </div>
      </footer>
      
      <Toaster />
    </main>
  );
}
