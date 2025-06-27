import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
  description: 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions. Specialized in MLOps, data pipelines, and intelligent automation.',
  keywords: 'Data Engineer, Gen AI, AWS, Azure, MLOps, Data Pipelines, Machine Learning, Python, Spark, Snowflake',
  authors: [{ name: 'Sidharth Ramesh' }],
  creator: 'Sidharth Ramesh',
  publisher: 'Sidharth Ramesh',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://sidharthramesh.github.io'),
  openGraph: {
    title: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
    description: 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions.',
    url: 'https://sidharthramesh.github.io',
    siteName: 'Sidharth Ramesh Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidharth Ramesh - Lead Data Engineer & AI Specialist',
    description: 'Lead Data Engineer with 8+ years expertise in Gen AI, AWS, Azure, and scalable data solutions.',
    creator: '@sidhu177',
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
