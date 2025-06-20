import { motion } from 'framer-motion'
import { MessageCircle, Heart, Twitter, Github, Mail, Sparkles } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#features' },
    { name: 'Demo Video', href: '#features' },
    { name: 'FAQ', href: '#' }
  ],
  company: [
    { name: 'About', href: '#story' },
    { name: 'Story', href: '#story' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' }
  ],
  support: [
    { name: 'Help Center', href: 'https://t.me/prayermate_bot' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Status', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Email', href: 'mailto:hello@prayermate.com', icon: Mail }
]

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">PrayerMate</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Your automated prayer companion. Providing 24/7 spiritual support through AI-powered compassion and understanding.
            </p>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-11 h-11 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-white mb-4 text-lg capitalize">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-center mb-12 relative overflow-hidden shadow-2xl"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="w-8 h-8 text-white animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
          </div>

          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold mb-4"
            >
              Ready to Start Praying?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg opacity-90 mb-6 max-w-2xl mx-auto"
            >
              Join thousands who have found peace through PrayerMate. No signup, no judgment, just prayer.
            </motion.p>
            <motion.a
              href="https://t.me/prayermate_bot"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Start Your First Prayer
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for spiritual wellness</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 PrayerMate. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 