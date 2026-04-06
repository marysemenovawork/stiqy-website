export function Steps() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We learn about your brand, customers, and goals. No commitment, just conversation.",
    },
    {
      number: "02",
      title: "Custom Strategy",
      description: "Our team designs a retention roadmap tailored to your business and tech stack.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "We build and launch your email flows, SMS campaigns, and loyalty program.",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description: "Continuous testing and optimization to maximize your customer lifetime value.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How We{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process from first call to ongoing optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-pink-300 z-0" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 z-10">
                <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
