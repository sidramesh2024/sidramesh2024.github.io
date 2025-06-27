
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cloud, Database, Code, Brain, BarChart3, Cog, 
  Cpu, Server, GitBranch, Layers, Zap, Target 
} from 'lucide-react'

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "AWS", level: 95, items: ["EC2", "RDS", "S3", "Lambda", "Redshift", "Bedrock", "Sagemaker"] },
      { name: "Azure", level: 85, items: ["Data Lake", "Functions", "SQL Database", "ML Studio"] },
      { name: "GCP", level: 70, items: ["BigQuery", "Cloud Functions", "AI Platform"] }
    ]
  },
  {
    title: "Gen AI & ML",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "LLMs", level: 95, items: ["Llama 400B", "Claude Sonnet 4", "ChatGPT 4o", "DeepSeek R1"] },
      { name: "Frameworks", level: 90, items: ["Langchain", "RAG", "Vector DBs", "FAISS", "Pinecone"] },
      { name: "MLOps", level: 88, items: ["Model Monitoring", "Pipeline Automation", "A/B Testing"] }
    ]
  },
  {
    title: "Data Engineering",
    icon: Database,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "Big Data", level: 92, items: ["Apache Spark", "PySpark", "Hadoop", "Hive"] },
      { name: "ETL/ELT", level: 95, items: ["SSIS", "Airflow", "Apache Spark", "Custom Pipelines"] },
      { name: "Data Warehouses", level: 90, items: ["Snowflake", "Databricks", "Redshift"] }
    ]
  },
  {
    title: "Databases",
    icon: Server,
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "SQL", level: 95, items: ["PostgreSQL", "SQL Server", "MySQL"] },
      { name: "NoSQL", level: 85, items: ["MongoDB", "DynamoDB"] },
      { name: "Time Series", level: 75, items: ["InfluxDB", "TimescaleDB"] }
    ]
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "Python", level: 95, items: ["Pandas", "NumPy", "Flask", "Django", "Streamlit"] },
      { name: "SQL", level: 95, items: ["T-SQL", "PL/SQL", "Query Optimization"] },
      { name: "Shell", level: 85, items: ["Bash", "Linux", "Automation Scripts"] }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Cog,
    color: "from-red-500 to-red-600",
    skills: [
      { name: "Containers", level: 85, items: ["Docker", "Kubernetes"] },
      { name: "CI/CD", level: 88, items: ["Jenkins", "GitHub Actions", "Ansible"] },
      { name: "Monitoring", level: 80, items: ["Grafana", "CloudWatch", "Logging"] }
    ]
  }
]

const achievements = [
  {
    icon: Target,
    title: "Cost Optimization",
    value: "$300K",
    description: "Annual savings through automation"
  },
  {
    icon: Zap,
    title: "Efficiency Gain",
    value: "95%",
    description: "Reduction in manual workload"
  },
  {
    icon: BarChart3,
    title: "Time Savings",
    value: "40hrs",
    description: "Monthly automation impact"
  }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive skillset spanning modern data engineering and AI technologies
          </p>
          <div className="w-20 h-1 tech-gradient rounded-full mx-auto"></div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center card-hover">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{achievement.title}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  <category.icon className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
              </div>

              {/* Skills */}
              <div className="p-6 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.2 }}
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                      ></motion.div>
                    </div>

                    {/* Skill Items */}
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Technologies & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">BI Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Tableau", "Apache Superset", "Jasper", "Apache Zeppelin"].map((tool) => (
                  <span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Web Development</h4>
              <div className="flex flex-wrap gap-2">
                {["Django", "Flask", "Streamlit", "HTML", "Drupal"].map((tool) => (
                  <span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Operating Systems</h4>
              <div className="flex flex-wrap gap-2">
                {["Linux", "Ubuntu", "RedHat", "Windows"].map((tool) => (
                  <span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {["Agile", "DevOps", "CI/CD", "Scrum"].map((tool) => (
                  <span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
