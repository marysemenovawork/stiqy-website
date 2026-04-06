export function Testimonial() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-10 md:p-16 text-center border border-orange-100">
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 text-6xl bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent opacity-50">&ldquo;</div>
          <div className="absolute bottom-6 right-6 text-6xl bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent opacity-50">&rdquo;</div>
          
          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
            STIQY transformed our email program from an afterthought into our most profitable channel. 
            We&apos;ve seen a 47% increase in repeat purchases since working with them.
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">Sarah Chen</p>
            <p className="text-sm text-muted-foreground">Founder, Glow Skincare</p>
          </div>
        </div>
      </div>
    </section>
  )
}
