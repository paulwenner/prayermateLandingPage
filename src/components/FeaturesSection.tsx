import { motion } from 'framer-motion'
import { MessageSquare, Zap, Clock, Heart, Play } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: "Just Write",
    description: "Send any message to our Telegram bot. No formatting, no rules, no judgment.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Instant Prayer",
    description: "Our AI immediately begins praying for your request. Lightning fast, always available.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock prayer coverage. Your spiritual support never sleeps.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Unconditional",
    description: "No questions asked, no conditions. Pure, automated compassion for everyone.",
    color: "from-pink-500 to-rose-600"
  }
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 rounded-full border border-primary-200 mb-6">
            <Zap className="w-5 h-5 text-accent-600" />
            <span className="text-accent-700 font-semibold text-sm">How It Works</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="gradient-text">Simplicity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's how PrayerMate transforms your spiritual requests into action with unprecedented ease.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-6">
              <Play className="w-5 h-5 text-primary-600" />
              <span className="text-gray-700 font-semibold text-sm">Watch Demo</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See PrayerMate in <span className="gradient-text">Action</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience how our AI transforms your prayers into meaningful spiritual support through this demonstration.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0"
                  title="PrayerMate Demo - AI-Powered Prayer Companion"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video overlay for loading state */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements around video */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-500 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500 rounded-full opacity-70 animate-ping"></div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Ready to experience the power of automated prayer?
            </p>
            <a
              href="https://t.me/prayermate_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6" />
              Try PrayerMate Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 