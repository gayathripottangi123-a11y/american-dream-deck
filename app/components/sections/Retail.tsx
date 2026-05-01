'use client'

import { AMERICAN_DREAM_DATA } from '@/app/lib/data/american-dream-data'
import { useState } from 'react'
import Image from 'next/image'

export default function Retail() {
  const [activeFilter, setActiveFilter] = useState('all')

  const allStores = [
    ...AMERICAN_DREAM_DATA.luxury.brands.map(name => ({ name, category: 'luxury' })),
    ...AMERICAN_DREAM_DATA.retail.fashion.map(name => ({ name, category: 'fashion' })),
    ...AMERICAN_DREAM_DATA.retail.footwear.map(name => ({ name, category: 'footwear' })),
    ...AMERICAN_DREAM_DATA.retail.tech.map(name => ({ name, category: 'tech' })),
    ...AMERICAN_DREAM_DATA.retail.beauty.map(name => ({ name, category: 'beauty' })),
  ]

  const filteredStores = activeFilter === 'all' 
    ? allStores 
    : allStores.filter(store => store.category === activeFilter)

  return (
    <section id="retail" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
            Retail Ecosystem
          </div>
          <h2 className="mb-6 text-5xl font-light text-white lg:text-6xl">
            From Luxury to Lifestyle.<br />
            <span className="text-white/40">450+ Tenants.</span>
          </h2>
          <div className="h-px w-32 bg-white/20" />
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <Image
            src="/images/luxury-mall-interior.jpg"
            alt="Luxury Mall Interior"
            width={1400}
            height={600}
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Key Stats */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="space-y-2 border-l-2 border-white/20 pl-6">
            <div className="text-4xl font-light text-white">0%</div>
            <div className="text-sm uppercase tracking-wider text-white/50">
              Sales Tax on Clothing
            </div>
          </div>
          <div className="space-y-2 border-l-2 border-white/20 pl-6">
            <div className="text-4xl font-light text-white">450+</div>
            <div className="text-sm uppercase tracking-wider text-white/50">
              Stores & Restaurants
            </div>
          </div>
          <div className="space-y-2 border-l-2 border-white/20 pl-6">
            <div className="text-4xl font-light text-white">45%</div>
            <div className="text-sm uppercase tracking-wider text-white/50">
              Dedicated to Retail
            </div>
          </div>
        </div>

        {/* Flagship Stores */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-light text-white">Flagship Locations</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {AMERICAN_DREAM_DATA.flagshipStores.map((store) => (
              <div
                key={store.name}
                className="group border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <div className="mb-4 text-2xl font-light text-white">{store.name}</div>
                <div className="text-sm text-white/60">{store.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          {['all', 'luxury', 'fashion', 'footwear', 'tech', 'beauty'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? 'border border-white bg-white text-black'
                  : 'border border-white/20 text-white hover:border-white/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Store Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredStores.map((store, index) => (
            <div
              key={`${store.name}-${index}`}
              className="border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="text-sm text-white">{store.name}</div>
            </div>
          ))}
        </div>

        {/* Luxury Section Highlight with Image */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="mb-12">
            <Image
              src="/images/luxury-corridor.jpg"
              alt="The Collections - Luxury Retail"
              width={1400}
              height={500}
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-light text-white">The Collections</h3>
              <p className="mb-6 text-white/70">
                {AMERICAN_DREAM_DATA.luxury.description}
              </p>
              <div className="space-y-4">
                {AMERICAN_DREAM_DATA.luxury.brands.slice(0, 5).map((brand) => (
                  <div key={brand} className="flex items-center gap-3">
                    <div className="h-px w-8 bg-white/30" />
                    <div className="text-white">{brand}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center border border-white/10 bg-white/5 p-16">
              <div className="text-center">
                <div className="mb-4 text-6xl font-light text-white">0%</div>
                <div className="text-sm uppercase tracking-wider text-white/50">
                  {AMERICAN_DREAM_DATA.luxury.advantage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}