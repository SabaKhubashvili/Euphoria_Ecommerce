'use client'

interface Props{
    onClick:()=>void
    label:string,
    small?:boolean
    full?:boolean
}

export const MainButton = ({onClick,label,small,full}:Props) => {
  return (
    <button className={`w-fit  font-medium select-none
    tracking-[0.5px] uppercase bg-black
    lg:hover:bg-secondary text-white transition-colors duration-200
    ${small ? 'lg:py-[6px] py-[3px] lg:px-[20px] px-[10px] xl:text-[15px] lg:text-[13px] sm:text-[12px] text-[10px] ' : ' 2xl:text-[18px] xl:text-[16px] lg:text-[15px] sm:text-[14px] text-[13px] lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] '}
    ${full && 'w-full h-full !py-0 '}
  `}>
        {label}
    </button>
  )
}
