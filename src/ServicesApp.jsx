import React, { useState } from 'react'
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
  Linkedin,
  DollarSign,
  TrendingDown,
  Clock,
  Check,
  Search,
  Cpu,
  Layers,
  Shield,
  Play,
  XCircle,
  FileText,
  ArrowRight
} from 'lucide-react'

// Dynamic Scenario Graphic Component
function ScenarioVisual({ index }) {
  switch (index) {
    case 0:
      return (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5 font-semibold text-primary dark:text-primary-light">
              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-pulse"></span>
              TELEMETRY: COST MATRIX
            </span>
            <span>DIAGNOSTICS: ACTIVE</span>
          </div>
          
          <div className="my-6 relative h-36 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 130">
              <defs>
                <linearGradient id="redGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="emeraldGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              
              <line x1="20" y1="10" x2="280" y2="10" stroke="#f1f5f9" className="dark:stroke-slate-900" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="40" x2="280" y2="40" stroke="#f1f5f9" className="dark:stroke-slate-900" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="70" x2="280" y2="70" stroke="#f1f5f9" className="dark:stroke-slate-900" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="20" y1="100" x2="280" y2="100" stroke="#f1f5f9" className="dark:stroke-slate-900" strokeWidth="0.5" strokeDasharray="2,2" />
              
              <line x1="20" y1="10" x2="20" y2="110" stroke="#cbd5e1" className="dark:stroke-slate-750" strokeWidth="1" />
              <line x1="20" y1="110" x2="280" y2="110" stroke="#cbd5e1" className="dark:stroke-slate-750" strokeWidth="1" />
              
              <path d="M 20,105 Q 160,95 270,15" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
              <path d="M 20,105 Q 160,95 270,15 L 270,110 L 20,110 Z" fill="url(#redGlow)" opacity="0.15" />
              
              <path d="M 20,105 Q 140,55 270,50" fill="none" stroke="#10b981" strokeWidth="2.5" className="animate-draw-path" />
              <path d="M 20,105 Q 140,55 270,50 L 270,110 L 20,110 Z" fill="url(#emeraldGlow)" opacity="0.2" />
              
              <circle cx="270" cy="15" r="4" fill="#ef4444" className="animate-ping-slow" />
              <circle cx="270" cy="15" r="2.5" fill="#f87171" />
              
              <circle cx="270" cy="50" r="4" fill="#10b981" className="animate-ping-slow" />
              <circle cx="270" cy="50" r="2.5" fill="#34d399" />
              
              <text x="25" y="25" fill="#ef4444" className="font-mono text-[7px] font-bold">UNOPTIMIZED BILLING</text>
              <text x="130" y="42" fill="#10b981" className="font-mono text-[7px] font-bold">ENGINEERED STABLE</text>
              <text x="220" y="122" fill="#94a3b8" className="font-mono text-[6px]">DATA VOLUME ➔</text>
              <text x="10" y="8" fill="#94a3b8" className="font-mono text-[6px]" transform="rotate(-90 10 8) translate(-40, -10)">BILLING ➔</text>
            </svg>
            
            <div className="absolute top-1 right-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-[8px] px-2 py-0.5 rounded font-bold tracking-wider animate-bounce-slow">
              -85% COSTS SLASHED
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-900 pt-4 font-mono text-[9px] text-left">
            <div className="bg-red-50/20 dark:bg-red-950/5 border border-red-100/50 dark:border-red-950/20 p-2.5 rounded">
              <div className="text-red-650 dark:text-red-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
                UNCHECKED SPEND
              </div>
              <div className="space-y-1 text-slate-500 dark:text-slate-400">
                <p>Query: <span className="text-red-500 font-semibold">Full scans / No cache</span></p>
                <p>Storage: <span className="text-red-500 font-semibold">Redundant S3 Logs</span></p>
                <p>AWS Bill: <span className="text-red-500 font-semibold">Exponential Drift</span></p>
              </div>
            </div>
            
            <div className="bg-emerald-50/20 dark:bg-emerald-950/5 border border-emerald-100/50 dark:border-emerald-950/20 p-2.5 rounded">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping-slow"></span>
                OPTIMIZED EDGE
              </div>
              <div className="space-y-1 text-slate-700 dark:text-slate-350">
                <p>Query: <span className="text-emerald-650 dark:text-emerald-400 font-semibold">Clustered Indexes</span></p>
                <p>Storage: <span className="text-emerald-650 dark:text-emerald-400 font-semibold">Tiered Cold Archiving</span></p>
                <p>AWS Bill: <span className="text-emerald-655 dark:text-emerald-450 font-semibold">Flat utility curve</span></p>
              </div>
            </div>
          </div>
        </div>
      );
      
    case 1:
      return (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5 font-semibold text-primary dark:text-primary-light">
              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-pulse"></span>
              AUTOMATION METRIC INGEST
            </span>
            <span>LAG: 0.2 SECONDS</span>
          </div>
          
          <div className="my-6 h-36 flex items-center justify-between relative px-2">
            <div className="flex flex-col gap-2 z-10 w-16 text-center items-center">
              <div className="w-8 h-8 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 relative overflow-hidden">
                <FileText size={14} className="animate-pulse" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary dark:bg-primary-light animate-pulse"></div>
              </div>
              <span className="font-mono text-[7px] uppercase tracking-wider text-slate-450 dark:text-slate-500">MANUAL CSV / EXCEL</span>
            </div>
            
            <div className="flex-grow mx-1 h-0.5 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent animate-data-flow-1"></div>
            </div>
            
            <div className="flex flex-col gap-2 z-10 w-20 text-center items-center">
              <div className="w-10 h-10 rounded-full bg-primary/5 dark:bg-primary-light/5 border border-primary/20 dark:border-primary-light/20 flex items-center justify-center text-primary dark:text-primary-light animate-spin-slow">
                <Cpu size={16} />
              </div>
              <span className="font-mono text-[7px] uppercase tracking-wider text-primary dark:text-primary-light font-bold">ETL ENGINE</span>
            </div>
            
            <div className="flex-grow mx-1 h-0.5 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-primary dark:via-primary-light to-transparent animate-data-flow-2"></div>
            </div>
            
            <div className="z-10 w-20 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded p-2 flex flex-col justify-between h-24 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-1 mb-1">
                <span className="font-mono text-[5px] text-primary dark:text-primary-light font-bold">DASHBOARD</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping-slow"></span>
              </div>
              <div className="flex gap-1.5 items-end justify-center h-10 px-1">
                <div className="w-2.5 bg-primary/20 dark:bg-primary-light/20 rounded-t h-3 animate-bar-rise-1"></div>
                <div className="w-2.5 bg-primary/50 dark:bg-primary-light/50 rounded-t h-6 animate-bar-rise-2"></div>
                <div className="w-2.5 bg-primary dark:bg-primary-light rounded-t h-9 animate-bar-rise-3"></div>
              </div>
              <div className="text-center font-mono text-[5px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-900 uppercase">
                Real-Time
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-900 pt-4 font-mono text-[9px] text-left">
            <div className="bg-slate-50/50 dark:bg-slate-950/5 border border-slate-200/50 dark:border-slate-950/20 p-2.5 rounded">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                MANUAL REPORTING
              </div>
              <div className="space-y-1 text-slate-500 dark:text-slate-400">
                <p>Lag: <span className="text-slate-600 dark:text-slate-350">3.5 hrs / Daily</span></p>
                <p>Fidelity: <span className="text-slate-600 dark:text-slate-350">Typo Vulnerable</span></p>
                <p>Delivery: <span className="text-slate-600 dark:text-slate-350">Stale Static Slides</span></p>
              </div>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary-light/5 border border-primary/10 dark:border-primary-light/10 p-2.5 rounded">
              <div className="text-primary dark:text-primary-light font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-ping-slow"></span>
                AUTOMATED STACK
              </div>
              <div className="space-y-1 text-slate-700 dark:text-slate-350">
                <p>Lag: <span className="text-primary dark:text-primary-light font-semibold">0.0s (Auto Cron)</span></p>
                <p>Fidelity: <span className="text-primary dark:text-primary-light font-semibold">Schema Enforced</span></p>
                <p>Delivery: <span className="text-primary dark:text-primary-light font-semibold">Interactive UI</span></p>
              </div>
            </div>
          </div>
        </div>
      );
      
    case 2:
      return (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5 font-semibold text-primary dark:text-primary-light">
              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-pulse"></span>
              NEURAL RAG VECTOR PIPELINE
            </span>
            <span>COSINE ACC: 99.2%</span>
          </div>
          
          <div className="my-6 h-36 flex items-center justify-between relative px-2">
            <div className="flex flex-col gap-1 items-center z-10 w-16">
              <div className="w-8 h-8 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 relative overflow-hidden">
                <Database size={14} className="text-primary dark:text-primary-light animate-pulse" />
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary-light/5 animate-pulse-slow"></div>
              </div>
              <span className="font-mono text-[6px] uppercase tracking-wider text-slate-450 dark:text-slate-500 text-center leading-tight">Contracts, Logs, Docs</span>
            </div>
            
            <div className="flex-grow mx-2 h-24 border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950/60 rounded relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:8px_8px] opacity-40"></div>
              
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#f1f5f9" className="dark:stroke-slate-900" strokeWidth="0.5" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#f1f5f9" className="dark:stroke-slate-900" strokeWidth="0.5" />
              
              <circle cx="20%" cy="30%" r="2" fill="#94a3b8" />
              <circle cx="35%" cy="75%" r="2" fill="#94a3b8" />
              <circle cx="80%" cy="25%" r="2.5" fill="#3b82f6" className="animate-pulse" />
              <circle cx="75%" cy="35%" r="2" fill="#3b82f6" />
              <circle cx="85%" cy="40%" r="2" fill="#60a5fa" />
              
              <path d="M 50,50 L 80,25" fill="none" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="3,3" className="animate-draw-path" />
              <circle cx="50%" cy="50%" r="3.5" fill="#3b82f6" className="animate-ping-slow" />
              <circle cx="50%" cy="50%" r="2" fill="#60a5fa" />
              
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary/10 dark:bg-primary-light/10 animate-laser-sweep"></div>
              
              <span className="absolute bottom-1 right-1 font-mono text-[5px] text-slate-400">VECTOR SPACE</span>
            </div>
            
            <div className="flex flex-col gap-1 items-center z-10 w-16">
              <div className="w-8 h-8 rounded-full bg-primary/5 dark:bg-primary-light/5 border border-primary/20 dark:border-primary-light/20 flex items-center justify-center text-primary dark:text-primary-light animate-float-node">
                <Brain size={14} />
              </div>
              <span className="font-mono text-[6px] uppercase tracking-wider text-primary dark:text-primary-light font-bold text-center leading-tight">GPT / LLM APEX</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-900 pt-4 font-mono text-[9px] text-left">
            <div className="bg-slate-50/50 dark:bg-slate-950/5 border border-slate-200/50 dark:border-slate-950/20 p-2.5 rounded">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                KEYWORD LOOKUP
              </div>
              <div className="space-y-1 text-slate-500 dark:text-slate-400">
                <p>Accuracy: <span className="text-slate-500 dark:text-slate-400">12% keyword drift</span></p>
                <p>Context: <span className="text-slate-500 dark:text-slate-400">Ignores semantic flow</span></p>
                <p>Reliability: <span className="text-slate-500 dark:text-slate-400">High Hallucination</span></p>
              </div>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary-light/5 border border-primary/10 dark:border-primary-light/10 p-2.5 rounded">
              <div className="text-primary dark:text-primary-light font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-ping-slow"></span>
                VECTOR EMBEDDING
              </div>
              <div className="space-y-1 text-slate-700 dark:text-slate-350">
                <p>Accuracy: <span className="text-primary dark:text-primary-light font-semibold">99.2% Cosine Sim</span></p>
                <p>Context: <span className="text-primary dark:text-primary-light font-semibold">Full semantic recall</span></p>
                <p>Reliability: <span className="text-primary dark:text-primary-light font-semibold">Fact-Grounded RAG</span></p>
              </div>
            </div>
          </div>
        </div>
      );
      
    case 3:
      return (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-455">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              PIPELINE FAULT TOLERANCE
            </span>
            <span>UPTIME: 99.99%</span>
          </div>
          
          <div className="my-5 h-36 flex flex-col justify-center gap-3.5 relative">
            <div className="flex items-center justify-between px-2 bg-red-50/10 dark:bg-red-950/5 border border-red-100/50 dark:border-red-950/20 rounded p-1.5">
              <span className="font-mono text-[7px] text-red-550 dark:text-red-400 font-bold w-12 uppercase leading-none">Brittle Path</span>
              <div className="flex items-center gap-1 text-[7px] font-mono text-slate-500 flex-grow justify-center">
                <div className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">INGEST</div>
                <span className="text-slate-400">➔</span>
                <div className="px-1.5 py-0.5 rounded bg-red-100/40 dark:bg-red-950/40 border border-red-500/20 text-red-650 dark:text-red-400 flex items-center gap-1 animate-pulse">
                  <XCircle size={8} /> TRANS (OOM)
                </div>
                <span className="text-slate-300">➔</span>
                <div className="px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100 text-slate-300 dark:text-slate-700 opacity-30">LOAD (STALE)</div>
              </div>
              <div className="w-14 text-right font-mono text-[6px] text-red-500 font-bold uppercase tracking-wider animate-pulse">
                CRITICAL LACK
              </div>
            </div>
            
            <div className="flex items-center justify-between px-2 bg-emerald-50/20 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-500/20 rounded p-1.5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-laser-sweep"></div>
              
              <span className="font-mono text-[7px] text-emerald-600 dark:text-emerald-450 font-bold w-12 uppercase leading-none">Robust Core</span>
              <div className="flex items-center gap-1 text-[7px] font-mono text-slate-700 dark:text-slate-300 flex-grow justify-center z-10">
                <div className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">INGEST</div>
                <span className="text-emerald-500">➔</span>
                <div className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
                  <Check size={8} className="text-emerald-555 dark:text-emerald-400 animate-pulse" /> COMPLETED
                </div>
                <span className="text-emerald-500">➔</span>
                <div className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">S3 / DB</div>
              </div>
              <div className="w-14 text-right font-mono text-[6px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center justify-end gap-1">
                <Check size={8} className="bg-emerald-500/20 rounded-full p-0.5 text-emerald-500" /> SECURE
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-900 pt-4 font-mono text-[9px] text-left">
            <div className="bg-slate-50/50 dark:bg-slate-950/5 border border-slate-200/50 dark:border-slate-950/20 p-2.5 rounded">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-455"></span>
                UNRESOLVED DRIFT
              </div>
              <div className="space-y-1 text-slate-500 dark:text-slate-400">
                <p>Data Lag: <span className="text-red-500 font-semibold">4.8 Hours (Stale)</span></p>
                <p>Recovery: <span className="text-red-500 font-semibold">Manual Operations</span></p>
                <p>Alerts: <span className="text-red-500 font-semibold">Silent Failures</span></p>
              </div>
            </div>
            
            <div className="bg-emerald-50/20 dark:bg-emerald-950/5 border border-emerald-100/50 dark:border-emerald-950/20 p-2.5 rounded">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping-slow"></span>
                CONTINUOUS OPS
              </div>
              <div className="space-y-1 text-slate-700 dark:text-slate-355">
                <p>Data Lag: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&lt;10s (Real-time)</span></p>
                <p>Recovery: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Auto Failover / Retry</span></p>
                <p>Alerts: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Slack Exception loops</span></p>
              </div>
            </div>
          </div>
        </div>
      );
      
    case 4:
      return (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span className="flex items-center gap-1.5 font-semibold text-primary dark:text-primary-light">
              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-pulse"></span>
              CORE ENTERPRISE DATA LAYERS
            </span>
            <span>STACK SCALE: 10X</span>
          </div>
          
          <div className="my-5 h-36 flex flex-col justify-center items-center gap-1.5 relative px-6">
            <div className="w-full max-w-[200px] h-6 rounded border border-primary/20 dark:border-primary-light/20 bg-primary/5 dark:bg-primary-light/5 flex items-center justify-between px-3 text-primary dark:text-primary-light font-mono text-[7px] font-bold animate-stack-slide-4 relative overflow-hidden shadow-sm">
              <span className="flex items-center gap-1"><Brain size={10} /> LAYER 4: AI & BI APEX</span>
              <span className="bg-primary/10 dark:bg-primary-light/10 text-[6px] px-1 rounded">RAG / LLM</span>
            </div>
            
            <div className="w-[90%] max-w-[200px] h-6 rounded border border-primary/10 dark:border-primary-light/10 bg-primary/5 dark:bg-primary-light/5 flex items-center justify-between px-3 text-primary/80 dark:text-primary-light/80 font-mono text-[7px] font-bold animate-stack-slide-3">
              <span className="flex items-center gap-1"><Activity size={10} /> LAYER 3: ETL & PIPES</span>
              <span className="bg-primary/10 dark:bg-primary-light/10 text-[6px] px-1 rounded">AIRFLOW</span>
            </div>
            
            <div className="w-[80%] max-w-[200px] h-6 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between px-3 text-slate-600 dark:text-slate-300 font-mono text-[7px] font-bold animate-stack-slide-2">
              <span className="flex items-center gap-1"><Database size={10} /> LAYER 2: CLOUD DB</span>
              <span className="bg-slate-100 dark:bg-slate-800 text-[6px] px-1 rounded">S3 / PGSQL</span>
            </div>
            
            <div className="w-[70%] max-w-[200px] h-6 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between px-3 text-slate-500 dark:text-slate-400 font-mono text-[7px] font-bold animate-stack-slide-1">
              <span className="flex items-center gap-1"><Shield size={10} /> LAYER 1: CLOUD BASE</span>
              <span className="bg-slate-100 dark:bg-slate-800 text-[6px] px-1 rounded">AWS SEC</span>
            </div>
            
            <div className="absolute left-[15%] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary-light to-emerald-500 pointer-events-none opacity-40">
              <div className="w-full h-4 bg-primary dark:bg-primary-light rounded absolute animate-pulse-conduit"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-900 pt-4 font-mono text-[9px] text-left">
            <div className="bg-slate-50/50 dark:bg-slate-950/5 border border-slate-200/50 dark:border-slate-950/20 p-2.5 rounded">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-455"></span>
                AD-HOC SILOS
              </div>
              <div className="space-y-1 text-slate-500 dark:text-slate-400">
                <p>Architecture: <span className="text-slate-600 dark:text-slate-350">Cluttered Scripts</span></p>
                <p>Data Trust: <span className="text-slate-655 dark:text-slate-350">High Disorganization</span></p>
                <p>Scaling Speed: <span className="text-slate-655 dark:text-slate-350">Restricted Growth</span></p>
              </div>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary-light/5 border border-primary/10 dark:border-primary-light/10 p-2.5 rounded">
              <div className="text-primary dark:text-primary-light font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light animate-ping-slow"></span>
                UNIFIED CORE
              </div>
              <div className="space-y-1 text-slate-705 dark:text-slate-300">
                <p>Architecture: <span className="text-primary dark:text-primary-light font-semibold">Structured stack</span></p>
                <p>Data Trust: <span className="text-primary dark:text-primary-light font-semibold">Single source of truth</span></p>
                <p>Scaling Speed: <span className="text-primary dark:text-primary-light font-semibold">10x scale capability</span></p>
              </div>
            </div>
          </div>
        </div>
      );
      
    default:
      return null;
  }
}

export default function ServicesApp() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0)
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
    <div className="min-h-screen flex flex-col bg-surface text-secondary dark:bg-dark-bg dark:text-dark-subtext transition-colors duration-300 overflow-x-hidden">
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
        <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-slate-250/20 dark:border-slate-850/20 py-20 mb-24 animate-fade-in-up">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12 text-left">
              <div className="lg:w-5/12 flex flex-col justify-between">
                <div>
                  <span className="font-display text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-[0.2em] mb-2 block animate-pulse">
                    Diagnostic Vectors
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    When to Call Me
                  </h2>
                  <p className="font-body text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mb-6">
                    Specific organizational and business bottlenecks where my engineering expertise delivers the highest return on investment and immediate analytical clarity.
                  </p>
                </div>
                
                {/* Dynamic Telemetry Console container */}
                <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 relative overflow-hidden group shadow-md select-none rounded-lg min-h-[360px] flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:10px_10px] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] pointer-events-none"></div>
                  
                  <ScenarioVisual index={activeScenarioIndex} />
                  
                  {/* Inline Infographic Animation Styles */}
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes laserSweep {
                      0%, 100% { top: 10%; opacity: 0.15; }
                      50% { top: 90%; opacity: 0.7; }
                    }
                    @keyframes dataFlow {
                      0% { left: -32px; }
                      100% { left: 100%; }
                    }
                    @keyframes spinSlow {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    @keyframes barRise {
                      from { height: 0; }
                    }
                    @keyframes stackSlide {
                      from { transform: translateY(12px); opacity: 0; }
                      to { transform: translateY(0); opacity: 1; }
                    }
                    @keyframes pulseConduit {
                      0% { top: 100%; opacity: 0; }
                      50% { opacity: 0.8; }
                      100% { top: 0%; opacity: 0; }
                    }
                    .animate-laser-sweep {
                      position: absolute;
                      animation: laserSweep 3s ease-in-out infinite;
                    }
                    .animate-data-flow-1 {
                      position: absolute;
                      animation: dataFlow 1.8s linear infinite;
                    }
                    .animate-data-flow-2 {
                      position: absolute;
                      animation: dataFlow 1.8s linear infinite;
                      animation-delay: 0.9s;
                    }
                    .animate-spin-slow {
                      animation: spinSlow 12s linear infinite;
                    }
                    .animate-float-node {
                      animation: stackSlide 1.8s ease-in-out infinite alternate;
                    }
                    .animate-bar-rise-1 {
                      animation: barRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    .animate-bar-rise-2 {
                      animation: barRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
                    }
                    .animate-bar-rise-3 {
                      animation: barRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                    }
                    .animate-stack-slide-1 {
                      animation: stackSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    .animate-stack-slide-2 {
                      animation: stackSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
                    }
                    .animate-stack-slide-3 {
                      animation: stackSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
                    }
                    .animate-stack-slide-4 {
                      animation: stackSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                    }
                    .animate-pulse-conduit {
                      animation: pulseConduit 2s linear infinite;
                    }
                    .animate-bounce-slow {
                      animation: stackSlide 1.5s ease-in-out infinite alternate;
                    }
                    .animate-ping-slow {
                      animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                    }
                    .animate-draw-path {
                      stroke-dasharray: 200;
                      stroke-dashoffset: 200;
                      animation: drawPath 1.5s ease-out forwards;
                    }
                    @keyframes drawPath {
                      to { stroke-dashoffset: 0; }
                    }
                  `}} />
                </div>
              </div>
              
              <div className="lg:w-7/12 flex flex-col gap-4">
                {scenarios.map((scenario, idx) => {
                  const isActive = activeScenarioIndex === idx;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveScenarioIndex(idx)}
                      className={`p-6 border transition-all duration-350 cursor-pointer rounded-lg flex gap-4 items-start text-left select-none group relative overflow-hidden ${
                        isActive
                          ? 'bg-white dark:bg-slate-900 border-primary dark:border-primary-light shadow-md border-l-4 border-l-primary dark:border-l-primary-light scale-[1.01]'
                          : 'bg-white/40 dark:bg-slate-900/20 border-slate-200/50 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900/50 border-l-4 border-l-slate-300 dark:border-l-slate-700 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className={`p-2.5 rounded-md transition-colors ${
                        isActive 
                          ? 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-primary-light'
                      }`}>
                        {scenario.icon}
                      </div>
                      <div className="flex-grow">
                        <p className={`font-display text-sm font-semibold transition-colors ${
                          isActive ? 'text-slate-900 dark:text-white' : 'text-slate-750 dark:text-slate-300'
                        }`}>
                          {scenario.text}
                        </p>
                        <span className={`font-mono text-[9px] uppercase tracking-wider mt-1.5 block transition-opacity duration-300 ${
                          isActive ? 'text-primary dark:text-primary-light opacity-100' : 'text-slate-400 dark:text-slate-550 opacity-0 group-hover:opacity-100'
                        }`}>
                          {isActive ? '● Inspecting telemetry' : '➔ click to analyze'}
                        </span>
                      </div>
                    </div>
                  );
                })}
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
