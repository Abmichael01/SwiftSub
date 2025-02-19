import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode
}

const SectionPadding: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(
        "md:px-20 sm:psx-10 p-5 ",
        className
    )}>
        {children}
    </div>
  )
}

export default SectionPadding