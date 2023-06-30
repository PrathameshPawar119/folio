import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundCircles() {
  return (
    <motion.div
    initial={{opacity:0.5}}
    animate={{
        scale:[1, 2, 2, 3, 1],
        opacity:[1, 0.6, 0.6, 0.8, 0.4, 1.0],
        borderRadius:["90%", "20%", "50%", "80%", "20%"]
    }}
    transition={{duration: 2.2}}
    className='relative flex justify-center items-center'>
      <div className='absolute border rounded-full border-double border-[#4f4f4f] h-[260px] w-[260px] mt-52 animate-ping'/>
      <div className='absolute border rounded-full border-[#333333] border-t-gray-500 h-[260px] w-[260px] mt-52 animate-spin'/>
      <div className='absolute border rounded-full border-[#333333]  h-[260px] w-[260px] mt-52 '/>
      <div className='border rounded-full border-[#ffb1c8ff] opacity-20 h-[400px] w-[400px] md:h-[650px] md:w-[650px] absolute mt-52 animate-pulse'/>
      <div className='absolute border rounded-full border-[#333333] h-[400px] w-[400px] md:h-[800px] md:w-[800px] mt-52 '/>
    </motion.div>
  )
}
