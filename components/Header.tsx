import React from 'react'
import { SocialIcon } from 'react-social-icons'; 
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typing';

type Props = {
  socials: Social[]
};

export default function Header({socials}:Props) {
  return (
    <header>
      <div className='abbsolute top-0 flex items-start justify-between p-4 max-w-7xl mx-auto z-22 xl:items-center bg-blend-color-burn'>
        <motion.div
            initial={{x:-200, y:-10, opacity:0, scale:0.5}}
            animate={{x:0, y:0, opacity:1, scale:1}}
            transition={{duration:0.8}}
        >
          {
            socials.map((social, i)=>(
              <SocialIcon key={i} target='_blank' bgColor='transparent' fgColor='gray' url={social.url}/>
            ))
          }

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
                url='#contactme'
            />
            <Link href={'#contactme'}>
              <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </Link>
        </motion.div>
      </div>
    </header>
  )
}
