import React from 'react'
import { motion } from 'framer-motion';

type Props = {

};

export default function Projects({}:Props) {

    const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='relative mx-auto overflow-hidden h-screen max-w-full flex flex-col md:text-row text-left items-center justify-evenly'>
        <h3 className='absolute top-24 text-2xl xl:text-3xl uppercase text-gray-400 font-mono tracking-[16px]'>Projects</h3>

        <div className='relative flex w-full overflow-x-scroll snap-x snap-mandatory overflow-y-hidden z-20'>
            {
                projects.map((project)=>(
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 h-screen items-center justify-center
                     p-16 md:p-44'>
                        <motion.img
                            initial={{ opacity:0, y:-100}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1.4}}
                            viewport={{once:true}}
                            src="../static/images/mf.png" 
                            className='max-h-[300px] max-w-[500px] md:max-h-[400px] md:max-w-[600px] xl:max-h-[500px] xl:max-w-[800px]' alt="Project" />
                        <motion.div            
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:1.4}}
                            >
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='font-semibold text-center text-2xl md:text-3xl'>Relaxing Music Website</h4>
                            </div>
                            <p className='text-gray-200 text-base text-center md:text-left'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum magni possimus ad mollitia nisi esse sunt eaque cum nobis, accusantium fugit nam incidunt quis ipsam omnis vitae necessitatibus quas laborum.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum magni possimus ad mollitia nisi esse sunt eaque cum nobis, accusantium fugit nam incidunt quis ipsam omnis vitae necessitatibus quas laborum.
                            </p>
                        </motion.div>
                    </div>
                ))
            }
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7ABBA]/20 left-0 h-[400px] -skew-y-12'/>
    </motion.div>
  )
}
