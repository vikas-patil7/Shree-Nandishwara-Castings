import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'floatingWhatsAppPosition'

export default function FloatingWhatsApp() {
  const whatsappLink = 'https://wa.me/919513695679?text=Hi%20Sree%20Nandishwara%20Castings'

  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setPos({ x: parsed.x || 0, y: parsed.y || 0 })
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const handleDragEnd = (_: any, info: any) => {
    const newX = Math.round(pos.x + info.offset.x)
    const newY = Math.round(pos.y + info.offset.y)
    setPos({ x: newX, y: newY })
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ x: newX, y: newY }))
    } catch (e) {
      // ignore
    }
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: pos.x, y: pos.y }}
      transition={{ duration: 0.2 }}
      className="fixed z-40"
      style={{ right: 32, bottom: 32, perspective: 1200, touchAction: 'none' }}
    >
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, rotateY: 12, rotateX: -8 }}
        whileTap={{ scale: 0.96, rotateY: 0, rotateX: 0 }}
        animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, -3, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 text-white shadow-[0_25px_60px_rgba(16,185,129,0.25)]"
        style={{ transformStyle: 'preserve-3d' }}
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
        />
      </motion.a>
    </motion.div>
  )
}
