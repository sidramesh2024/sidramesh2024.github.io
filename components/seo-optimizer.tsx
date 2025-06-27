'use client'

import { useEffect } from 'react'

export function SEOOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/pro_pic.jpg', as: 'image' },
      { rel: 'preload', href: '/Sid.jpg', as: 'image' },
    ]

    preloadLinks.forEach(({ rel, href, as }) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (as) link.setAttribute('as', as)
      document.head.appendChild(link)
    })

    // Add meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions. Specialized in MLOps, data pipelines, and intelligent automation.'
      document.head.appendChild(meta)
    }

    // Add structured data for better search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sidharth Ramesh",
      "jobTitle": "Lead Data Engineer",
      "description": "Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions",
      "url": "https://sidharthramesh.github.io",
      "image": "https://sidharthramesh.github.io/pro_pic.jpg",
      "sameAs": [
        "https://www.linkedin.com/in/sidharthramesh/",
        "https://x.com/sidhu177",
        "https://github.com/sidhu177"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Tiger Analytics"
      },
      "knowsAbout": [
        "Data Engineering",
        "Gen AI",
        "Machine Learning",
        "MLOps",
        "AWS",
        "Azure",
        "Python",
        "Apache Spark",
        "Snowflake"
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove preload links on unmount
      preloadLinks.forEach(({ rel, href }) => {
        const link = document.querySelector(`link[rel="${rel}"][href="${href}"]`)
        if (link) link.remove()
      })
    }
  }, [])

  return null
} 