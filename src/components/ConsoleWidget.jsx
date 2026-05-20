import React, { useState, useEffect, useRef } from 'react'
import { Terminal, Database, Send, Play, Cpu, AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function ConsoleWidget() {
  const [activeTab, setActiveTab] = useState('sql') // 'sql', 'rag', 'logs'
  
  // SQL Terminal States
  const [selectedQuery, setSelectedQuery] = useState('')
  const [queryResult, setQueryResult] = useState(null)
  const [sqlRunning, setSqlRunning] = useState(false)

  // RAG Chatbot States
  const [ragInput, setRagInput] = useState('')
  const [ragMessages, setRagMessages] = useState([
    { role: 'system', text: 'RAG Model loaded. Ask me anything about Ayan Khan\'s career or capabilities.' }
  ])
  const [ragLoading, setRagLoading] = useState(false)
  const chatBottomRef = useRef(null)

  // System Live Logs States
  const [logs, setLogs] = useState([])
  const logsContainerRef = useRef(null)

  const sampleQueries = [
    {
      id: 'q1',
      title: 'DWH Migration Progress',
      sql: 'SELECT count(table_name) as total, sum(records) as rows_migrated\nFROM aws_redshift.migrations\nWHERE status = \'SUCCESS\';'
    },
    {
      id: 'q2',
      title: 'Current Pipeline Lag',
      sql: 'SELECT node_name, sync_lag_ms, etl_health_score\nFROM monitoring.table_lags\nORDER BY sync_lag_ms DESC;'
    },
    {
      id: 'q3',
      title: 'S3 Cost Optimization',
      sql: 'SELECT file_format, sum(s3_storage_gb) as size_gb, sum(cost_monthly_usd) as cost\nFROM infrastructure.storage_logs\nGROUP BY file_format;'
    }
  ]

  const queryOutputs = {
    q1: [
      { total: '742 Tables', rows_migrated: '439,812,055 Rows' },
      { note: 'Migration from third-party CRM to PostgreSQL + Redshift successfully verified.' }
    ],
    q2: [
      { node_name: 'mysql_to_opensearch_sync', sync_lag_ms: '0 ms', etl_health_score: '100%' },
      { node_name: 'ga4_clickstream_sync', sync_lag_ms: '15,400 ms (hourly)', etl_health_score: '98%' },
      { node_name: 'audit_log_transfer_node', sync_lag_ms: '120 ms', etl_health_score: '100%' }
    ],
    q3: [
      { file_format: 'Parquet (Optimized)', size_gb: '4,210 GB', cost: '$96.83' },
      { file_format: 'JSON / CSV (Legacy)', size_gb: '18,920 GB', cost: '$435.16' },
      { note: 'Transition to Parquet resulted in a 50% S3 capacity overhead reduction.' }
    ]
  }

  const sampleQuestions = [
    'What AI work did Ayan do at WIN Home Inspection?',
    'What is Ayan\'s core tech stack?',
    'Did he work on real-time alerting systems?'
  ]

  // Run SQL Query
  const runQuery = (qId, sqlStr) => {
    setSelectedQuery(sqlStr)
    setSqlRunning(true)
    setQueryResult(null)

    setTimeout(() => {
      setSqlRunning(false)
      setQueryResult(queryOutputs[qId] || [{ error: 'No data returned.' }])
      
      // Also post a sync log
      addLog(`[SQL] Executed query: SELECT ${qId} - SUCCESS`, 'info')
    }, 1200)
  }

  // RAG Submit Question
  const handleRagSubmit = (questionText) => {
    const text = questionText || ragInput
    if (!text.trim()) return

    setRagMessages(prev => [...prev, { role: 'user', text }])
    if (!questionText) setRagInput('')
    setRagLoading(true)

    // Simulate RAG Steps
    setTimeout(() => {
      setRagMessages(prev => [...prev, { 
        role: 'system', 
        text: 'Generating embeddings... Searching vector space: [Ayan_Khan_CV_Vector_Store]...',
        isStep: true
      }])
    }, 400)

    setTimeout(() => {
      setRagMessages(prev => [...prev, { 
        role: 'system', 
        text: 'Matching nodes: WIN_Home_Inspection (0.92), Akasa_Air (0.87), Delphi_Analytics (0.89). Retrieving context chunks...',
        isStep: true
      }])
    }, 900)

    setTimeout(() => {
      let responseText = ''
      const q = text.toLowerCase()
      if (q.includes('win') || q.includes('ai') || q.includes('chatbot') || q.includes('rag')) {
        responseText = 'Ayan Khan engineered and implemented an interactive AI chatbot at WIN Home Inspection using RAG (Retrieval-Augmented Generation) for inspection report users. He also configured AWS EC2 & Apache Airflow ETL schedulers, and migrated 700+ tables to Redshift.'
      } else if (q.includes('tech') || q.includes('stack') || q.includes('skill') || q.includes('python')) {
        responseText = 'Ayan\'s technical stack includes:\n• Languages: Python, SQL/PLSQL, Bash\n• Data Platforms: AWS (EC2, S3, RDS, Redshift, Bedrock, Glue), Docker, PostgreSQL, MySQL, Clickhouse, OpenSearch, BigQuery\n• Analytics/BI: Power BI, Grafana, Tableau, Superset, Redash\n• Automation: Apache Airflow, Selenium, GitHub Actions CI/CD.'
      } else if (q.includes('alert') || q.includes('lag') || q.includes('monitor') || q.includes('slack')) {
        responseText = 'Yes, Ayan designed a Multi-Level Table Lag Monitoring System using Grafana & Slack Alerts (Feb - Mar 2024). It tracks data freshness, ETL health, and anomalies across critical tables with real-time Slack alerts for thresholds, mismatches, and 3-sigma anomalies, streamlining debugging and reducing incident resolution times.'
      } else {
        responseText = 'Ayan Khan is a Senior Data Analyst & Engineer with 4+ years of startup experience in e-commerce, aviation, ed-tech, and real estate. Expert in building automated ETL pipelines (Airflow, Glue), designing enterprise dashboards (Power BI, Grafana, Tableau), and transitioning legacy infrastructures into AI-driven, highly optimized cloud architectures (AWS, Docker, PostgreSQL).'
      }

      setRagMessages(prev => {
        // Filter out intermediate steps for a clean conversation, or keep them for realism
        return [...prev, { role: 'assistant', text: responseText }]
      })
      setRagLoading(false)
      addLog(`[RAG] Chatbot generated response for query - "${text.substring(0, 20)}..."`, 'info')
    }, 1800)
  }

  // System Live Logs Stream Simulation
  const addLog = (message, type = 'info') => {
    const time = new Date().toLocaleTimeString()
    setLogs(prev => [...prev.slice(-30), { time, message, type }]) // Keep last 30 logs
  }

  useEffect(() => {
    // Scroll chat to bottom
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [ragMessages, ragLoading])

  useEffect(() => {
    // Scroll logs to bottom
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight
    }
  }, [logs])

  // Background pipeline logs simulator
  useEffect(() => {
    const pipelineMessages = [
      { msg: 'Sync node [mysql_to_opensearch] active. Target lag: 0ms.', type: 'success' },
      { msg: 'Checking OMS tables synchronization status...', type: 'info' },
      { msg: 'AWS Glue job [ga4_clickstream_sync] execution started.', type: 'info' },
      { msg: 'Compressed S3 table backup archive created. Storage freed: 34.2 GB.', type: 'success' },
      { msg: 'RAG Model vector refresh: 100% indexed.', type: 'success' },
      { msg: 'Apache Airflow DAG scheduler tick. Active DAGs: 14.', type: 'info' },
      { msg: 'AWS Lambda backend trigger: deployment triggered successfully.', type: 'success' },
      { msg: 'ETL Audit Node alert check: 0 discrepancies found.', type: 'success' },
    ]

    // Set initial logs
    setLogs([
      { time: new Date().toLocaleTimeString(), message: 'System initialization: analytical console active.', type: 'success' },
      { time: new Date().toLocaleTimeString(), message: 'Connection established to aws_redshift.ayan_nomi_dwh.', type: 'success' }
    ])

    const interval = setInterval(() => {
      const randomLog = pipelineMessages[Math.floor(Math.random() * pipelineMessages.length)]
      addLog(randomLog.msg, randomLog.type)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50" id="analytical-console">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-12">
          <span className="font-body text-xs text-primary dark:text-primary-light uppercase tracking-widest font-semibold block mb-2">Live Demonstration</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Interactive Analytical Console</h2>
          <p className="font-body text-slate-500 dark:text-slate-400 mt-2 max-w-2xl text-sm leading-relaxed">
            Test Ayan's operational expertise in real-time. Execute optimized SQL queries, interrogate our semantic RAG search index, or inspect background pipeline status.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar: Controls & Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* System Scorecard */}
            <div className="p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-900 pb-3 mb-4">
                <Cpu size={16} className="text-primary dark:text-primary-light" />
                <span className="text-xs uppercase font-bold text-slate-700 dark:text-slate-300 tracking-wider">Console Health</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Active Node</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-0.5 truncate">DWH-REDSHIFT-01</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Avg Query Lag</div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-500 mt-0.5">0.12 ms</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">ETL Pipelines</div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-500 mt-0.5">14 Active</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">RAG Index Size</div>
                  <div className="text-xs font-bold text-primary dark:text-primary-light mt-0.5">152 Embeddings</div>
                </div>
              </div>
            </div>

            {/* Mode Selectors */}
            <div className="flex flex-col border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2">
              <button
                onClick={() => setActiveTab('sql')}
                className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider font-bold transition-all text-left ${
                  activeTab === 'sql'
                    ? 'bg-primary text-white dark:bg-primary-light dark:text-slate-950'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <Database size={14} />
                SQL Query Sandbox
              </button>
              <button
                onClick={() => setActiveTab('rag')}
                className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider font-bold transition-all text-left ${
                  activeTab === 'rag'
                    ? 'bg-primary text-white dark:bg-primary-light dark:text-slate-950'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <Terminal size={14} />
                Vector RAG Search
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-wider font-bold transition-all text-left ${
                  activeTab === 'logs'
                    ? 'bg-primary text-white dark:bg-primary-light dark:text-slate-950'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <AlertTriangle size={14} />
                Live Pipeline Logs
              </button>
            </div>
          </div>

          {/* Right Console Area */}
          <div className="lg:col-span-8 border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 shadow-lg min-h-[440px] flex flex-col font-mono text-[11px] leading-relaxed">
            {/* Console Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                {activeTab === 'sql' ? 'dwh_query_sandbox.sql' : activeTab === 'rag' ? 'semantic_rag_session.py' : 'airflow_etl_daemon.log'}
              </span>
              <div className="w-12"></div>
            </div>

            {/* TAB CONTENT: SQL Query Sandbox */}
            {activeTab === 'sql' && (
              <div className="flex-grow flex flex-col p-4 gap-4">
                <div className="text-slate-400 border-b border-slate-800 pb-3">
                  <p className="font-semibold text-slate-200 uppercase text-[10px] tracking-wider mb-2">Select a Query to Execute:</p>
                  <div className="flex flex-wrap gap-2">
                    {sampleQueries.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => runQuery(item.id, item.sql)}
                        className="px-3 py-1.5 border border-slate-800 bg-slate-900 hover:border-primary/50 text-[10px] text-slate-300 font-semibold hover:text-white transition-all rounded-none"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SQL Shell */}
                <div className="flex-grow flex flex-col gap-2">
                  <div className="text-slate-400">
                    <span className="text-emerald-500 font-bold">dwh_user@ayan-nomi-redshift:~$</span> run query
                  </div>
                  <pre className="p-3 bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px] whitespace-pre-wrap overflow-x-auto min-h-[80px]">
                    {selectedQuery || '-- Select one of the sample templates above to auto-populate SQL shell.'}
                  </pre>
                  
                  {sqlRunning && (
                    <div className="flex items-center gap-2 text-primary dark:text-primary-light animate-pulse mt-2">
                      <Cpu size={12} className="animate-spin" />
                      <span>Fetching nodes... Allocating memory... Running aggregation logs...</span>
                    </div>
                  )}

                  {/* Result Table */}
                  {queryResult && (
                    <div className="mt-2 space-y-2">
                      <div className="text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1">Query Result Output:</div>
                      <div className="overflow-x-auto border border-slate-800 bg-slate-900">
                        <table className="w-full text-left font-mono text-[10px]">
                          <thead>
                            <tr className="bg-slate-800 text-slate-300 border-b border-slate-700">
                              {Object.keys(queryResult[0]).map((key) => (
                                <th key={key} className="px-3 py-2 uppercase font-bold tracking-wider">{key}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {queryResult.map((row, idx) => (
                              <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/40 text-slate-100">
                                {Object.values(row).map((val, cellIdx) => (
                                  <td key={cellIdx} className="px-3 py-2">{val}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT: RAG Semantic Chatbot */}
            {activeTab === 'rag' && (
              <div className="flex-grow flex flex-col p-4 justify-between h-[360px]">
                {/* Chat Log */}
                <div className="flex-grow overflow-y-auto space-y-3 pr-2 mb-4 scrollbar">
                  {ragMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col ${
                        msg.role === 'user' 
                          ? 'items-end' 
                          : msg.isStep 
                            ? 'items-start pl-2 text-slate-500 border-l border-slate-800 font-bold' 
                            : 'items-start'
                      }`}
                    >
                      {msg.role !== 'system' && !msg.isStep && (
                        <span className={`text-[8px] uppercase tracking-widest font-semibold pb-1 ${
                          msg.role === 'user' ? 'text-primary dark:text-primary-light' : 'text-emerald-500'
                        }`}>
                          {msg.role === 'user' ? 'USER_QUERY' : 'VECTOR_RAG_LLM'}
                        </span>
                      )}
                      <div className={`p-2.5 whitespace-pre-wrap max-w-[85%] ${
                        msg.role === 'user' 
                          ? 'bg-primary/20 border border-primary/30 text-slate-100' 
                          : msg.isStep 
                            ? 'text-slate-500 italic p-0 text-[10px]' 
                            : 'bg-slate-900 border border-slate-800 text-slate-300'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {ragLoading && (
                    <div className="flex items-center gap-2 text-primary dark:text-primary-light animate-pulse pl-2 font-bold text-[10px]">
                      <Cpu size={12} className="animate-spin" />
                      <span>Vector LLM model processing context embeddings...</span>
                    </div>
                  )}
                  <div ref={chatBottomRef}></div>
                </div>

                {/* Pre-populated Questions */}
                <div className="mb-3 border-t border-slate-800 pt-3">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">Suggested Prompt:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {sampleQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleRagSubmit(q)}
                        disabled={ragLoading}
                        className="px-2.5 py-1 border border-slate-800 bg-slate-900 hover:border-emerald-500/50 text-[10px] text-slate-400 hover:text-slate-100 transition-all rounded-none"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleRagSubmit()
                  }} 
                  className="flex gap-2 border-t border-slate-800 pt-3"
                >
                  <input
                    type="text"
                    value={ragInput}
                    onChange={(e) => setRagInput(e.target.value)}
                    placeholder="Ask vector chatbot e.g., 'What metrics did he optimize?'..."
                    className="flex-grow bg-slate-900 border border-slate-800 px-3 py-2 focus:border-primary/50 text-slate-200 outline-none placeholder-slate-600 font-mono text-[10px]"
                    disabled={ragLoading}
                  />
                  <button
                    type="submit"
                    disabled={ragLoading}
                    className="p-2 border border-slate-800 bg-slate-900 hover:border-emerald-500/50 text-slate-300 hover:text-white"
                  >
                    <Send size={12} />
                  </button>
                </form>
              </div>
            )}

            {/* TAB CONTENT: Live Pipeline Logs Stream */}
            {activeTab === 'logs' && (
              <div className="flex-grow flex flex-col p-4 justify-between h-[360px]">
                {/* Logs Stream Box */}
                <div 
                  ref={logsContainerRef}
                  className="flex-grow overflow-y-auto space-y-2 pr-2 border border-slate-800 bg-slate-900/60 p-3 scrollbar"
                >
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-slate-600 shrink-0">[{log.time}]</span>
                      <span className={`${
                        log.type === 'success' 
                          ? 'text-emerald-500' 
                          : log.type === 'alert' 
                            ? 'text-amber-500 font-bold' 
                            : 'text-slate-300'
                      }`}>
                        {log.message}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-3 flex justify-between items-center">
                  <span className="flex items-center gap-1.5 animate-pulse text-emerald-500">
                    <CheckCircle2 size={10} /> Active pipeline telemetry active
                  </span>
                  <span>Press select mode tabs on left to toggle views</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
