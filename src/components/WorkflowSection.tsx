import { useState, useEffect } from 'react'
import { Clipboard, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export const WorkflowSection = () => {
  const [workflow, setWorkflow] = useState<string>('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Fetch the workflow text from the public folder
    fetch('/workflow.txt')
      .then((res) => res.text())
      .then((text) => setWorkflow(text))
      .catch(() => setWorkflow('Failed to load workflow.'))
  }, [])

  const handleCopy = () => {
    if (!workflow) return
    navigator.clipboard.writeText(workflow).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="workflow" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center"
        >
          n8n Workflow Template
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12"
        >
          Copy the ready-made n8n workflow JSON and import it directly into your n8n instance.
        </motion.p>

        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <pre className="p-6 overflow-auto max-h-[600px] text-sm leading-relaxed whitespace-pre-wrap">
            {workflow || 'Loading workflow...'}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-xl transition-all duration-300"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Copied!
              </>
            ) : (
              <>
                <Clipboard className="w-4 h-4" /> Copy
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
} 