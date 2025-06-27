
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Calendar, MapPin, TrendingUp, Users, Zap } from 'lucide-react'

const experiences = [
  {
    position: "Lead Data Engineer",
    company: "Tiger Analytics",
    location: "Edison, NJ",
    duration: "Aug 2021 - Present",
    duration_years: "3.8 years",
    type: "Full-time",
    description: "Leading data engineering initiatives and Gen AI implementations for Fortune 500 clients.",
    achievements: [
      "Developed MLOps application reducing manual workload from 3 weeks to 2 hours",
      "Built Gen AI automation using Llama 400B, saving $300K annually",
      "Created agentic chatbot with RAG capabilities for retail sales data interaction",
      "Led Oracle to Snowflake migration for multiple schemas with Star Schema design",
      "Built Tableau dashboards reducing manual work by 40 hours monthly"
    ],
    technologies: ["Python", "Spark", "Streamlit", "Langchain", "Llama 400B", "Snowflake", "Tableau", "Airflow"],
    color: "from-blue-500 to-blue-600"
  },
  {
    position: "Data Engineer",
    company: "Canada Clean Fuels",
    location: "North York, Toronto, ON",
    duration: "Jun 2020 - Aug 2021",
    duration_years: "1.2 years",
    type: "Full-time",
    description: "Architected AWS-based data solutions and enterprise data warehouse migration.",
    achievements: [
      "Designed AWS 3-tier highly available and secure architecture",
      "Migrated enterprise data warehouse from MySQL to PostgreSQL Aurora RDS",
      "Developed data pipeline infrastructure integrating fuel distribution and GPS systems",
      "Created Tableau dashboards for operational efficiency monitoring"
    ],
    technologies: ["AWS Lambda", "Python", "PostgreSQL", "Aurora RDS", "RESTful API", "Tableau"],
    color: "from-green-500 to-green-600"
  },
  {
    position: "Data Engineer",
    company: "Goeasy Ltd",
    location: "Mississauga, ON",
    duration: "Mar 2019 - Jun 2020",
    duration_years: "1.3 years",
    type: "Full-time",
    description: "Enhanced data quality and implemented AI/ML solutions for enterprise systems.",
    achievements: [
      "Led ETL pipeline development using SSIS for Salesforce integration",
      "Implemented AI/ML solutions in Knime and SAS Viya",
      "Participated in SQL Server Data Warehouse migration to Azure",
      "Engineered advanced SQL scripts for dimension and fact tables"
    ],
    technologies: ["SSIS", "SQL Server", "Salesforce", "Knime", "SAS Viya", "Azure"],
    color: "from-purple-500 to-purple-600"
  },
  {
    position: "Data Analyst",
    company: "Karsun Solutions LLC",
    location: "Washington, D.C.",
    duration: "Apr 2016 - Jan 2019",
    duration_years: "2.8 years",
    type: "Full-time",
    description: "Facilitated GSA cloud migration and developed federal data reporting systems.",
    achievements: [
      "Developed ETL data models from MongoDB and AWS Redshift",
      "Established Proof-of-Concept using Apache Zeppelin, Hadoop, and Spark",
      "Built business reports for federal Transactional Data Repository",
      "Implemented multi-layer cloud architecture using AWS and Ansible",
      "Maximized data quality through database optimization solutions"
    ],
    technologies: ["AWS", "MongoDB", "Redshift", "Apache Spark", "Tableau", "Drupal", "Ansible"],
    color: "from-indigo-500 to-indigo-600"
  }
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            8+ years of building scalable data solutions across diverse industries
          </p>
          <div className="w-20 h-1 tech-gradient rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                        <div className="flex items-center space-x-2 text-blue-100">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0 text-right">
                        <div className="flex items-center space-x-2 text-blue-100 justify-start md:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-100 mt-1 justify-start md:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="skill-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-700 font-medium">Companies</div>
            <div className="text-sm text-gray-500">Fortune 500 to Startups</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-gray-700 font-medium">Industries</div>
            <div className="text-sm text-gray-500">Insurance, Energy, Finance</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-700 font-medium">Countries</div>
            <div className="text-sm text-gray-500">USA, Canada, India</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
