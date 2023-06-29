import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typing'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}


export default function About({pageInfo}:Props) {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
     className='flex relative flex-col h-screen text-center md:text-left md:flex-row
    max-w-7xl px-8 justify-evenly  items-center mx-auto'>
      <h3 className='absolute top-24 text-2xl lg:text-3xl uppercase text-center tracking-[18px] text-gray-400 font-mono'> About</h3>
        <motion.img
          initial={{opacity:0, x:-140}}
          transition={{duration:1.4}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          src={urlFor(pageInfo?.profileImage).url() || '../static/images/meincaves.jpg'} 
          alt='Prathamesh in caves' 
          className='object-cover -mb-10 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
          md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'/>
        
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5}}
          className='space-y-10 px-0 md:px-10'>
          <h3 className='text-4xl font-semibold md:text-3xl mt-8'>
            Here's a <span className='underline decoration-slate-500'>little</span>  background
          </h3>
          <p className='text-base text-slate-200'>
            {pageInfo?.backgroundInfo}
          </p>
        </motion.div>
    </motion.div>
  )
}
