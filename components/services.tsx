import { Mail, MessageSquare, RefreshCw, BarChart3 } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Mail,
      title: "Email marketing",
      description: "Campaigns, flows, and automations that drive repeat purchases without discounting your brand.",
    },
    {
      icon: MessageSquare,
      title: "SMS & Messengers marketing",
      description: "Reach customers where they are — SMS, WhatsApp, and Telegram. High-intent messages sent at the right moment, personal, direct, and built for conversion.",
    },
    {
      icon: RefreshCw,
      title: "Loyalty & Lifetime management",
      description: "Programs that reward your best customers and systematically grow retention rates. Turn occasional buyers into brand advocates with points, tiers, and exclusive perks that increase lifetime value.",
    },
  ]

  const analytics = {
    icon: BarChart3,
    title: "Analytics & Transparency",
    description: "Clear dashboards and honest reporting. Track every metric that matters — from open rates to revenue attribution. No vanity metrics, just actionable insights you can trust.",
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Top row - 3 cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom row - full width card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <analytics.icon className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">{analytics.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-3xl">{analytics.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
