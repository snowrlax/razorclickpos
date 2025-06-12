import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Thompson',
    shop: 'Elite Cuts Barbershop',
    location: 'Chicago, IL',
    rating: 5,
    testimonial: 'RazorClick completely transformed my business. I used to spend hours on paperwork and scheduling. Now everything is automated and I can focus on what I love - cutting hair. My revenue increased by 30% in the first 6 months.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
  {
    name: 'Tony Rodriguez',
    shop: 'The Modern Barber',
    location: 'Austin, TX',
    rating: 5,
    testimonial: 'The customer management feature is incredible. I remember every client\'s preferences and previous services. My customers love the automated reminders, and I haven\'t had a no-show in months.',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
  {
    name: 'David Kim',
    shop: 'Precision Cuts',
    location: 'Los Angeles, CA',
    rating: 5,
    testimonial: 'The analytics dashboard opened my eyes to patterns I never noticed. I optimized my pricing and services based on the data, and now I\'m booking more appointments than ever. Best investment I\'ve made.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Barbers Are Saying</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it. See how RazorClick is helping barbers 
            across the country grow their businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/30 mb-2" />
                <p className="text-base-content/80 mb-6">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/70">{testimonial.shop}</p>
                    <p className="text-sm text-base-content/50">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="stats stats-horizontal bg-base-100 shadow-lg">
            <div className="stat">
              <div className="stat-figure text-primary">
                <Star className="h-8 w-8 fill-current" />
              </div>
              <div className="stat-title">Average Rating</div>
              <div className="stat-value text-primary">4.9/5</div>
              <div className="stat-desc">From 2,500+ reviews</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Happy customer" />
                  </div>
                </div>
              </div>
              <div className="stat-value">98%</div>
              <div className="stat-title">Customer Satisfaction</div>
              <div className="stat-desc">Would recommend to others</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}