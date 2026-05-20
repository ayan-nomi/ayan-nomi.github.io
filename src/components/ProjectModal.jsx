import React from 'react'
import { X, ExternalLink, Cpu, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  // Prevent background scroll
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto z-10 rounded-none text-left">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Categories / Tags */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-primary/5 text-primary border border-primary/20 dark:bg-primary-light/5 dark:text-primary-light dark:border-primary-light/20 font-body text-[10px] font-bold uppercase tracking-wider">
            {project.tags.join(' • ')}
          </span>
          <span className="text-slate-400 dark:text-slate-500 font-body text-[10px] uppercase font-bold tracking-widest pl-3">
            {project.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight pr-8">
          {project.title}
        </h3>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-slate-100 dark:border-slate-900 py-4 mb-6">
          {project.details.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">{metric.label}</div>
              <div className="text-sm font-bold text-primary dark:text-primary-light mt-0.5">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Grid Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Narrative */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <h4 className="font-display text-xs uppercase font-bold text-slate-900 dark:text-white tracking-widest mb-2">The Challenge</h4>
              <p className="font-body text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.details.challenge}
              </p>
            </div>

            <div>
              <h4 className="font-display text-xs uppercase font-bold text-slate-900 dark:text-white tracking-widest mb-2">Technical Implementation</h4>
              <ul className="list-disc list-outside ml-4 font-body text-xs text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
                {project.details.implementation.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xs uppercase font-bold text-slate-900 dark:text-white tracking-widest mb-2">Outcome & Impact</h4>
              <p className="font-body text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.details.outcome}
              </p>
            </div>
          </div>

          {/* Architecture Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* System Nodes Checklist */}
            <div className="p-4 border border-slate-100 bg-slate-50 dark:border-slate-900 dark:bg-slate-900/30">
              <h4 className="font-display text-[9px] uppercase font-bold text-slate-500 tracking-widest mb-3">Architecture Nodes</h4>
              <div className="space-y-2 font-mono text-[9px] text-slate-600 dark:text-slate-400">
                {project.details.nodes.map((node, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ShieldCheck size={10} className="text-emerald-500" />
                    <span>{node}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-visualizer for Architecture */}
            <div className="p-4 border border-slate-100 bg-slate-50 dark:border-slate-900 dark:bg-slate-900/30 flex flex-col items-center justify-center min-h-[140px] text-center font-mono">
              <Cpu className="text-primary dark:text-primary-light animate-pulse mb-3" size={24} />
              <div className="text-[9px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-1">
                Data Stream Simulator
              </div>
              <div className="text-[8px] text-slate-400 leading-normal max-w-[120px]">
                CDC extraction pipeline active (0ms delta)
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold uppercase tracking-wider"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  )
}
