import TransactionSummary from '@/components/Dashboard/Dashboard/TransactionSummary'
import React from 'react'
import { Outlet } from 'react-router-dom'

const TransactionLayout: React.FC = () => {
  return (
    <div className=' h-full'>
        <div className='bg-transparent backdrop-blur-xl'>
        <Outlet />
        </div>
        <TransactionSummary />
    </div>
  )
}

export default TransactionLayout