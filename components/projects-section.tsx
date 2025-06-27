
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, TrendingUp, Zap, Brain, Database, Cloud, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "Gen AI DPIS Automation",
    description: "Revolutionary web application automating Demo Product Information Sheet process using Streamlit, Langchain, and Meta's Llama 400B model.",
    icon: Brain,
    impact: "$300K Annual Savings",
    technologies: ["Streamlit", "Langchain", "Llama 400B", "Python", "Gen AI", "NLP"],
    company: "Tiger Analytics",
    achievements: [
      "Reduced manual processing time by 95%",
      "Automated complex document generation",
      "Integrated with enterprise systems"
    ],
    color: "from-purple-500 to-purple-600",
    category: "Gen AI"
  },
  {
    title: "MLOps Model Monitoring Platform",
    description: "Comprehensive model monitoring application for pricing engineering team, built from scratch using Python OOPs and automation frameworks.",
    icon: TrendingUp,
    impact: "3 weeks → 2 hours",
    technologies: ["Python", "OOP", "Bash", "MLOps", "Automation", "Monitoring"],
    company: "Tiger Analytics",
    achievements: [
      "Automated model behavior analysis",
      "Real-time performance monitoring",
      "Reduced manual workload significantly"
    ],
    color: "from-blue-500 to-blue-600",
    category: "MLOps"
  },
  {
    title: "Agentic RAG Chatbot",
    description: "Intelligent chatbot with RAG capabilities enabling natural language interaction with retail sales data and automated PowerPoint report generation.",
    icon: Bot,
    impact: "Automated Reporting",
    technologies: ["RAG", "Vector DBs", "LLMs", "Python", "NLP", "PowerPoint API"],
    company: "Tiger Analytics",
    achievements: [
      "Natural language data querying",
      "Automated report generation",
      "Enhanced user experience"
    ],
    color: "from-green-500 to-green-600",
    category: "AI/ML"
  },
  {
    title: "Oracle to Snowflake Migration",
    description: "Led comprehensive data migration project from Oracle to Snowflake, designing and implementing Star Schema Data Model for multiple schemas.",
    icon: Database,
    impact: "Enterprise Migration",
    technologies: ["Oracle", "Snowflake", "SQL", "ETL", "Data Modeling", "Star Schema"],
    company: "Tiger Analytics",
    achievements: [
      "Migrated multiple enterprise schemas",
      "Designed optimized Star Schema",
      "Ensured zero data loss"
    ],
    color: "from-indigo-500 to-indigo-600",
    category: "Data Engineering"
  },
  {
    title: "AWS 3-Tier Architecture",
    description: "Designed and implemented highly available and secure AWS architecture for database and web applications with enterprise data warehouse migration.",
    icon: Cloud,
    impact: "Scalable Infrastructure",
    technologies: ["AWS", "MySQL", "PostgreSQL", "Aurora RDS", "Lambda", "Architecture"],
    company: "Canada Clean Fuels",
    achievements: [
      "Highly available architecture",
      "Secure multi-tier design",
      "Successful database migration"
    ],
    color: "from-orange-500 to-orange-600",
    category: "Cloud"
  },
  {
    title: "Federal Data Repository",
    description: "Developed comprehensive business and analytical reports for federal Transactional Data Repository with advanced data visualization and chatbot PoC.",
    icon: Database,
    impact: "Government Solution",
    technologies: ["AWS Redshift", "Jasper", "Python", "MXNet", "BI", "Chatbot"],
    company: "Karsun Solutions",
    achievements: [
      "Federal-grade data reporting",
      "Advanced data visualization",
      "AI chatbot implementation"
    ],
    color: "from-red-500 to-red-600",
    category: "Government"
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transformative solutions delivering measurable business impact
          </p>
          <div className="w-20 h-1 tech-gradient rounded-full mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{project.description}</p>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Impact Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {project.impact}
                  </span>
                </div>

                {/* Company */}
                <div className="text-sm text-gray-600 mb-4 font-medium">
                  @ {project.company}
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    Professional Project
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:border-blue-300 group-hover:text-blue-600 transition-colors"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/sidharthramesh/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Similar Solutions?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I specialize in building scalable data engineering solutions, Gen AI applications, and MLOps platforms that deliver measurable business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="tech-gradient text-white">
                <a
                  href="https://www.linkedin.com/in/sidharthramesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/sidhu177"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
