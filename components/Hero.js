import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className='container relative bg-cover z-0  w-full md:w-full lg:w-full h-66 md:h-66 lg:h-96 top-12 md:top-24 lg:top-44  ml-10 md:ml-10 lg:ml-10'>
    <Image src="/newspaper.jpg" layout='fill' />
    <div className='absolute z-50 ml-20 mt-20'>
    
    <Image src="/copywriting.jpg" width="300"  height="200" />

    </div>
    </div>
  )
}

export default Hero