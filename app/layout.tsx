
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sidharth Ramesh - Lead Data Engineer',
  description: 'Professional portfolio of Sidharth Ramesh, Lead Data Engineer at Tiger Analytics with 8 years of experience in Data Engineering, MLOps, and Agentic AI applications.',
  keywords: ['Data Engineer', 'MLOps', 'Agentic AI', 'AWS', 'Azure', 'Python', 'Data Pipelines'],
  authors: [{ name: 'Sidharth Ramesh' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Sidharth Ramesh - Lead Data Engineer',
    description: 'Professional portfolio showcasing 8 years of Data Engineering expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-light-grey antialiased`}>
        {children}
      </body>
    </html>
  )
}
