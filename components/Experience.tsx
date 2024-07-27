import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience as ExperienceType } from '@/typing'

type Props = {
  experience : ExperienceType[]
}

export default function Experience({experience}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='h-screen flex flex-col relative text-left items-center md:flex-row max-w-full px-8 justify-evenly overflow-hidden'>
        <h3 className='absolute top-24 md:top-20 text-slate-400 uppercase text-center tracking-[16px] font-mono text-2xl lg:text-3xl'>Experience</h3>
      
      <div className="ExpCardHolder w-full flex space-x-5 overflow-x-scroll snap-x p-10 snap-mandatory mt-24 md:mt-32">
        {
            experience?.map((exp)=>(
              <ExperienceCard key={exp._id} exp={exp}/>
            ))
        }
      </div>
    </motion.div>
  )
}
