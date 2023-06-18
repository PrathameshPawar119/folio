import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import htmll from "../static/logos/html-5.png";

type Props = {};

export default function ExperienceCard({}:Props) {

  const skills = ["bootstrap", "css-3", "html-5", "js", "laravel", "vuejs"];


  return (
    <article className='flex flex-col items-center flex-shrink-0 space-y-8  snap-center bg-[#292929] p-10
     w-[500px] md:w-[600px] lg:w-[800px] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-md'>
      <motion.img
       src="../static/images/iotronlogo.png"
        alt="Iotron Logo" 
        initial={{ opacity:0, y:-100}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.4}}
        viewport={{once:true}}
        className='w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center'
        />
        <div className="px-0 md:px-10">
          <h2 className='text-4xl font-light'>Web Developer Intern</h2>
          <p className='text-2xl font-bold mt-1'>IotronLabs</p>
          <div className="tools space-x-2 my-2 flex">
            {/* { */}
              {/* skills.map((elem)=>{ */}
                <Image className='h-10 w-10 rounded-fill' src={htmll} alt='skill'/>
            {/* //   })
            // }
            <div></div> */}
                <Image className='h-10 w-10 rounded-fill' src={htmll} alt='skill'/>
                <Image className='h-10 w-10 rounded-fill' src={htmll} alt='skill'/>
                <Image className='h-10 w-10 rounded-fill' src={htmll} alt='skill'/>
                <Image className='h-10 w-10 rounded-fill' src={htmll} alt='skill'/>
          </div>
          <p className='titlecase text-gray-400 my-4 mt-8 ml-2'>From -- to --</p>
            <ul className='list-disc space-y-4 text-md ml-4 pr-8 text-gray-300'>
              <li> This is so goood thing to do, really, I am enjoying it very nice okay okay</li>
              <li> This is so goood thing to do, really, I am enjoying it very nice okay okay</li>
              <li> This is so goood thing to do, really, I am enjoying it very nice okay okay</li>
                </ul>
        </div>
    </article>
  )
}
