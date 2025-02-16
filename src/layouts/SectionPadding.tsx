import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode
}

const SectionPadding: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(
        "px-20",
        className
    )}>
        {children}
    </div>
  )
}

export default SectionPadding