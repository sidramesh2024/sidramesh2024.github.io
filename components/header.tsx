
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-cyan font-mono text-xl font-bold"
          >
            SR
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {[
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Skills', id: 'skills' },
              { name: 'Education', id: 'education' },
            ].map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-slate hover:text-cyan transition-colors duration-200 font-mono text-sm"
              >
                <span className="text-cyan">0{index + 1}.</span> {item.name}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('connect')}
              className="btn-primary"
            >
              Connect
            </button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
