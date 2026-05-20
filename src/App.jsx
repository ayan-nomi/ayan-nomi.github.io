import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import WorkedWith from './components/WorkedWith.jsx'
import ConsoleWidget from './components/ConsoleWidget.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-secondary dark:bg-dark-bg dark:text-dark-subtext transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow pt-16">
        {/* Intro Tag & Header */}
        <Hero />

        {/* Dynamic Achievements Counters */}
        <Metrics />

        {/* Professional Footprint (Collaborations & Links) */}
        <WorkedWith />

        {/* Real-time Interactive SQL Terminal & Vector RAG Chatbot */}
        <ConsoleWidget />

        {/* Capabilities Clusters */}
        <TechStack />

        {/* Case Studies Gallery */}
        <Projects />

        {/* Tenure Progression Timeline */}
        <Experience />

        {/* Contact Form Submission Log Gateway */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  )
}
