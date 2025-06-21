import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { StorySection } from './components/StorySection'
import { Footer } from './components/Footer'
import { WorkflowSection } from './components/WorkflowSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <StorySection />
      <Footer />
    </div>
  )
}

export default App 