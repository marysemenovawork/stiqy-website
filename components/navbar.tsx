import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cloudGradNavbar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316"/>
                <stop offset="100%" stopColor="#ec4899"/>
              </linearGradient>
            </defs>
            {/* Cloud shape */}
            <path d="M8 26c-2.5 0-4.5-2-4.5-4.5 0-2.2 1.5-4 3.6-4.4C7 16.8 7 16.5 7 16.2c0-3.4 2.8-6.2 6.2-6.2 1.5 0 2.9.5 3.9 1.4C18 9.9 19.6 9 21.5 9c3 0 5.5 2.5 5.5 5.5 0 .3 0 .6-.1.9 1.8.6 3.1 2.3 3.1 4.1 0 2.5-2 4.5-4.5 4.5H8z" stroke="url(#cloudGradNavbar)" strokeWidth="1.5" fill="none"/>
            {/* Lightbulb */}
            <circle cx="17" cy="18" r="3" stroke="url(#cloudGradNavbar)" strokeWidth="1.2" fill="none"/>
            <path d="M15.5 21h3M16 22.5h2" stroke="url(#cloudGradNavbar)" strokeWidth="1.2" strokeLinecap="round"/>
            {/* Rays */}
            <line x1="17" y1="13" x2="17" y2="14.5" stroke="url(#cloudGradNavbar)" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="12.5" y1="15" x2="13.5" y2="16" stroke="url(#cloudGradNavbar)" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="21.5" y1="15" x2="20.5" y2="16" stroke="url(#cloudGradNavbar)" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span className="text-3xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-playfair)', fontWeight: 900 }}>
            STIQY
          </span>
        </div>
        <Button 
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium shadow-md shadow-orange-500/20"
          asChild
        >
          <a href="https://calendly.com/stiqy/intro" target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      </div>
    </nav>
  )
}
