import React from 'react'
import { Container } from '../Container'
import { SmallBlog } from './SmallBlog'

export const SmallBlogs = () => {
  return (
    <section className='w-full bg-[#F8F9FB] mt-[82px] py-[46px]'>
        <Container>
            <h1 className='text-[24px] '>Blog</h1>

            <div className='mt-[30px]
            grid xl:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-[30px]
            '>
                <SmallBlog/>
                <SmallBlog/>
                <SmallBlog/>
                <SmallBlog/>
            </div>
        </Container>
    </section>
  )
}
