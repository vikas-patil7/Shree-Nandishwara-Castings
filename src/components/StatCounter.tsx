import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

export default function StatCounter({ value, label, suffix = '', delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0
      const interval = setInterval(() => {
        if (current < value) {
          current += Math.ceil(value / 30)
          setCount(Math.min(current, value))
        } else {
          clearInterval(interval)
        }
      }, 30)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center"
    >
      <h3 className="text-4xl sm:text-5xl font-bold text-gradient-blue mb-2">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base">{label}</p>
    </motion.div>
  )
}
