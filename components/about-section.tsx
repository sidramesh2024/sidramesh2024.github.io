'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Trophy, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counters, setCounters] = useState({ experience: 0, savings: 0, reduction: 0 })

  useEffect(() => {
    if (isInView) {
      const animateCounter = (key: keyof typeof counters, target: number, duration: number = 2000) => {
        let start = 0
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            start = target
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }))
        }, 16)
      }

      animateCounter('experience', 8)
      animateCounter('savings', 300)
      animateCounter('reduction', 95) // Representing 95% reduction (3 weeks to 2 hours)
    }
  }, [isInView])

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pro_pic.jpg"
                  alt="Sidharth Ramesh - Lead Data Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            

          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 tech-gradient rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                I'm an accomplished <strong className="text-blue-600">Lead Data Engineer</strong> with over{' '}
                <span className="text-blue-600 font-semibold">{counters.experience}+ years</span> of expertise in creating and maintaining data and MLOps pipeline architecture from the ground up.
              </p>

              <p className="text-sm sm:text-base">
                My passion lies in <strong>Gen AI Technologies</strong> and building intelligent, scalable solutions that drive business innovation. I've successfully delivered automation frameworks that resulted in{' '}
                <span className="text-green-600 font-semibold">${counters.savings}K annual savings</span> and reduced manual workloads by{' '}
                <span className="text-green-600 font-semibold">{counters.reduction}%</span>.
              </p>

              <p className="text-sm sm:text-base">
                With dual Master's degrees in Computer Science (Georgia Tech, 2024) and Mechanical Engineering (Rose-Hulman, 2016), I bring a unique blend of theoretical knowledge and practical expertise to every project.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 sm:pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Location</div>
                  <div className="text-gray-600 text-sm">Edison, New Jersey</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Experience</div>
                  <div className="text-gray-600 text-sm">{counters.experience}+ Years</div>
                </div>
              </div>
            </div>

            {/* Core Specializations */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Gen AI & LLMs',
                  'MLOps Pipelines',
                  'Data Engineering',
                  'Cloud Architecture',
                  'Business Intelligence',
                  'Automation'
                ].map((spec) => (
                  <span key={spec} className="skill-badge text-xs sm:text-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
