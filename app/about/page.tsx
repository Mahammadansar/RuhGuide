'use client'

import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            About Quran Mood Finder
          </h1>
          
          <div className="card-gradient rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Quran Mood Finder is designed to provide emotional and spiritual support through
              authentic Islamic guidance. We understand that life brings various emotional states,
              and we believe that the Quran and authentic Islamic teachings offer profound wisdom
              and comfort for every situation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our mission is to help you find peace, guidance, and strength by connecting your
              current emotional state with relevant Quranic verses, surahs, tafsir (exegesis),
              and duas (supplications).
            </p>
          </div>

          <div className="card-gradient rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Select your current emotional state from the home page</li>
              <li>Receive personalized recommendations including Quran verses, surahs, tafsir clips, and duas</li>
              <li>Read, reflect, and find peace through authentic Islamic guidance</li>
            </ol>
          </div>

          <div className="card-gradient rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              All content provided is sourced from authentic Islamic texts and verified sources.
              We are committed to providing accurate translations and reliable guidance that aligns
              with mainstream Islamic scholarship.
            </p>
          </div>

          <div className="card-gradient rounded-xl p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Support This Project
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Quran Mood Finder is a free service provided to help the Muslim community. If you find value in this app, consider supporting us. Your support helps us maintain and improve the app, and can be considered sadaqah jariyah (ongoing charity).
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://paypal.me/yourpaypal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                💳 Donate via PayPal
              </a>
              <a
                href="https://patreon.com/yourpatreon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                ⭐ Support on Patreon
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
              Note: Replace the donation links above with your actual PayPal/Patreon links
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors font-semibold"
            >
              Start Finding Guidance
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

