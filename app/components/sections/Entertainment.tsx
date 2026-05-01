'use client'

import { AMERICAN_DREAM_DATA } from '@/app/lib/data/american-dream-data'
import VideoPlayer from '../deck/VideoPlayer'

export default function Entertainment() {
  return (
    <section id="entertainment" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-black/50">
            Entertainment Platform
          </div>
          <h2 className="mb-6 text-5xl font-light text-black lg:text-6xl">
            World-Class Attractions.<br />
            <span className="text-black/40">Year-Round Engagement.</span>
          </h2>
          <div className="h-px w-32 bg-black/20" />
        </div>

        {/* Key Stat */}
        <div className="mb-16 rounded-lg border border-black/10 bg-black/5 p-12 text-center">
          <div className="mb-4 text-6xl font-light text-black">55%</div>
          <div className="text-lg text-black/70">
            of property dedicated to entertainment — the highest ratio of any mall in North America
          </div>
        </div>

        {/* Mall Walkthrough Video */}
        <div className="mb-20">
          <VideoPlayer
            src="/videos/mall-walkthrough.mp4"
            title="Full Property Walkthrough"
            autoplayOnScroll
          />
          <p className="mt-4 text-sm text-black/60">
            Complete tour showcasing retail, dining, and entertainment experiences
          </p>
        </div>

        {/* Nickelodeon Universe */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div>
            <VideoPlayer
              src="/videos/nickelodeon-universe.mp4"
              title="Nickelodeon Universe"
            />
            <img
              src="/images/nickelodeon-universe.jpg"
              alt="Nickelodeon Universe Indoor Theme Park"
              className="mt-6 w-full h-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-3xl font-light text-black">
              {AMERICAN_DREAM_DATA.attractions.nickelodeonUniverse.name}
            </h3>
            <div className="mb-6 text-xl text-black/60">
              {AMERICAN_DREAM_DATA.attractions.nickelodeonUniverse.title}
            </div>
            <div className="space-y-3">
              {AMERICAN_DREAM_DATA.attractions.nickelodeonUniverse.highlights?.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <div className="mt-2 h-1 w-1 rounded-full bg-black" />
                  <div className="text-sm text-black/70">{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DreamWorks Water Park */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:order-2">
            <h3 className="mb-4 text-3xl font-light text-black">
              {AMERICAN_DREAM_DATA.attractions.dreamworksWaterPark.name}
            </h3>
            <div className="mb-6 text-xl text-black/60">
              {AMERICAN_DREAM_DATA.attractions.dreamworksWaterPark.title}
            </div>
            <div className="space-y-3">
              {AMERICAN_DREAM_DATA.attractions.dreamworksWaterPark.highlights?.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <div className="mt-2 h-1 w-1 rounded-full bg-black" />
                  <div className="text-sm text-black/70">{highlight}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:order-1">
            <div className="flex aspect-video items-center justify-center border border-black/10 bg-black/5">
              <div className="text-center">
                <div className="mb-2 text-sm uppercase tracking-wider text-black/40">Image</div>
                <div className="text-lg font-light text-black/60">DreamWorks Water Park</div>
              </div>
            </div>
          </div>
        </div>

        {/* Big SNOW */}
        <div className="mb-20">
          <h3 className="mb-6 text-3xl font-light text-black">
            {AMERICAN_DREAM_DATA.attractions.bigSnow.name}
          </h3>
          <div className="mb-6 text-xl text-black/60">
            {AMERICAN_DREAM_DATA.attractions.bigSnow.title}
          </div>
          <img
            src="/images/big-snow-ski.jpg"
            alt="Big SNOW Indoor Ski Park"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Additional Attractions */}
        <div className="border-t border-black/10 pt-16">
          <h3 className="mb-8 text-2xl font-light text-black">Additional Attractions</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AMERICAN_DREAM_DATA.attractions.otherAttractions.map((attraction) => (
              <div
                key={attraction}
                className="border border-black/10 bg-black/5 p-6 transition-all hover:border-black/20 hover:bg-black/10"
              >
                <div className="text-sm text-black/80">{attraction}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="border border-black bg-black px-10 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-black/80">
            Download Attractions Overview
          </button>
        </div>
      </div>
    </section>
  )
}