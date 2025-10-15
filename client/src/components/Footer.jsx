import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-gray-500">
        <div>© {new Date().getFullYear()} Justin — All rights reserved.</div>
      </div>
    </footer>
  )
}
