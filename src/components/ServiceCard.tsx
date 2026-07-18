import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  delay?: number
  className?: string
}

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0,
  className = '',
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className={`industrial-card p-6 rounded-xl group ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent-blue/50 transition-all"
      >
        <div className="text-white text-2xl">{icon}</div>
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
