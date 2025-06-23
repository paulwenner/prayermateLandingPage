import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to PrayerMate
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is a static landing page that does not collect, store, or process any personal data from visitors.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>No cookies are used</li>
                <li>No analytics tracking is implemented</li>
                <li>No user accounts or registration required</li>
                <li>No personal information is collected through forms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Telegram Bot:</strong> When you use the PrayerMate Telegram bot, you interact directly with Telegram's platform. 
                Please refer to Telegram's privacy policy for information about how they handle your data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The PrayerMate bot processes messages you send to provide prayer responses but does not store 
                personal conversations or identifiable information beyond what's necessary for the service to function.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Right to access your data</li>
                <li>Right to rectification</li>
                <li>Right to erasure</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Since this website doesn't collect personal data, these rights primarily apply to your use of the Telegram bot service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at: 
                <a href="mailto:paul@paulwenner" className="text-primary-600 hover:underline ml-1">
                  paul@paulwenner
                </a>
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 