'use client';

import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail('');
    alert('Thanks! We\'ll be in touch soon.');
  };

  return (
    <section id="hero" className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200 pt-16">
      <div className="hero-content text-center max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              The Modern <span className="text-primary">POS Solution</span> Built for Independent Barbers
            </h1>
            <p className="text-xl mb-8 text-base-content/80">
              Streamline your barbershop operations with our all-in-one platform. 
              Manage appointments, process payments, track revenue, and grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#pricing" className="btn btn-primary btn-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button className="btn btn-outline btn-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className={`btn btn-secondary ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Get Updates'}
              </button>
            </form>
            <p className="text-sm text-base-content/60 mt-2">
              Join 2,500+ barbers already using RazorClick
            </p>
          </div>

          <div className="relative animate-slide-in">
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">Today's Schedule</h3>
                      <div className="badge badge-primary">8 appointments</div>
                    </div>
                    <div className="space-y-2">
                      <div className="card bg-base-100 shadow-sm p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Mike Johnson</p>
                            <p className="text-sm opacity-70">Fade & Beard Trim</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$35</p>
                            <p className="text-sm">10:30 AM</p>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-base-100 shadow-sm p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Alex Rivera</p>
                            <p className="text-sm opacity-70">Classic Cut</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$25</p>
                            <p className="text-sm">11:15 AM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stats stats-vertical bg-primary text-primary-content">
                      <div className="stat">
                        <div className="stat-title text-primary-content/70">Today's Revenue</div>
                        <div className="stat-value text-2xl">$420</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}