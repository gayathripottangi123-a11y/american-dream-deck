import Hero from './components/sections/Hero'
import Navigation from './components/deck/Navigation'
import Destination from './components/sections/Destination'
import Retail from './components/sections/Retail'
import Entertainment from './components/sections/Entertainment'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Destination />
        <Retail />
        <Entertainment />
      </main>
    </>
  )
}