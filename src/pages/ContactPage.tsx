import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Get In <span className="text-gradient-blue">Touch</span>
          </motion.h1>
          <p className="text-xl text-gray-300">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="industrial-card p-8 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919513695679"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-blue text-white px-4 py-2 rounded-lg hover:bg-accent-blue/80 transition-all"
              >
                Message on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="industrial-card p-8 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">Bangalore, India</p>
              <p className="text-gray-500 text-sm">Manufacturing Facility</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-steel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-3 text-white">Send us a <span className="text-gradient-blue">Message</span></h2>
              <p className="text-gray-400 mb-6">This form is for display only. Please message us directly on WhatsApp for the fastest reply.</p>
              <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg bg-industrial-blue border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-lg bg-industrial-blue border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="px-4 py-3 rounded-lg bg-industrial-blue border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="px-4 py-3 rounded-lg bg-industrial-blue border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all"
                  />
                </div>
                <select className="w-full px-4 py-3 rounded-lg bg-industrial-blue border border-accent-blue/30 text-white focus:outline-none focus:border-accent-blue transition-all">
                  <option className="text-gray-800">Select Subject</option>
                  <option className="text-gray-800">General Inquiry</option>
                  <option className="text-gray-800">Request Quote</option>
                  <option className="text-gray-800">Technical Support</option>
                  <option className="text-gray-800">Partnership</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-industrial-blue border border-accent-blue/30 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Map or Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="industrial-card p-8 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400 mb-4">Bangalore, India</p>
                  <button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-6 py-2 rounded-lg transition-all">
                    View on Map
                  </button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass-dark p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
