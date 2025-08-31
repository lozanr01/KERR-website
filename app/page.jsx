"use client";
import "../styles/globals.css";

const CALENDLY_URL = "mailto:KerrclinicLozano@gmail.com";
const CONTACT_EMAIL = "KerrclinicLozano@gmail.com";
const CONTACT_PHONE = "925-321-9491";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">K</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">KERR Center</div>
              <div className="text-xs text-slate-500">Neurodevelopmental Genetics & Psychopharmacology</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services">Services</a>
            <a href="#conditions">Conditions</a>
            <a href="#approach">Our Approach</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="hidden md:block">
            <a href={CALENDLY_URL} className="px-4 py-2 rounded-xl bg-slate-900 text-white">Book now</a>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Precision genetics & calm, evidence-based care for minds in motion
        </h1>
        <p className="mt-5 text-lg text-slate-700">
          Concierge telehealth and select in-person consults in California & New York for neurodevelopmental and neurodegenerative conditions. Led by Dr. Reymundo Lozano, MD, MS.
        </p>
        <div className="mt-8 flex gap-3">
          <a href={CALENDLY_URL} className="px-5 py-3 rounded-xl bg-slate-900 text-white">Book a consultation</a>
          <a href="#services" className="px-5 py-3 rounded-xl border border-slate-300">Explore services</a>
        </div>
        <div className="mt-6 text-sm text-slate-600">HIPAA-compliant workflows • Virtual first • Evidence-driven</div>
      </section>

      <footer className="py-10 border-t border-slate-200 text-sm text-center">
        <p>Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> • <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a></p>
        <p>© {new Date().getFullYear()} KERR Lozano Neurodevelopmental Genetics & Psychopharmacology</p>
      </footer>
    </div>
  );
}
