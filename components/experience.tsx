
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Lead Data Engineer',
      company: 'Tiger Analytics',
      period: 'August 2021 - Present',
      location: 'Remote',
      achievements: [
        'Led design and implementation of cloud-agnostic data platforms serving 100+ million records daily',
        'Architected MLOps pipelines reducing model deployment time by 75% using automated CI/CD practices',
        'Developed Agentic AI applications that improved data processing efficiency by 40% across multiple client projects'
      ]
    },
    {
      title: 'Senior Data Engineer',
      company: 'Canada Clean Fuels Inc.',
      period: '2020 - 2021',
      location: 'Toronto, Canada',
      achievements: [
        'Built real-time data processing systems for renewable energy optimization using Apache Spark and Python',
        'Implemented data quality frameworks ensuring 99.9% accuracy in critical fuel supply chain analytics',
        'Designed scalable ETL pipelines processing terabytes of environmental and operational data'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'goeasy Ltd.',
      period: '2019 - 2020',
      location: 'Toronto, Canada',
      achievements: [
        'Developed credit risk assessment models using advanced machine learning techniques',
        'Optimized data warehouse operations reducing query response time by 60%',
        'Created automated reporting systems serving executive dashboards and regulatory compliance'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'Karsun Solutions',
      period: '2017 - 2019',
      location: 'Virginia, USA',
      achievements: [
        'Built data integration solutions for federal clients handling sensitive government datasets',
        'Implemented secure data pipelines compliant with federal security standards and regulations',
        'Collaborated with cross-functional teams to deliver mission-critical analytics platforms'
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Heading */}
          <motion.h2 variants={itemVariants} className="numbered-heading before:content-['02.']">
            Professional Experience
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan/30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-cyan rounded-full border-4 border-navy hidden md:block" />
                  
                  {/* Experience Card */}
                  <div className="card group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="text-cyan" size={24} />
                        <div>
                          <h3 className="heading-sm text-lightest-slate group-hover:text-cyan transition-colors">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg text-cyan font-medium">
                            {exp.company}
                          </h4>
                        </div>
                      </div>
                      <div className="text-right text-sm font-mono">
                        <div className="text-slate">{exp.period}</div>
                        <div className="text-cyan">{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <span className="text-cyan mt-2 flex-shrink-0">▹</span>
                          <span className="text-slate leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
