import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export const LegalNotice = () => {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Notice</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information according to § 5 TMG</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Paul Wenner</strong></p>
                <p className="mb-2">C/O Digital Hub Worms e.V.</p>
                <p className="mb-2">Adenauerring 1</p>
                <p className="mb-4">67547 Worms, Germany</p>
                
                <p className="mb-2"><strong>Phone:</strong> +49 16 1994590</p>
                <p><strong>Email:</strong> paul@paulwenner</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsibility for Content</h2>
              <p className="text-gray-700 leading-relaxed">
                The contents of our pages have been created with the utmost care. However, we cannot guarantee 
                the contents' accuracy, completeness or topicality. According to statutory provisions, we are 
                furthermore responsible for our own content on these web pages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsibility for Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our offer includes links to external third party websites. We have no influence on the contents 
                of those websites, therefore we cannot guarantee for those contents. Providers or administrators 
                of linked websites are always responsible for their own contents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copyright</h2>
              <p className="text-gray-700 leading-relaxed">
                The content and works on these pages created by the site operators are subject to German 
                copyright law. Duplication, processing, distribution, or any form of commercialization of 
                such material beyond the scope of the copyright law shall require the prior written consent 
                of its respective author or creator.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 