import type {Metadata} from 'next';
import './globals.css';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'LoveBloom Invites | Manish & Sakshi',
  description: 'Join us as we celebrate the union of Manish & Sakshi. Digital wedding invitation and RSVP.',
};

const TulipIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 22C12 22 12 18 12 15M12 15C14 15 16 13 16 10C16 7 14 3 12 2C10 3 8 7 8 10C8 13 10 15 12 15Z" stroke="currentColor" strokeWidth="1" />
    <path d="M12 15C10 15 7 14 5 11C3 8 4 4 4 4C4 4 7 5 9 8C11 11 12 15 12 15Z" fillOpacity="0.6" />
    <path d="M12 15C14 15 17 14 19 11C21 8 20 4 20 4C20 4 17 5 15 8C13 11 12 15 12 15Z" fillOpacity="0.6" />
  </svg>
);

const RoseCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0,50 Q20,40 40,60 T80,30" fill="none" stroke="#1a2a1a" strokeWidth="2" />
    <path d="M50,0 Q40,20 60,40 T30,80" fill="none" stroke="#1a2a1a" strokeWidth="2" />
    <path d="M20,45 L18,40 M35,55 L38,60 M55,30 L60,28 M45,15 L40,12" stroke="#000" strokeWidth="1.5" />
    <circle cx="20" cy="45" r="6" fill="#660000" />
    <circle cx="60" cy="25" r="9" fill="#880000" />
    <path d="M20,45 Q22,42 24,45" fill="none" stroke="#2a4a2a" strokeWidth="1" />
    <path d="M60,25 Q65,20 70,25" fill="none" stroke="#2a4a2a" strokeWidth="1" />
    <path d="M15,40 Q10,35 15,30 Q20,35 15,40" fill="#2a4a2a" />
    <path d="M65,35 Q70,40 75,35 Q70,30 65,35" fill="#2a4a2a" />
    {/* Additional Thorns */}
    <path d="M10,60 L5,65" stroke="#1a2a1a" strokeWidth="1" />
    <path d="M65,10 L70,5" stroke="#1a2a1a" strokeWidth="1" />
  </svg>
);

const ThornVineEdge = ({ vertical = false, className }: { vertical?: boolean, className?: string }) => (
  <svg viewBox={vertical ? "0 0 40 100" : "0 0 100 40"} className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d={vertical ? "M20,0 Q30,25 10,50 T20,100" : "M0,20 Q25,30 50,10 T100,20"} 
      fill="none" 
      stroke="#1a2a1a" 
      strokeWidth="2" 
    />
    {/* Intertwined second vine */}
    <path 
      d={vertical ? "M15,0 Q5,30 25,60 T15,100" : "M0,15 Q30,5 60,25 T100,15"} 
      fill="none" 
      stroke="#2a3a2a" 
      strokeWidth="1.5" 
      opacity="0.7"
    />
    {vertical ? (
      <>
        <path d="M22,20 L28,18" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M18,45 L12,47" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M23,75 L29,73" stroke="#1a1a1a" strokeWidth="1" />
        <circle cx="15" cy="30" r="3" fill="#660000" opacity="0.8" />
        <circle cx="25" cy="80" r="2.5" fill="#880000" opacity="0.8" />
      </>
    ) : (
      <>
        <path d="M20,22 L18,28" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M50,18 L52,12" stroke="#1a1a1a" strokeWidth="1" />
        <path d="M80,23 L82,29" stroke="#1a1a1a" strokeWidth="1" />
        <circle cx="35" cy="15" r="3" fill="#660000" opacity="0.8" />
        <circle cx="75" cy="25" r="2.5" fill="#880000" opacity="0.8" />
      </>
    )}
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-wedding');

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background relative min-h-screen">
        {/* Global Background Layer */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Background Photo with 40% opacity */}
          {heroImage && (
            <div className="absolute inset-0 opacity-40">
              <Image
                src={heroImage.imageUrl}
                alt="Manish and Sakshi"
                fill
                priority
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            </div>
          )}

          {/* Colorful RGBY Orbs */}
          <div className="bg-orb w-[400px] h-[400px] bg-red-400/20 -top-20 -left-20 animate-drift" />
          <div className="bg-orb w-[500px] h-[500px] bg-green-300/20 top-1/4 -right-20 animate-drift" style={{ animationDelay: '-5s' }} />
          <div className="bg-orb w-[450px] h-[450px] bg-blue-400/20 bottom-1/4 -left-32 animate-drift" style={{ animationDelay: '-10s' }} />
          <div className="bg-orb w-[600px] h-[600px] bg-yellow-300/20 -bottom-32 right-0 animate-drift" style={{ animationDelay: '-15s' }} />
          
          {/* Blooming Tulips */}
          <TulipIcon className="absolute top-20 left-[15%] w-12 h-12 text-accent/30 animate-blossom" style={{ animationDelay: '0s' }} />
          <TulipIcon className="absolute top-[40%] right-[10%] w-16 h-16 text-primary/30 animate-blossom" style={{ animationDelay: '2s' }} />
          <TulipIcon className="absolute bottom-[20%] left-[20%] w-10 h-10 text-red-300/30 animate-blossom" style={{ animationDelay: '4s' }} />
          <TulipIcon className="absolute top-[70%] right-[25%] w-14 h-14 text-green-300/30 animate-blossom" style={{ animationDelay: '1s' }} />
          <TulipIcon className="absolute bottom-10 right-[40%] w-8 h-8 text-blue-300/30 animate-blossom" style={{ animationDelay: '3s' }} />
          <TulipIcon className="absolute top-[10%] right-[30%] w-10 h-10 text-yellow-300/30 animate-blossom" style={{ animationDelay: '1.5s' }} />
          <TulipIcon className="absolute top-[60%] left-[5%] w-14 h-14 text-accent/20 animate-blossom" style={{ animationDelay: '2.5s' }} />
          <TulipIcon className="absolute bottom-[35%] right-[15%] w-12 h-12 text-primary/20 animate-blossom" style={{ animationDelay: '5s' }} />
        </div>

        {/* Fixed Botanical Frame Border */}
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {/* Corners */}
          <RoseCorner className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48" />
          <RoseCorner className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 -scale-x-100" />
          <RoseCorner className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 -scale-y-100" />
          <RoseCorner className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -scale-x-100 -scale-y-100" />
          
          {/* Edges */}
          <ThornVineEdge className="absolute top-0 left-32 md:left-48 right-32 md:right-48 h-12" />
          <ThornVineEdge className="absolute bottom-0 left-32 md:left-48 right-32 md:right-48 h-12 -scale-y-100" />
          <ThornVineEdge vertical className="absolute left-0 top-32 md:top-48 bottom-32 md:bottom-48 w-12" />
          <ThornVineEdge vertical className="absolute right-0 top-32 md:top-48 bottom-32 md:bottom-48 w-12 -scale-x-100" />
        </div>
        
        {/* Content Container - Increased padding to clear fixed border */}
        <div className="relative z-10 px-10 md:px-24 py-16 md:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
