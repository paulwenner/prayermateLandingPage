import { motion } from 'framer-motion'
import { Github, Mail, MessageCircle, Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">PrayerMate</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your automated prayer companion. Because sometimes the most human thing 
              you can do is let technology handle the divine logistics.
            </p>
            <a
              href="https://t.me/prayermate_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Try PrayerMate
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@prayermate.ai"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@prayermate.ai
              </a>
              <a
                href="https://github.com/prayermate/prayermate-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Fine Print</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <strong>Disclaimer:</strong> PrayerMate is not affiliated with any religious organization, 
                deity, or cosmic entity (to our knowledge).
              </p>
              <p>
                We cannot guarantee divine intervention, but we can guarantee our servers will try their best.
              </p>
              <p>
                Results may vary. Side effects may include increased hope and reduced spiritual anxiety.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and questionable theology</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 PrayerMate. All prayers reserved. No warranty on miracles.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 