'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center tech-pattern overflow-hidden pt-16"
      aria-label="Hero section - Sidharth Ramesh introduction"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" aria-hidden="true" />
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container-width relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Main Content */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Sidharth Ramesh</span>
              <span className="block text-blue-600 mt-1 sm:mt-2">Lead Data Engineer</span>
            </h1>
          </motion.header>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto px-4">
              AI Specialist building intelligent, scalable data solutions that drive business innovation
            </h2>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 text-center"
            role="list"
            aria-label="Key achievements and statistics"
          >
            <div className="flex flex-col items-center" role="listitem">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">8+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
            </div>

            <div className="flex flex-col items-center" role="listitem">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">7</div>
              <div className="text-xs sm:text-sm text-gray-600">Certifications</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            aria-label="Call to action buttons"
          >
            <Button
              onClick={scrollToNext}
              size="lg"
              className="tech-gradient text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group w-full sm:w-auto"
              aria-label="Scroll to view my work and portfolio"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 w-full sm:w-auto"
            >
              <a
                href="https://www.linkedin.com/in/sidharthramesh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Sidharth Ramesh on LinkedIn (opens in new tab)"
              >
                Connect on LinkedIn
                <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </motion.nav>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto px-4"
            role="list"
            aria-label="Technical specializations and skills"
          >
            {['Gen AI', 'AWS', 'Azure', 'MLOps', 'Data Pipelines', 'Spark', 'Snowflake'].map((tech, index) => (
              <span
                key={tech}
                className="skill-badge text-xs sm:text-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-gray-500 hover:text-blue-600 transition-colors group"
          aria-label="Scroll down to explore more content"
        >
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce group-hover:text-blue-600" aria-hidden="true" />
        </button>
      </motion.div>
    </section>
  )
}
