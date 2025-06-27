
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
    <section className="relative min-h-screen flex items-center justify-center tech-pattern overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Sidharth Ramesh</span>
              <span className="block text-blue-600 mt-2">Lead Data Engineer</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
              AI Specialist building intelligent, scalable data solutions that drive business innovation
            </h2>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">$300K</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToNext}
              size="lg"
              className="tech-gradient text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <a
                href="https://www.linkedin.com/in/sidharthramesh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
          >
            {['Gen AI', 'AWS', 'Azure', 'MLOps', 'Data Pipelines', 'Spark', 'Snowflake'].map((tech, index) => (
              <span
                key={tech}
                className="skill-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-gray-500 hover:text-blue-600 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-blue-600" />
        </button>
      </motion.div>
    </section>
  )
}
