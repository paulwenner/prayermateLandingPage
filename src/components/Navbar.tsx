import { motion } from 'framer-motion'
import { MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#story', label: 'Story' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PrayerMate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://t.me/prayermate_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Praying
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200/50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/prayermate_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full font-semibold text-center mt-2"
              >
                Start Praying
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
} 