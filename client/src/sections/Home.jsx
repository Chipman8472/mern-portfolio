import React from 'react'

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1 text-white">Hey, I’m Justin — Full-stack & IoT tinkerer.</h1>
          <p className="mt-4 text-lg text-gray-300">
            I build clean web apps and hardware integrations. Here you’ll find selected projects,
            my background, and ways to reach me.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="card p-6 text-gray-200">
          <ul className="space-y-3 text-sm">
            <li><strong>Stack:</strong> React · Node · MongoDB · Vite · Tailwind</li>
            <li><strong>Interests:</strong> MERN, IoT, embedded, Android</li>
            <li><strong>Location:</strong> Canada</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
