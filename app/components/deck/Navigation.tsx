'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'destination', label: 'Destination' },
  { id: 'retail', label: 'Retail' },
  { id: 'entertainment', label: 'Entertainment' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed right-8 top-1/2 z-50 -translate-y-1/2 transition-all duration-500 hidden lg:block ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-white/50">{section.label}</span>
            <div className="h-px w-8 bg-white/30" />
          </div>
        ))}
      </div>
    </nav>
  )
}
