
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react'

const certifications = [
  {
    name: "Snowflake SnowPro Core",
    issuer: "Snowflake",
    date: "June 2024",
    category: "Data Warehousing",
    level: "Professional",
    color: "from-blue-500 to-blue-600",
    description: "Advanced data warehousing and cloud data platform expertise",
    skills: ["Data Warehousing", "SQL", "Cloud Architecture", "Performance Optimization"]
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "March 2021",
    category: "Cloud Architecture",
    level: "Associate",
    color: "from-orange-500 to-orange-600",
    description: "Designing distributed systems and cloud solutions on AWS",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"]
  },
  {
    name: "Databricks Certified Associate Developer",
    issuer: "Databricks",
    date: "January 2021",
    category: "Big Data",
    level: "Associate",
    color: "from-red-500 to-red-600",
    description: "Apache Spark 3.0 development and data engineering on Databricks",
    skills: ["Apache Spark", "PySpark", "Data Engineering", "ML Engineering"]
  },
  {
    name: "Azure Data Engineer DP-201",
    issuer: "Microsoft",
    date: "January 2020",
    category: "Data Engineering",
    level: "Associate",
    color: "from-blue-600 to-blue-700",
    description: "Designing Azure data solutions and data storage systems",
    skills: ["Azure Data Services", "Data Architecture", "ETL", "Data Security"]
  },
  {
    name: "Azure Data Engineer DP-200",
    issuer: "Microsoft",
    date: "October 2019",
    category: "Data Engineering",
    level: "Associate",
    color: "from-blue-600 to-blue-700",
    description: "Implementing Azure data solutions and data processing",
    skills: ["Azure Implementation", "Data Processing", "Monitoring", "Optimization"]
  },
  {
    name: "Azure Fundamentals AZ-900",
    issuer: "Microsoft",
    date: "August 2019",
    category: "Cloud Fundamentals",
    level: "Fundamental",
    color: "from-blue-500 to-blue-600",
    description: "Core Azure services, security, privacy, compliance, and trust",
    skills: ["Cloud Concepts", "Azure Services", "Security", "Compliance"]
  },
  {
    name: "Tableau Desktop 10 Qualified Associate",
    issuer: "Tableau",
    date: "September 2017",
    category: "Business Intelligence",
    level: "Associate",
    color: "from-indigo-500 to-indigo-600",
    description: "Data visualization and business intelligence with Tableau",
    skills: ["Data Visualization", "Dashboard Design", "Business Intelligence", "Analytics"]
  }
]

const certificationStats = [
  {
    icon: Award,
    value: "7",
    label: "Certifications",
    description: "Industry-recognized credentials"
  },

]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Industry-recognized credentials validating expertise across cloud and data technologies
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
          {certificationStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center card-hover">
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                      {cert.level}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{cert.description}</p>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <div className="w-full h-full bg-white rounded-full transform translate-x-6 -translate-y-6"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Issuer and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-semibold text-gray-900">{cert.issuer}</div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {cert.category}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Verified</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Professional Credential
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
              Continuous Learning Journey
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Staying current with the latest technologies and industry best practices through continuous certification and hands-on experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS', 'Azure', 'Snowflake', 'Databricks', 'Tableau'].map((tech) => (
                <div key={tech} className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-700">{tech} Certified</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
