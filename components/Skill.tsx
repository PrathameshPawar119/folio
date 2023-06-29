import { urlFor } from '@/sanity';
import { Skills } from '@/typing';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
  skill : Skills
  directionLeft? : boolean
};

export default function Skill({directionLeft, skill} : Props) {

  const grade =  (marks : number) => 
  {
    if(marks >= 80)
    {
      return 'A+';
    }
    else if(marks >= 70 && marks < 80 )
    {
      return 'A';
    }
    else if(marks >= 50 && marks < 70)
    {
      return 'B';
    }
    else{
      return 'C';
    }
  }

  return (
    <div className='group relative flex cursor-pointer flex-col'>
      <motion.img
        initial={{x:directionLeft ? -120:120, opacity:0}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        transition={{duration:1.4}}
        src={urlFor(skill?.heroImage).url()}
        title={skill?.title}
        className='w-20 h-20 p-2 rounded-full object-cover border border-gray-500 xl:w-32 xl:h-32 filter
        group-hover:grayscale transition duration-500 ease-in-out'
       />
       <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        h-20 w-20 xl:h-32 xl:w-32 group-hover:bg-white rounded-full'>
        <div className='flex items-center justify-center h-full flex-col'>
          <p className='text-black text-4xl xl:text-6xl font-mono opacity-100'>
            {grade(skill?.progress)}
          </p>
          <div className="skillName text-[12px] xl:text-sm text-gray-900 text-center xl:m-2">
            {skill?.title}
          </div>
        </div>
       </div>
    </div>
  )
}
