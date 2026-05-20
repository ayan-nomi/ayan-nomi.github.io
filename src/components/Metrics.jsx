import React, { useState, useEffect } from 'react'
import { Calendar, Database, Sparkles, TrendingUp } from 'lucide-react'

export default function Metrics() {
  const stats = [
    {
      icon: <Calendar className="w-5 h-5 text-primary dark:text-primary-light" />,
      value: '04+',
      label: 'Years Experience',
      desc: 'Proven engineering across e-commerce, ed-tech, aviation, and real estate domains.'
    },
    {
      icon: <Database className="w-5 h-5 text-primary dark:text-primary-light" />,
      value: '700+',
      label: 'Tables Migrated',
      desc: 'Seamless architectural transition of legacy CRM structures to modern cloud Redshift DWH.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary dark:text-primary-light" />,
      value: '50%',
      label: 'Cost Reduction',
      desc: 'Significant infrastructure overhead decreases through smart S3 Parquet formats and lightweight systems.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-primary-light" />,
      value: '30%',
      label: 'Ops Efficiency',
      desc: 'Direct operational efficiency gains realized through automated daily pipeline alerts & real-time Grafana logs.'
    }
  ]

  return (
    <section className="bg-white dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-800/50 py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-900">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`flex flex-col gap-3 pt-6 sm:pt-0 ${i > 0 ? 'lg:pl-8' : ''} text-left group`}
            >
              {/* Metric Icon */}
              <div className="w-10 h-10 border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 group-hover:bg-primary/5 dark:group-hover:bg-primary-light/5 group-hover:border-primary/30 dark:group-hover:border-primary-light/30 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Metric Value */}
              <div className="font-display text-4xl font-bold tracking-tight text-primary dark:text-primary-light pt-2">
                {stat.value}
              </div>

              {/* Metric Title */}
              <div className="font-body text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>

              {/* Metric Detail */}
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
