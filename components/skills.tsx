
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Database, 
  Cloud, 
  Code, 
  Zap, 
  GitBranch, 
  BarChart3,
  Cpu,
  Workflow
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Data Engineering',
      icon: <Database className="text-cyan" size={24} />,
      skills: ['Python', 'Apache Spark', 'Apache Kafka', 'ETL/ELT', 'Data Pipelines', 'Apache Airflow']
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud className="text-cyan" size={24} />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'CloudFormation', 'Kubernetes']
    },
    {
      category: 'MLOps & AI',
      icon: <Cpu className="text-cyan" size={24} />,
      skills: ['MLflow', 'Kubeflow', 'Docker', 'Model Deployment', 'Agentic AI', 'LLM Integration']
    },
    {
      category: 'Data Storage',
      icon: <BarChart3 className="text-cyan" size={24} />,
      skills: ['PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery', 'Redshift', 'Delta Lake']
    },
    {
      category: 'Programming',
      icon: <Code className="text-cyan" size={24} />,
      skills: ['Python', 'SQL', 'Scala', 'Java', 'TypeScript', 'R']
    },
    {
      category: 'DevOps & Tools',
      icon: <Workflow className="text-cyan" size={24} />,
      skills: ['Git', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Monitoring', 'Logging']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section-padding bg-light-navy">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Heading */}
          <motion.h2 variants={itemVariants} className="numbered-heading before:content-['03.']">
            Technical Skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="heading-sm group-hover:text-cyan transition-colors">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-cyan/10 text-cyan text-sm rounded-full border border-cyan/20 hover:bg-cyan/20 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="heading-md mb-8 text-center">Core Technologies & Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Apache Spark', 'Apache Kafka', 'Apache Airflow', 'dbt', 'Great Expectations',
                'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'FastAPI',
                'Elasticsearch', 'Redis', 'Grafana', 'Prometheus', 'DataDog'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-transparent border border-cyan text-cyan rounded hover:bg-cyan hover:text-navy transition-all duration-300 font-mono text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
