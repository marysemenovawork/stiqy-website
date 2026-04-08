import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-400" />
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-15" />
      
      <div className="container relative mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Turn Your Customers<br />Into Loyal Fans?
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free strategy call and discover how we can increase your customer lifetime value.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-10 py-7 text-lg shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href="https://calendly.com/hi-stiqy/30min" target="_blank" rel="noopener noreferrer">
            Book Your Free Call Now
          </a>
        </Button>
        <p className="text-white/70 text-sm mt-6">No commitment required. Let&apos;s just talk.</p>
      </div>
    </section>
  )
}
