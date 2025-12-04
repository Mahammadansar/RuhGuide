'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function DonationButton() {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptions(!showOptions)}
        className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors text-sm font-semibold"
      >
        🤲 Support Us
      </motion.button>
      
      {showOptions && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 z-50 border border-gray-200 dark:border-slate-700"
        >
          <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Support Quran Mood Finder</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Help us continue providing free Islamic guidance. Your support is sadaqah jariyah (ongoing charity).
          </p>
          <div className="space-y-2">
            <a
              href="https://paypal.me/yourpaypal" // Replace with your PayPal link
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-3 py-2 bg-blue-600 text-white rounded text-center text-sm hover:bg-blue-700 transition-colors"
            >
              💳 Donate via PayPal
            </a>
            <a
              href="https://patreon.com/yourpatreon" // Replace with your Patreon link
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-3 py-2 bg-orange-600 text-white rounded text-center text-sm hover:bg-orange-700 transition-colors"
            >
              ⭐ Support on Patreon
            </a>
            <button
              onClick={() => setShowOptions(false)}
              className="block w-full px-3 py-2 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded text-center text-sm hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

