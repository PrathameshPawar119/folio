import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='h-screen flex flex-col relative text-left items-center md:flex-row max-w-full px-8 justify-evenly overflow-hidden'>
        <h3 className='absolute top-24 text-slate-400 uppercase text-center tracking-[16px] font-mono text-2xl lg:text-3xl'>Experience</h3>
      
      <div className="ExpCardHolder">
        
      </div>
    </motion.div>
  )
}
