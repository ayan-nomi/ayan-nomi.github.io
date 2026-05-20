import React from 'react'
import Navbar from './components/Navbar.jsx'
import ConsoleWidget from './components/ConsoleWidget.jsx'
import Footer from './components/Footer.jsx'
import { ArrowLeft } from 'lucide-react'

export default function PlaygroundApp() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-secondary dark:bg-dark-bg dark:text-dark-subtext transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar isPlayground={true} />

      {/* Primary Section */}
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 mb-6 text-left">
          <a
            href="index.html"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary dark:hover:text-primary-light uppercase tracking-wider transition-colors mb-4"
          >
            <ArrowLeft size={12} />
            Back to Main Portfolio
          </a>
        </div>

        {/* Emplace the Console widget inside container */}
        <ConsoleWidget />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
