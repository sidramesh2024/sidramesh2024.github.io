'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Georgia Institute of Technology',
      program: 'Online Master of Science in Computer Science (OMSCS)',
      period: 'Graduated Fall 2024',
      location: 'Atlanta, GA',
      highlights: [
        'Specialized in Machine Learning and Artificial Intelligence',
        'Completed coursework in Advanced Algorithms, Computer Vision, and Distributed Systems',
        'Maintained academic excellence while working full-time as a Lead Data Engineer'
      ],
      gpa: 'Distinguished Academic Performance'
    },
    {
      degree: 'Master of Science in Mechanical Engineering',
      school: 'Rose-Hulman Institute of Technology',
      program: 'Graduate Program in Mechanical Engineering',
      period: 'Graduated February 2016',
      location: 'Terre Haute, IN',
      highlights: [
        'Focused on Computational Fluid Dynamics and Engineering Mathematics',
        'Conducted research in advanced materials and thermodynamics',
        'Developed strong analytical and problem-solving foundations'
      ],
      gpa: 'Summa Cum Laude'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Heading */}
          <motion.h2 variants={itemVariants} className="numbered-heading before:content-['04.']">
            Education
          </motion.h2>

          {/* Education Cards */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-cyan flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-lightest-slate group-hover:text-cyan transition-colors mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base sm:text-lg text-cyan font-medium mb-1">
                        {edu.school}
                      </h4>
                      <p className="text-slate text-xs sm:text-sm">
                        {edu.program}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm space-y-1 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-cyan" size={16} />
                      <span className="font-mono text-slate">{edu.period}</span>
                    </div>
                    <span className="text-cyan font-mono">{edu.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-3">
                        <span className="text-cyan mt-1.5 sm:mt-2 flex-shrink-0">▹</span>
                        <span className="text-xs sm:text-sm text-slate leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievement Badge */}
                  <div className="flex items-center space-x-2 pt-3 sm:pt-4 border-t border-cyan/20">
                    <Award className="text-cyan" size={16} />
                    <span className="text-cyan text-xs sm:text-sm font-medium">{edu.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Journey Summary */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <div className="card text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-lightest-slate mb-4 sm:mb-6">Academic Excellence</h3>
              <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-slate">
                My educational journey spans two prestigious institutions and combines 
                <span className="text-cyan"> computational theory with engineering fundamentals</span>. 
                The unique intersection of Computer Science and Mechanical Engineering provides me 
                with a distinctive perspective on data challenges, enabling innovative solutions 
                that bridge theoretical knowledge with practical implementation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="px-3 sm:px-4 py-2 bg-cyan/10 border border-cyan/20 rounded text-cyan text-xs sm:text-sm">
                  Dual Master's Degrees
                </div>
                <div className="px-3 sm:px-4 py-2 bg-cyan/10 border border-cyan/20 rounded text-cyan text-xs sm:text-sm">
                  9+ Years Academic Excellence
                </div>
                <div className="px-3 sm:px-4 py-2 bg-cyan/10 border border-cyan/20 rounded text-cyan text-xs sm:text-sm">
                  OMSCS Graduate
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
