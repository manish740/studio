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
        {/* Colorful RGBY Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="bg-orb w-[400px] h-[400px] bg-red-400/20 -top-20 -left-20 animate-drift" />
          <div className="bg-orb w-[500px] h-[500px] bg-green-300/20 top-1/4 -right-20 animate-drift" style={{ animationDelay: '-5s' }} />
          <div className="bg-orb w-[450px] h-[450px] bg-blue-400/20 bottom-1/4 -left-32 animate-drift" style={{ animationDelay: '-10s' }} />
          <div className="bg-orb w-[600px] h-[600px] bg-yellow-300/20 -bottom-32 right-0 animate-drift" style={{ animationDelay: '-15s' }} />
          
          {/* Blooming Tulips - Increased Quantity */}
          <TulipIcon className="absolute top-20 left-[15%] w-12 h-12 text-accent/30 animate-blossom" style={{ animationDelay: '0s' }} />
          <TulipIcon className="absolute top-[40%] right-[10%] w-16 h-16 text-primary/30 animate-blossom" style={{ animationDelay: '2s' }} />
          <TulipIcon className="absolute bottom-[20%] left-[20%] w-10 h-10 text-red-300/30 animate-blossom" style={{ animationDelay: '4s' }} />
          <TulipIcon className="absolute top-[70%] right-[25%] w-14 h-14 text-green-300/30 animate-blossom" style={{ animationDelay: '1s' }} />
          <TulipIcon className="absolute bottom-10 right-[40%] w-8 h-8 text-blue-300/30 animate-blossom" style={{ animationDelay: '3s' }} />
          
          <TulipIcon className="absolute top-[10%] right-[30%] w-10 h-10 text-yellow-300/30 animate-blossom" style={{ animationDelay: '1.5s' }} />
          <TulipIcon className="absolute top-[60%] left-[5%] w-14 h-14 text-accent/20 animate-blossom" style={{ animationDelay: '2.5s' }} />
          <TulipIcon className="absolute bottom-[35%] right-[15%] w-12 h-12 text-primary/20 animate-blossom" style={{ animationDelay: '5s' }} />
          <TulipIcon className="absolute top-[85%] left-[45%] w-9 h-9 text-red-400/30 animate-blossom" style={{ animationDelay: '0.8s' }} />
          <TulipIcon className="absolute top-[25%] left-[35%] w-11 h-11 text-green-400/25 animate-blossom" style={{ animationDelay: '3.2s' }} />
          <TulipIcon className="absolute bottom-[10%] left-[10%] w-13 h-13 text-blue-400/30 animate-blossom" style={{ animationDelay: '4.1s' }} />
          <TulipIcon className="absolute top-[5%] right-[5%] w-15 h-15 text-accent/25 animate-blossom" style={{ animationDelay: '2.2s' }} />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
