import React from 'react'
import { Container } from '../components/Container'
import { LoginForm } from '../components/Form/LoginForm'

const page = () => {
  
  return (
    <main className=" pt-[129px]">
    <Container>
      <div>
        <p className="text-gray text-[14px]  text-center">
          Home / Login to your accaunt
        </p>
        <h1 className=" sm:text-[48px] xs:text-[35px] text-[30px] xs:leading-[68px] pt-[13px]  text-center ">
          Login to your accaunt
        </h1>

        <div className="mt-[24px] mb-[59px] pt-[53px] pb-[124px] border-[1px] border-solid border-divider
         flex justify-center items-center  flex-col
        
         ">
          <div className="flex flex-col  items-start justify-start sm:w-[500px] w-full px-[20px]">
            <h2 className="text-[24px] leading-[68px]">
              Personal Information
            </h2>
            <div className='mt-5 w-full'>
                <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </main>
  )
}

export default page