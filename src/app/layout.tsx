import { Metadata } from 'next'

import { ThemeProvider } from '@/providers/theme-provider'

import { TailwindIndicator } from '@/components/tailwind-indicator'
import { DashboardLayout } from '@/layout/dashboard.layout'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'San Nicollas',
    template: `San Nicollas - %s`,
  },
  description: '',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
            <DashboardLayout>{children}</DashboardLayout>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
