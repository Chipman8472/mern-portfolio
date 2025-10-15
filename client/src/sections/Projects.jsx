import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE || ''}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h1">Projects</h2>
        {loading ? <p className="mt-6">Loading...</p> : (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p._id || p.title} p={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
