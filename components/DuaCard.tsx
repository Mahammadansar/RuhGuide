'use client'

import { motion } from 'framer-motion'

interface Dua {
  arabic: string
  transliteration: string
  translation: string
}

interface DuaCardProps {
  dua: Dua
  index: number
}

export default function DuaCard({ dua, index }: DuaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card-gradient rounded-xl p-5 shadow-lg mb-4"
    >
      <div className="arabic-text text-2xl mb-3 text-gray-900 dark:text-gray-100 leading-relaxed">
        {dua.arabic}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
        {dua.transliteration}
      </div>
      <div className="text-base text-gray-800 dark:text-gray-200">
        {dua.translation}
      </div>
    </motion.div>
  )
}

