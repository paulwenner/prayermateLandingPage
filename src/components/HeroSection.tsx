import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Sparkles, Play, Volume2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const chatMessages = [
  {
    id: 1,
    type: 'bot',
    text: 'Welcome! Remember, God has great plans for you.',
    delay: 2500
  },
  {
    id: 2,
    type: 'user',
    text: 'please pray for my exam tomorrow',
    delay: 5000
  },
  {
    id: 3,
    type: 'bot',
    text: 'Heavenly Father, I lift up this student who is preparing for their exam. Fill them with calmness, clarity, and confidence. Grant them wisdom and recall during the test.  Amen.',
    delay: 6500
  },
  {
    id: 4,
    type: 'voice',
    text: 'Amen',
    size: '339,6 KB',
    delay: 9000
  }
]

export const HeroSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    chatMessages.forEach((message) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message.id])
      }, message.delay)
    })

    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setVisibleMessages([])
        setIsAnimating(true)
      }, 3000)
    }, 12000)
  }, [isAnimating])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-10 w-4 h-4 bg-accent-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 rounded-full border border-primary-200 mb-8"
            >
              <Sparkles className="w-5 h-5 text-accent-600" />
              <span className="text-accent-700 font-semibold text-sm">AI-Powered Prayer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Meet{' '}
              <span className="gradient-text">PrayerMate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Your automated prayer companion. Write to our Telegram bot and receive 24/7 prayers—no judgment, no questions asked.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://t.me/prayermate_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Start Praying Now
              </a>
              
              <button className="inline-flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-gray-500 font-medium"
            >
              ✨ Write. Pray. Done. ✨
            </motion.p>
          </motion.div>

          {/* Right Content - Animated Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-sm font-medium text-gray-900">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-6 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-6 h-2 bg-gray-900 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="px-6 py-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">PrayerMate</h3>
                          <p className="text-sm text-green-600">● Online</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="px-6 py-4 space-y-4 h-full overflow-hidden">
                      <AnimatePresence>
                        {chatMessages.map((message) => {
                          if (!visibleMessages.includes(message.id)) return null
                          
                          if (message.type === 'user') {
                            return (
                              <motion.div
                                key={message.id}
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, type: "spring" }}
                                className="flex justify-end"
                              >
                                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md p-3 max-w-[80%] text-sm">
                                  {message.text}
                                </div>
                              </motion.div>
                            )
                          }
                          
                          if (message.type === 'voice') {
                            return (
                              <motion.div
                                key={message.id}
                                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, type: "spring" }}
                                className="flex justify-start"
                              >
                                <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-[80%] border border-gray-200 flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-blue-600">{message.text}</p>
                                    <p className="text-xs text-gray-500">{message.size}</p>
                                  </div>
                                  <Volume2 className="w-4 h-4 text-gray-400" />
                                </div>
                              </motion.div>
                            )
                          }
                          
                          return (
                            <motion.div
                              key={message.id}
                              initial={{ opacity: 0, x: -50, scale: 0.8 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.4, type: "spring" }}
                              className="flex justify-start"
                            >
                              <div className="bg-white rounded-2xl rounded-bl-md p-3 max-w-[80%] text-sm text-gray-700 shadow-sm border border-gray-100">
                                {message.text}
                              </div>
                            </motion.div>
                          )
                        })}
                      </AnimatePresence>
                      
                      {/* Typing indicator */}
                      {isAnimating && visibleMessages.length > 0 && visibleMessages.length < chatMessages.length && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white rounded-2xl rounded-bl-md p-3 shadow-sm border border-gray-100">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-500 rounded-full opacity-80 animate-pulse flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-500 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 