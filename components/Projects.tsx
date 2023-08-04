import React from 'react'
import { motion } from 'framer-motion';
import { Projects } from '@/typing';
import { urlFor } from '@/sanity';

type Props = {
    projects : Projects[]
};

export default function Projects({projects}:Props) {

  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className='relative mx-auto overflow-hidden h-screen max-w-full flex flex-col md:text-row text-left items-center justify-evenly'>
        <h3 className='absolute top-20 text-2xl xl:text-3xl uppercase text-gray-400 font-mono tracking-[16px]'>Projects</h3>

        <div className='relative flex w-full overflow-x-scroll snap-x snap-mandatory overflow-y-hidden z-20'>
            {
                projects?.reverse().map((project, i)=>(
                    <div key={project._id}  className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 h-screen items-center justify-center
                     p-16 md:p-44'>
                        <motion.img
                            initial={{ opacity:0, y:-100}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1.4}}
                            viewport={{once:true}}
                            src={urlFor(project.projectImage).url()} 
                            className='max-h-[300px] w-screen md:max-h-[350px] md:max-w-[500px] xl:max-h-[450px] xl:max-w-[700px] mt-16' alt="Project" />
                        <motion.div            
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:1.4}}
                            >
                            <div className="tools space-x-2 my-2 flex flex-col items-center justify-center">
                                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                    <h4 className='font-semibold w-full text-center text-lg my-2 md:text-3xl hover:text-blue-300 transition-all duration-300 hover:underline'>
                                        <a href={project?.linktoBuild}  target='_blank'>
                                            
                                            {`${i+1}/${projects?.length} - ${project?.title}`}
                                        </a>
                                    </h4>
                                </div>
                                <div className='flex flex-row'>
                                    {
                                        project?.technologies.map((technology)=> (
                                            <img className='h-8 w-8 rounded-fill mx-1' key={technology._id} src={urlFor(technology.heroImage).url()} title={technology.title}/>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className='text-gray-200 text-lg md:text-xl text-center md:text-left md:mx-26'>
                                {project.summary}
                            </p>
                            <div>{`${i+1 < projects.length ? 'swipe right →' :''}`}</div>
                        </motion.div>
                    </div>
                ))
            }
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7ABBA]/20 left-0 h-[400px] -skew-y-12'/>
    </motion.div>
  )
}

