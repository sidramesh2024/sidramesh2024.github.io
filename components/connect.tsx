
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'

const Connect = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sidharthramesh/',
      icon: <Linkedin size={24} />,
      description: 'Connect professionally and see my career journey'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sidhu177',
      icon: <Github size={24} />,
      description: 'Explore my open-source projects and contributions'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/sidhu177',
      icon: <Twitter size={24} />,
      description: 'Follow my thoughts on data engineering and tech trends'
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
    <section id="connect" className="section-padding bg-light-navy">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Section Heading */}
          <motion.h2 variants={itemVariants} className="numbered-heading before:content-['05.'] justify-center">
            Let's Connect
          </motion.h2>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-16">
            <p className="text-lg leading-relaxed mb-8">
              I'm always interested in discussing data engineering challenges, 
              exploring new opportunities, and connecting with fellow technology enthusiasts. 
              Whether you're looking to collaborate on a project, discuss industry trends, 
              or explore potential opportunities, I'd love to hear from you.
            </p>
            
            <p className="text-cyan font-semibold">
              Open to new challenges and full-time opportunities
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card group text-center hover:border-cyan/50"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyan/10 rounded-full group-hover:bg-cyan/20 transition-colors">
                    <div className="text-cyan group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="heading-sm mb-2 group-hover:text-cyan transition-colors">
                  {link.name}
                </h3>
                
                <p className="text-slate text-sm leading-relaxed mb-4">
                  {link.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-cyan text-sm font-mono">
                  <span>Visit Profile</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <p className="text-slate mb-8">
              Ready to build something amazing together?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sidharthramesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Get In Touch
              </a>
              
              <a
                href="https://github.com/sidhu177"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-lg px-8 py-4"
              >
                View My Work
              </a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="mt-20 pt-8 border-t border-cyan/20">
            <p className="text-slate text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS by{' '}
              <span className="text-cyan">Sidharth Ramesh</span>
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  )
}

export default Connect
