import { ReactNode } from 'react'

import { Sidebar } from '@/components/sidebar'

type DashboardLayoutProps = {
  children: ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex w-full flex-col p-4">{children}</div>
    </main>
  )
}
