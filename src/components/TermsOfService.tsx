import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export const TermsOfService = () => {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 leading-relaxed">
                PrayerMate is a free Telegram bot service that provides automated prayer responses and spiritual support. 
                The service is provided free of charge and is intended for personal, non-commercial use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">By using PrayerMate, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the service for legitimate spiritual and personal purposes only</li>
                <li>Not attempt to abuse, spam, or overload the service</li>
                <li>Not use the service for any illegal activities</li>
                <li>Respect the spiritual nature of the service</li>
                <li>Not attempt to reverse engineer or copy the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                The service is provided "as is" without any guarantees of availability or uptime. 
                We reserve the right to modify, suspend, or discontinue the service at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                PrayerMate is not a substitute for professional counseling, medical advice, or religious guidance. 
                The service is provided for informational and spiritual support purposes only. We are not liable 
                for any decisions made based on the bot's responses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or restrict access to the service for users who violate these terms. 
                You may stop using the service at any time by simply not interacting with the bot.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these terms from time to time. Continued use of the service after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these terms, contact us at: 
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