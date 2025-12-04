'use client'

import { motion } from 'framer-motion'

interface Surah {
  name: string
  reason: string
}

interface SurahCardProps {
  surah: Surah
  index: number
}

export default function SurahCard({ surah, index }: SurahCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card-gradient rounded-xl p-5 shadow-lg mb-4"
    >
      <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
        {surah.name}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">
        {surah.reason}
      </p>
    </motion.div>
  )
}

