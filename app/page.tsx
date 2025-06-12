'use client'

import { useState } from "react"
import { Menu, Scissors, X } from "lucide-react"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Benefits } from "@/components/benefits"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            {isOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#features">Features</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Reviews</a></li>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-xl" href="#hero">
            <Scissors className="h-6 w-6 text-primary" />
            RazorClick
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#pricing" className="btn btn-primary">
            Start Free Trial
          </a>
        </div>
      </div>

      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}


