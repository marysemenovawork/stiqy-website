import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-orange-100 opacity-70" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-orange-200 rounded-full blur-3xl opacity-25" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Trusted by 30+ ecom companies and DTC brands
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              We build retention systems that turn one-time buyers into lifelong customers
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-xl leading-relaxed">
              Email, SMS, and loyalty programs for eCommerce brands that keep customers coming back and spending more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
                asChild
              >
                <a href="https://calendly.com/stiqy/intro" target="_blank" rel="noopener noreferrer">
                  Book a Free Strategy Call
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-orange-300 text-foreground hover:bg-orange-50 px-8 py-6 text-lg"
              >
                See Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-2xl opacity-20 transform rotate-3" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <Image
                src="/images/hero-retention.jpg"
                alt="Retention marketing dashboard showing customer engagement metrics"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
