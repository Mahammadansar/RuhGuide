'use client'

import { motion } from 'framer-motion'

interface Verse {
  arabic: string
  transliteration: string
  translation: string
  surah: string
  ayah: string
}

interface VerseCardProps {
  verse: Verse
  index: number
}

export default function VerseCard({ verse, index }: VerseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card-gradient rounded-xl p-6 shadow-lg mb-4"
    >
      <div className="arabic-text text-3xl mb-4 text-gray-900 dark:text-gray-100 leading-relaxed">
        {verse.arabic}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
        {verse.transliteration}
      </div>
      <div className="text-lg text-gray-800 dark:text-gray-200 mb-3">
        {verse.translation}
      </div>
      <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
        {verse.surah} - Ayah {verse.ayah}
      </div>
    </motion.div>
  )
}

