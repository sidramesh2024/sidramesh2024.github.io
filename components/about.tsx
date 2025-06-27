'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="about" className="section-padding bg-light-navy">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Heading */}
          <motion.h2 variants={itemVariants} className="numbered-heading before:content-['01.']">
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Hello! I'm Sidharth, a passionate technologist with a deep love for transforming 
                complex data challenges into elegant, scalable solutions. My journey in data 
                engineering began during my academic pursuits and has evolved into{' '}
                <span className="text-cyan">8 years of professional excellence</span> in the 
                applied computing industry.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                Currently serving as a <span className="text-cyan">Lead Data Engineer at Tiger Analytics</span>, 
                I specialize in building cloud-agnostic data platforms using{' '}
                <span className="text-cyan">AWS and Azure</span>. My expertise spans the entire 
                data lifecycle - from designing robust ETL pipelines to implementing cutting-edge{' '}
                <span className="text-cyan">MLOps practices</span> and developing{' '}
                <span className="text-cyan">Agentic AI applications</span> that drive business value.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                My academic foundation includes dual Master's degrees: an{' '}
                <span className="text-cyan">MS in Computer Science from Georgia Tech's OMSCS program</span> 
                and an <span className="text-cyan">MS in Mechanical Engineering from Rose-Hulman Institute of Technology</span>. 
                This unique combination of computational theory and engineering principles allows me to 
                approach data problems with both analytical rigor and practical innovation.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                When I'm not architecting data solutions, I'm exploring the latest advancements 
                in AI/ML technologies, contributing to open-source projects, and sharing knowledge 
                with the data engineering community.
              </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="lg:col-span-1 order-first lg:order-last">
              <div className="relative group max-w-xs mx-auto lg:max-w-none">
                <div className="relative aspect-square bg-cyan/10 rounded-lg overflow-hidden">
                  <Image
                    src="https://i.pinimg.com/originals/4c/26/67/4c26671d27cfef60f62e60ab3960417c.jpg"
                    alt="Sidharth Ramesh - Professional headshot"
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-cyan/20 rounded-lg transition-opacity duration-300 group-hover:opacity-0" />
                </div>
                
                {/* Decorative Border */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan rounded-lg -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
