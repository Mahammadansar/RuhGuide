'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface MoodCardProps {
  mood: string
  emoji: string
  index: number
}

const moodEmojis: Record<string, string> = {
  stressed: '😰',
  lonely: '😔',
  angry: '😠',
  lost: '🤷',
  grateful: '🙏',
  sad: '😢',
  confused: '😕',
  afraid: '😨',
  hopeless: '😞',
  'seeking-guidance': '🤲',
}

export default function MoodCard({ mood, emoji, index }: MoodCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/results?mood=${mood}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <div className="card-gradient rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="text-6xl mb-4 text-center">{emoji}</div>
        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 capitalize">
          {mood.replace('-', ' ')}
        </h3>
      </div>
    </motion.div>
  )
}

