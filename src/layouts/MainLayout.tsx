import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div className=' font-inter'>
        <Navbar />
        <div className='pb-20'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout