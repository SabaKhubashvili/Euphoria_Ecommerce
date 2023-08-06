import React from 'react'
import { Container } from '../components/Container';

interface params{
    productId:string
}

const page = ({
    params
}:{params:params}) => {
    console.log(params.productId);
    
  return (
    <main className=' pt-[200px]'>
        <Container>
          <div className='xl:mx-[238px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px] '>
              
          </div>
        </Container>
    </main>
  )
}

export default page