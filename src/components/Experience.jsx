import React, { useState } from 'react'
import { Calendar, Briefcase, ChevronDown, ChevronUp, MapPin } from 'lucide-react'

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const roles = [
    {
      company: 'WIN Home Inspection',
      location: 'Remote',
      role: 'Data Engineer & Analyst',
      period: 'AUGUST 2025 — PRESENT',
      type: 'FULL-TIME',
      bullets: [
        'Engineered and implemented an interactive AI chatbot for inspection report users using RAG, and developed a CNN-based image classification POC to enhance automation within the in-house inspection workflow.',
        'Planned and executed migration from a third-party CRM to an in-house system by scraping and integrating data via APIs and BeautifulSoup, while resolving circular dependencies and ensuring seamless data consistency.',
        'Configured and deployed AWS infrastructure including EC2 (Ubuntu) and Apache Airflow to automate and schedule ETL pipelines, and implemented CI/CD pipelines for EC2 and Lambda-based services using GitHub Actions.',
        'Constructed and optimized PostgreSQL (Docker-based) data warehouse and designed datasets for Tableau dashboards, enabling analytics for Franchise Partners and Corporate stakeholders.',
        'Optimized and automated data workflows by introducing Parquet format (CPU heavy) to reduce S3 storage costs and engineering lightweight audit log transfer systems (2GB RAM, 2 vCPU), significantly improving cost efficiency.',
        'Developed and maintained data synchronization between MySQL and OpenSearch using Python, removing redundant data and improving search efficiency, and developed AWS API-driven deployment mechanisms for backend code using Lambda functions.'
      ]
    },
    {
      company: 'Akasa Air',
      location: 'Mumbai, India',
      role: 'Assistant Manager - Data Analytics',
      period: 'APRIL 2025 — JULY 2025',
      type: 'MANAGEMENT',
      bullets: [
        'Analyzed and engineered financial reporting datasets, calculations, and business logic in collaboration with finance teams, and developed end-to-end Python-based workflows.',
        'Designed and implemented flight divergence logic using MySQL and Python, and automated daily data pipelines via AWS Glue, while resolving complex timezone and daylight saving challenges to ensure data accuracy.',
        'Constructed and visualized analytics dashboards for ancillary revenue, flight occupancy, and operational metrics, collaborating with cross-functional teams to streamline reporting and support data-driven decision-making.'
      ]
    },
    {
      company: 'Delphi Analytics',
      location: 'Nagpur, India',
      role: 'Senior Data Analyst',
      period: 'JULY 2024 — MARCH 2025',
      type: 'LEAD ANALYTICS',
      bullets: [
        'Led end-to-end data initiatives for e-commerce clients, improving operational efficiency and profitability through scalable data solutions.',
        'Engaged directly with the client to understand business goals, identify pain points, and deliver data solutions, while managing and mentoring cross-functional teams, delegating tasks, and coordinating development of robust data architectures.',
        'Planned and executed end-to-end projects—from scoping & development to stakeholder handover, within timelines.',
        'Hosted and Monitored Python & Flask code as a service to prevent code crashing and data loss.',
        'Diagnosed and resolved split shipment issues, reducing operational costs by 30%.',
        'Collaborated with ed-tech analytics teams to design database architecture and reporting frameworks.'
      ]
    },
    {
      company: 'Delphi Analytics',
      location: 'Nagpur, India',
      role: 'Data Analyst-II',
      period: 'JULY 2023 — JUNE 2024',
      type: 'ANALYTICS',
      bullets: [
        'Provided supply chain insights and post-order analysis to drive operational efficiency by designing dashboards using Superset, Grafana and Power BI for supply chain, inventory and sales reporting.',
        'Executed changelog tracking and automated ETL pipelines to ensure data accuracy.',
        'Optimized storage systems by compressing data and backing up tables to S3, enhancing resource utilization.',
        'Automated hourly sync of GA4 Clickstream data from BigQuery to DWH, transformed raw data, and created interactive dashboards to deliver actionable insights.'
      ]
    },
    {
      company: 'Delphi Analytics',
      location: 'Nagpur, India',
      role: 'Data Analyst-I',
      period: 'JULY 2022 — JUNE 2023',
      type: 'ANALYTICS',
      bullets: [
        'Consolidated multiple databases into unified structures, enabling seamless cross-departmental data access.',
        'Programmed Python-based data extraction processes including CDC pipelines and automated reporting systems.',
        'Engineered and optimized ETL pipelines, ensuring data accuracy, consistency, and reliability across systems.'
      ]
    },
    {
      company: 'Delphi Analytics',
      location: 'Nagpur, India',
      role: 'Data Analyst Intern',
      period: 'DECEMBER 2021 — JUNE 2022',
      type: 'INTERNSHIP',
      bullets: [
        'Assisted in ETL, ETLT, and ELT processes to enhance data accessibility and availability.',
        'Configured and deployed Docker-based tools for data orchestration, improving system reliability.',
        'Facilitated daily sales reporting through automation, reducing manual effort and improving accuracy.'
      ]
    }
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50" id="work">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <span className="font-body text-xs text-primary dark:text-primary-light uppercase tracking-widest font-semibold block mb-2">Professional Tenure</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Career Progression</h2>
        </div>

        {/* Timeline Container */}
        <div className="border-t border-slate-200/60 dark:border-slate-800/60">
          {roles.map((item, idx) => {
            const isExpanded = expandedIndex === idx
            return (
              <div 
                key={idx}
                className="border-b border-slate-200/60 dark:border-slate-800/60 transition-colors"
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-8 px-4 gap-4 text-left hover:bg-white dark:hover:bg-slate-950/40 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    {/* Period Indicator */}
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 w-44">
                      <Calendar size={12} />
                      {item.period}
                    </div>

                    {/* Role Title */}
                    <div>
                      <h4 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-tight">
                        {item.role}
                      </h4>
                      <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                        <Briefcase size={12} />
                        {item.company}
                        <span className="text-slate-300 dark:text-slate-700 font-bold">•</span>
                        <MapPin size={10} />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Badges / Collapse controls */}
                  <div className="flex items-center gap-4 ml-auto md:ml-0">
                    <span className="hidden md:inline-block font-body text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 py-1 border border-slate-200 dark:border-slate-800">
                      {item.type}
                    </span>
                    <div className="p-1 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 group-hover:text-slate-800 dark:group-hover:text-slate-300">
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  </div>
                </button>

                {/* Collapsible Details Body */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[1200px] border-t border-slate-100 dark:border-slate-900 bg-white/40 dark:bg-slate-950/20' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pl-8 md:pl-56">
                    <ul className="list-disc list-outside space-y-3 font-body text-xs text-slate-600 dark:text-slate-400 pl-4">
                      {item.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
