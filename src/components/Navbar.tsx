import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: any) => void
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Tool Room', page: 'toolroom' },
    { label: 'Machinery', page: 'machinery' },
    { label: 'Inspection', page: 'inspection' },
    { label: 'Customers', page: 'customers' },
    { label: 'Contact', page: 'contact' },
  ]

  const handleNavClick = (page: any) => {
    setCurrentPage(page)
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-steel border-b border-accent-blue/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer"
          >
            <div className="h-16 overflow-hidden bg-transparent p-0 flex items-center justify-center">
              <img
                src="/assets/logo.png"
                alt="SN logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.page}
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/50'
                    : 'text-gray-300 hover:text-white hover:bg-accent-blue/10'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+919513695679"
              className="flex items-center text-gray-300 hover:text-accent-cyan transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="text-sm hidden lg:inline">+91 95136 95679</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-steel border-t border-accent-blue/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.page}
                  whileHover={{ x: 8 }}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.page
                      ? 'bg-accent-blue text-white'
                      : 'text-gray-300 hover:text-white hover:bg-accent-blue/10'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href="tel:+919513695679"
                className="block w-full text-left px-4 py-2 text-accent-cyan hover:bg-accent-blue/10 rounded-lg transition-all"
              >
                📞 +91 95136 95679
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
