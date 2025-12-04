'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="w-full py-4 px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
          📿 Quran Mood Finder
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/about" 
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            About
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}

