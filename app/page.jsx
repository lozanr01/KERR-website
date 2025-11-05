export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      {/* Header */}
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
            <a href="#policies">Policies</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="hidden md:block">
            <a href="mailto:info@kerrlozano.org?subject=Consultation%20Request" className="px-4 py-2 rounded-xl bg-slate-900 text-white">Book now</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Precision genetics and evidence-based care
        </h1>
        <p className="mt-5 text-lg text-slate-700">
          Concierge telehealth consultations in California and New York.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="mailto:info@kerrlozano.org?subject=Consultation%20Request" className="px-5 py-3 rounded-xl bg-slate-900 text-white">Book a consultation</a>
          <a href="#services" className="px-5 py-3 rounded-xl border border-slate-300">Explore services</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-lg text-slate-600">Virtual-first, HIPAA-compliant. Out-of-network; superbills provided.</p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <li className="rounded-2xl border p-6 shadow-sm hover:shadow-md bg-white">
            <h3 className="text-xl font-semibold">New Neurogenetics Consult</h3>
            <p className="mt-1 text-sm text-slate-600">Autism / ADHD / Anxiety and rare neurodevelopmental disorders (Fragile X syndrome, FOXP2, PMS, and others) • CA and NY</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
              <li>Medical history and prior testing review</li>
              <li>Telehealth-adapted exam</li>
              <li>Testing strategy including Genetics and next steps</li>
            </ul>
            <div className="mt-4 text-sm">
              <div><span className="font-medium">Deliverables:</span> Care plan in 48-72 hours</div>
              <div><span className="font-medium">Duration:</span> 60-90 minutes</div>
              <div><span className="font-medium">Fee:</span> Cash Only</div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:info@kerrlozano.org?subject=Book%20Neurogenetics%20Consult" className="rounded-xl px-4 py-2 bg-slate-900 text-white">Book consult</a>
              <a href="#fit" className="rounded-xl px-4 py-2 border">15-minute fit call</a>
            </div>
          </li>

          {/* Card 2 */}
          <li className="rounded-2xl border p-6 shadow-sm hover:shadow-md bg-white">
            <h3 className="text-xl font-semibold">Psychopharmacology Optimization</h3>
            <p className="mt-1 text-sm text-slate-600">Side effects or partial response</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
              <li>Medication and interaction review</li>
              <li>Gene–drug considerations</li>
              <li>Taper/transition roadmap</li>
            </ul>
            <div className="mt-4 text-sm">
              <div><span className="font-medium">Deliverables:</span> Stepwise medication plan (48-72 hours)</div>
              <div><span className="font-medium">Duration:</span> 60 minutes new / 30 minutes follow-up</div>
              <div><span className="font-medium">Fee:</span> Cash only</div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:info@kerrlozano.org?subject=Book%20Psychopharm%20Optimization" className="rounded-xl px-4 py-2 bg-slate-900 text-white">Book optimization</a>
              <a href="#fit" className="rounded-xl px-4 py-2 border"> 15-min fit call</a>
            </div>
          </li>

          {/* Card 3 */}
          <li className="rounded-2xl border p-6 shadow-sm hover:shadow-md bg-white">
            <h3 className="text-xl font-semibold">Genomic Second Opinion</h3>
            <p className="mt-1 text-sm text-slate-600">Exome/genome/panel reinterpretation</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
              <li>Variant re-analysis with phenotype match</li>
              <li>Actionability and add-on testing recommendations</li>
              <li>Brief counseling summary</li>
            </ul>
            <div className="mt-4 text-sm">
              <div><span className="font-medium">Deliverables:</span> Report and summary letter</div>
              <div><span className="font-medium">Duration:</span> 60 minutes</div>
              <div><span className="font-medium">Fee:</span> Fixed or hourly</div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:info@kerrlozano.org?subject=Book%20Genomic%20Second%20Opinion" className="rounded-xl px-4 py-2 bg-slate-900 text-white">Book second opinion</a>
              <a href="#intake" className="rounded-xl px-4 py-2 border">Secure upload</a>
            </div>
          </li>
        </ul>

        {/* Policies */}
        <section id="policies" className="mt-16">
          <h3 className="text-2xl font-semibold">Clear policies</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 list-disc pl-5">
            <li>Superbills provided</li>
            <li>Telehealth limited to California and New York. Not for emergencies.</li>
            <li>Cancellation policy: 48 hours. Refill and lab policies provided at booking.</li>
            <li>Do not send PHI by email; use our secure portal after booking.</li>
          </ul>
        </section>
      </section>

      {/* Placeholder anchors for clean scrolling */}
      <section id="fit" className="sr-only">Fit call info</section>
      <section id="intake" className="sr-only">Intake portal</section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-sm text-center">
        <p>
          Contact: <a href="mailto:info@kerrlozano.org">info@kerrlozano.org</a> • <a href="tel:19253219491">925-321-9491</a>
        </p>
        <p>© 2025 KERR Lozano Neurodevelopmental Genetics & Psychopharmacology</p>
      </footer>
    </div>
  );
}
