import React from 'react'
import { Container } from '../../components/Container';
import Image from 'next/image';

interface params{
    productId:string
}

const page = ({
    params
}:{params:params}) => {

  return (
    <main className=' pt-[200px]'>
        <Container>
          <div className='2xl:mx-[238px] xl:mx-[150px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px] '>
            <div className='grid lg:grid-cols-2 gap-[69px] '>
              <div className='col-span-1 max-w-[624px]'>
                  <Image
                    src={'/Images/Product/Product.webp'}
                    alt='Product_Image'
                    width={624}
                    height={790}
                    className='w-full'
                    />
              </div>
              <div className='col-span-1'>
                <h4 className=' text-gray text-[14px] leading-[48px]'>Home / Womens Dress / Angels malu</h4>
                <div className=' bg-lightBlue font-bold px-2 py-1 inline '>
                  {/* Brand */}
                  FENDI
                </div>
                <h1 className='max-w-[493px] 2xl:text-[48px] xl:text-[40px] md:text-[30px] font-medium 
                2xl:leading-[56px] xl:leading-[50px] md:leading-[35px]'>
                  {/* Title */}
                  Women Black Checked Fit and Flare Dress
                </h1>
                <div className='mt-[28px]'>
                  <p className='text-[14px] uppercase '>
                    Select Color
                  </p>
                  <div className='flex gap-[5px] mt-[10px]'>

                        <div className={`p-[2px]  cursor-pointer ${false && 'border-[1px] border-black'}`} >
                          <div className={`w-[15px] h-[15px] bg-red-400`} />
                      </div>
                        <div className={`p-[2px]  cursor-pointer ${false && 'border-[1px] border-black'}`} >
                          <div className={`w-[15px] h-[15px] bg-green-400`} />
                      </div>
                        <div className={`p-[2px]  cursor-pointer ${true && 'border-[1px] border-black'}`} >
                          <div className={`w-[15px] h-[15px] bg-blue-400`} />
                      </div>
                  </div>
                </div>
                <div className='mt-[28px]'>
                  <p className='text-[14px] uppercase '>
                      Select size (Inches)
                  </p>
                  <div className='flex gap-[5px] mt-[10px]'>

                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${true && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  <div className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider 
                     py-[10px] px-[10px] 
                    ${false && "!text-black !border-black"}
                    `}>
                      w27
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </main>
  )
}

export default page