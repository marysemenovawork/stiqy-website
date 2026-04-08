import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Proof } from "@/components/proof"
import { Services } from "@/components/services"
import { Steps } from "@/components/steps"
import { Testimonial } from "@/components/testimonial"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Proof />

      {/* Problem block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
            Most eCommerce brands lose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              70% of customers
            </span>{" "}
            after the first order.
          </h2>
          <p className="text-lg text-black/60 mb-4 leading-relaxed">
            You paid to acquire them. They bought once and then disappeared. No second purchase. No loyalty. Just wasted CAC.
          </p>
          <p className="text-lg text-black/80 font-medium mb-10 leading-relaxed">
            STIQY helps you turn one-time buyers into repeat customers with automated retention flows that actually convert.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
            asChild
          >
            <a href="https://calendly.com/hi-stiqy/30min" target="_blank" rel="noopener noreferrer">
              Get First Audit for Free
            </a>
          </Button>
        </div>
      </section>

      <Services />
      <Steps />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}
