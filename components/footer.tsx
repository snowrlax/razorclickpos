'use client';

import { useState } from 'react';
import { Scissors, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <footer className="bg-base-300">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-content py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with RazorClick</h3>
          <p className="mb-6 opacity-90">Get tips, updates, and special offers delivered to your inbox.</p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered flex-1 text-base-content"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className={`btn btn-secondary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RazorClick</span>
            </div>
            <p className="text-base-content/70">
              The modern POS solution built specifically for independent barbers. 
              Streamline your business and grow your revenue.
            </p>
            <div className="flex gap-3">
              <a href="#" className="btn btn-circle btn-outline btn-sm">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-circle btn-outline btn-sm">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-circle btn-outline btn-sm">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="link link-hover">Features</a></li>
              <li><a href="#benefits" className="link link-hover">Benefits</a></li>
              <li><a href="#pricing" className="link link-hover">Pricing</a></li>
              <li><a href="#testimonials" className="link link-hover">Reviews</a></li>
              <li><a href="#" className="link link-hover">Demo</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover">Help Center</a></li>
              <li><a href="#" className="link link-hover">Getting Started</a></li>
              <li><a href="#" className="link link-hover">Training Videos</a></li>
              <li><a href="#" className="link link-hover">API Documentation</a></li>
              <li><a href="#" className="link link-hover">System Status</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@razorclick.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-content/70">
            © 2025 RazorClick. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="link link-hover text-sm">Privacy Policy</a>
            <a href="#" className="link link-hover text-sm">Terms of Service</a>
            <a href="#" className="link link-hover text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}