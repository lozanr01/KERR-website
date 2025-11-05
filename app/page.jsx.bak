"use client";
import React, { useState } from "react";
import "../styles/globals.css";

const CALENDLY_URL = "mailto:KerrclinicLozano@gmail.com"; // replace with Calendly when ready
const CONTACT_EMAIL = "KerrclinicLozano@gmail.com";
const CONTACT_PHONE = "925-321-9491";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">K</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">KERR Center</div>
              <div className="text-xs text-slate-500">Neurodevelopmental Genetics & Psychopharmacology</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/services" className="hover:text-slate-900">Services</a>
            <a href="/conditions" className="hover:text-slate-900">Conditions</a>
            <a href="#approach" className="hover:text-slate-900">Our Approach</a>
            <a href="/about" className="hover:text-slate-900">About</a>
            <a href="/faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={CALENDLY_URL}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition"
              aria-label="Book a consultation"
            >
              Book now
            </a>
          </div>

          {/* Mobile menu button + panel */}
          <MobileMenu />
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Precision genetics & calm, evidence-based care for minds in motion
        </h1>
        <p className="mt-5 text-lg text-slate-700">
          Concierge telehealth and select in-person consults in California & New York for neurodevelopmental and neurodegenerative
          conditions. Led by Dr. Reymundo Lozano, MD, MS.
        </p>
        <div className="mt-8 flex gap-3">
          <a href={CALENDLY_URL} className="px-5 py-3 rounded-xl bg-slate-900 text-white">Book a consultation</a>
          <a href="/services" className="px-5 py-3 rounded-xl border border-slate-300">Explore services</a>
        </div>
        <div className="mt-6 text-sm text-slate-600">
          HIPAA-compliant workflows ¥ Virtual first ¥ Evidence-driven
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-sm text-center">
        <p>
          Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ¥ <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
        </p>
        <p>© {new Date().getFullYear()} KERR Lozano Neurodevelopmental Genetics & Psychopharmacology</p>
      </footer>
    </div>
  );
}

/* --- Mobile menu component --- */
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle button */}
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
      >
        {open ? (
          /* X icon */
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>

      {/* Slide-down panel */}
      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-slate-200 bg-white/95 backdrop-blur-lg shadow-sm">
          <nav className="px-4 py-3 space-y-2 text-sm">
            <a onClick={() => setOpen(false)} href="/services"   className="block rounded-lg px-3 py-2 hover:bg-slate-100">Services</a>
            <a onClick={() => setOpen(false)} href="/conditions" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Conditions</a>
            <a onClick={() => setOpen(false)} href="#approach"   className="block rounded-lg px-3 py-2 hover:bg-slate-100">Our Approach</a>
            <a onClick={() => setOpen(false)} href="/about"      className="block rounded-lg px-3 py-2 hover:bg-slate-100">About</a>
            <a onClick={() => setOpen(false)} href="/faq"        className="block rounded-lg px-3 py-2 hover:bg-slate-100">FAQ</a>
            <a onClick={() => setOpen(false)} href={CALENDLY_URL} className="mt-2 block rounded-xl px-3 py-2 text-center bg-slate-900 text-white hover:bg-slate-800">
              Book now
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
