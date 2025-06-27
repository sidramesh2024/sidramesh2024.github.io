'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      { rel: 'preload', href: '/pro_pic.jpg', as: 'image', fetchpriority: 'high' },
      { rel: 'preload', href: '/favicon.ico', as: 'image', fetchpriority: 'high' },
    ]

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
    ]

    // Add preload links
    criticalResources.forEach(({ rel, href, as, fetchpriority }) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (as) link.setAttribute('as', as)
      if (fetchpriority) link.setAttribute('fetchpriority', fetchpriority)
      document.head.appendChild(link)
    })

    // Add preconnect links
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      document.head.appendChild(link)
    })

    // Add DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
    ]

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              img.classList.remove('lazy')
            }
            observer.unobserve(img)
          }
        })
      })

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }

    // Initialize lazy loading
    if ('IntersectionObserver' in window) {
      lazyLoadImages()
    } else {
      // Fallback for older browsers
      document.querySelectorAll('img[data-src]').forEach(img => {
        const imgElement = img as HTMLImageElement
        if (imgElement.dataset.src) {
          imgElement.src = imgElement.dataset.src
          imgElement.removeAttribute('data-src')
        }
      })
    }

    // Optimize font loading
    const optimizeFonts = () => {
      // Add font-display: swap to Google Fonts
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
      fontLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (href && !href.includes('display=swap')) {
          const newHref = href.includes('?') ? `${href}&display=swap` : `${href}?display=swap`
          link.setAttribute('href', newHref)
        }
      })
    }

    optimizeFonts()

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    }

    // Cleanup function
    return () => {
      // Remove preload links on unmount
      criticalResources.forEach(({ rel, href }) => {
        const link = document.querySelector(`link[rel="${rel}"][href="${href}"]`)
        if (link) link.remove()
      })

      // Remove preconnect links
      preconnectDomains.forEach(domain => {
        const link = document.querySelector(`link[rel="preconnect"][href="${domain}"]`)
        if (link) link.remove()
      })
    }
  }, [])

  return null
} 