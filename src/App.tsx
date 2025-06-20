import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { StorySection } from './components/StorySection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StorySection />
      <Footer />
    </div>
  )
}

export default App 