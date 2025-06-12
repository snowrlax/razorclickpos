import { Users, Calendar, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Build detailed customer profiles with service history, preferences, and contact information. Never forget a client\'s favorite cut again.',
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Smart scheduling system that prevents double-bookings, sends automatic reminders, and handles walk-ins seamlessly.',
  },
  {
    icon: CreditCard,
    title: 'Digital Payments',
    description: 'Accept all payment methods including contactless payments, tips, and gift cards. Get paid faster with instant processing.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    description: 'Track your earnings, identify peak hours, and monitor growth trends with detailed reports and insights.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Run Your Shop</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Built specifically for barbershops, our features are designed to save you time and increase your revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="card-title justify-center mb-2">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#pricing" className="btn btn-primary btn-lg">
            See All Features
          </a>
        </div>
      </div>
    </section>
  );
}