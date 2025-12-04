'use client'

import Navbar from '@/components/Navbar'
import MoodCard from '@/components/MoodCard'

const moods = [
  { name: 'stressed', emoji: '😰' },
  { name: 'lonely', emoji: '😔' },
  { name: 'angry', emoji: '😠' },
  { name: 'lost', emoji: '🤷' },
  { name: 'grateful', emoji: '🙏' },
  { name: 'sad', emoji: '😢' },
  { name: 'confused', emoji: '😕' },
  { name: 'afraid', emoji: '😨' },
  { name: 'hopeless', emoji: '😞' },
  { name: 'seeking-guidance', emoji: '🤲' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Welcome to Quran Mood Finder
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select your current emotional state and receive personalized Islamic guidance
            through Quran verses, surahs, tafsir, and duas.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {moods.map((mood, index) => (
            <MoodCard
              key={mood.name}
              mood={mood.name}
              emoji={mood.emoji}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

