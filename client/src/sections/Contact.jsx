import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', body: '' })
  const [status, setStatus] = useState(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
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
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="h1">Contact</h2>
        <form className="mt-6 grid gap-4 max-w-xl" onSubmit={onSubmit}>
          <input className="border rounded-xl p-3" name="name" placeholder="Name" value={form.name} onChange={onChange} required />
          <input className="border rounded-xl p-3" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
          <input className="border rounded-xl p-3" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
          <textarea className="border rounded-xl p-3 min-h-[120px]" name="body" placeholder="Message" value={form.body} onChange={onChange} required />
          <button className="btn w-fit" disabled={status==='sending'}>Send</button>
          {status==='ok' && <p className="text-green-600">Thanks! I’ll get back to you soon.</p>}
          {status==='error' && <p className="text-red-600">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  )
}
