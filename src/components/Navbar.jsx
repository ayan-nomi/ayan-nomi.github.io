import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Linkedin, FileText } from 'lucide-react'

export default function Navbar({ isPlayground = false, isServices = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const navLinks = [
    { name: 'Work Experience', href: (isPlayground || isServices) ? 'index.html#work' : '#work' },
    { name: 'Projects', href: (isPlayground || isServices) ? 'index.html#projects' : '#projects' },
    { name: 'Tech Stack', href: (isPlayground || isServices) ? 'index.html#skills' : '#skills' },
    { name: 'Strategic Solutions', href: isServices ? '#' : 'services.html' },
    { name: 'Contact', href: (isPlayground || isServices) ? 'index.html#contact' : '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 z-50 transition-all duration-300">
      <nav className="flex justify-between items-center h-16 w-full px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <a href={isPlayground || isServices ? 'index.html' : '#'} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm tracking-wider group-hover:scale-105 transition-transform">
            AK
          </div>
          <span className="font-display text-lg font-bold text-slate-900 dark:text-white tracking-wider group-hover:text-primary transition-colors">
            AYAN KHAN
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = (link.name === 'Strategic Solutions' && isServices)
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive 
                    ? 'text-primary dark:text-primary-light font-semibold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 ${
                  isActive ? 'after:w-full' : 'after:w-0'
                } after:h-0.5 after:bg-primary dark:after:bg-primary-light hover:after:w-full after:transition-all after:duration-200`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/ayan-nisar-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary hover:text-white dark:text-primary-light dark:border-primary-light/30 dark:hover:border-primary-light dark:bg-primary-light/5 dark:hover:bg-primary-light dark:hover:text-slate-950 transition-all"
          >
            <Linkedin size={14} />
            LinkedIn Profile
          </a>

          {/* CV Button */}
          <a
            href="https://github.com/ayan-nomi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-primary dark:bg-slate-800 dark:hover:bg-primary-light dark:hover:text-slate-950 transition-all"
          >
            <FileText size={14} />
            GitHub Profile
          </a>
        </div>

        {/* Mobile Toggle & Theme (Mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 transform transition-transform duration-350 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 mt-12">
          {navLinks.map((link) => {
            const isActive = (link.name === 'Strategic Solutions' && isServices)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-primary dark:text-primary-light border-l-2 border-primary dark:border-primary-light pl-2'
                    : 'text-slate-800 dark:text-slate-100 hover:text-primary dark:hover:text-primary-light'
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <div className="h-px bg-slate-100 dark:bg-slate-900 my-2"></div>
          
          <a
            href="https://linkedin.com/in/ayan-nisar-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded dark:text-primary-light dark:border-primary-light/30 dark:bg-primary-light/5"
          >
            <Linkedin size={14} />
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/ayan-nomi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-primary rounded dark:bg-slate-800 dark:hover:bg-primary-light"
          >
            <FileText size={14} />
            GitHub Profile
          </a>
        </div>
      </div>
    </header>
  )
}
