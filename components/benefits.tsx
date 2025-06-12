import { Clock, TrendingUp, Heart, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save 2+ Hours Daily',
    description: 'Automate scheduling, payments, and customer management',
    metric: '90% faster checkout',
  },
  {
    icon: TrendingUp,
    title: 'Increase Revenue by 23%',
    description: 'Smart analytics help you optimize pricing and services',
    metric: '$1,200 avg monthly increase',
  },
  {
    icon: Heart,
    title: 'Boost Customer Satisfaction',
    description: 'Seamless experience keeps clients coming back',
    metric: '4.8/5 customer rating',
  },
  {
    icon: Zap,
    title: 'Accelerate Business Growth',
    description: 'Data-driven insights to expand your shop',
    metric: '40% faster growth',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Real Results from Real Barbers</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Join thousands of barbers who have transformed their business with RazorClick.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-base-content/70 mb-4">{benefit.description}</p>
              <div className="badge badge-primary badge-lg">{benefit.metric}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-base-100 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <p className="text-base-content/70">Appointments Managed Monthly</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2.1M</div>
              <p className="text-base-content/70">Revenue Processed This Year</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-base-content/70">Happy Barber Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}