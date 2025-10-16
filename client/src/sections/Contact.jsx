import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', body: '' })
  const [status, setStatus] = useState(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('failed')
      setStatus('ok')
      setForm({ name: '', email: '', subject: '', body: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section bg-transparent relative">
      <div className="container relative z-10">
        <h2 className="h1 text-white">Contact</h2>
        <p className="mt-2 text-gray-300 max-w-xl">
          Have a question, project idea, or collaboration in mind? 
          Send me a message below — I’ll get back to you soon.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 grid gap-4 max-w-xl bg-black/30 border border-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-glow"
        >
          <input
            className="border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-space-accent"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            type="email"
            className="border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-space-accent"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            className="border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-space-accent"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={onChange}
          />
          <textarea
            className="border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 rounded-xl p-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-space-accent"
            name="body"
            placeholder="Your Message"
            value={form.body}
            onChange={onChange}
            required
          />

          <button
            type="submit"
            className="btn w-fit disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'ok' && (
            <p className="text-green-400 animate-pulse">✅ Message sent! I’ll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400">❌ Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>

      {/* glowing overlay effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(122,162,255,0.15),transparent_70%)]" />
    </section>
  )
}
