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
            
            {/* UPI Payment Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-4 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 text-center">
                💳 Donate via UPI
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                Scan the QR code or use UPI ID with any UPI app (Google Pay, PhonePe, Paytm, BHIM, etc.)
              </p>
              
              <div className="flex flex-col items-center">
                {/* UPI QR Code */}
                <div className="bg-white p-4 rounded-lg border-2 border-gray-300 mb-4">
                  <img
                    src="/upi-qr-code.jpg"
                    alt="UPI QR Code"
                    className="w-64 h-64"
                  />
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 text-center font-medium">
                  Or send directly to UPI ID:
                </p>
                <div className="flex items-center justify-center gap-2 w-full max-w-md mb-2">
                  <code className="flex-1 px-4 py-3 bg-white dark:bg-slate-700 border-2 border-green-500 dark:border-green-400 rounded-lg text-green-600 dark:text-green-400 font-mono font-bold text-lg text-center shadow-md">
                    7338490213@ybl
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('7338490213@ybl')
                      alert('UPI ID copied to clipboard!')
                    }}
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold shadow-md"
                  >
                    📋 Copy
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                  Scan the QR code or copy the UPI ID to send payment
                </p>
              </div>
            </div>
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

