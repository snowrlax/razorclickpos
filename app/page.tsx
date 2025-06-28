"use client";

import { useState } from "react";
import { Menu, Scissors, X } from "lucide-react";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Benefits } from "@/components/benefits";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession();

  // console.log(session && session.user?.image, ": auth status");
  return (
    <main className="min-h-screen">
      <div className="navbar fixed top-0 z-50 bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
            {isOpen && (
              <ul className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#benefits">Benefits</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#testimonials">Reviews</a>
                </li>
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
            <li>
              <a
                href="#features"
                className="transition-colors hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="transition-colors hover:text-primary"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="transition-colors hover:text-primary"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="transition-colors hover:text-primary"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {status === "authenticated" ? (
            <div className="flex items-center gap-4">
              <Image
                src={session.user?.image!}
                alt="profile"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <span className="">{session.user?.name}</span>
              <div className="btn btn-error" onClick={() => signOut()}>
                Logout
              </div>
            </div>
          ) : (
            <Link href="/signin" className="btn btn-primary">
              Start Free Trial
            </Link>
          )}
        </div>
      </div>

      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
