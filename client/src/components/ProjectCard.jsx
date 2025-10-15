import React from 'react'

export default function ProjectCard({ p }) {
  return (
    <article className="card overflow-hidden">
      {p.imageUrl && (
        <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="h2">{p.title}</h3>
        <p className="mt-2 text-gray-600">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {p.tags?.map(t => (
            <span key={t} className="px-2 py-1 rounded-full bg-gray-100 border">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {p.repoUrl && <a className="btn" href={p.repoUrl} target="_blank" rel="noreferrer">Code</a>}
          {p.liveUrl && <a className="btn" href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>}
        </div>
      </div>
    </article>
  )
}
