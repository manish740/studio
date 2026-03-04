import type {Metadata} from 'next';
import './globals.css';

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
    {/* Intertwined Thorn Vines */}
    <path d="M0,50 Q20,40 40,60 T80,30" fill="none" stroke="#1a2a1a" strokeWidth="1.5" />
    <path d="M50,0 Q40,20 60,40 T30,80" fill="none" stroke="#1a2a1a" strokeWidth="1.5" />
    {/* Thorns */}
    <path d="M20,45 L18,40 M35,55 L38,60 M55,30 L60,28 M45,15 L40,12" stroke="#000" strokeWidth="1" />
    {/* Rose Buds & Blooms */}
    <circle cx="20" cy="45" r="5" fill="#660000" />
    <circle cx="60" cy="25" r="8" fill="#880000" />
    <path d="M20,45 Q22,42 24,45" fill="none" stroke="#2a4a2a" strokeWidth="1" />
    <path d="M60,25 Q65,20 70,25" fill="none" stroke="#2a4a2a" strokeWidth="1" />
    {/* Leaves */}
    <path d="M15,40 Q10,35 15,30 Q20,35 15,40" fill="#2a4a2a" />
    <path d="M65,35 Q70,40 75,35 Q70,30 65,35" fill="#2a4a2a" />
  </svg>
);

const ThornVineEdge = ({ vertical = false, className }: { vertical?: boolean, className?: string }) => (
  <svg viewBox={vertical ? "0 0 20 100" : "0 0 100 20"} className={className} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d={vertical ? "M10,0 Q15,25 5,50 T10,100" : "M0,10 Q25,15 50,5 T100,10"} 
      fill="none" 
      stroke="#1a2a1a" 
      strokeWidth="1" 
    />
    {/* Scattered Thorns */}
    {vertical ? (
      <>
        <path d="M12,20 L16,18" stroke="#000" strokeWidth="0.5" />
        <path d="M8,45 L4,47" stroke="#000" strokeWidth="0.5" />
        <path d="M13,75 L17,73" stroke="#000" strokeWidth="0.5" />
      </>
    ) : (
      <>
        <path d="M20,12 L18,16" stroke="#000" strokeWidth="0.5" />
        <path d="M50,8 L52,4" stroke="#000" strokeWidth="0.5" />
        <path d="M80,13 L82,17" stroke="#000" strokeWidth="0.5" />
      </>
    )}
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background relative">
        {/* Botanical Thorn & Rose Frame */}
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Corners */}
          <RoseCorner className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48" />
          <RoseCorner className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 -scale-x-100" />
          <RoseCorner className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 -scale-y-100" />
          <RoseCorner className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -scale-x-100 -scale-y-100" />
          
          {/* Edges */}
          <ThornVineEdge className="absolute top-0 left-32 md:left-48 right-32 md:right-48 h-10" />
          <ThornVineEdge className="absolute bottom-0 left-32 md:left-48 right-32 md:right-48 h-10 -scale-y-100" />
          <ThornVineEdge vertical className="absolute left-0 top-32 md:top-48 bottom-32 md:bottom-48 w-10" />
          <ThornVineEdge vertical className="absolute right-0 top-32 md:top-48 bottom-32 md:bottom-48 w-10 -scale-x-100" />
        </div>

        {/* Colorful RGBY Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
        
        <div className="relative z-10 px-6 md:px-12 py-12">
          {children}
        </div>
      </body>
    </html>
  );
}