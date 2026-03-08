import { InvitationHero } from "@/components/InvitationHero";
import { CoupleIntroduction } from "@/components/CoupleIntroduction";
import { FamilyDetails } from "@/components/FamilyDetails";
import { WeddingEvents } from "@/components/WeddingEvents";
import { EventMap } from "@/components/EventMap";
import { Toaster } from "@/components/ui/toaster";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <InvitationHero />
      <CoupleIntroduction />
      <FamilyDetails />
      <WeddingEvents />
      <EventMap />
      
      {/* Footer */}
      <footer className="py-24 bg-white/60 backdrop-blur-sm text-center relative">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <Heart className="text-accent mb-6 opacity-50" size={32} />
          <h3 className="text-4xl font-headline text-primary mb-4">Sakshi & Shiv</h3>
          <p className="text-xl text-muted-foreground italic mb-12">
            "We are better together."
          </p>
          
          <div className="h-[1px] w-32 bg-primary/20 mb-8" />
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/60 font-semibold">
            Celebrating Love in April 2026
          </p>
        </div>
      </footer>
      
      <Toaster />
    </main>
  );
}
