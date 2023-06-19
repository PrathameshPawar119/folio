import React from 'react'

type Props = {

};

export default function ContactMe({}:Props) {
  return (
    <div className=' relative h-screen flex text-center flex-col md:text-left md:flex-row px-10 mx-auto max-w-7xl items-center justify-evenly'>
        <h3 className='absolute top-24 text-gray-400 text-2xl md:text-3xl font-mono uppercase tracking-[16px] text-center'>Contact Me</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='font-semibold text-4xl text-center tracking-wide'>We are away from just a click, <span className='underline decoration-gray-500'>Let's Talk!</span> </h4>
        </div>
      
    </div>
  )
}
