import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

interface FooterProps {
  setCurrentPage: (page: any) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const footerLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Machinery', page: 'machinery' },
    { label: 'Contact', page: 'contact' },
  ]

  const services = [
    'Die Casting',
    'CNC Machining',
    'Tool Design',
    'Mould Design',
    'Inspection',
    'Engineering Solutions',
  ]

  return (
    <footer className="bg-gradient-steel border-t border-accent-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SN</span>
              </div>
              <h3 className="ml-3 font-bold text-white">Sree Nandishwara</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Precision Casting & Engineering Excellence Since 2006
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-accent-cyan" />
                <a href="tel:+919513695679" className="hover:text-white transition-colors">
                  +91 95136 95679
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 hover:text-accent-cyan transition-colors text-sm cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-4">
              Call or message us directly on WhatsApp for quick support.
            </p>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>Phone: <a href="tel:+919513695679" className="text-accent-cyan hover:text-white">+91 95136 95679</a></p>
              <p>WhatsApp: <a href="https://wa.me/919513695679" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:text-white">Chat Now</a></p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-blue/20 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>&copy; 2024 Sree Nandishwara Castings. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
