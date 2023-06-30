import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skills } from '@/typing';

type Props = {
  skills:Skills[]
};

export default function Skills({skills}: Props) {

  let dirPtr = skills?.length/2;
  const whichDirection = (ptr : number) => {
    if(ptr > 0)
    {
      dirPtr = dirPtr-1;
      return true;
    }
      dirPtr = dirPtr-1;
    return false
  }

  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='h-screen flex flex-col items-center relative text-center md:text-left
         xl:flex-row max-w-7xl justify-center mx-auto'>
      <h3 className='absolute top-20 md:top-24 uppercase text-slate-400 text-2xl xl:text-3xl font-mono text-center tracking-[16px]'>Skills</h3>
      <motion.div         
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-5 mt-20 xl:mt-32 w-max-7xl'>
          {
            skills?.map((skill) => (
              <Skill key={skill._id} directionLeft={whichDirection(dirPtr)} skill={skill}/>   
              ))
          }
      </motion.div>
    </motion.div>
  )
}
