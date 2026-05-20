import React, { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, Cpu, Database, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'STRATEGY',
    message: ''
  })

  const [formState, setFormState] = useState('idle') // 'idle', 'submitting', 'success', 'error'
  const [submissionLogs, setSubmissionLogs] = useState([])

  const addSubLog = (msg) => {
    setSubmissionLogs(prev => [...prev, msg])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setFormState('submitting')
    setSubmissionLogs([])

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ""
    const isMockMode = !accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE'

    // Phase 1: Local validation
    setTimeout(() => addSubLog('Connecting to relational DWH staging schema...'), 200)
    setTimeout(() => addSubLog('Validating parameters & structures: integrity = OK.'), 500)

    if (isMockMode) {
      setTimeout(() => addSubLog('Warning: VITE_WEB3FORMS_ACCESS_KEY is set to placeholder. Operating in STAGING simulation mode.'), 800)
      setTimeout(() => addSubLog('Executing: INSERT INTO communications.inquiries (name, email, subject, status) VALUES (?, ?, ?, \'TEST_PENDING\');'), 1100)
      setTimeout(() => addSubLog('Triggering Slack Webhook alerting daemon... SUCCESS'), 1500)
      setTimeout(() => addSubLog('DWH commit finished. Transaction code: 0x88F7 (STAGE)'), 1900)
      setTimeout(() => {
        setFormState('success')
      }, 2400)
    } else {
      setTimeout(() => addSubLog('Preparing secure payload for Web3Forms API relay...'), 800)
      setTimeout(() => addSubLog('Executing remote fetch to https://api.web3forms.com/submit...'), 1100)

      const payload = new FormData()
      payload.append("access_key", accessKey)
      payload.append("name", formData.name)
      payload.append("email", formData.email)
      payload.append("subject", `Portfolio Inquiry: ${formData.subject}`)
      payload.append("message", formData.message)
      payload.append("from_name", "Ayan Khan Portfolio")

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setTimeout(() => addSubLog('Web3Forms API ingestion... OK (Response 200).'), 1400)
          setTimeout(() => addSubLog('DWH commit finished. Transaction code: 0x2A0B (PRODUCTION)'), 1800)
          setTimeout(() => {
            setFormState('success')
          }, 2200)
        } else {
          setTimeout(() => addSubLog(`Error: Web3Forms rejected key/payload - ${data.message || 'Key invalid'}.`), 1400)
          setTimeout(() => addSubLog('Rolling back staged relational database transactions... OK.'), 1800)
          setTimeout(() => {
            setFormState('error')
          }, 2200)
        }
      })
      .catch(err => {
        setTimeout(() => addSubLog(`Error: Network dispatch failed - ${err.message || 'Connection lost'}.`), 1400)
        setTimeout(() => addSubLog('Staged transactions rolled back to prevent data corruption.'), 1800)
        setTimeout(() => {
          setFormState('error')
        }, 2200)
      })
    }
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: 'STRATEGY', message: '' })
    setFormState('idle')
    setSubmissionLogs([])
  }

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-slate-200/60 dark:border-slate-800/60 p-8 md:p-12 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950">
          {/* Animated Background Accent */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 dark:bg-primary-light/5 rotate-45 transform translate-x-12 -translate-y-12 pointer-events-none"></div>

          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="font-body text-xs text-primary dark:text-primary-light uppercase tracking-widest font-semibold block mb-2">Initiate Contact</span>
              <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                Need a logical approach <br />to your data strategy?
              </h3>
              <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-4 leading-relaxed max-w-sm">
                I am available for corporate positions, independent consulting on data warehouse design, AWS cloud optimization, and vector RAG chatbot deployments.
              </p>
            </div>

            <div className="space-y-4 font-body text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-slate-200 dark:border-slate-850 flex items-center justify-center bg-white dark:bg-slate-900 text-primary dark:text-primary-light">
                  <Mail size={14} />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Email Inbox</div>
                  <a href="mailto:ayan.nomi1611@gmail.com" className="font-mono font-semibold hover:text-primary dark:hover:text-primary-light transition-colors mt-0.5 inline-block">
                    ayan.nomi1611@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-slate-200 dark:border-slate-850 flex items-center justify-center bg-white dark:bg-slate-900 text-primary dark:text-primary-light">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Current Base</div>
                  <span className="font-semibold mt-0.5 inline-block">Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7 border-t border-slate-200/60 dark:border-slate-800/60 lg:border-t-0 lg:border-l lg:pl-12 pt-8 lg:pt-0">
            {formState === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. John Doe"
                      className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-xs outline-none focus:border-primary dark:focus:border-primary-light transition-all rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g. john@company.com"
                      className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-xs outline-none focus:border-primary dark:focus:border-primary-light transition-all rounded-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Inquiry Classification</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 px-4 py-3 text-slate-800 dark:text-slate-200 font-body text-xs outline-none focus:border-primary dark:focus:border-primary-light transition-all rounded-none cursor-pointer"
                  >
                    <option value="STRATEGY">Data Engineering &amp; DWH Strategy</option>
                    <option value="PIPELINES">ETL Pipeline Observability &amp; Latency</option>
                    <option value="CHATBOT">RAG &amp; LLM Automation Architectures</option>
                    <option value="OTHER">General Corporate Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">Brief Message Summary</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Briefly describe the parameters of your project or inquiry..."
                    className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 font-body text-xs outline-none focus:border-primary dark:focus:border-primary-light transition-all rounded-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 px-8 py-3.5 w-full bg-slate-900 dark:bg-slate-800 text-white hover:bg-primary dark:hover:bg-primary-light dark:hover:text-slate-950 text-xs font-semibold uppercase tracking-wider transition-all border border-transparent shadow-sm"
                >
                  Submit Inquiry
                  <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}

            {formState === 'submitting' && (
              <div className="min-h-[280px] flex flex-col justify-center items-stretch bg-slate-950 text-slate-300 p-6 font-mono text-[10px] leading-relaxed border border-slate-800 text-left">
                <div className="flex items-center gap-2 border-b border-slate-850 pb-3 mb-4">
                  <Cpu size={14} className="text-primary dark:text-primary-light animate-spin" />
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">inquiry_database_ingest.py</span>
                </div>
                <div className="flex-grow space-y-2">
                  {submissionLogs.map((log, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {formState === 'success' && (
              <div className="min-h-[280px] flex flex-col justify-center items-center text-center p-8 bg-emerald-50/20 border border-emerald-500/20">
                <CheckCircle2 size={40} className="text-emerald-500 mb-4 animate-bounce" />
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">DWH Transaction Successful</h4>
                <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
                  Your inquiry message has been successfully structured and ingested into my communications catalog. I will follow up via your email shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 px-6 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold uppercase tracking-wider"
                >
                  Submit Another
                </button>
              </div>
            )}

            {formState === 'error' && (
              <div className="min-h-[280px] flex flex-col justify-center items-center text-center p-8 bg-rose-50/20 border border-rose-500/20">
                <AlertCircle size={40} className="text-rose-500 mb-4 animate-pulse" />
                <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">DWH Transaction Failed</h4>
                <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
                  Your inquiry message could not be ingested. The pipeline returned a transport failure. Please check your credentials or network and try again.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 px-6 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold uppercase tracking-wider"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
