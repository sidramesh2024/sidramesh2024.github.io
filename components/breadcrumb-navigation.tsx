'use client'

import { useState, useEffect } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import type { BreadcrumbItem } from '@/components/ui/breadcrumb'

const sections = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'education', label: 'Education', href: '#education' },
]

export function BreadcrumbNavigation() {
  const [currentSection, setCurrentSection] = useState<string>('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Show breadcrumb after scrolling past hero section
      setIsVisible(scrollPosition > 200)

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setCurrentSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const currentSectionData = sections.find(s => s.id === currentSection)
    
    if (!currentSectionData) {
      return [
        { label: 'Home', href: '#hero', isActive: false }
      ]
    }

    if (currentSection === 'hero') {
      return [
        { label: 'Home', isActive: true }
      ]
    }

    return [
      { label: 'Home', href: '#hero', isActive: false },
      { label: currentSectionData.label, isActive: true }
    ]
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* Desktop Breadcrumb */}
      <div 
        className="fixed top-20 left-4 z-40 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 transition-all duration-300 hover:shadow-xl hidden lg:block breadcrumb-container"
        role="navigation"
        aria-label="Section navigation"
      >
        <Breadcrumb 
          items={getBreadcrumbItems()} 
          className="text-xs sm:text-sm"
        />
      </div>
      
      {/* Mobile Breadcrumb - Bottom of screen */}
      <div 
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 px-4 py-2 transition-all duration-300 lg:hidden breadcrumb-container"
        role="navigation"
        aria-label="Section navigation"
      >
        <Breadcrumb 
          items={getBreadcrumbItems()} 
          className="text-xs"
        />
      </div>
    </>
  )
} 