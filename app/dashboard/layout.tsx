import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import UserDropdown from '../(components)/dashboard/UserDropdown'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '../(components)/dashboard/Sidebar'

const Layout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { userId } = await auth()

  if (!userId) {
    redirect('/auth')
  }

  return (
    <SidebarProvider>
 
    <AppSidebar />

    <div className='w-full h-auto flex flex-col'>

    <header className='w-full h-16 bg-white border-1 flex items-center justify-between px-4 md:px-10 '>
    <SidebarTrigger>
      <span className='sr-only'>Open Sidebar</span>
    </SidebarTrigger>
    <UserDropdown />
    </header>

    <main className='w-full h-auto justify-center items-center flex flex-col'>
      {children}
    </main>

    </div>

    </SidebarProvider>
  )
}

export default Layout
