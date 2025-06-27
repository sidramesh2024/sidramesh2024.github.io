
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react'

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, Georgia, USA",
    year: "2024",
    status: "completed",
    type: "Graduate",
    color: "from-blue-500 to-blue-600",
    description: "Advanced coursework in machine learning, data science, and artificial intelligence with focus on practical applications in enterprise environments.",
    highlights: [
      "Specialized in Machine Learning and AI",
      "Advanced Data Science Coursework",
      "Enterprise Software Development",
      "Research in Gen AI Applications"
    ],
    relevance: "Directly applicable to current Gen AI and MLOps expertise"
  },
  {
    degree: "Master of Science in Mechanical Engineering",
    institution: "Rose-Hulman Institute of Technology",
    location: "Terre Haute, Indiana, USA",
    year: "2016",
    status: "completed",
    type: "Graduate",
    specialization: "Finite Element Analysis",
    color: "from-green-500 to-green-600",
    description: "Focused on advanced engineering analysis, computational methods, and applied mathematics with thesis research in Finite Element Analysis.",
    highlights: [
      "Thesis: Finite Element Analysis",
      "Computational Methods",
      "Advanced Mathematical Modeling",
      "Research Methodology"
    ],
    relevance: "Strong analytical foundation supporting data engineering expertise"
  },
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    year: "2011",
    status: "completed",
    type: "Undergraduate",
    color: "from-purple-500 to-purple-600",
    description: "Comprehensive engineering education with strong emphasis on problem-solving, analytical thinking, and technical fundamentals.",
    highlights: [
      "Engineering Fundamentals",
      "Problem-Solving Methodologies",
      "Technical Analysis",
      "Project Management"
    ],
    relevance: "Foundation for systematic approach to complex technical challenges"
  }
]

const educationStats = [
  {
    icon: GraduationCap,
    value: "3",
    label: "Degrees",
    description: "Advanced qualifications"
  },
  {
    icon: Award,
    value: "2",
    label: "Master's",
    description: "Graduate degrees"
  },
  {
    icon: BookOpen,
    value: "13",
    label: "Years",
    description: "Academic journey"
  }
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational Background
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Strong academic foundation combining computer science expertise with engineering discipline
          </p>
          <div className="w-20 h-1 tech-gradient rounded-full mx-auto"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {educationStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-100 text-center card-hover">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg hidden md:block"></div>

                {/* Education Card */}
                <div className="md:ml-20 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${edu.color} p-6 text-white relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                            {edu.type}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-blue-100 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.year}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <div className="flex items-center text-blue-100 mb-2">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-blue-100">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      {edu.specialization && (
                        <div className="mt-2 text-sm text-blue-100">
                          <strong>Specialization:</strong> {edu.specialization}
                        </div>
                      )}
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <div key={hlIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Relevance */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <h4 className="font-semibold text-blue-900 mb-2">Career Relevance</h4>
                      <p className="text-blue-800 text-sm leading-relaxed">{edu.relevance}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Academic Foundation
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto text-center leading-relaxed">
              My dual Master's degrees in Computer Science and Mechanical Engineering provide a unique blend of 
              computational expertise and analytical rigor, directly supporting my success in data engineering and AI applications.
            </p>
            
            {/* Key Skills from Education */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Computational Methods</h4>
                <p className="text-sm text-gray-600">Advanced algorithms, mathematical modeling, and analytical thinking</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Research Excellence</h4>
                <p className="text-sm text-gray-600">Thesis research, academic rigor, and evidence-based problem solving</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600">Commitment to lifelong learning and staying current with technology</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
