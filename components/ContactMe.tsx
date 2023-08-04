import React from 'react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typing';

type Props = {
  pageInfo: PageInfo
};

export default function ContactMe({pageInfo}:Props) {
    const [formData, setFormData] = useState({name: "", email: "", subject: "", message:""});

     const handleOnChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };
    const handleTextAreaOnChange = (e : ChangeEvent<HTMLTextAreaElement>) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    const submitForm = (e : FormEvent<HTMLFormElement>)=>{ 
      e.preventDefault();
      if(formData.name && formData.email && formData.subject)
       window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, Myself ${formData.name}, ${formData.message} (${formData.email})`;
     }



  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className=' relative h-screen flex text-center flex-col lg:flex-row md:text-left px-10 mx-auto max-w-7xl items-center justify-center'>
        <h3 className='absolute top-24 text-gray-400 text-2xl md:text-3xl font-mono uppercase tracking-[16px] text-center'>Contact Me</h3>

        <div className='flex flex-col items-center justify-center space-y-4 mt-32 md:mt-0 md:space-x-22 md:mx-16'>
          <div className='flex flex-col mt-10'>
              <h4 className='font-semibold text-xl md:text-4xl text-center tracking-wide'>We are away from just a click,<br/> <span className='underline decoration-[#F7ABBA]/70'>Let's Talk!</span> </h4>
          </div>
        
          <div className='space-y-2'>
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon  className='text-[#F7ABBA] animate-pulse w-4 h-4 md:w-10 md:h-10' />
              <p className='text-md md:text-2xl'> <a href={`tel:${pageInfo.phoneNumber}`}>+91 {pageInfo.phoneNumber}</a></p>
            </div>            
            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon  className='text-[#F7ABBA] animate-pulse w-4 h-4 md:w-10 md:h-10' />
              <p className='text-md md:text-2xl'><a href='mailto:prathameshpawar28788@gmail.com'>{pageInfo.email}</a></p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon  className='text-[#F7ABBA] animate-pulse w-4 h-4 md:w-10 md:h-10' />
              <p className='text-md md:text-2xl'>{pageInfo.address}</p>
            </div>
          </div>
        </div>

          <form onSubmit={submitForm} className="flex flex-col gap-2 mt-10">
            <div className=' flex md:flex-row gap-1'>
              <input name='name' onChange={handleOnChange} className='ContactInput w-full' placeholder='Name' type="text" required/>
              <input name='email' onChange={handleOnChange} className='ContactInput w-full' placeholder='Email' type="email" required/>
            </div>
            <input name='subject' onChange={handleOnChange} className='ContactInput' type="text" placeholder='Subject' required/>
            <textarea name='message' onChange={handleTextAreaOnChange} className='ContactInput' placeholder='Message' ></textarea>
            <button type="submit" className='bg-[#F7ABBA] px-2 py-3 transition-all duration-150 rounded-sm hover:bg-[#F7ABBA]/80 font-bold text-black'>Submit</button>
          </form>
    </motion.div>
  )
}
