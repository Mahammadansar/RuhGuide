'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import VerseCard from '@/components/VerseCard'
import DuaCard from '@/components/DuaCard'
import SurahCard from '@/components/SurahCard'
import TafsirCard from '@/components/TafsirCard'
import { motion } from 'framer-motion'

interface MoodData {
  verses: Array<{
    arabic: string
    transliteration: string
    translation: string
    surah: string
    ayah: string
  }>
  surahs: Array<{
    name: string
    reason: string
  }>
  tafseer: Array<{
    title: string
    url: string
  }>
  duas: Array<{
    arabic: string
    transliteration: string
    translation: string
  }>
  explanation: string
}

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const mood = searchParams.get('mood')
  const [data, setData] = useState<MoodData | null>(null)
  const [loading, setLoading] = useState(true)
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    if (!mood) {
      router.push('/')
      return
    }

    fetch(`/api/mood/${mood}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [mood, router])

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl text-gray-600 dark:text-gray-400">Loading...</div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl text-gray-600 dark:text-gray-400">Mood not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 capitalize">
            Guidance for: {mood?.replace('-', ' ')}
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            ← Back to moods
          </button>
        </motion.div>

        {/* Explanation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="card-gradient rounded-xl p-6 mb-8"
        >
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="w-full text-left flex items-center justify-between"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Why this is recommended
            </h2>
            <span className="text-2xl">{showExplanation ? '▼' : '▶'}</span>
          </button>
          {showExplanation && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.explanation}
            </p>
          )}
        </motion.div>

        {/* Verses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Recommended Quran Verses
          </h2>
          {data.verses.map((verse, index) => (
            <VerseCard key={index} verse={verse} index={index} />
          ))}
        </section>

        {/* Surahs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Recommended Surahs
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.surahs.map((surah, index) => (
              <SurahCard key={index} surah={surah} index={index} />
            ))}
          </div>
        </section>

        {/* Tafsir Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Tafsir Clips
          </h2>
          {data.tafseer.map((tafsir, index) => (
            <TafsirCard key={index} tafsir={tafsir} index={index} />
          ))}
        </section>

        {/* Duas Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Recommended Duas
          </h2>
          {data.duas.map((dua, index) => (
            <DuaCard key={index} dua={dua} index={index} />
          ))}
        </section>
      </main>
    </div>
  )
}

