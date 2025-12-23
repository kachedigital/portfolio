"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOutsideClick } from "@/hooks/use-outside-click"

interface EmailCaptureFormProps {
  isOpen: boolean
  onClose: () => void
}

const EmailCaptureForm = ({ isOpen, onClose }: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const ref = useRef<HTMLDivElement>(null)

  // Use the hook safely
  useOutsideClick(ref, () => {
    if (isOpen) onClose()
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Email is required")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      // In a real app, you would send the data to your backend here
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ email, name, message }) })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-bg-primary rounded-xl border border-accent-purple shadow-lg max-w-md w-full relative overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-display font-semibold mb-2 text-white">Get in Touch</h3>
                  <p className="text-zinc-400 mb-6">Leave your details and I'll get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 bg-bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 bg-bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white resize-none"
                        placeholder="Tell me about your project or inquiry"
                      />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-orange hover:bg-accent-purple text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={48} className="text-accent-orange" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-2 text-white">Thank You!</h3>
                  <p className="text-zinc-400 mb-6">Your message has been received. I'll get back to you shortly.</p>
                  <Button
                    onClick={onClose}
                    className="bg-accent-purple hover:bg-accent-orange text-white rounded-xl py-2 px-4 transition-all duration-300"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EmailCaptureForm
