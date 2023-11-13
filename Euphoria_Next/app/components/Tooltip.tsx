import React, { useState } from 'react'

interface Props{
    children:React.ReactNode
    tooltipText:string
}

export const ToolTip = ({children,tooltipText}:Props) => {
    const [isHovering,setIsHovering] = useState<boolean>()

    const handleMouseLeave = () =>{
        setTimeout(()=>{
            if(isHovering){
                setIsHovering(false)
            }
        },500)
    }

  return (
    <div className='relative' onMouseEnter={()=>{setIsHovering(true)}} onMouseLeave={handleMouseLeave}>
        {children}
        <div className={`absolute bottom-[1.25rem] left-[1.25rem] w-fit ${isHovering ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200
        bg-black text-white rounded-[4px] p-[10px] text-[10px] w-[145px] select-none
        `}>
            {tooltipText}
        </div>
    </div>
  )
}