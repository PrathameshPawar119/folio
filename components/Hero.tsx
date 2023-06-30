import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageInfo } from '@/typing'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({pageInfo }: Props) {
  return (
    <motion.div
    initial={{opacity:0, scale:0.8}}
    animate={{opacity:1, scale:1}}
    transition={{duration:3}}
     className='h-screen flex flex-col space-y-0 items-center justify-center overflow-hidden text-center z-0'>
      <div className='h-32'></div>

      <BackgroundCircles />
      <img src={urlFor(pageInfo?.heroImage).url()} alt="Prathamesh" className='mx-auto rounded-full object-cover h-[232px] w-[240px]'/>
      {/* Typewriting sentences */}
      <div className='h-10'>
      </div>
      <div className='text-center w-[440px] md:w-[600px] lg:w-[800px] z-20'>
        <h2 className='text-[12px] md:text-sm  font-extrabold uppercase text-gray-400 pb-6 tracking-[10px]'>
          {pageInfo?.role || 'Aspiring Software Developer'}
        </h2>
        <div
        className="typewriting text-xl md:text-3xl lg:text-4xl font-mono font-semibold scroll-px-10">
          <h1>
            Hello, This is<span className="type" > {pageInfo?.name} <br/> &lt;Let's Upgrade it!/&gt;</span>
          </h1>
        </div>
        <div className="HerobuttonContainer mt-8">
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
