import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '@/typing';
import { urlFor } from '@/sanity';

type Props = {
  exp: Experience
};

export default function ExperienceCard({exp}:Props) {

  return (
    <article className='flex flex-col items-center flex-shrink-0 space-y-6  snap-center bg-[#292929] p-10
     w-[400px] py-4 md:w-[600px] lg:w-[800px] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-md'>
      <motion.img
       src={urlFor(exp?.companyImage).url()}
        alt="Iotron Logo" 
        initial={{ opacity:0, y:-100}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.4}}
        viewport={{once:true}}
        className='w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center'
        />
        <div className="px-0 md:px-10">
          <h2 className='text-4xl font-light'>{exp?.jobTitle}</h2>
          <p className='text-2xl font-bold mt-1'>{exp?.company}</p>
          <div className="tools space-x-2 my-2 flex">
            {
              exp?.technologies.map((technology)=> (
                // technology._id
                <img className='h-10 w-10 rounded-fill' key={technology._id} src={urlFor(technology.heroImage).url()} title={technology.title}/>
              ))
            }
          </div>
          <p className='titlecase text-gray-400 my-2 mt-4'>
            {
              `${new Date(exp.dateStarted).toLocaleDateString('en-us', {year:"numeric", month:"short"})} - ${ exp.currentlyWorkingHere ? 'Present' : new Date(exp.dateEnded).toLocaleDateString('en-us', {year:"numeric", month:"short"})}`
            }
          </p>
            <ul className='list-disc space-y-2 text-md pr-8 text-gray-300'>
              {
                exp.points.map((point, i) => (
                  <p key={i}>{point}</p>
                ))
              }
            </ul>
        </div>
    </article>
  )
}
