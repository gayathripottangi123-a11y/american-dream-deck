'use client'

import { useEffect, useRef, useState } from 'react'
import { AMERICAN_DREAM_DATA } from '@/app/lib/data/american-dream-data'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create sophisticated particle system
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle())
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      if (!ctx) return
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
    }

    let animationFrame: number
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      drawConnections()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.4 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Radial gradient spotlight */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 py-20 lg:px-12">
        
        {/* Location Badge */}
        <div 
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        >
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            East Rutherford, New Jersey
          </span>
        </div>

        {/* Main Title */}
        <div className="mb-10 space-y-4">
          <h1 
            className="text-7xl font-light leading-none tracking-tight text-white lg:text-8xl xl:text-9xl"
            style={{
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            }}
          >
            AMERICAN
            <br />
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text font-extralight text-transparent">
              DREAM
            </span>
          </h1>
          
          <div className="h-px w-32 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        {/* Description */}
        <p 
          className="mb-16 max-w-3xl text-xl font-light leading-relaxed text-white/70 lg:text-2xl"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          }}
        >
          North America's second-largest retail and entertainment destination. 
          Three million square feet of luxury retail, world-class attractions, 
          and unprecedented visitor engagement.
        </p>

        {/* Stats Grid */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '3M', label: 'Square Feet' },
            { value: '40M+', label: 'Annual Visitors' },
            { value: '450+', label: 'Retail & Dining' },
            { value: '#2', label: 'Largest in USA' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group space-y-2 border-l-2 border-white/20 pl-6 transition-all hover:border-white/60"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="text-5xl font-light tabular-nums text-white transition-all group-hover:text-white/80 lg:text-6xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Luxury Retail',
              description: 'Hermès, Louis Vuitton, Gucci. Zero sales tax on clothing.',
              highlight: '0% Tax',
            },
            {
              title: 'Entertainment',
              description: 'Nickelodeon Universe. DreamWorks Water Park. Big SNOW.',
              highlight: '55% of Space',
            },
            {
              title: 'Location',
              description: '7 miles from Manhattan. Adjacent to MetLife Stadium.',
              highlight: 'FIFA 2026',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
                {item.title}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
              <div className="text-xs font-medium uppercase tracking-wider text-white">
                {item.highlight}
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-white/5 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative overflow-hidden border border-white bg-white px-10 py-4 text-sm font-medium uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-white">
            <span className="relative z-10">Schedule Property Tour</span>
            <div className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 group-hover:translate-x-0" />
          </button>
          
          <button className="border border-white/30 px-10 py-4 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10">
            Download Leasing Information
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-3 opacity-50 transition-opacity hover:opacity-100">
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
          <span className="text-xs uppercase tracking-widest text-white">Explore</span>
        </div>
      </div>
    </section>
  )
}