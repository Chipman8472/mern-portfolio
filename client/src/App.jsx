import React from 'react'
import SpaceBg from './components/SpaceBg.jsx'
import NavBar from './components/NavBar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <SpaceBg />               {/* ← global background */}
      <NavBar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
