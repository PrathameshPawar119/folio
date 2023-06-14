import React from 'react'
import Image from 'next/image'
import BackgroundCircles from './BackgroundCircles'
import mePng from "../static/images/mepng.png"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <motion.div
    initial={{opacity:0, scale:0.8}}
    animate={{opacity:1, scale:1}}
    transition={{duration:3}}
     className='h-screen flex flex-col space-y-0 items-center justify-center overflow-hidden text-center'>
            <div className='h-10'></div>
      <BackgroundCircles />
      <Image src={mePng} alt="Prathamesh" className='h-56 w-56 mx-auto rounded-full object-cover'/>
      {/* Typewriting sentences */}
      <div className='h-10'>
      </div>
      <div className='text-center w-[400px] md:w-[600px] lg:w-[800px] z-20'>
        <h2 className='text-sm font-extrabold uppercase text-gray-400 pb-6 tracking-[10px]'>
          Aspiring Software Developer
        </h2>
        <div
        className="typewriting text-2xl md:text-3xl lg:text-4xl font-mono font-semibold scroll-px-10">
          <h1>
            Hello, This is<span className="type" > Prathamesh Pawar <br/> &lt;There's way to do it better/&gt;</span>
          </h1>
        </div>
        <div className="HerobuttonContainer">
          <Link href='#about'>
            <button className='HeroButton'>About</button>
          </Link>
          <Link href='#skills'>
            <button className='HeroButton'>Skills</button>
          </Link>
          <Link href='#experience'>
            <button className='HeroButton'>Experience</button>
          </Link>
          <Link href='#projects'>
            <button className='HeroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
