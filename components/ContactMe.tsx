import React, { useState } from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {

};

export default function ContactMe({}:Props) {
    const [formData, setFormData] = useState({name: "", email: "", subject: "", message:""});
     const handleOnChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    const submitForm = (e)=>{ 
      e.preventDefault();
      if(formData.name && formData.email && formData.subject)
       window.location.href = `mailto:prathameshpawar28788@gmail.com?subject=${formData.subject}&body=Hi, Myself ${formData.name}, ${formData.message} (${formData.email})`;
     }



  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.4}}
        className=' relative h-screen flex text-center flex-col md:flex-row md:text-left px-10 mx-auto max-w-7xl items-center justify-center'>
        <h3 className='absolute top-24 text-gray-400 text-2xl md:text-3xl font-mono uppercase tracking-[16px] text-center'>Contact Me</h3>

        <div className='flex flex-col space-y-10 mt-16 md:mt-0 md:space-x-22'>
          <div className='flex flex-col mt-10'>
              <h4 className='font-semibold text-4xl text-center tracking-wide'>We are away from just a click, <span className='underline decoration-[#F7ABBA]/70'>Let's Talk!</span> </h4>
          </div>
        
          <div className='space-y-6'>
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon width={35} height={35} className='text-[#F7ABBA] animate-pulse' />
              <p className='text-xl md:text-2xl'>+91 9324488517</p>
            </div>            
            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon width={35} height={35} className='text-[#F7ABBA] animate-pulse' />
              <p className='text-xl md:text-2xl'>prathameshpawar28788@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon width={35} height={35} className='text-[#F7ABBA] animate-pulse' />
              <p className='text-xl md:text-2xl'>Kalwa(E), Thane, Maharashtra</p>
            </div>
          </div>
        </div>

          <form onSubmit={submitForm} className="flex flex-col space-y-2 mx-auto max-w-3xl w-fit mt-12">
            <div className='flex space-x-2 justify-between'>
              <input name='name' onChange={handleOnChange} className='ContactInput' placeholder='Name' type="text" required/>
              <input name='email' onChange={handleOnChange} className='ContactInput' placeholder='Email' type="email" required/>
            </div>
            <input name='subject' onChange={handleOnChange} className='ContactInput' type="text" placeholder='Subject' required/>
            <textarea name='message' onChange={handleOnChange} className='ContactInput' placeholder='Message' ></textarea>
            <button type="submit" className='bg-[#F7ABBA] px-4 py-4 transition-all duration-150 rounded-sm hover:bg-[#F7ABBA]/80 font-bold text-black'>Submit</button>
          </form>
    </motion.div>
  )
}
