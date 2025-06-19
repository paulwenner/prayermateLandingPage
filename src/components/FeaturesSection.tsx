import { motion } from 'framer-motion'
import { MessageSquare, Zap, Clock, Heart } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: "Just Write",
    description: "Send any message to our Telegram bot. No formatting, no rules, no judgment."
  },
  {
    icon: Zap,
    title: "Instant Prayer",
    description: "Our AI immediately begins praying for your request. Lightning fast, always available."
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock prayer coverage. Your spiritual support never sleeps."
  },
  {
    icon: Heart,
    title: "Unconditional",
    description: "No questions asked, no conditions. Pure, automated compassion for everyone."
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary simplicity meets divine automation. Here's how PrayerMate transforms your spiritual requests into action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Formula is Simple
            </h3>
            <div className="flex items-center justify-center gap-4 text-3xl font-bold">
              <span className="text-primary-600">Write</span>
              <span className="text-gray-400">→</span>
              <span className="text-accent-600">Pray</span>
              <span className="text-gray-400">→</span>
              <span className="text-green-600">Done</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 