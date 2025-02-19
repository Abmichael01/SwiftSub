import NetworkUssdCodes from '@/components/Dashboard/NetworkUssdCodes'
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
  return (
    <div className='flex min-h-[100vh]'>
        <Sidebar />
        <div className='shrink-0 w-full h-ful  md:w-[700px] p-5 relative'>
            <Outlet />
        </div>
        <NetworkUssdCodes />
    </div>
  )
}

export default DashboardLayout