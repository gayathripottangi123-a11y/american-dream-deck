'use client'

import { AMERICAN_DREAM_DATA } from '@/app/lib/data/american-dream-data'

export default function Destination() {
  return (
    <section id="destination" className="relative min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-black/50">
            The Destination
          </div>
          <h2 className="mb-6 text-5xl font-light text-black lg:text-6xl">
            Strategic Location.<br />
            <span className="text-black/40">Unprecedented Access.</span>
          </h2>
          <div className="h-px w-32 bg-black/20" />
        </div>

        {/* Location Stats */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-light text-black">
              Metropolitan Proximity
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 border-l-2 border-black/10 pl-6">
                <div className="flex-1">
                  <div className="mb-2 text-sm uppercase tracking-wider text-black/50">
                    Midtown Manhattan
                  </div>
                  <div className="text-3xl font-light text-black">7 Miles</div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-2 border-black/10 pl-6">
                <div className="flex-1">
                  <div className="mb-2 text-sm uppercase tracking-wider text-black/50">
                    Newark Airport (EWR)
                  </div>
                  <div className="text-3xl font-light text-black">10 Minutes</div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-2 border-black/10 pl-6">
                <div className="flex-1">
                  <div className="mb-2 text-sm uppercase tracking-wider text-black/50">
                    MetLife Stadium
                  </div>
                  <div className="text-3xl font-light text-black">Adjacent</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-light text-black">
              Catchment Demographics
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-black/10 pl-6">
                <div className="mb-2 text-sm uppercase tracking-wider text-black/50">
                  Primary Catchment (30 Miles)
                </div>
                <div className="mb-1 text-3xl font-light text-black">20M+ Population</div>
                <div className="text-sm text-black/60">
                  NYC Metro, Northern NJ, parts of CT/PA
                </div>
              </div>

              <div className="border-l-2 border-black/10 pl-6">
                <div className="mb-2 text-sm uppercase tracking-wider text-black/50">
                  NYC Annual Tourists
                </div>
                <div className="text-3xl font-light text-black">65M+ Visitors</div>
              </div>

              <div className="border-l-2 border-black/10 pl-6">
                <div className="mb-2 text-sm uppercase tracking-wider text-black/50">
                  Household Income
                </div>
                <div className="text-3xl font-light text-black">Highest in US</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="border-t border-black/10 pt-12">
          <h3 className="mb-8 text-2xl font-light text-black">Transportation Access</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AMERICAN_DREAM_DATA.location.transportation.map((item) => (
              <div
                key={item}
                className="border border-black/10 bg-black/5 p-6 transition-all hover:border-black/20 hover:bg-black/10"
              >
                <div className="text-sm text-black/80">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Advantages */}
        <div className="mt-20 rounded-lg border border-black/10 bg-black/5 p-8">
          <h3 className="mb-6 text-2xl font-light text-black">Why American Dream</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AMERICAN_DREAM_DATA.businessAdvantages.map((advantage) => (
              <div key={advantage} className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                <div className="text-sm text-black/70">{advantage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}