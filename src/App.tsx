import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { StorySection } from './components/StorySection'
import { Footer } from './components/Footer'
import { WorkflowSection } from './components/WorkflowSection'
import { LegalNotice } from './components/LegalNotice'
import { PrivacyPolicy } from './components/PrivacyPolicy'
import { TermsOfService } from './components/TermsOfService'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      setCurrentPage(hash || 'home')
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'legal-notice':
        return <LegalNotice />
      case 'privacy-policy':
        return <PrivacyPolicy />
      case 'terms-of-service':
        return <TermsOfService />
      default:
        return (
          <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <WorkflowSection />
            <StorySection />
            <Footer />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  )
}

export default App 