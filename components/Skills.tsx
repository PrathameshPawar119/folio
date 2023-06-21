import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='h-screen flex flex-col items-center relative text-center md:text-left
         xl:flex-row max-w-7xl justify-center mx-auto'>
      <h3 className='absolute top-24 uppercase text-slate-400 text-2xl xl:text-3xl font-mono text-center tracking-[16px]'>Skills</h3>
      <h2 className='absolute top-36 uppercase text-slate-500 text-md font-mono text-center tracking-[4px] lg:tracking-[6px]'>Hover over skill for proficiency</h2>
      <motion.div         
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='grid grid-cols-4 gap-4 xl:gap-5 mt-20 xl:mt-32 w-max-5xl'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </motion.div>
  )
}
