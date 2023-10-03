'use client'

import React, {useState} from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import {motion, useAnimation} from 'framer-motion'
export const PageContainer = ({children}:{children:React.ReactNode}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(false)
    const controls = useAnimation();

    const sidebarVariants = {
      open: { width: '20%' },
      closed: { width: '15%' },
    };
  
    const toggleSidebar = () => {
      setIsSidebarOpen(prev=>!prev);
      controls.start(isSidebarOpen ? 'closed' : 'open');
    };

  return (
    <div className=' w-full'>
        <motion.div 
        initial="closed"
        animate={controls}
        variants={sidebarVariants}
        exit={{ width:'15%' }}
        transition={{ duration: 0.3 }}
      >
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
        </motion.div>
        <div className={`${isSidebarOpen ? 'col-span-9' : 'col-span-10'} transition-none duration-150`}>
            {children}
        </div>
    </div>
  )
}
