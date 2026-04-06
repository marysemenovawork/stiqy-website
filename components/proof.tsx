export function Proof() {
  const stats = [
    { value: "30+", label: "eCommerce Brands" },
    { value: "$12M+", label: "Revenue Generated" },
    { value: "45%", label: "Avg. Retention Lift" },
    { value: "3.2x", label: "Average ROI" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-wider">
          Proven Results for Growing Brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="relative">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <span className="text-sm text-muted-foreground mt-2 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
