import { ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface BackToTopProps {
  onClick: () => void
}

export default function BackToTop({ onClick }: BackToTopProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-8 left-8 z-40 bg-accent-blue hover:bg-accent-blue/80 text-white p-4 rounded-full shadow-lg shadow-accent-blue/50 transition-all"
      title="Back to top"
    >
      <ChevronUp size={24} />
    </motion.button>
  )
}
