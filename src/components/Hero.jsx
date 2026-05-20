import React from 'react'
import { ArrowRight, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden px-6 py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]"></div>
      
      {/* Decorative Gradient Orb */}
      <div className="absolute right-[-10%] top-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 dark:bg-primary-light/5 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Narrative */}
        <div className="lg:col-span-8 space-y-8 text-left z-10">
          <div className="fade-in-up inline-flex items-center gap-2 px-3 py-1.5 border border-primary/20 dark:border-primary-light/20 bg-primary/5 dark:bg-primary-light/5 text-xs font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
            <span className="w-1.5 h-1.5 bg-primary dark:bg-primary-light rounded-full animate-pulse"></span>
            Senior Data Analyst &amp; Engineer
          </div>

          <h1 className="fade-in-up delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Merging Data Engineering with <br />
            <span className="italic font-normal text-primary dark:text-primary-light relative inline-block">
              AI Strategy
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-primary/20 dark:bg-primary-light/20"></span>
            </span> for Precise Decision Systems
          </h1>

          <p className="fade-in-up delay-200 max-w-2xl font-body text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            A meticulous analyst and engineer with 4+ years of expertise across e-commerce, aviation, ed-tech, and real estate startup environments. Architecting scalable, automated ETL pipelines, deploying real-time observability dashboards, and pioneering RAG-driven enterprise AI agents.
          </p>

          <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#work"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-primary dark:bg-slate-800 dark:hover:bg-primary-light dark:hover:text-slate-950 transition-all border border-transparent shadow-md"
            >
              Explore Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="playground.html"
              className="flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-500 bg-white/50 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <Terminal size={14} />
              Open Live Console
            </a>
          </div>
        </div>

        {/* Hero Interactive Terminal Highlight (Desktop only) */}
        <div className="hidden lg:block lg:col-span-4 fade-in-up delay-400">
          <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl rounded-none relative">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-900">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              </div>
              <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">AyanKhanConsole</span>
            </div>

            {/* Content */}
            <div className="pt-4 font-mono text-[11px] space-y-3 leading-relaxed text-slate-700 dark:text-slate-300">
              <p><span className="text-primary dark:text-primary-light font-bold">$</span> cat info.json</p>
              <div className="pl-3 border-l border-slate-100 dark:border-slate-900 text-slate-500 space-y-1">
                <p>"{'{'}"</p>
                <p className="pl-3">"name": "Ayan Khan",</p>
                <p className="pl-3">"location": "Nagpur, India",</p>
                <p className="pl-3">"role": "Data Engineer & Analyst",</p>
                <p className="pl-3">"specialization": ["ETL", "BI", "AI-RAG"],</p>
                <p className="pl-3">"experience": "4+ Years"</p>
                <p>"{'}'}"</p>
              </div>
              <p className="pt-2"><span className="text-primary dark:text-primary-light font-bold">$</span> node sync_status.js</p>
              <p className="text-emerald-600 dark:text-emerald-500 font-semibold animate-pulse">✓ mysql_to_opensearch: ACTIVE (0ms lag)</p>
              <p className="text-emerald-600 dark:text-emerald-500 font-semibold">✓ rag_chatbot_pipeline: OPERATIONAL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
