import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          STIQY
        </span>
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
