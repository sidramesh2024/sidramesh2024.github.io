
'use client'

import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sidharthramesh/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      href: 'https://x.com/sidhu177',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      href: 'https://github.com/sidhu177',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Sidharth Ramesh</h3>
              <p className="text-gray-300 leading-relaxed">
                Lead Data Engineer & AI Specialist building intelligent, scalable solutions that drive business innovation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${link.color} transition-colors`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { id: 'about', label: 'About Me' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.id)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Edison, New Jersey</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:sidramesh2025@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sidharth Ramesh. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Back to Top
              </button>
              <div className="text-gray-400 text-sm">
                Built with Next.js & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
