import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LoveBloom Invites | Manish & Sakshi',
  description: 'Join us as we celebrate the union of Manish & Sakshi. Digital wedding invitation and RSVP.',
};

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
          <div className="bg-orb w-[400px] h-[400px] bg-red-400 -top-20 -left-20 animate-drift" />
          <div className="bg-orb w-[500px] h-[500px] bg-green-300 top-1/4 -right-20 animate-drift" style={{ animationDelay: '-5s' }} />
          <div className="bg-orb w-[450px] h-[450px] bg-blue-400 bottom-1/4 -left-32 animate-drift" style={{ animationDelay: '-10s' }} />
          <div className="bg-orb w-[600px] h-[600px] bg-yellow-300 -bottom-32 right-0 animate-drift" style={{ animationDelay: '-15s' }} />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
