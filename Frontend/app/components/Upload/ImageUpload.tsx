import React, { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { Icon } from '../Icon'
import { WebsiteIcons } from '@/public/Svg/IconsObject'
declare global {
    var cloudinary:any
}

interface Props{
    onChange:(value:string)=>void,
    value?:string,
    isAboveSmallScreens?:boolean
    disabled?:boolean,
    label:string,
    type?: 'main' | 'secondary' | 'third'
}

export const ImageUpload = ({
    onChange,
    value,
    disabled,
    label,
    type = 'main'
}:Props) => {
    const handleUpload = useCallback((result:any)=>{
        onChange(result.info.secure_url)
    },[onChange])
    
  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
    options={{
      maxFiles:1,
      resourceType:'image'
    }}
    
    >
      {({open})=>(
        <div
        onClick={()=> !disabled && open()}
        className="h-full w-full cursor-pointer"
      >
        {
          type === 'main' ?
          <div className='w-full h-full border-[1px] border-secondaryGray border-solid py-[3rem] px-4 rouned-md flex justify-center items-center'>
                <div className='flex flex-col gap-[10px] items-center justify-center'>
                  <div className='w-[50px] h-[50px]'>
                    <Icon svg={WebsiteIcons['Camera']}/>
                  </div>
                  <h3 className='text-secondaryGray font-bold text-[16px]'>
                    {label}
                  </h3>
                </div>
          </div>
          :
          ''
        }
        
      </div>
      )}

    </CldUploadWidget>
  )
}
