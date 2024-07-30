"use react"

import React from 'react'
import { cn } from "@/lib/utils";
import { LampDemo } from '@/components/LampDemo';

const About = () => {
  return (
    <div className='text-white mt-40 w-full h-full bg-black'>
      
      <LampDemo/>


      <div className='flex flex-1'>
      <div >
        <img className='rounded-full w-44 h-44' src='Suhanicoverimage.jpeg' />
      </div>

      <div >
       
      </div>

      </div>


    </div>
  )
}

export default About