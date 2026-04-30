import Hero from './components/sections/Hero'
import Navigation from './components/deck/Navigation'
import Destination from './components/sections/Destination'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Destination />
      </main>
    </>
  )
}