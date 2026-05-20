import React, { useState } from 'react'
import { ArrowUpRight, Grid, Filter, Database, Terminal, ShieldAlert, Zap, Sparkles, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react'
import ProjectModal from './ProjectModal.jsx'

// 1. Franchise Onboarding RAG Chatbot
const ChatbotVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="relative w-full h-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      {/* Top flow indicator */}
      <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/60 pb-2">
        <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500">RAG_PIPELINE_AGENT</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[8px] font-mono text-emerald-500 font-bold">READY</span>
        </span>
      </div>

      {/* Main visualization */}
      <div className="flex items-center justify-around py-2 relative">
        {/* Connection line */}
        <div className="absolute left-[20%] right-[20%] top-1/2 h-[1px] border-t border-dashed border-slate-300 dark:border-slate-700"></div>
        <div className="absolute left-[30%] right-[30%] top-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent animate-pulse"></div>

        {/* User Node */}
        <div className="z-10 flex flex-col items-center gap-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 shadow-sm rounded-lg">
          <div className="w-7 h-7 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center text-primary dark:text-primary-light">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </div>
          <span className="text-[7px] font-mono text-slate-500 font-bold">User Query</span>
        </div>

        {/* Vector DB Node (FAISS) */}
        <div className="z-10 flex flex-col items-center gap-1 bg-white dark:bg-slate-950 border border-primary/20 dark:border-primary-light/20 p-2.5 shadow-md rounded-lg relative">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary-light/5 rounded-lg blur-md animate-pulse"></div>
          <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary-light/20 flex items-center justify-center text-primary dark:text-primary-light relative z-10 animate-bounce">
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <span className="text-[7px] font-mono text-primary dark:text-primary-light font-bold relative z-10">FAISS Index</span>
        </div>

        {/* LLM / FastAPI Node */}
        <div className="z-10 flex flex-col items-center gap-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 shadow-sm rounded-lg">
          <div className="w-7 h-7 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <span className="text-[7px] font-mono text-slate-500 font-bold">FastAPI / LLM</span>
        </div>
      </div>

      {/* Bottom execution trace */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-2 font-mono text-[7px] text-slate-400 dark:text-slate-500">
        <span>LATENCY: 1.62s</span>
        <span className="text-primary dark:text-primary-light font-bold">ACCURACY: 94.2%</span>
      </div>
    </div>
  </div>
)

// 2. SaaS to SaaS Airflow Data Migration
const MigrationVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="relative w-full h-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      {/* Top flow indicator */}
      <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/60 pb-2">
        <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500">APACHE_AIRFLOW_ETL</span>
        <span className="text-[8px] font-mono text-sky-500 font-bold">700+ TABLES</span>
      </div>

      {/* Main visualization */}
      <div className="flex items-center justify-around py-2 relative">
        {/* Ingest Arrow Flow */}
        <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping [animation-delay:0.3s]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping [animation-delay:0.6s]"></span>
        </div>

        {/* Source DB */}
        <div className="z-10 flex flex-col items-center gap-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 shadow-sm rounded-lg">
          <div className="w-7 h-7 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 rounded-md">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <span className="text-[7px] font-mono text-slate-500">SaaS CRM</span>
        </div>

        {/* Central Sync Core */}
        <div className="z-10 w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 animate-spin [animation-duration:8s]">
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 12H16" /></svg>
        </div>

        {/* Destination DB */}
        <div className="z-10 flex flex-col items-center gap-1 bg-white dark:bg-slate-950 border border-primary/25 dark:border-primary-light/25 p-2 shadow-md rounded-lg relative">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary-light/5 rounded-lg blur-md"></div>
          <div className="w-7 h-7 bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center text-primary dark:text-primary-light rounded-md relative z-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div>
          <span className="text-[7px] font-mono text-primary dark:text-primary-light font-bold relative z-10">Target DB</span>
        </div>
      </div>

      {/* Bottom execution trace */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-2 font-mono text-[7px] text-slate-400 dark:text-slate-500">
        <span>INTEGRITY: 100%</span>
        <span className="text-sky-500 font-bold">50% HOSTING SAVED</span>
      </div>
    </div>
  </div>
)

// 3. Inventory View Analysis System (IVAS)
const IvasVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="relative w-full h-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      {/* Top flow indicator */}
      <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/60 pb-2">
        <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500">INVENTORY_OBSERVABILITY</span>
        <span className="text-[8px] font-mono text-emerald-500 font-bold">124 SITES</span>
      </div>

      {/* Main visualization - charts */}
      <div className="flex flex-1 items-end justify-between px-6 py-2 relative h-16">
        {/* Chart bars */}
        <div className="w-4 bg-slate-200 dark:bg-slate-800 h-[30%] rounded-sm"></div>
        <div className="w-4 bg-slate-300 dark:bg-slate-700 h-[50%] rounded-sm"></div>
        <div className="w-4 bg-primary/20 dark:bg-primary-light/20 h-[65%] rounded-sm relative">
          <div className="absolute inset-x-0 bottom-0 bg-primary dark:bg-primary-light h-[80%] rounded-sm"></div>
        </div>
        <div className="w-4 bg-primary/30 dark:bg-primary-light/30 h-[85%] rounded-sm relative">
          <div className="absolute inset-x-0 bottom-0 bg-primary dark:bg-primary-light h-[90%] rounded-sm animate-pulse"></div>
        </div>

        {/* Ingestion overlay trendline */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path 
            d="M 10 32 Q 35 22 60 14 T 90 6" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-primary dark:text-primary-light"
          />
          <circle cx="90" cy="6" r="2.5" className="fill-primary dark:fill-primary-light animate-ping" />
          <circle cx="90" cy="6" r="1.5" className="fill-primary dark:fill-primary-light" />
        </svg>
      </div>

      {/* Bottom execution trace */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-2 font-mono text-[7px] text-slate-400 dark:text-slate-500">
        <span>LATENCY: &lt; 2.5s</span>
        <span className="text-emerald-500 font-bold">45% REDUCED STOCKOUT</span>
      </div>
    </div>
  </div>
)

// 4. Multi-Level Table Lag Monitoring System
const LagVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="relative w-full h-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      {/* Top flow indicator */}
      <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/60 pb-2">
        <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500">CDC_LATENCY_LOGGER</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="text-[8px] font-mono text-rose-500 font-bold">ANOMALY DETECTED</span>
        </span>
      </div>

      {/* Main visualization */}
      <div className="flex-1 py-1 relative">
        <svg className="w-full h-full" viewBox="0 0 100 40" fill="none">
          <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeDasharray="2,2" className="text-slate-300 dark:text-slate-800" />
          
          <path 
            d="M 0 25 L 20 23 L 40 26 L 50 4 L 60 32 L 80 25 L 100 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-rose-500 animate-pulse"
          />
          <circle cx="50" cy="4" r="5" className="fill-rose-500/30 stroke-rose-500 animate-ping" strokeWidth="0.5" />
          <circle cx="50" cy="4" r="2" className="fill-rose-500" />
        </svg>

        <div className="absolute top-0 right-4 bg-rose-500 text-white font-mono text-[6px] px-1 rounded animate-bounce">
          SLACK_ALERT
        </div>
      </div>

      {/* Bottom execution trace */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-2 font-mono text-[7px] text-slate-400 dark:text-slate-500">
        <span>DETECTION: &lt; 15s</span>
        <span className="text-rose-500 font-bold">3-SIGMA DRIFT</span>
      </div>
    </div>
  </div>
)

// 5. Holistic Sales Performance Engine
const SalesVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="relative w-full h-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      {/* Top flow indicator */}
      <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/60 pb-2">
        <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500">SALES_PERFORMANCE_ENGINE</span>
        <span className="text-[8px] font-mono text-violet-500 font-bold">POWER BI DAX</span>
      </div>

      {/* Main visualization */}
      <div className="flex items-center justify-between py-2 px-2 gap-4">
        {/* Radial indicator */}
        <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.91" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-100 dark:text-slate-900" />
            <circle cx="18" cy="18" r="15.91" fill="none" stroke="currentColor" strokeWidth="3" className="text-violet-500" strokeDasharray="75 100" />
          </svg>
          <div className="absolute text-[8px] font-mono font-bold text-violet-500">75%</div>
        </div>

        {/* Growth details */}
        <div className="flex-1 flex flex-col justify-center text-left">
          <span className="text-[12px] font-bold text-slate-900 dark:text-white leading-none">+30%</span>
          <span className="text-[6px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Sales Velocity</span>
          <div className="w-full bg-slate-100 dark:bg-slate-900 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-violet-500 h-full w-[75%] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom execution trace */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-2 font-mono text-[7px] text-slate-400 dark:text-slate-500">
        <span>DOMAINS: FMCG / FASHION</span>
        <span className="text-violet-500 font-bold">95% AUTOMATED</span>
      </div>
    </div>
  </div>
)

// 6. OMS Migration & Infrastructure Optimization
const OmsVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center p-4">
    <div className="relative w-full h-full border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm p-4 flex flex-col justify-between overflow-hidden">
      {/* Top flow indicator */}
      <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/60 pb-2">
        <span className="text-[8px] font-mono text-slate-400 dark:text-slate-500">SHARED_DB_CONSOLIDATION</span>
        <span className="text-[8px] font-mono text-emerald-500 font-bold">5x SPEEDUP</span>
      </div>

      {/* Main visualization */}
      <div className="flex items-center justify-around py-2 relative">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40">
          <line x1="20" y1="12" x2="50" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" className="text-slate-300 dark:text-slate-700" />
          <line x1="20" y1="28" x2="50" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" className="text-slate-300 dark:text-slate-700" />
          <line x1="80" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" className="text-slate-300 dark:text-slate-700" />
        </svg>

        <div className="w-5 h-5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded flex items-center justify-center text-[7px] text-slate-400 z-10">
          DB1
        </div>
        
        <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 rounded flex flex-col items-center justify-center text-emerald-500 z-10 shadow-lg relative animate-pulse">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
          <span className="text-[4.5px] font-mono uppercase font-bold text-emerald-500 mt-0.5">SHARED</span>
        </div>

        <div className="w-5 h-5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded flex items-center justify-center text-[7px] text-slate-400 z-10">
          DB2
        </div>
      </div>

      {/* Bottom execution trace */}
      <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-2 font-mono text-[7px] text-slate-400 dark:text-slate-500">
        <span>700+ TABLES</span>
        <span className="text-emerald-500 font-bold">50% HOSTING SAVED</span>
      </div>
    </div>
  </div>
)

function renderProjectVisual(id) {
  switch (id) {
    case 'franchise-onboarding-chatbot':
      return <ChatbotVisual />
    case 'saas-to-saas-migration':
      return <MigrationVisual />
    case 'ivas':
      return <IvasVisual />
    case 'lag-monitoring':
      return <LagVisual />
    case 'sales-engine':
      return <SalesVisual />
    case 'oms-migration':
      return <OmsVisual />
    default:
      return null
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filterTag, setFilterTag] = useState('ALL')
  const [showAll, setShowAll] = useState(false)

  const projectsData = [
    {
      id: 'franchise-onboarding-chatbot',
      title: 'Franchise Onboarding RAG Chatbot',
      date: 'Aug 2025 — Present',
      tags: ['PYTHON', 'AWS', 'LANGCHAIN', 'FASTAPI'],
      icon: <Sparkles className="w-5 h-5" />,
      desc: 'Engineered an interactive AI chatbot for franchise acquisition and onboarding. Formulated a 5-layer RAG architecture featuring FAISS vector stores, secure Tooling APIs, LangChain agents, FastAPI routing, and Langfuse tracing for real-time model cost and accuracy evaluation.',
      image: '',
      details: {
        metrics: [
          { label: 'Response Latency', value: '< 1.8s' },
          { label: 'System Accuracy', value: '94.2%' },
          { label: 'Onboarding Speedup', value: '40%' }
        ],
        challenge: 'Facilitating real-time Strategic Partner (SP) acquisition and onboarding by providing fast, accurate franchise knowledge without exposing internal datasets or risking LLM model hallucinations.',
        implementation: [
          'Structured a robust 5-layer architecture: Data Layer (rag/) document chunking/FAISS indexes; Tooling Layer (app/tools/) secure internal APIs; Agent Layer (app/agents/) LangChain assistant; Orchestration Layer (app/router.py) query flow router; and Interface Layer (app/main.py) FastAPI endpoint.',
          'Integrated Langfuse telemetry for tracing prompt variations, model execution costs, latency trends, and semantic evaluation metrics.'
        ],
        outcome: 'Accelerated prospective partner onboarding velocity by 40% while preserving a high degree of response fidelity and strict data-to-agent separation.',
        nodes: ['Data Layer (FAISS)', 'Tooling Layer (APIs)', 'Agent Layer (LangChain)', 'Orchestration Layer (Router)', 'Interface Layer (FastAPI)', 'Langfuse Telemetry']
      }
    },
    {
      id: 'saas-to-saas-migration',
      title: 'SaaS to SaaS Airflow Data Migration',
      date: 'Aug 2025 — Present',
      tags: ['APACHE AIRFLOW', 'POSTGRESQL', 'PYTHON', 'SQL'],
      icon: <Database className="w-5 h-5" />,
      desc: 'Architected automated, high-integrity database synchronization and sanitization pipelines from a third-party SaaS CRM to an in-house SaaS platform. Managed complex 700+ table structures, designed schema dependency sequence maps, and scheduled Dockerized Apache Airflow ETL clusters.',
      image: '',
      details: {
        metrics: [
          { label: 'Tables Synchronized', value: '700+' },
          { label: 'Hosting Savings', value: '50%' },
          { label: 'Audit Precision', value: '100%' }
        ],
        challenge: 'Migrating legacy transactional structures from a third-party SaaS CRM to a custom in-house SaaS database without causing data loss or foreign key integrity failures due to multi-level circular key references.',
        implementation: [
          'Programmed Dockerized Python ETL scripts establishing secure SSH tunnels, SQLAlchemy engine pools, and Pangres chunked upserts to transfer active datasets to pre-production environments.',
          'Resolved highly nested circular foreign key references by mapping schemas to a JSON dependency configuration (circular_dep_tables.json), loading nullable keys as null, and executing automated SQL backfill scripts.',
          'Deployed continuous telemetry checks for database sync lag, custom audit log synchronization tables, and real-time Slack exception alert loops.'
        ],
        outcome: 'Successfully established full database independence, cutting hosting costs by 50% while guaranteeing 100% relational integrity.',
        nodes: ['Airflow DAG Engine', 'SSH Forwarding Tunnel', 'JSON Schema Mapper', 'Pangres Upsert Engine', 'PostgreSQL replicas', 'Slack Webhook Telemetry']
      }
    },
    {
      id: 'ivas',
      title: 'Inventory View Analysis System (IVAS)',
      date: 'Dec 2023 — Jan 2024',
      tags: ['PYTHON', 'DOCKER', 'AWS', 'GRAFANA'],
      icon: <Database className="w-5 h-5" />,
      desc: 'Optimized inventory management at 1 place by combining varied datasets into incorporated dataset and crafting spontaneous Grafana dashboards for C-Level Executives, E-Commerce, Retail, and Store Managers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhfuiEYDqeQmJaG7PAOpL3ciEdlZt72P4suc5Jy3Yxz_ZQt8UlRsJ0lvPDtAmddWSmrEQ2MgW8F7hwFeSQYvp4EGNSuRau6aEe2Is9jdJpgxDfqnZ_ZAJ8qB8X7d6SeVzvb4miKyaEl1CiK0yD7th4fASWgZv8xLOSy_8N_WfrBQ7rfQIEsp4JO8tpwigdpMyNPIBpn_zjybTPIzBvAmK7E_BZ2pWBCC-XDf4_gpttKU0HYZbuGmwQBJ01cUB2i_k_YZra9F1EeQ8',
      details: {
        metrics: [
          { label: 'Stockouts Reduced', value: '45%' },
          { label: 'Ingestion Latency', value: '< 2.5s' },
          { label: 'Active Tenant Nodes', value: '124 Sites' }
        ],
        challenge: 'Consolidating real-time stock levels across multi-tenant environments with highly disparate architectures, resulting in inventory mismatches, stockouts, and delayed reporting.',
        implementation: [
          'Engineered multi-node Python pipelines using Docker containers to extract CDC datasets.',
          'Consolidated data architectures to a centralized staging warehouse on AWS S3/RDS.',
          'Designed interactive, auto-refreshing Grafana dashboards customized for store managers and C-level executives.'
        ],
        outcome: 'Achieved a unified 360-degree inventory observability index, maximizing stock turnover efficiency and significantly driving down product stockouts.',
        nodes: ['Python CDC Engine', 'AWS S3 Staging Wells', 'PostgreSQL replicas', 'Grafana UI dashboards']
      }
    },
    {
      id: 'lag-monitoring',
      title: 'Multi-Level Table Lag Monitoring System',
      date: 'Feb 2024 — Mar 2024',
      tags: ['GRAFANA', 'SQL', 'SLACK ALERTS'],
      icon: <ShieldAlert className="w-5 h-5" />,
      desc: 'Designed a 3-level data latency monitoring array tracking ETL pipeline health. Deployed automated Slack alarms triggered by source table anomalies or 3-sigma database sync deviations, mitigating diagnostic times.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu5T7Ui9tiiVWArXIMgkt3u6000mECrY4CHqvQwpyBxd8Ot4zEajT2it2tqjWIRnUrPsu0PuaM8Z2DJrIIUe8PZNjy_UXdP2kCmufqdEhlebrLsrLGXXmZZO_d4ox3P4xQzFCGzZr3hUZw8fEXZbTjvt2Jv0sd-7dNawpHoX5L_v9dS8yvSaw51AIv0iNIjJaxkqw-QjGktuc9T4qNbqlSVadz3WBOpZzDvnqEpboQOB9LcXfLDpNyEUZ494LCFsckngtMg0xUBZU',
      details: {
        metrics: [
          { label: 'Mean Time to Detect', value: '< 15s' },
          { label: 'Debugging Velocity', value: '+ 60%' },
          { label: 'Anomalies Caught', value: '450+ Daily' }
        ],
        challenge: 'Quiet sync failures in multi-stage ETL networks went undetected for hours, introducing severe data lag discrepancies into downstream reporting metrics.',
        implementation: [
          'Coded structured SQL check cursors tracking high-water marks and sync timestamp deltas.',
          'Designed Slack alert webhooks sorting exceptions into critical, warning, or operational states.',
          'Configured Grafana dashboard matrices visualising table drift anomalies and pipeline health trends.'
        ],
        outcome: 'Decreased median incident resolution and detection times by over 60% via robust automated latency logging loops.',
        nodes: ['SQL lag monitor logic', 'Slack webhook nodes', 'Grafana alerts dashboard', 'CDC delta pipelines']
      }
    },
    {
      id: 'sales-engine',
      title: 'Holistic Sales Performance Engine',
      date: 'Oct 2024 — Feb 2025',
      tags: ['POWER BI', 'DATA MODELING', 'SQL', 'PYTHON'],
      icon: <TrendingUp className="w-5 h-5" />,
      desc: 'Developed a unified sales dashboard and report for e-commerce clients across diverse domains (beauty, FMCG, apparel). Consolidated key metrics, enabled dataset swaps for adaptability, and automated reporting, reducing manual effort and driving down reporting time by 30%.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWRGYuddoMEKdJR68mDjxgteUAppTnnK5n1riPo8wMoN2SN0cTEagTWbJ25dGKF0CCOqiDvmk41He9XlJ2xp3_HcKSC6qFxRM5v5_b5escAedHCDaW1YVImYoEQWDBi5dnxmsv0Ro_aVU3GQbzeXLaWnHr1fdp4NP8ZwAf2YGeypfrCZs6JoUXXUSluPU69aqUPJHICONHBIQXL3OQDqf-da5lTY9xjACYdV3DqHvQrEJd-mwVKXKEaufWvfa5NEH6YWLV09KRJJ8',
      details: {
        metrics: [
          { label: 'Reporting Velocity', value: '+ 30%' },
          { label: 'Domains Integrated', value: '3 Major Sectors' },
          { label: 'Manual Effort Reduced', value: '95%' }
        ],
        challenge: 'E-commerce clients operated across beauty, FMCG, and apparel domains on disparate, non-standardized platforms, making cohesive multi-channel brand performance tracking slow, manual, and highly error-prone.',
        implementation: [
          'Consolidated disparate marketing and order datasets using Python ETL workers, preparing unified star schemas.',
          'Designed advanced DAX calculations in Power BI to analyze profit margins, cohort retention, and customer acquisition costs.',
          'Engineered dynamic dataset swap utilities to toggle data sources instantly, enabling seamless multi-tenant dashboard reuse.',
          'Automated daily reporting refreshes using scheduled batch script routines, removing daily manual extraction overhead.'
        ],
        outcome: 'Delivered an executive-level performance engine that reduced multi-department reporting latency by 30% and unlocked self-serve cross-brand operational intelligence.',
        nodes: ['Power BI DAX Engine', 'Multi-tenant schemas', 'Python ETL compiler', 'Star Schema models']
      }
    },
    {
      id: 'oms-migration',
      title: 'OMS Migration & Infrastructure Optimization',
      date: 'Aug 2024 — Sep 2024',
      tags: ['SQL', 'DOCKER', 'POSTGRESQL', 'PYTHON'],
      icon: <Zap className="w-5 h-5" />,
      desc: 'Led large-scale migration of order management systems (OMS) and relational databases to shared server architectures, achieving a 50% hosting cost reduction. Relocated 700+ tables and 200+ views, improving query performance by 5x using real-time webhook-based data pipelines.',
      image: '',
      details: {
        metrics: [
          { label: 'Hosting Savings', value: '50%' },
          { label: 'Query Speedup', value: '5x Faster' },
          { label: 'Objects Migrated', value: '900+' }
        ],
        challenge: 'Scaling database infrastructure for high-throughput order management systems became cost-prohibitive on isolated server nodes, requiring a high-integrity migration without downtime.',
        implementation: [
          'Orchestrated the containerized migration of 700+ tables and 200+ transactional views onto optimized shared server infrastructure.',
          'Created real-time webhook-based pipelines in Python to ensure seamless data flow and zero-loss system synchronization during cutover.',
          'Optimized slow transaction queries by indexing critical columns, materializing high-frequency joins, and partitioning historical logs.',
          'Validated data integrity post-migration by coding automated transaction hash monitoring and record-count checksum arrays.'
        ],
        outcome: 'Successfully consolidated the e-commerce database footprint, cutting ongoing cloud hosting costs in half while driving analytical query performance up by 500%.',
        nodes: ['OMS database clusters', 'Dockerized PostgreSQL', 'Webhook Sync Engine', 'Indexing & Partitioning']
      }
    }
  ]

  const allTags = ['ALL', 'PYTHON', 'AWS', 'SQL', 'GRAFANA', 'LANGCHAIN', 'POWER BI']

  const filteredProjects = filterTag === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.tags.includes(filterTag))

  const displayedProjects = (filterTag !== 'ALL' || showAll)
    ? filteredProjects
    : filteredProjects.slice(0, 4)

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50" id="projects">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <span className="font-body text-xs text-primary dark:text-primary-light uppercase tracking-widest font-semibold block mb-2">Case Studies</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Selected Projects</h2>
          </div>

          {/* Filter Toolbar */}
          <div className="flex flex-wrap items-center gap-2 border border-slate-100 dark:border-slate-900 p-1.5 bg-slate-50 dark:bg-slate-900/30">
            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 px-2 flex items-center gap-1.5">
              <Filter size={10} /> Filter Stack:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1.5 font-body text-[10px] font-bold tracking-wide uppercase transition-all ${
                  filterTag === tag
                    ? 'bg-slate-900 text-white dark:bg-primary-light dark:text-slate-950'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950 p-4 hover:border-primary/30 dark:hover:border-primary-light/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Well */}
              <div className="overflow-hidden border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 aspect-video mb-6 relative flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                {/* Modern grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                {/* Glowing accent circle */}
                <div className="absolute w-24 h-24 rounded-full bg-primary/5 dark:bg-primary-light/5 blur-xl group-hover:bg-primary/10 dark:group-hover:bg-primary-light/10 transition-colors"></div>
                <div className="absolute inset-0 z-20 transition-transform duration-500 group-hover:scale-[1.02]">
                  {renderProjectVisual(project.id)}
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary-light/5 transition-all z-30 pointer-events-none"></div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-sm border border-slate-800 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Text Information */}
              <div className="flex flex-col gap-3 text-left">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400">{project.date}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-wider mt-4">
                  <span>View Case Study</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible View More Projects Trigger */}
        {filterTag === 'ALL' && projectsData.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-primary/50 text-slate-800 dark:border-slate-800 dark:hover:border-primary-light/50 dark:text-slate-200 font-body text-xs font-bold uppercase tracking-wider transition-all hover:bg-slate-50 dark:hover:bg-slate-900/50"
            >
              <span>{showAll ? 'Show Fewer Projects' : 'View More Projects'}</span>
              <div className="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

