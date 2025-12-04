'use client'

import { motion } from 'framer-motion'

interface Tafsir {
  title: string
  url: string
}

interface TafsirCardProps {
  tafsir: Tafsir
  index: number
}

export default function TafsirCard({ tafsir, index }: TafsirCardProps) {
  const isSearchLink = tafsir.url.includes('youtube.com/results')
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="card-gradient rounded-xl p-5 shadow-lg mb-4"
    >
      <a
        href={tafsir.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
      >
        <span className="text-2xl">▶️</span>
        <div className="flex-1">
          <span className="font-semibold block">{tafsir.title}</span>
          {isSearchLink && (
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
              Opens YouTube search for relevant tafsir videos
            </span>
          )}
        </div>
      </a>
    </motion.div>
  )
}

