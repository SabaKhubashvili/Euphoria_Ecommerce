import React from 'react'
import { Icon } from '../Icon'
import { WebsiteIcons } from '@/public/Svg/IconsObject'

export const AdminPagination = ({length}:{length:number}) => {

    const Comp = ({page}:{page:string}) => (
        <div className={`px-[8px] py-[4px] ${false ? 'text-white bg-purple' : 'text-secondaryGray bg-[#F1F2F6]'} cursor-pointer rounded-[4px] `}>
            {page}
        </div>
    )

  return (
    <div className='flex gap-[2px] items-center'>
        <div className='px-[8px] py-[9px] h-full cursor-pointer bg-[#F1F2F6] rounded-[4px] '>
            <Icon svg={WebsiteIcons['prevGray']}/>
        </div>
        <Comp page='1'/>
        <Comp page='2'/>
        <Comp page='3'/>
        <Comp page='4'/>
        <Comp page='5'/>
        <Comp page='6'/>
        <div className='px-[8px] py-[9px] h-full cursor-pointer bg-[#F1F2F6] rounded-[4px] '>
            <Icon svg={WebsiteIcons['nextGray']}/>
        </div>
    </div>
  )
}
