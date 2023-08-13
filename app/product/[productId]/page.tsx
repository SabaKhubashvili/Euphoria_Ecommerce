import React from 'react'
import { Container } from '../../components/Container';
import Image from 'next/image';
import Counter from '@/app/components/buttons/Counter';
import SingleProductInformation from '@/app/components/Product/SingleProductInformation';

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
                <SingleProductInformation/>
              </div> 
            </div>
          </div>
        </Container>
    </main>
  )
}

export default page