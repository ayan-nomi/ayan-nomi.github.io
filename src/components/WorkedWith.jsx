import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import winiLogo from '../assets/wini.png'
import akasaLogo from '../assets/akasa.png'
import delphiLogo from '../assets/delphi.png'

export default function WorkedWith() {
  const companies = [
    {
      name: 'WIN Home Inspection',
      url: 'https://wini.com/',
      desc: 'US-based franchise inspection services',
      logo: (
        <img
          src={winiLogo}
          alt="WIN Home Inspection"
          className="h-[122px] w-auto object-contain opacity-80 dark:opacity-90 group-hover:opacity-100 transition-all duration-300"
        />
      )
    },
    {
      name: 'Akasa Air',
      url: 'https://www.akasaair.com/',
      desc: 'Indian ultra-low-cost commercial airline',
      logo: (
        <img
          src={akasaLogo}
          alt="Akasa Air"
          className="h-[52px] w-auto object-contain opacity-80 dark:opacity-90 group-hover:opacity-100 transition-all duration-300"
        />
      )
    },
    {
      name: 'Delphi Analytics',
      url: 'https://www.delphianalytics.ai/',
      desc: 'AI-driven data science and business metrics',
      logo: (
        <img
          src={delphiLogo}
          alt="Delphi Analytics"
          className="h-[68px] w-auto object-contain opacity-80 dark:opacity-90 group-hover:opacity-100 transition-all duration-300"
        />
      )
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-950/20 border-y border-slate-200/50 dark:border-slate-800/50" id="work">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left">
            <span className="font-body text-xs text-primary dark:text-primary-light uppercase tracking-[0.2em] mb-2 block">Collaborations</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Professional Footprint</h2>
          </div>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative flex flex-col justify-between p-8 border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 hover:border-primary/40 dark:hover:border-primary-light/40 hover:shadow-xl dark:hover:shadow-primary/5 hover:shadow-slate-100/50 transition-all duration-300 h-full text-left min-h-[220px]"
            >
              {/* Logo Well */}
              <div className="h-20 mb-8 flex items-center justify-start text-slate-400 dark:text-slate-600 transition-colors">
                {company.logo}
              </div>

              {/* Company Info */}
              <div className="mt-auto flex justify-between items-end">
                <div className="max-w-[80%]">
                  <h3 className="font-display text-[20px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-tight mb-2">
                    {company.name}
                  </h3>
                  <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {company.desc}
                  </p>
                </div>

                {/* Arrow Redirect Indicator */}
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary-light dark:group-hover:text-slate-950 transition-all duration-300 flex-shrink-0 ml-4">
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
