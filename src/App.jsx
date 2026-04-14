import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import FeatureCard from './components/FeatureCard.jsx'
import UseCaseCard from './components/UseCaseCard.jsx'

const features = [
  {
    icon: '🧩',
    title: 'Inventory Management',
    description: 'Track every bike, e-bike, and asset in real-time with stock accuracy and availability signals.',
  },
  {
    icon: '📅',
    title: 'Booking Management',
    description: 'One unified schedule for reservations, fleet allocation, and instant customer confirmations.',
  },
  {
    icon: '👤',
    title: 'Customer Tracking',
    description: 'Capture guest history, loyalty touchpoints, and rental preferences with contextual automation.',
  },
  {
    icon: '💳',
    title: 'Payment & Billing',
    description: 'Seamless checkout, recurring invoices, deposits, and damage protection in one workflow.',
  },
  {
    icon: '📈',
    title: 'Analytics Dashboard',
    description: 'Visualize utilization, revenue leakage, and occupancy metrics across every location.',
  },
  {
    icon: '🌍',
    title: 'Multi-location Support',
    description: 'Scale across shops, pop-ups, and franchises with centralized operations and local flexibility.',
  },
]

const useCases = [
  { title: 'Bike Rentals', label: 'Core Focus' },
  { title: 'Car Rentals', label: 'Future Ready' },
  { title: 'Equipment Rentals', label: 'Versatile Workflows' },
]

const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [demoForm, setDemoForm] = useState({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  const [formStatus, setFormStatus] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDemoForm((prev) => ({ ...prev, [name]: value }))
  }

  const submitDemoRequest = async (event) => {
    event.preventDefault()

    const errors = {}
    if (!demoForm.name.trim()) errors.name = 'Name is required.'
    if (!demoForm.email.trim()) {
      errors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(demoForm.email)) {
      errors.email = 'Enter a valid email address.'
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors)
      setFormStatus('')
      return
    }

    setFormErrors({})
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demoForm),
      })

      if (!response.ok) {
        throw new Error(response.text ? await response.text() : 'Failed to submit request')
      }
      setFormStatus('Your request has been received. A ROS specialist will contact you shortly.')
      setDemoForm({ name: '', email: '', message: '' })
      setDialogOpen(false)
    } catch (error) {
      console.error('Error submitting demo request:', error)
      setFormErrors({ submit: 'Failed to submit request. Please try again later.' })
    }
    
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050304] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,0,0,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#350000]/60 to-transparent blur-3xl" />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-950/90 ring-1 ring-white/10">
            <span className="text-lg">ROS</span>
          </div>
          <span className="uppercase tracking-[0.35em] text-red-300">Genius KODS</span>
        </div>
        <nav className="hidden items-center gap-8 text-white/70 lg:flex">
          <a href="#problem" className="transition hover:text-white">Problem</a>
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#showcase" className="transition hover:text-white">Showcase</a>
          <a href="#demo" className="transition hover:text-white">Book</a>
        </nav>
        <a
          href="#demo"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
        >
          Book Demo
        </a>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:pb-32">
        <section className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-200 shadow-[0_20px_80px_rgba(255,255,255,0.04)]">
              Premium rental SaaS
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Automate Your Rental Business with ROS
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Smart, scalable, AI-powered rental management system built for bike rentals today and every rental business tomorrow.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-red-700 px-8 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-red-600"
              >
                Book Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/10"
              >
                Explore Features
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: '24/7 ROI focus', value: 'Reduce loss' },
                { label: 'Modular workflows', value: 'Scale fast' },
                { label: 'Instant booking', value: 'Boost conversion' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/75">
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-white/60">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative isolate mx-auto max-w-xl overflow-hidden rounded-[42px] border border-white/10 bg-[#120406]/90 p-6 shadow-glow backdrop-blur-2xl sm:p-8"
          >
            <div className="absolute -left-12 top-16 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#110305]/90 p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between text-sm text-white/60">
                <span>Dashboard preview</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Live</span>
              </div>
              <div className="space-y-5">
                <div className="rounded-[28px] bg-[#0d0405]/90 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>Fleet utilization</span>
                    <span className="text-red-300">+18%</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-red-500 to-red-300" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] bg-[#0d0405]/90 p-5">
                    <p className="text-sm text-white/60">Bookings today</p>
                    <p className="mt-4 text-3xl font-semibold">128</p>
                  </div>
                  <div className="rounded-[28px] bg-[#0d0405]/90 p-5">
                    <p className="text-sm text-white/60">Active locations</p>
                    <p className="mt-4 text-3xl font-semibold">12</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {['Route', 'Payments', 'Support'].map((item) => (
                    <div key={item} className="rounded-3xl bg-[#100508]/90 p-4 text-xs text-white/70">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="problem" className="mt-24 space-y-10 lg:mt-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-red-300">Problem → Solution</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Legacy rentals lose revenue before every start.</h2>
            <p className="text-lg leading-8 text-white/70">
              Rental operators still rely on spreadsheets, counterbookings, and disconnected systems. ROS centralizes inventory, automates bookings, and prevents revenue leakage with a premium workflow designed for modern rental teams.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={featureContainer} className="grid gap-5 sm:grid-cols-3">
            {[
              'Manual tracking',
              'Inventory confusion',
              'Revenue leakage',
            ].map((item) => (
              <div key={item} className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-white/80 shadow-[0_40px_90px_rgba(0,0,0,0.18)]">
                <p className="text-sm uppercase tracking-[0.28em] text-red-300">Problem</p>
                <p className="mt-4 text-xl font-semibold text-white">{item}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="features" className="mt-24 space-y-12 lg:mt-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-red-300">Features</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Everything rental teams need to operate with confidence.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={featureContainer} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>
        </section>

        <section id="showcase" className="mt-24 space-y-10 lg:mt-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-6 rounded-[42px] border border-white/10 bg-[#0f0405]/80 p-8 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-red-300">Product showcase</p>
              <h3 className="text-3xl font-semibold text-white sm:text-4xl">See ROS in motion across bookings, fleet, and local operations.</h3>
              <p className="text-white/70">A cinematic dashboard preview that feels premium, clear, and built for quick decisions.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-[#120306]/90 p-5 text-white/80">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">Modern UI</p>
                  <p className="mt-4 text-lg font-semibold">High-contrast analytics with intuitive fleet controls.</p>
                </div>
                <div className="rounded-[28px] bg-[#120306]/90 p-5 text-white/80">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">Workflow</p>
                  <p className="mt-4 text-lg font-semibold">Instant reservation routing between locations and teams.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[42px] border border-white/10 bg-[#100306]/80 p-6 shadow-[0_80px_140px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-4 h-10 bg-gradient-to-r from-red-500/20 via-transparent to-white/10 blur-3xl" />
              <div className="space-y-5">
                <div className="rounded-[32px] bg-[#130307]/95 p-5 shadow-[0_40px_80px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    <span>Overview</span>
                    <span className="text-red-300">Live</span>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {['Bookings', 'Fleet', 'Revenue'].map((item) => (
                      <div key={item} className="rounded-3xl bg-white/5 p-4 text-white/80">
                        <p className="text-sm text-white/60">{item}</p>
                        <p className="mt-2 text-xl font-semibold">{item === 'Revenue' ? '$9.2k' : item === 'Fleet' ? '82%' : '146'}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[32px] bg-[#140308]/95 p-5">
                    <p className="text-sm text-white/60">Active rentals</p>
                    <p className="mt-4 text-3xl font-semibold">58</p>
                  </div>
                  <div className="rounded-[32px] bg-[#140308]/95 p-5">
                    <p className="text-sm text-white/60">Next pickup</p>
                    <p className="mt-4 text-3xl font-semibold">10m</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="use-cases" className="mt-24 space-y-10 lg:mt-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-red-300">Use cases</p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">A platform built for rental businesses that need speed, structure, and trust.</h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
              <UseCaseCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="proof" className="mt-24 space-y-10 lg:mt-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="rounded-[42px] border border-white/10 bg-[#0b0304]/90 p-8 shadow-glow backdrop-blur-xl sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">Trust & proof</p>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">Built by Genius KODS for rental leaders who expect premium execution.</h3>
                <p className="text-white/70">
                  ROS is already modeled on real rental operations like RevUp Bikes, with a future-ready architecture for all rental verticals.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-[#120306]/95 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">Client</p>
                  <p className="mt-4 text-xl font-semibold text-white">RevUp Bikes</p>
                  <p className="mt-3 text-sm text-white/60">Operational overhaul, inventory clarity, and faster booking conversion.</p>
                </div>
                <div className="rounded-[28px] bg-[#120306]/95 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">Testimonial</p>
                  <p className="mt-4 text-xl font-semibold text-white">“ROS transformed how our rental fleet operates every day.”</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="demo" className="mt-24 rounded-[42px] border border-white/10 bg-gradient-to-r from-[#230606]/60 via-[#0f0407]/80 to-[#120107]/90 p-10 shadow-glow backdrop-blur-xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_0.6fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.4em] text-red-300">Ready to launch</p>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Start automating your rental business today.</h2>
              <p className="max-w-2xl text-lg leading-8 text-white/70">
                Book a demo with Genius KODS and see how ROS turns rental complexity into premium operational clarity.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="inline-flex h-fit items-center justify-center rounded-full bg-red-600 px-10 py-4 text-base font-semibold text-white transition hover:bg-red-500 cursor-pointer"
            >
              Request Demo
            </button>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {dialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setDialogOpen(false)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#0d0406]/95 p-8 shadow-glow backdrop-blur-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-red-300">Demo request</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Let’s get your ROS demo scheduled.</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Close
                </button>
              </div>

              <form onSubmit={submitDemoRequest} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-white/70">
                    <span className="font-medium text-white">Name *</span>
                    <input
                      name="name"
                      value={demoForm.name}
                      onChange={handleInputChange}
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      placeholder="Enter your name"
                      aria-invalid={!!formErrors.name}
                    />
                    {formErrors.name && <p className="text-xs text-red-300">{formErrors.name}</p>}
                  </label>

                  <label className="space-y-2 text-sm text-white/70">
                    <span className="font-medium text-white">Email *</span>
                    <input
                      name="email"
                      type="email"
                      value={demoForm.email}
                      onChange={handleInputChange}
                      className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      placeholder="you@company.com"
                      aria-invalid={!!formErrors.email}
                    />
                    {formErrors.email && <p className="text-xs text-red-300">{formErrors.email}</p>}
                  </label>
                </div>

                <label className="space-y-2 text-sm text-white/70">
                  <span className="font-medium text-white">Message (optional)</span>
                  <textarea
                    name="message"
                    value={demoForm.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    placeholder="Let us know what you want to explore in ROS"
                  />
                </label>

                {formStatus && (
                  <div className="rounded-3xl border border-green-400/15 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                    {formStatus}
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Name and email are required fields.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative z-20 border-t border-white/10 bg-[#050304]/90 px-6 py-8 text-sm text-white/60 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">ROS</p>
            <p className="mt-2 text-white/50">Premium rental operating system by Genius KODS.</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#showcase" className="transition hover:text-white">Showcase</a>
            <a href="#demo" className="transition hover:text-white">Demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
