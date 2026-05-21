import React, { useState } from 'react'
import { Database, TrendingUp, Sparkles } from 'lucide-react'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null)

  const categories = [
    {
      id: 'eng',
      icon: <Database className="w-5 h-5 text-primary dark:text-primary-light" />,
      title: 'Data Engineering & Infrastructure',
      desc: 'Architecting high-volume, cost-efficient, and fault-tolerant data storage pipelines.',
      skills: [
        { name: 'Python', desc: 'Core language for ETL scripting, CDC extraction, APIs, and AI integrations.' },
        { name: 'SQL / PLSQL', desc: 'Complex relational querying, execution-path optimizations, and triggers.' },
        { name: 'Clickhouse', desc: 'Column-oriented DBMS for high-performance real-time analytics and aggregate clickstream queries.' },
        { name: 'AWS (Redshift, S3)', desc: 'Migration of 700+ tables to Redshift and cost optimization on S3 storage.' },
        { name: 'AWS EC2 & RDS', desc: 'Deploying Ubuntu servers, managed MySQL/PostgreSQL databases.' },
        { name: 'Docker', desc: 'Containerizing data warehouses, database replicas, and scripting services.' },
        { name: 'Apache Airflow', desc: 'Orchestrating, scheduling, and monitoring multi-node data workflows.' },
        { name: 'AWS Glue & Lambda', desc: 'Serverless integration service for daily data transformations and synchronizations.' },
        { name: 'PostgreSQL & MySQL', desc: 'DWH structures, database replication, and OpenSearch synchronizations.' }
      ]
    },
    {
      id: 'bi',
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-primary-light" />,
      title: 'Analytics & Business Intelligence',
      desc: 'Formulating calculations and transforming raw data into high-fidelity dashboards.',
      skills: [
        { name: 'Power BI', desc: 'End-to-end report design, high-performance DAX measures, and DWH integration.' },
        { name: 'Grafana', desc: 'Real-time observability boards, table synchronization lag monitoring, and Slack alert setups.' },
        { name: 'Tableau', desc: 'Designing optimized DWH datasets and visual charts for Corporate partners.' },
        { name: 'Apache Superset', desc: 'Open-source data exploration platform for supply chain and post-order analytics.' },
        { name: 'BigQuery', desc: 'Querying GA4 clickstream data and syncing structured streams directly to DWH.' },
        { name: 'Advanced Excel', desc: 'Financial calculations, operational models, and daily reporting metrics.' },
        { name: 'Data Modeling', desc: 'Dimensional structures (Star/Snowflake schema), fact-dimension design.' },
        { name: 'Redash', desc: 'Open-source visualization tool for rapid SQL dashboard prototyping and query sharing.' }
      ]
    },
    {
      id: 'ai',
      icon: <Sparkles className="w-5 h-5 text-primary dark:text-primary-light" />,
      title: 'AI & Pipeline Automation',
      desc: 'Deploying emerging technologies to automate internal and customer workflows.',
      skills: [
        { name: 'RAG Architecture', desc: 'Embedding documents, vector stores, and custom semantic search interfaces.' },
        { name: 'LLM Integration', desc: 'Connecting state-of-the-art models for automated report summaries.' },
        { name: 'AWS Bedrock', desc: 'Fully managed service for deploying foundation model AI chatbots securely.' },
        { name: 'CNN Classification', desc: 'Convolutional neural networks for automated image validation PoCs.' },
        { name: 'BeautifulSoup & Scraping', desc: 'Scraping legacy CRM data via APIs/HTML parsing to resolve dependencies.' },
        { name: 'Selenium', desc: 'Automating regression browser interactions and click workflows.' },
        { name: 'ETL Automation', desc: 'Robust hourly data synchronization triggers with auto-failover and alerting.' },
        { name: 'GitHub Actions', desc: 'CI/CD pipeline deployments to Lambda backend services and EC2 clusters.' }
      ]
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-950 max-w-[1200px] mx-auto px-6 md:px-8" id="skills">
      <div className="mb-16">
        <span className="font-body text-xs text-primary dark:text-primary-light uppercase tracking-widest font-semibold block mb-2">Capabilities</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onMouseEnter={() => setActiveCategory(category.id)}
            onMouseLeave={() => setActiveCategory(null)}
            className={`p-8 border bg-white dark:bg-slate-950 transition-all duration-300 relative group ${activeCategory === category.id
              ? 'border-primary dark:border-primary-light shadow-md'
              : 'border-slate-200/50 dark:border-slate-800/50'
              }`}
          >
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-primary dark:bg-primary-light origin-left transition-transform duration-300 ${activeCategory === category.id ? 'scale-x-100' : 'scale-x-0'
              }`}></div>

            {/* Category Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                {category.icon}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide leading-tight">
                {category.title}
              </h3>
            </div>

            {/* Category Desc */}
            <p className="font-body text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              {category.desc}
            </p>

            {/* Category Skills */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative group/tag"
                >
                  <span className="px-3 py-1.5 bg-slate-50 border border-slate-200/50 hover:border-primary/50 text-slate-700 dark:bg-slate-900/30 dark:border-slate-800/50 dark:text-slate-300 dark:hover:border-primary-light/50 font-body text-[11px] font-semibold tracking-wide uppercase transition-all duration-200 inline-block cursor-help">
                    {skill.name}
                  </span>

                  {/* Skill Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 shadow-xl opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-200 z-30 pointer-events-none">
                    <div className="font-body text-[9px] uppercase font-bold text-emerald-500 tracking-wider mb-1">Impact Detail:</div>
                    <p className="font-mono text-[9px] text-slate-300 leading-normal">{skill.desc}</p>
                    {/* Tooltip Chevron */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-800 border-r border-b border-slate-800 dark:border-slate-700 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
