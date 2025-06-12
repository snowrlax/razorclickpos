'use client';

import { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const features = [
  'Unlimited appointments & customers',
  'Digital payment processing',
  'Real-time analytics dashboard',
  'Automated SMS reminders',
  'Customer management system',
  'Revenue tracking & reports',
  'Mobile app for iOS & Android',
  'Cloud backup & sync',
  '24/7 customer support',
  'Free setup & training',
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = 49;
  const yearlyPrice = 39;
  const yearlyDiscount = Math.round(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100);

  return (
    <section id="pricing" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
            One plan, all features. No hidden fees, no complicated tiers. 
            Just everything you need to run your barbershop.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={!isYearly ? 'font-semibold' : 'text-base-content/70'}>Monthly</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <span className={isYearly ? 'font-semibold' : 'text-base-content/70'}>
              Yearly
              <span className="badge badge-secondary ml-2">Save {yearlyDiscount}%</span>
            </span>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="card bg-base-100 shadow-2xl border-2 border-primary">
            <div className="card-body text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Professional Plan</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl font-bold">
                  ${isYearly ? yearlyPrice : monthlyPrice}
                  <span className="text-lg font-normal text-base-content/70">
                    /{isYearly ? 'month' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-base-content/70 mt-1">
                    Billed annually (${yearlyPrice * 12}/year)
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button className="btn btn-primary btn-lg w-full">
                  Start Free 14-Day Trial
                </button>
                <p className="text-sm text-base-content/70">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-base-content/70 mb-4">
            Need a custom solution for multiple locations?
          </p>
          <button className="btn btn-outline">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}