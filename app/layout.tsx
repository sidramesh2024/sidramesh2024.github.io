import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
    template: '%s | Sidharth Ramesh'
  },
  description: 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions. Specialized in MLOps, data pipelines, and intelligent automation. $300K annual savings through automation.',
  keywords: [
    'Data Engineer',
    'Lead Data Engineer',
    'Gen AI',
    'Machine Learning',
    'MLOps',
    'AWS',
    'Azure',
    'Data Pipelines',
    'Python',
    'Spark',
    'Snowflake',
    'Artificial Intelligence',
    'Big Data',
    'Data Science',
    'ETL',
    'Data Warehouse',
    'Automation',
    'Tiger Analytics',
    'Portfolio'
  ],
  authors: [{ name: 'Sidharth Ramesh' }],
  creator: 'Sidharth Ramesh',
  publisher: 'Sidharth Ramesh',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  alternates: {
    canonical: 'https://sidharthramesh.github.io',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://sidharthramesh.github.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sidharthramesh.github.io',
    title: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
    description: 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions. Specialized in MLOps, data pipelines, and intelligent automation.',
    siteName: 'Sidharth Ramesh Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
    description: 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions.',
    creator: '@sidhu177',
    images: ['/og-image.jpg'],
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#3b82f6',
    'msapplication-TileColor': '#3b82f6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sidharth Ramesh',
    'application-name': 'Sidharth Ramesh Portfolio',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sidharth Ramesh" />
        <meta name="application-name" content="Sidharth Ramesh Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="canonical" href="https://sidharthramesh.github.io" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
