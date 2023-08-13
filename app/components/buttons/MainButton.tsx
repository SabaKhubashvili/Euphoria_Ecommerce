'use client'

interface Props{
    onClick:()=>void
    label:string,
    small?:boolean
    full?:boolean
}

export const MainButton = ({onClick,label,small,full}:Props) => {
  return (
    <button className={`w-fit  font-medium
    tracking-[0.5px] uppercase bg-black
    lg:hover:bg-secondary text-white transition-colors duration-200
    ${small ? 'lg:py-[6px] py-[3px]  lg:px-[20px] px-[10px] text-[14px] ' : 'text-[18px] lg:py-[8px] py-[4px]  lg:px-[40px] px-[20px] '}
    ${full && 'w-full h-full'}
  `}>
        {label}
    </button>
  )
}
