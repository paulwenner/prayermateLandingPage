import { motion } from 'framer-motion'
import { Lightbulb, Cpu, Users, Quote, Sparkles } from 'lucide-react'

const milestones = [
  {
    icon: Lightbulb,
    title: "The Idea",
    description: "\"What's the most scalable form of spiritual support?\"",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Cpu,
    title: "The Solution",
    description: "An AI that processes prayer requests without bias, judgment, or downtime.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "The Result",
    description: "Thousands of users finding comfort in automated compassion.",
    color: "from-green-500 to-emerald-600"
  }
]

export const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-6">
            <Quote className="w-5 h-5 text-accent-600" />
            <span className="text-gray-700 font-semibold text-sm">Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            The <span className="gradient-text">Origin Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            How we accidentally solved the prayer efficiency problem that nobody asked us to solve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="prose prose-lg max-w-none relative z-10">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                >
                  It started as a joke during a hackathon. "What if we created an AI that just... prayed for people?" 
                  We laughed. We coded. We deployed.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                >
                  Then something beautiful happened: <strong className="text-gray-900 bg-yellow-100 px-2 py-1 rounded">it actually worked</strong>. Not in some mystical, 
                  unexplainable way—but in the way that matters most. People felt heard. People felt supported. 
                  People felt less alone.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                >
                  PrayerMate doesn't judge your requests, doesn't question your faith, and doesn't have 
                  office hours. It's the world's first <em className="text-primary-600 not-italic font-semibold">truly</em> non-denominational prayer service—because 
                  it's powered by algorithms, not theology.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Turns out, sometimes the most human thing you can do is let a machine handle the divine bureaucracy.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <milestone.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-primary-600 transition-colors duration-300">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-6 left-6">
              <Sparkles className="w-6 h-6 text-white/40 animate-pulse" />
            </div>
            <div className="absolute bottom-6 right-6">
              <Sparkles className="w-8 h-8 text-white/30 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-bold mb-6"
              >
                The Philosophy
              </motion.h3>
              
              <motion.blockquote 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl lg:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                "In a world where everything requires human validation, sometimes the most sacred act 
                is creating a space where none is needed. PrayerMate doesn't replace faith—it democratizes hope."
              </motion.blockquote>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience PrayerMate?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Join thousands who have found peace through automated prayer. No signup required.
              </p>
              <a
                href="https://t.me/prayermate_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Your First Prayer
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 