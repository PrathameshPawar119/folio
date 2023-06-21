import React from 'react'
import { SocialIcon } from 'react-social-icons'; 
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}:Props) {
  return (
    <header>
      <div className='abbsolute top-0 flex items-start justify-between p-4 max-w-7xl mx-auto z-22 xl:items-center bg-blend-color-burn'>
        <motion.div
            initial={{x:-200, y:-10, opacity:0, scale:0.5}}
            animate={{x:0, y:0, opacity:1, scale:1}}
            transition={{duration:0.8}}
        >
            <SocialIcon target='_blank' bgColor='transparent' fgColor='gray' url='https://www.linkedin.com/in/prathamesh-pawar-a87744215/'/>
            <SocialIcon target='_blank' bgColor='transparent' fgColor='gray' url='https://www.instagram.com/prathameshpawar28788/'/>
            <SocialIcon target='_blank' bgColor='transparent' fgColor='gray' url='https://github.com/PrathameshPawar119'/>
            <SocialIcon target='_blank' bgColor='transparent' fgColor='gray' url='https://youtube.com'/>
            {/* <SocialIcon bgColor='gray' fgColor='black' url='https://stackoverflow.com/users/16577900/prathamesh-r-pawar'/> */}
        </motion.div>
        <motion.div 
            initial={{x:200, opacity:0, scale:0.5}}
            animate={{x:0, opacity:1, scale:1}}
            transition={{duration:1}}
            className='cursor-pointer'
        >
            <SocialIcon
                network='email'
                bgColor='transparent'
                fgColor='gray'
            />
          <Link href={'#contactme'}>
              <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </Link>
        </motion.div>
      </div>
    </header>
  )
}
