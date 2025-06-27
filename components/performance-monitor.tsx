'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          console.log(`${entry.name}: ${entry.startTime}ms`)
          
          // Send to analytics if needed
          if (entry.name === 'LCP') {
            // Largest Contentful Paint
            console.log('LCP:', entry.startTime)
          } else if (entry.name === 'FID') {
            // First Input Delay
            console.log('FID:', entry.processingStart - entry.startTime)
          } else if (entry.name === 'CLS') {
            // Cumulative Layout Shift
            console.log('CLS:', entry.value)
          }
        }
      })

      // Observe Core Web Vitals
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Monitor page load performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          const metrics = {
            // DNS lookup time
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            // TCP connection time
            tcp: navigation.connectEnd - navigation.connectStart,
            // Time to first byte
            ttfb: navigation.responseStart - navigation.requestStart,
            // DOM content loaded
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            // Page load time
            loadTime: navigation.loadEventEnd - navigation.navigationStart,
            // Resource load time
            resourceLoad: navigation.loadEventEnd - navigation.domContentLoadedEventEnd
          }

          console.log('Performance Metrics:', metrics)
          
          // Send metrics to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'performance', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(metrics.loadTime),
              custom_map: {
                dns_time: metrics.dns,
                tcp_time: metrics.tcp,
                ttfb: metrics.ttfb,
                dom_content_loaded: metrics.domContentLoaded,
                resource_load: metrics.resourceLoad
              }
            })
          }
        }
      })

      // Monitor resource loading
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming
          
          // Log slow resources (> 1 second)
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration + 'ms')
          }
        }
      })

      resourceObserver.observe({ entryTypes: ['resource'] })

      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        })
      }

      // Monitor network conditions
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        console.log('Network Info:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink + ' Mbps',
          rtt: connection.rtt + ' ms',
          saveData: connection.saveData
        })
      }

      // Cleanup
      return () => {
        observer.disconnect()
        resourceObserver.disconnect()
      }
    }
  }, [])

  return null
} 