'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

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
          className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 z-50 border border-gray-200 dark:border-slate-700"
        >
          <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Support Quran Mood Finder</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Scan the QR code or copy UPI ID to support us. Your contribution is sadaqah jariyah (ongoing charity).
          </p>
          
          {/* UPI QR Code */}
          <div className="mb-3 flex flex-col items-center">
            <div className="bg-white p-3 rounded-lg border-2 border-gray-300 mb-2">
              <Image
                src="/upi-qr-code.jpg"
                alt="UPI QR Code"
                width={200}
                height={200}
                className="w-48 h-48"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
              Or use UPI ID:
            </p>
            <div className="flex items-center gap-2 w-full">
              <code className="flex-1 px-3 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg text-green-600 dark:text-green-400 font-mono font-semibold text-sm text-center">
                7338490213@ybl
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('7338490213@ybl')
                  alert('UPI ID copied to clipboard!')
                }}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                title="Copy UPI ID"
              >
                📋
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Use any UPI app (Google Pay, PhonePe, Paytm, etc.)
            </p>
          </div>

          <button
            onClick={() => setShowOptions(false)}
            className="block w-full px-3 py-2 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded text-center text-sm hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  )
}

