import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { 
  ArrowLeft, 
  TrendingUp, 
  Database, 
  Brain, 
  Activity, 
  Rocket, 
  LayoutGrid, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2,
  Mail,
  Linkedin
} from 'lucide-react'

export default function ServicesApp() {
  const servicePillars = [
    {
      icon: <Database className="w-10 h-10 text-primary dark:text-primary-light" />,
      title: "Scalable Data Infrastructure",
      desc: "Automating ETL pipelines, cloud migrations (AWS), and warehouse optimization (PostgreSQL/S3) to reduce operational costs and improve data reliability.",
      tags: ["AWS", "PostgreSQL", "ETL"]
    },
    {
      icon: <Brain className="w-10 h-10 text-primary dark:text-primary-light" />,
      title: "AI Strategy & Integration",
      desc: "Developing RAG-powered chatbots, image classification models, and integrating LLMs into existing workflows to drive automation and intelligence.",
      tags: ["LLM", "RAG", "Computer Vision"]
    },
    {
      icon: <Activity className="w-10 h-10 text-primary dark:text-primary-light" />,
      title: "Advanced Analytics & BI",
      desc: "Building interactive dashboards (Power BI, Grafana) and monitoring systems that provide real-time insights for executive decision-making.",
      tags: ["Power BI", "Grafana", "Real-time"]
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary dark:text-primary-light" />,
      title: "Infrastructure from Scratch",
      desc: "Leveraging startup expertise to architect and build in-house servers, services, and high-performance data engineering teams from the ground up.",
      tags: ["SERVER ARCHITECTURE", "TEAM LEADERSHIP", "STARTUP SCALE"]
    }
  ]

  const scenarios = [
    {
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-primary-light shrink-0 mt-0.5" />,
      text: "Your data costs are scaling faster than your business."
    },
    {
      icon: <LayoutGrid className="w-5 h-5 text-primary dark:text-primary-light shrink-0 mt-0.5" />,
      text: "You need to turn manual, repetitive reporting into automated real-time dashboards."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary dark:text-primary-light shrink-0 mt-0.5" />,
      text: "You have vast amounts of unstructured data and want to leverage AI/RAG for internal knowledge retrieval."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-primary dark:text-primary-light shrink-0 mt-0.5" />,
      text: "Your data pipelines are brittle, causing lags and inconsistencies in reporting."
    },
    {
      icon: <Rocket className="w-5 h-5 text-primary dark:text-primary-light shrink-0 mt-0.5" />,
      text: "You are starting from zero and need a scalable data foundation built with in-house efficiency."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-surface text-secondary dark:bg-dark-bg dark:text-dark-subtext transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar isServices={true} />

      <main className="flex-grow pt-24 pb-24">
        {/* Back Link */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 mb-8 text-left">
          <a
            href="index.html"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary dark:hover:text-primary-light uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={12} />
            Back to Portfolio
          </a>
        </div>

        {/* Hero Section */}
        <header className="max-w-[1200px] mx-auto px-6 md:px-8 mb-20 text-left">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-display text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-[0.2em] mb-3 block">
                Professional Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Strategic Data &amp; AI Solutions
              </h1>
              <p className="font-body text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Bridging the gap between technical complexity and business growth through rigorous engineering, cloud-scale architecture, and analytical precision.
              </p>
            </div>
            <div className="hidden lg:block pb-2 opacity-30 dark:opacity-20 text-primary dark:text-primary-light">
              <TrendingUp size={80} strokeWidth={1} />
            </div>
          </div>
        </header>

        {/* Service Pillars (The 'How') */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="border border-slate-200/50 dark:border-slate-800/50 p-8 bg-white dark:bg-slate-900/50 flex flex-col h-full hover:border-primary dark:hover:border-primary-light transition-all duration-300 text-left group"
              >
                <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="pt-5 border-t border-slate-100 dark:border-slate-850 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 font-display text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scenario-Based Solutions (The 'When') */}
        <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-slate-250/20 dark:border-slate-850/20 py-20 mb-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12 text-left">
              <div className="lg:w-1/3">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  When to Call Me
                </h2>
                <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                  Specific organizational and business bottlenecks where my engineering expertise delivers the highest return on investment and immediate analytical clarity.
                </p>
                {/* Custom System Diagnostics Infographic */}
                <div className="mt-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 relative overflow-hidden group max-w-sm shadow-sm select-none">
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:10px_10px] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] pointer-events-none"></div>
                  
                  {/* Title Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-900 font-mono text-[9px] uppercase tracking-wider text-slate-450 dark:text-slate-500">
                    <span className="flex items-center gap-1.5 font-semibold text-primary dark:text-primary-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-pulse"></span>
                      OPTIMIZATION VECTOR
                    </span>
                    <span>DIAGNOSTIC STATUS</span>
                  </div>

                  {/* Flow Diagram */}
                  <div className="h-20 relative flex items-center justify-between mb-4">
                    {/* Raw Node */}
                    <div className="flex flex-col items-center gap-1 z-10 w-16 text-center">
                      <div className="w-9 h-9 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-355">
                        <Database size={15} />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-slate-500">RAW DATA</span>
                    </div>

                    {/* Connection Line 1 */}
                    <div className="absolute left-10 right-1/2 top-4.5 h-0.5 pointer-events-none overflow-hidden">
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-900 relative">
                        <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent animate-data-flow-1"></div>
                      </div>
                    </div>

                    {/* Pipeline Node */}
                    <div className="flex flex-col items-center gap-1 z-10 w-16 text-center">
                      <div className="w-9 h-9 rounded-full border border-primary/20 dark:border-primary-light/20 bg-primary/5 dark:bg-primary-light/5 flex items-center justify-center text-primary dark:text-primary-light animate-spin-slow">
                        <Activity size={15} />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-primary dark:text-primary-light font-bold">ETL ENGINE</span>
                    </div>

                    {/* Connection Line 2 */}
                    <div className="absolute left-1/2 right-10 top-4.5 h-0.5 pointer-events-none overflow-hidden">
                      <div className="w-full h-full bg-slate-100 dark:bg-slate-900 relative">
                        <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent animate-data-flow-2"></div>
                      </div>
                    </div>

                    {/* AI / RAG Node */}
                    <div className="flex flex-col items-center gap-1 z-10 w-16 text-center">
                      <div className="w-9 h-9 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-355">
                        <Brain size={15} />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-slate-500">AI / RAG</span>
                    </div>
                  </div>

                  {/* Telemetry Dashboard Comparison */}
                  <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-900 pt-4 font-mono text-[9px] text-left">
                    {/* Before State */}
                    <div className="bg-red-50/20 dark:bg-red-950/5 border border-red-100/50 dark:border-red-950/30 p-2.5">
                      <div className="text-red-600 dark:text-red-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-500"></span>
                        BOTTLENECK
                      </div>
                      <div className="space-y-1 text-slate-500">
                        <p>Cost: <span className="text-red-500 font-semibold">12.5x Over</span></p>
                        <p>Lag: <span className="text-red-500 font-semibold">4.8 Hours</span></p>
                        <p>ETL: <span className="text-red-500 font-semibold">Brittle (89%)</span></p>
                      </div>
                    </div>

                    {/* After State */}
                    <div className="bg-emerald-50/20 dark:bg-emerald-950/5 border border-emerald-100/50 dark:border-emerald-950/30 p-2.5">
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                        ENGINEERED
                      </div>
                      <div className="space-y-1 text-slate-700 dark:text-slate-300">
                        <p>Cost: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1.0x (Slashed)</span></p>
                        <p>Lag: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&lt;10 Seconds</span></p>
                        <p>ETL: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Robust (99.9%)</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Inline Infographic Animation Styles */}
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes dataFlow {
                      0% { left: -32px; }
                      100% { left: 100%; }
                    }
                    @keyframes spinSlow {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    .animate-data-flow-1 {
                      position: absolute;
                      animation: dataFlow 2s linear infinite;
                    }
                    .animate-data-flow-2 {
                      position: absolute;
                      animation: dataFlow 2s linear infinite;
                      animation-delay: 1s;
                    }
                    .animate-spin-slow {
                      animation: spinSlow 8s linear infinite;
                    }
                  `}} />
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 gap-4">
                {scenarios.map((scenario, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 border-l-4 border-l-primary dark:border-l-l-primary-light flex gap-4 items-start"
                  >
                    {scenario.icon}
                    <p className="font-display text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {scenario.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consultative Roadmap */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              A Consultative &amp; Logical Approach
            </h2>
            <div className="h-0.5 w-16 bg-primary dark:bg-primary-light mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200/60 dark:border-slate-850/60 bg-white dark:bg-slate-950">
            <div className="p-10 md:border-r border-slate-200/60 dark:border-slate-850/60 relative text-left">
              <span className="absolute top-6 right-8 font-display text-6xl font-black opacity-[0.03] dark:opacity-[0.05] text-primary dark:text-primary-light pointer-events-none">01</span>
              <h4 className="font-display text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-widest mb-3">Discovery</h4>
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Conducting a rigorous, end-to-end audit of your existing data structures, pipeline pipelines, and storage engines to isolate bottlenecks and compute optimization vectors.
              </p>
            </div>
            <div className="p-10 md:border-r border-slate-200/60 dark:border-slate-850/60 relative text-left">
              <span className="absolute top-6 right-8 font-display text-6xl font-black opacity-[0.03] dark:opacity-[0.05] text-primary dark:text-primary-light pointer-events-none">02</span>
              <h4 className="font-display text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-widest mb-3">Implementation</h4>
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Engineering robust, production-grade solutions—from fully automated Airflow workflows to vector RAG databases—with maximum fault tolerance and clean codebase practices.
              </p>
            </div>
            <div className="p-10 relative text-left">
              <span className="absolute top-6 right-8 font-display text-6xl font-black opacity-[0.03] dark:opacity-[0.05] text-primary dark:text-primary-light pointer-events-none">03</span>
              <h4 className="font-display text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-widest mb-3">Handover</h4>
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Providing comprehensive documentation, setting up real-time Grafana lag dashboards and Slack exceptions loops, ensuring full hand-off autonomy and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-slate-900 dark:bg-slate-900 border border-slate-850 p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="lg:w-2/3">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Initiate a Technical Consultation
              </h2>
              <p className="font-body text-sm text-slate-400 max-w-xl leading-relaxed">
                Let's scope your database design, pipeline latency reductions, and vector AI chatbot automation to slash operating costs and enable scalable, data-driven execution.
              </p>
            </div>
            <div className="lg:w-auto flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
              <a 
                href="mailto:ayan.nomi1611@gmail.com"
                className="flex items-center justify-center gap-2 bg-white text-slate-950 hover:bg-primary hover:text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Mail size={14} />
                Email Me Directly
              </a>
              <a 
                href="https://linkedin.com/in/ayan-nisar-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-slate-700 text-white hover:bg-slate-800 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Linkedin size={14} />
                View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  )
}
