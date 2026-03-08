import type {Metadata} from 'next';
import './globals.css';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MusicPlayer } from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title: 'Royal Union | Sakshi & Shiv',
  description: 'A celebration of love and luxury. Digital wedding invitation for Sakshi & Shiv.',
};

const RoseCorner = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0,50 Q20,40 40,60 T80,30" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
    <path d="M50,0 Q40,20 60,40 T30,80" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4af37" />
        <stop offset="50%" stopColor="#f9f295" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="45" r="5" fill="#8B0000" />
    <circle cx="60" cy="25" r="7" fill="#660000" />
  </svg>
);

const LuxuryBorder = ({ vertical = false, className }: { vertical?: boolean, className?: string }) => (
  <svg viewBox={vertical ? "0 0 20 100" : "0 0 100 20"} className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d={vertical ? "M10,0 Q15,25 5,50 T10,100" : "M0,10 Q25,15 50,5 T100,10"} 
      fill="none" 
      stroke="#d4af37" 
      strokeWidth="0.5" 
      opacity="0.6"
    />
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background relative min-h-screen overflow-x-hidden">
        <div className="silk-overlay" />
        
        {/* Global Background Layer */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {heroImage && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={heroImage.imageUrl}
                alt="Luxury Background"
                fill
                priority
                className="object-cover"
                data-ai-hint="royal wedding background"
              />
            </div>
          )}

          {/* Ambient Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
          
          {/* Subtle Floating Dust Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full blur-[1px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `drift-particles ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Botanical Gold Frame */}
        <div className="absolute inset-0 z-[100] pointer-events-none h-full w-full">
          <RoseCorner className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64" />
          <RoseCorner className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 -scale-x-100" />
          <RoseCorner className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 -scale-y-100" />
          <RoseCorner className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 -scale-x-100 -scale-y-100" />
          
          <LuxuryBorder className="absolute top-0 left-0 right-0 h-4 md:h-8" />
          <LuxuryBorder className="absolute bottom-0 left-0 right-0 h-4 md:h-8 -scale-y-100" />
          <LuxuryBorder vertical className="absolute left-0 top-0 bottom-0 w-4 md:w-8" />
          <LuxuryBorder vertical className="absolute right-0 top-0 bottom-0 w-4 md:w-8 -scale-x-100" />
        </div>
        
        <div className="relative z-10 px-6 sm:px-12 md:px-24 py-12 md:py-24 max-w-[100vw]">
          {children}
        </div>

        {/* Floating Global Components */}
        <MusicPlayer />
      </body>
    </html>
  );
}
