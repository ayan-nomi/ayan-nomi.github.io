import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8 gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white font-bold text-xs tracking-wider">
            AK
          </div>
          <span className="font-display text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white">
            Ayan Khan
          </span>
        </div>

        {/* Copy */}
        <p className="font-body text-[11px] text-slate-400 dark:text-slate-500 order-3 md:order-2">
          © {new Date().getFullYear()} Engineered with analytical precision. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-5 order-2 md:order-3">
          <a 
            href="https://linkedin.com/in/ayan-nisar-khan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light uppercase tracking-wider transition-colors"
          >
            <Linkedin size={12} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/ayan-nomi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light uppercase tracking-wider transition-colors"
          >
            <Github size={12} />
            GitHub
          </a>
          <a 
            href="mailto:ayan.nomi1611@gmail.com"
            className="flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light uppercase tracking-wider transition-colors"
          >
            <Mail size={12} />
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
