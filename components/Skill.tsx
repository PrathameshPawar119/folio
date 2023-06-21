import { motion } from 'framer-motion';
import React from 'react'

type Props = {
  directionLeft : boolean
};

export default function Skill({directionLeft} : Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{x:directionLeft ? -120:120, opacity:0}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        transition={{duration:1}}
        src="../static/logos/css-3.png"
        className='w-20 h-20 rounded-full object-cover border border-gray-500 xl:w-32 xl:h-32 filter
        group-hover:grayscale transition duration-500 ease-in-out
        '
       />
       <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        h-20 w-20 xl:h-32 xl:w-32 group-hover:bg-white rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-black text-4xl xl:text-6xl font-mono opacity-100'>A</p>
        </div>
       </div>
    </div>
  )
}
