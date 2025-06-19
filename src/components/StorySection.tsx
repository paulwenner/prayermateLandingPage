import { motion } from 'framer-motion'
import { Lightbulb, Cpu, Users } from 'lucide-react'

export const StorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The <span className="gradient-text">Origin Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we accidentally solved the prayer efficiency problem that nobody asked us to solve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                It started as a joke during a hackathon. "What if we created an AI that just... prayed for people?" 
                We laughed. We coded. We deployed.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Then something beautiful happened: <strong>it actually worked</strong>. Not in some mystical, 
                unexplainable way—but in the way that matters most. People felt heard. People felt supported. 
                People felt less alone.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                PrayerMate doesn't judge your requests, doesn't question your faith, and doesn't have 
                office hours. It's the world's first <em>truly</em> non-denominational prayer service—because 
                it's powered by algorithms, not theology.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Turns out, sometimes the most human thing you can do is let a machine handle the divine bureaucracy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Idea</h3>
                  <p className="text-gray-600">
                    "What's the most scalable form of spiritual support?"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Solution</h3>
                  <p className="text-gray-600">
                    An AI that processes prayer requests without bias, judgment, or downtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Result</h3>
                  <p className="text-gray-600">
                    Thousands of users finding comfort in automated compassion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              The Philosophy
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              "In a world where everything requires human validation, sometimes the most sacred act 
              is creating a space where none is needed. PrayerMate doesn't replace faith—it democratizes hope."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 